import React, { useCallback, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import { Button } from '../button'
import { TableIcon } from '../table-icon'
import { DELETE } from '../../constants/swal'
import { TableWrapper, COLUMNS, TABLE_KEYS } from '.'

export const UsersTable = ({ openModal = () => {}, users = [], setUser = () => {}, setReload = () => {} }) => {
  const [data, setData] = useState([])

  const updateUser = useCallback(
    user => {
      setUser(user)
      openModal()
    },
    [setUser, openModal]
  )

  const deleteUser = useCallback(
    ({ userId }) => {
      Swal.fire(DELETE).then(({ isDenied }) => {
        if (isDenied) {
          localStorage.setItem('users', JSON.stringify(users?.filter(user => user.userId !== userId)))
          setReload(true)
        }
      })
    },
    [setReload, users]
  )

  const getColumns = useCallback(() => {
    return users?.map(user => {
      const item = {}
      TABLE_KEYS.forEach(key => {
        if (key === 'Icon') item[key] = <TableIcon onEdit={() => updateUser(user)} onDelete={() => deleteUser(user)} />
        else item[key] = user.personal[key]
      })
      return item
    })
  }, [users, deleteUser, updateUser])

  useEffect(() => {
    setData(getColumns(users))
  }, [users, getColumns])

  return (
    <TableWrapper>
      <div className="users__header">
        <h3 className="users__title">Lista de usuarios</h3>
        <Button text="Crear usuario" onClick={openModal} />
      </div>
      {users?.length ? <DataTable columns={COLUMNS} data={data} /> : 'NO HAY USUARIOS :/'}
    </TableWrapper>
  )
}
