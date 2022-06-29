import styled from '@emotion/styled'

export * from './PersonalForm'

export const FormHeader = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  .personal-header {
    &__image-container {
      min-width: 140px;
      height: 100%;
      border: 1px solid var(--gray);
      position: relative;
      cursor: pointer;
    }

    &__image {
      position: absolute;
      margin: auto;
      width: 100%;
      inset: 0;
    }

    &__camera-icon {
      color: gray;
      position: absolute;
      margin: auto;
      inset: 0;
      font-size: 16px;
      width: 18px;
      height: 18px;
    }

    &__information {
      border: 1px solid var(--gray);
      min-width: 800px;
      font-size: 14px;
      padding: 10px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      line-height: 16px;
    }

    &__info-group {
      width: 160px;
      min-height: 34px;
    }

    &__label {
      font-weight: 700;
    }
  }
`

export const FormBody = styled.div`
  padding: 0.625rem;
  min-width: 62.5rem;
`

export const headerKeys = [
  {
    label: 'Id:',
    name: 'IdEmployee',
  },
  {
    label: 'Dni:',
    name: 'IdTypeDNI',
  },
  {
    label: 'Nombre:',
    name: 'EmpName',
  },
  {
    label: 'Apellido:',
    name: 'EmpLastName',
  },
  {
    label: 'Dni empresa:',
    name: 'EmpDni',
  },
  {
    label: 'Ciudad:',
    name: 'IdEmpHomeCity',
  },
  {
    label: 'Dirección:',
    name: 'EmpAddress',
  },
  {
    label: 'Vecindario:',
    name: 'EmpNeighborhood',
  },
  {
    label: 'Teléfono:',
    name: 'EmpPhoneNumber',
  },
  {
    label: 'Email:',
    name: 'EmpEmail',
  },
  {
    label: 'Fecha de nacimiento:',
    name: 'EmpBornDate',
  },
  {
    label: 'Género:',
    name: 'IdEmpGender',
  },
  {
    label: 'Estado civil:',
    name: 'IdEmpCivilState',
  },
  {
    label: 'Estado:',
    name: 'Status',
  },
]

export const FIELDS = [
  {
    fields: [
      {
        label: 'Id:',
        name: 'IdEmployee',
        type: 'number',
      },
      {
        label: 'Dni:',
        name: 'IdTypeDNI',
        type: 'number',
      },
      {
        label: 'Nombre:',
        name: 'EmpName',
      },
      {
        label: 'Apellido:',
        name: 'EmpLastName',
      },
    ],
  },
  {
    fields: [
      {
        label: 'Dni empresa:',
        name: 'EmpDni',
        type: 'number',
      },
      {
        label: 'Ciudad:',
        name: 'IdEmpHomeCity',
      },
      {
        label: 'Dirección:',
        name: 'EmpAddress',
      },
      {
        label: 'Vecindario:',
        name: 'EmpNeighborhood',
      },
    ],
  },
  {
    fields: [
      {
        label: 'Teléfono:',
        name: 'EmpPhoneNumber',
        type: 'number',
      },
      {
        label: 'Email:',
        name: 'EmpEmail',
      },
      {
        label: 'Fecha de nacimiento:',
        name: 'EmpBornDate',
      },
      {
        label: 'Género:',
        name: 'IdEmpGender',
      },
    ],
  },
  {
    fields: [
      {
        label: 'Estado civil:',
        name: 'IdEmpCivilState',
      },
      {
        label: 'Estado:',
        name: 'Status',
      },
    ],
  },
]
