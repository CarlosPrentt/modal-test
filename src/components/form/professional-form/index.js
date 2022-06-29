import styled from '@emotion/styled'

export * from './ProfessionalForm'

export const Header = styled.div`
  font-size: 14px;
  padding: 10px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  line-height: 16px;

  .work-header {
    &__info-group {
      width: 160px;
      min-height: 34px;
    }

    &__label {
      font-weight: 700;
    }
  }
`

export const Body = styled.div`
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

export const PROFESSIONAL_KEYS = [
  {
    label: 'Nivel de estudios:',
    name: 'IdStudyLevel',
  },
  {
    label: 'Instituto:',
    name: 'StudyInstitute',
  },
  {
    label: 'Profesión:',
    name: 'StudyTitle',
  },
  {
    label: 'Año de ingreso:',
    name: 'StudyRegister',
  },
  {
    label: 'Año de egreso:',
    name: 'StudyYear',
  },
]

export const PROFESSIONAL_FIELDS = [
  {
    fields: [
      {
        label: 'Nivel de estudios:',
        name: 'IdStudyLevel',
      },
      {
        label: 'Instituto:',
        name: 'StudyInstitute',
      },
      {
        label: 'Profesión:',
        name: 'StudyTitle',
      },
    ],
  },
  {
    fields: [
      {
        label: 'Año de ingreso:',
        name: 'StudyRegister',
        type: 'number',
      },
      {
        label: 'Año de egreso:',
        name: 'StudyYear',
        type: 'number',
      },
    ],
  },
]
