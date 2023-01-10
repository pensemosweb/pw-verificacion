import { css } from 'lit';

export default css`
  .flex {
    display: flex;
  }

  @media print {
    .first-row {
      margin-block-start: calc(18mm - var(--pw-print-margin-block));
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
      width: 12mm;
    }

    .pagoMulta {
      margin-inline-start: 16mm;
      width: 14mm;
    }

    .first-row-repetition-one {
      margin-block-start: 24mm;
    }

    .first-row-repetition-two {
      margin-block-start: 24mm;
    }

    .datos-propietario {
      margin-inline-start: calc(15mm - var(--pw-print-margin-inline));
      margin-block-start: 5mm;
    }

    .nombre,
    .direccion {
      height: 5mm;
      width: 100%;
      justify-content: flex-start;
    }

    .direccion {
      margin-block-start: 3mm;
    }

    .datos-propietario-bottom {
      margin-block-start: 3mm;
    }

    .codigoPostal {
      width: 16mm;
    }

    .codigoPostal,
    .municipio,
    .estado {
      height: 5mm;
    }

    .municipio {
      margin-inline-start: 13mm;
      width: 24mm;
    }

    .estado {
      margin-inline-start: 10mm;
      width: 26mm;
    }

    .datos-vehiculo {
      margin-block-start: 5mm;
      margin-inline-start: 6mm;
      row-gap: 2mm;
    }

    .marcasYmodelos {
      display: flex;
    }

    .marca {
      width: 22mm;
      margin-inline-start: 9mm;
    }

    .submarca {
      margin-inline-start: 14mm;
      width: 18mm;
    }

    .marca,
    .submarca {
      height: 5mm;
    }

    .modelo,
    .modeloDSL {
      height: 3mm;
    }

    .modelo {
      margin-inline-start: 10mm;
    }

    .modeloDSL {
      margin-inline-start: 16mm;
    }

    .h-1 {
      height: 5mm;
    }

    .serie {
      margin-inline-start: 8mm;
      width: 28mm;
    }

    .placas {
      margin-inline-start: 10mm;
      width: 23mm;
    }

    .pesoBruto {
      margin-inline-start: 16mm;
      width: 12mm;
    }

    .combustible {
      margin-inline-start: 18mm;
      width: 36mm;
    }

    .clase {
      margin-inline-start: 8mm;
      width: 15mm;
    }

    .servicio {
      margin-inline-start: 11mm;
      width: 16mm;
    }

    .equipoTecnicoFolioAnt {
      margin-inline-start: calc(10mm - var(--pw-print-margin-inline));
    }

    .equipo {
      width: 19mm;
    }

    .tecnico {
      margin-inline-start: 0mm;
      width: 52mm;
    }

    .folioAnt {
      width: 23mm;
    }

    .proximaVerif {
      margin-inline-start: 15mm;
      margin-block-start: 10mm;
      height: 5mm;
      width: 40mm;
    }

    .repeatedPlacas {
      margin-inline-start: 23mm;
      margin-block-start: 5mm;
      height: 5mm;
      width: 23mm;
    }

    .estatalDiesel {
      display: grid;
      grid-template-columns: 35mm 35mm;
      grid-template-rows: 5mm 5mm;
      margin-inline-start: 22mm;
      margin-block-start: 12mm;
      align-items: center;
      justify-items: center;
    }

    .first-row-repetition-one .estatalDiesel {
      margin-block-start: 13mm;
    }

    .first-row-repetition-two .estatalDiesel {
      margin-block-start: 13mm;
    }

    .statalDieselValue {
      height: 5mm;
      width: 100%;
    }

    [hidden] {
      opacity: 0;
    }
  }
`;
