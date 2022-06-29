import styled from '@emotion/styled'

export * from './FamilyForm'

export const FamilyHeaderWrapper = styled.div`
  font-size: 14px;
  padding: 10px;
  display: flex;
  gap: 8px;
  /* flex-wrap: wrap; */
  line-height: 16px;

  .family-header {
    &__info-group {
      width: 160px;
      min-height: 34px;
    }

    &__label {
      font-weight: 700;
    }
  }
`

export const FamilyBodyWrapper = styled.div`
  padding: 0.625rem;
  min-width: 62.5rem;
  display: flex;
  gap: 1.25rem;

  .body {
    &__fields {
      max-width: 400px;
    }
  }
`

export const FAMILY_KEYS = [
  {
    label: 'Nombre:',
    name: 'FamilyName_Lastname',
  },
  {
    label: 'Fecha de nacimiento:',
    name: 'FamilyBornDate',
  },
  {
    label: 'Genero:',
    name: 'IdFamilyGender',
  },
  {
    label: 'Parentesco:',
    name: 'Relationship',
  },
]

export const FAMILY_FIELDS = [
  {
    fields: [
      {
        label: 'Nombre:',
        name: 'FamilyName_Lastname',
      },
      {
        label: 'Fecha de nacimiento:',
        name: 'FamilyBornDate',
      },
      {
        label: 'Genero:',
        name: 'IdFamilyGender',
      },
      {
        label: 'Parentesco:',
        name: 'Relationship',
      },
    ],
  },
]
