import styled from "@emotion/styled";

export * from "./WorkForm";

export const WorkHeaderWrapper = styled.div`
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
`;

export const WorkBodyWrapper = styled.div`
  padding: 0.625rem;
  min-width: 62.5rem;
`;

export const WORK_KEYS = [
  {
    label: "Eps:",
    name: "IdEPS",
  },
  {
    label: "Arl:",
    name: "IdARL",
  },
  {
    label: "Caja compensación:",
    name: "IdCCF",
  },
  {
    label: "Cuenta de ahorros:",
    name: "IdAFC",
  },
  {
    label: "Talla de camisa:",
    name: "ShirtSize",
  },
  {
    label: "Talla de pantalón:",
    name: "PantSize",
  },
  {
    label: "Talla de zapatos:",
    name: "ShoesSize",
  },
  {
    label: "Tipo de contrato:",
    name: "IdContract",
  },
  {
    label: "Posición:",
    name: "IdPosition",
  },
];

export const WORK_FIELDS = [
  {
    fields: [
      {
        label: "Eps:",
        name: "IdEPS",
      },
      {
        label: "Arl:",
        name: "IdARL",
      },
      {
        label: "Caja compensación:",
        name: "IdCCF",
      },
    ],
  },
  {
    fields: [
      {
        label: "Cuenta de ahorros:",
        name: "IdAFC",
      },
      {
        label: "Talla de camisa:",
        name: "ShirtSize",
      },
      {
        label: "Talla de pantalón:",
        name: "PantSize",
      },
      {
        label: "Talla de zapatos:",
        name: "ShoesSize",
        type: "number",
      },
    ],
  },
  {
    fields: [
      {
        label: "Tipo de contrato:",
        name: "IdContract",
      },
      {
        label: "Posición:",
        name: "IdPosition",
      },
    ],
  },
];
