import React from 'react'
import { Input } from '../../input'
import { FamilyHeaderWrapper, FamilyBodyWrapper, FAMILY_FIELDS, FAMILY_KEYS } from '.'
import { Table } from '../../table'

export const FamilyHeader = ({ data = {} }) => {
  return (
    <FamilyHeaderWrapper>
      {FAMILY_KEYS.map(({ name, label }) => (
        <div className="family-header__info-group" key={name}>
          <label className="family-header__label">{label}</label>
          <p>{data[name]}</p>
        </div>
      ))}
    </FamilyHeaderWrapper>
  )
}

export const FamilyBody = ({
  data = {},
  handleChange = () => {},
  user = {},
  setData = () => {},
  onDelete = () => {},
  onEdit = () => {},
}) => {
  const checkedItems = data?.checkedItems || []
  const handleCheckedItem = id => {
    if (checkedItems?.includes(id)) {
      return setData({
        ...data,
        checkedItems: checkedItems.filter(item => item !== id),
      })
    }
    setData({
      ...data,
      checkedItems: [...(data?.checkedItems || []), id],
    })
  }
  return (
    <FamilyBodyWrapper>
      <div className="body__fields">
        {FAMILY_FIELDS.map((item, index) => (
          <div className="input-group" key={index}>
            {item.fields.map((field, subIndex) => (
              <Input key={index + subIndex} value={data[field.name]} onChange={handleChange} {...field} />
            ))}
          </div>
        ))}
      </div>
      <div>
        <Table onDelete={onDelete} headerItems={['Nombre', 'Fecha nacimiento', 'Genero', 'Parentesco']}>
          <tbody>
            {Array.isArray(user?.family) &&
              user?.family?.map((item, index) => (
                <tr key={index}>
                  <td className="pr-2">
                    <div
                      className={`table__checkbox ${checkedItems.includes(index) ? 'table__actived-checkbox' : ''}`}
                      onClick={() => handleCheckedItem(index)}
                    />
                  </td>
                  <td className="table__column">{item.FamilyName_Lastname}</td>
                  <td className="table__column">{item.FamilyBornDate}</td>
                  <td className="table__column">{item.IdFamilyGender}</td>
                  <td className="table__column">{item.Relationship}</td>
                  <td className="pl-2">
                    <i className="fa-solid fa-pencil pointer" onClick={() => onEdit(index)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </FamilyBodyWrapper>
  )
}
