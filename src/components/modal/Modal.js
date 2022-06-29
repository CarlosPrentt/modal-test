import React, { useEffect, useMemo, useState } from 'react'
import { Tab, Tabs, TabList } from 'react-tabs'
import { v4 as uuid } from 'uuid'
import Swal from 'sweetalert2'
import { Button } from '../button'
import { PersonalHeader } from '../form'
import { hasEmptyFields } from '../../utils/validation'
import { IMAGE_ERROR, RECORD_DELETED, SUCCESS, WARNING } from '../../constants/swal'
import { ModalWrapper, getForm, validationKeys, TABS } from '.'

export const Modal = ({ setReload = () => {}, toggleModal = () => {}, users = [], user = {}, setUser = () => {} }) => {
  const [data, setData] = useState({})
  const [form, setForm] = useState('personal')

  useEffect(() => {
    setData(user[form] || {})
  }, [user, form])

  const handleChange = ({ target }) => setData({ ...data, [target.name]: target.value })

  const changeTab = form => setForm(form)

  const deleteItems = () => {
    const userId = data.IdEmployee || user.userId
    const currentData = users?.find(user => user.userId === userId)[form]
    const newData = currentData.filter((item, index) => !data?.checkedItems.includes(index))
    const newUsers = users.map(user => (user.userId === userId ? { ...user, [form]: newData } : user))
    saveUser(newUsers)
    setData({})
    setReload(true)
    Swal.fire(RECORD_DELETED)
    toggleModal()
  }

  const editItem = id => {
    const userId = data.IdEmployee || user.userId
    const items = users?.find(user => user.userId === userId)[form]
    const currentItem = items?.find((item, index) => index === id)
    setData({ ...currentItem, update: true })
  }

  const disableButton = useMemo(() => hasEmptyFields(data, validationKeys[form]), [data, form])

  const props = { setData, data, handleChange, user, onDelete: deleteItems, onEdit: editItem }

  const { body } = getForm(form, props)

  const onSubmit = () => {
    if (!user?.userId && !data.image) return Swal.fire(IMAGE_ERROR)
    const userId = data.IdEmployee || user.userId
    const existUser = !!users?.find(user => user.userId === userId)
    if (existUser) {
      if (!user?.userId) return Swal.fire(WARNING)

      if (['professional', 'family'].includes(form)) {
        const items = users.find(user => user.userId === userId)[form] || []
        if (data.update) {
          const newItems = items.map(item => (item.id === data.id ? data : item))
          const newUsers = users.map(user => (user.userId === userId ? { ...user, [form]: newItems } : user))
          saveUser(newUsers)
        } else {
          items.push({ ...data, id: uuid() })
          const newUsers = users.map(user => (user.userId === userId ? { ...user, [form]: items } : user))
          saveUser(newUsers)
        }
      } else {
        const newUsers = users.map(user =>
          user.userId === userId ? { ...user, [form]: { ...data, id: uuid() } } : user
        )
        saveUser(newUsers)
      }
    } else {
      saveUser([...users, { [form]: { ...data, id: uuid() }, userId }])
    }
    setData({})
    setReload(true)
    Swal.fire(SUCCESS)
    toggleModal()
  }

  const saveUser = data => localStorage.setItem('users', JSON.stringify(data))

  const closeModal = () => {
    toggleModal()
    setUser({})
  }

  return (
    <ModalWrapper disabled={disableButton}>
      <div className="modal__content">
        <h2>{user.userId ? 'Editar empleado' : 'Crear nuevo empleado'}</h2>
        <div className="flex flex-col h-100">
          <div className="modal__header">
            <PersonalHeader {...props} data={form === 'personal' ? data : user.personal} />
          </div>
          <div className="modal__body">
            <TabHeader changeTab={changeTab} form={form} isNewUser={!user.userId} />
            {body}
          </div>
        </div>
        <div className="modal__buttons">
          <Button text="Cancelar" className="modal__cancel-button" onClick={closeModal} />
          <Button text="Guardar" className="modal__save-button" disabled={disableButton} onClick={onSubmit} />
        </div>
      </div>
    </ModalWrapper>
  )
}

export const TabHeader = ({ changeTab = () => {}, form = '', isNewUser = false }) => (
  <Tabs className="modal__tabs">
    <TabList className="flex modal__tabs-container">
      {TABS.slice(0, isNewUser ? 1 : TABS.length).map(({ key, value }) => (
        <Tab
          key={key}
          className={`modal__tab-title ${form === key ? 'active-tab' : ''} ${
            isNewUser && form !== 'personal' ? 'disabled-tab ' : ''
          }`}
          onClick={() => changeTab(key)}
        >
          {value}
        </Tab>
      ))}
    </TabList>
  </Tabs>
)
