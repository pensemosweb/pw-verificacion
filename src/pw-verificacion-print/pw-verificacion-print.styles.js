import { css } from 'lit';

export default css`
  .flex {
    display: flex;
  }

  @media print {
    .first-row {
      margin-block-start: calc(20mm - var(--pw-print-margin-block));
      margin-inline-start: calc(20mm - var(--pw-print-margin-inline));
    }

    .value {
      height: 10mm;
      width: 13mm;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      text-transform: uppercase;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 7.2pt;
      font-weight: bold;
    }

    .fecha {
      margin-inline-start: 8mm;
    }

    .hora {
      margin-inline-start: 8mm;
      width: 10mm;
    }

    .periodo {
      margin-inline-start: 12mm;
      width: 17mm;
    }

    .tipoVerif {
      margin-inline-start: 18mm;
    }

    .inspVisual {
      margin-inline-start: 15mm;
      width: 9mm;
    }

    .pago {
      margin-inline-start: 7mm;
      width: 12mm
    }

    .pagoMulta {
      margin-inline-start: 16mm;
      width: 14mm;
    }

    .first-row-repetition-one {
      margin-block-start: 82mm;
    }

    .first-row-repetition-two {
      margin-block-start: 81mm;
    }
  }
`;