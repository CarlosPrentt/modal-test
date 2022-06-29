import React from "react";
import { Input } from "../../input";
import { WorkBodyWrapper, WorkHeaderWrapper, WORK_FIELDS, WORK_KEYS } from ".";

export const WorkHeader = ({ data = {} }) => {
  return (
    <WorkHeaderWrapper>
      {WORK_KEYS.map(({ name, label }) => (
        <div className="work-header__info-group" key={name}>
          <label className="work-header__label">{label}</label>
          <p>{data[name]}</p>
        </div>
      ))}
    </WorkHeaderWrapper>
  );
};

export const WorkBody = ({ data = {}, handleChange = () => {} }) => {
  return (
    <WorkBodyWrapper>
      {WORK_FIELDS.map((item, index) => (
        <div className="input-group" key={index}>
          {item.fields.map((field, subIndex) => (
            <Input
              key={index + subIndex}
              value={data[field.name]}
              onChange={handleChange}
              {...field}
            />
          ))}
        </div>
      ))}
    </WorkBodyWrapper>
  );
};
