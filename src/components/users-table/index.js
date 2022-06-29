import styled from '@emotion/styled'

export * from './UsersTable'

export const TableWrapper = styled.header`
  .users {
    &__header {
      display: flex;
      align-items: end;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      @media (max-width: 37.5rem) {
        gap: 0.625rem;
      }
    }

    &__title {
      font-size: 1.875rem;
      font-weight: 600;
      @media (max-width: 37.5rem) {
        font-size: 1.25rem;
      }
    }

    &__icons-container {
      display: flex;
      gap: 0.625rem;
    }

    &__delete-icon,
    &__edit-icon {
      cursor: pointer;
      font-size: 1.125rem;
    }

    &__edit-icon {
      color: var(--green);
    }

    &__delete-icon {
      color: var(--red);
    }
  }

  .rdt_TableCol {
    background-color: rgb(0, 0, 0);
    color: #fff;
  }

  .rdt_TableRow {
    &:nth-of-type(even) {
      background-color: var(--gray);
    }

    &:last-of-type {
      border-bottom: 1px solid #ccc;
    }
  }
`

export const COLUMNS = [
  {
    name: 'ID',
    selector: row => row.IdEmployee,
  },
  {
    name: 'Identificación',
    selector: row => row.EmpDni,
  },
  {
    name: 'Nombres',
    selector: row => row.EmpName,
  },
  {
    name: 'Apellidos',
    selector: row => row.EmpLastName,
  },
  {
    name: 'Teléfono',
    selector: row => row.EmpPhoneNumber,
  },
  {
    name: 'Dirección',
    selector: row => row.EmpAddress,
  },
  {
    name: 'Ciudad',
    selector: row => row.IdEmpHomeCity,
  },
  {
    name: 'Acciones',
    selector: row => row.Icon,
  },
]

export const TABLE_KEYS = [
  'IdEmployee',
  'EmpDni',
  'EmpName',
  'EmpLastName',
  'EmpPhoneNumber',
  'EmpAddress',
  'IdEmpHomeCity',
  'Icon',
]
