import styled from '@emotion/styled'
import {
  PersonalBody,
  PersonalHeader,
  WorkBody,
  WorkHeader,
  FamilyHeader,
  FamilyBody,
  ProfessionalHeader,
  ProfessionalBody,
} from '../form'

export * from './Modal'

export const ModalWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    &__content {
      width: 98%;
      max-width: 1000px;
      height: 600px;
      background-color: white;
      padding: 10px;
      display: flex;
      flex-direction: column;
      transition: 0.2s position;
      position: absolute;
      margin: auto;
      inset: 0;
      animation: slidetop 1.4s;

      @keyframes slidetop {
        from {
          bottom: -200%;
        }

        to {
          inset: 0;
        }
      }
    }

    &__header {
      height: 40%;
      border: 1px solid var(--gray);
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }

    &__body {
      margin-top: 10px;
      flex: 1;
      border: 1px solid var(--gray);
      border-radius: 4px;
      overflow: hidden;
      overflow-x: auto;
    }

    &__tabs {
      height: 36px;
    }

    &__tabs-container {
      background-color: whitesmoke;
      margin-left: 0 !important;
      padding: 0;
      padding-top: 6px;
      min-width: 800px;
      width: 100%;
    }

    &__tab-title {
      padding: 3px 14px;
      border-radius: 4px;
      font-size: 14px;
      color: gray;
      border: 1px solid transparent;
      cursor: pointer;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
      gap: 30px;
      margin-top: 10px;
    }

    &__cancel-button {
      background-color: var(--red);
    }

    &__save-button {
      background-color: ${({ disabled }) => (disabled ? 'gray' : 'var(--green)')};
    }
  }

  .active-tab {
    border: 1px solid var(--light-gray);
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: white;
  }
`

export const getForm = (name, props) => {
  const form = {
    personal: {
      header: <PersonalHeader {...props} />,
      body: <PersonalBody {...props} />,
    },
    work: {
      header: <WorkHeader {...props} />,
      body: <WorkBody {...props} />,
    },
    family: {
      header: <FamilyHeader {...props} />,
      body: <FamilyBody {...props} />,
    },
    professional: {
      header: <ProfessionalHeader {...props} />,
      body: <ProfessionalBody {...props} />,
    },
  }
  return form[name]
}

const personalInformationKeys = [
  'Status',
  'IdEmpCivilState',
  'EmpPhoneNumber',
  'EmpEmail',
  'EmpBornDate',
  'IdEmpGender',
  'EmpNeighborhood',
  'EmpAddress',
  'IdEmpHomeCity',
  'EmpDni',
  'IdEmployee',
  'IdTypeDNI',
  'EmpName',
  'EmpLastName',
]

const workInformationKeys = [
  'IdEPS',
  'IdARL',
  'IdCCF',
  'IdAFC',
  'ShirtSize',
  'PantSize',
  'ShoesSize',
  'IdContract',
  'IdPosition',
]

const familyInformationKeys = ['FamilyName_Lastname', 'FamilyBornDate', 'IdFamilyGender', 'Relationship']

const professionalInformationKeys = ['IdStudyLevel', 'StudyInstitute', 'StudyTitle', 'StudyRegister', 'StudyYear']

export const validationKeys = {
  personal: personalInformationKeys,
  work: workInformationKeys,
  professional: professionalInformationKeys,
  family: familyInformationKeys,
}

export const TABS = [
  {
    key: 'personal',
    value: 'Personal',
  },
  {
    key: 'work',
    value: 'Laboral',
  },
  {
    key: 'professional',
    value: 'Profesional',
  },
  {
    key: 'family',
    value: 'Familiar',
  },
]
