import styled from '@emotion/styled'

export * from './Table'

export const TableWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-height: 175px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .table {
    &__column {
      width: 120px;
      border: 1px solid #ccc;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      height: 30px;
    }
    &__checkbox {
      width: 16px;
      height: 16px !important;
      margin-right: 2px;
      padding-right: 2px;
      border: 1px solid var(--light-gray);
      border-radius: 3px;
      cursor: pointer;
    }

    &__actived-checkbox {
      background-color: black;
      border: 1px solid transparent;
    }
  }
`

export const HEADER_ITEMS = ['Instituto', 'Profesión', 'Año de ingreso', 'Año de egreso']
