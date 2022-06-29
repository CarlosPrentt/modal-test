import React from 'react'
import { Input } from '../../input'
import { FormHeader, FormBody, headerKeys, FIELDS } from '.'

export const PersonalBody = ({ data = {}, handleChange = () => {} }) => {
  return (
    <FormBody>
      {FIELDS.map((item, index) => (
        <div className="input-group" key={index}>
          {item.fields.map((field, subIndex) => (
            <Input key={index + subIndex} value={data[field.name]} onChange={handleChange} {...field} />
          ))}
        </div>
      ))}
    </FormBody>
  )
}

export const PersonalHeader = ({ data = {}, setData = () => {} }) => {
  const uploadImage = ({ target }) => {
    setData({
      ...data,
      [target.name]: URL.createObjectURL(target.files[0]),
    })
  }

  return (
    <FormHeader>
      <label className="personal-header__image-container" htmlFor="userImage">
        {data?.image ? (
          <img alt="user" className="personal-header__image" src={data?.image} />
        ) : (
          <i className="fa-solid fa-camera personal-header__camera-icon" />
        )}
        <input accept="image/*" className="hidden" id="userImage" name="image" onChange={uploadImage} type="file" />
      </label>
      <section className="personal-header__information">
        {headerKeys.map(({ name, label }) => (
          <div className="personal-header__info-group" key={name}>
            <label className="personal-header__label">{label}</label>
            <p>{data[name]}</p>
          </div>
        ))}
      </section>
    </FormHeader>
  )
}
