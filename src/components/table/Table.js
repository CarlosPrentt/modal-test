import React from 'react'
import { TableWrapper, HEADER_ITEMS } from '.'

export const Table = ({ headerItems = HEADER_ITEMS, children = <></>, onDelete = () => {} }) => {
  return (
    <TableWrapper>
      <div className="flex justify-end mb-2">
        <i className="fa-solid fa-trash pointer" onClick={onDelete} />
      </div>
      <table>
        <thead>
          <tr>
            <th />
            {headerItems.map(item => (
              <th className="table__column" key={item}>
                {item}
              </th>
            ))}
            <th />
          </tr>
        </thead>
        {children}
      </table>
    </TableWrapper>
  )
}
