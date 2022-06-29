import React from 'react'
import { Header, Body, PROFESSIONAL_KEYS, PROFESSIONAL_FIELDS } from '.'
import { Input } from '../../input'
import { Table } from '../../table'

export const ProfessionalHeader = ({ data = {} }) => {
  return (
    <Header>
      {PROFESSIONAL_KEYS.map(({ name, label }) => (
        <div className="work-header__info-group" key={name}>
          <label className="work-header__label">{label}</label>
          <p>{data[name]}</p>
        </div>
      ))}
    </Header>
  )
}

export const ProfessionalBody = ({
  data = [],
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
    <Body>
      <div className="body__fields">
        {PROFESSIONAL_FIELDS.map((item, index) => (
          <div className="input-group" key={index}>
            {item.fields.map((field, subIndex) => (
              <Input key={index + subIndex} value={data[field.name]} onChange={handleChange} {...field} />
            ))}
          </div>
        ))}
      </div>
      <div>
        <Table onDelete={onDelete}>
          <tbody>
            {Array.isArray(user?.professional) &&
              user?.professional?.map((item, index) => (
                <tr key={index}>
                  <td className="pr-2">
                    <div
                      className={`table__checkbox ${checkedItems.includes(index) ? 'table__actived-checkbox' : ''}`}
                      onClick={() => handleCheckedItem(index)}
                    />
                  </td>
                  <td className="table__column">{item.IdStudyLevel}</td>
                  <td className="table__column">{item.StudyInstitute}</td>
                  <td className="table__column">{item.StudyRegister}</td>
                  <td className="table__column">{item.StudyYear}</td>
                  <td className="pl-2">
                    <i className="fa-solid fa-pencil pointer" onClick={() => onEdit(index)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Body>
  )
}
