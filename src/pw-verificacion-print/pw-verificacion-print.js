import { LitElement, html } from 'lit';
import sharedStyles from '../shared-styles/main.styles.js';
import styles from './pw-verificacion-print.styles.js';

class PwVerificacionPrint extends LitElement {
  static get is() {
    return 'pw-verificacion-print';
  }

  static get styles() {
    return [sharedStyles, styles];
  }

  static get properties() {
    return {
      fields: Object,
    };
  }

  constructor() {
    super();
    this.fields = {};
  }

  render() {
    return html`
      ${this.renderValues({ hasDuplicatedPlaca: true })}
      ${this.renderValues({ repeat: 'one' })}
      ${this.renderValues({ repeat: 'two' })}
    `
  }

  renderValues({ hasDuplicatedPlaca = false, repeat = "" }) {
    const {
      clave,
      fecha,
      hora,
      periodo,
      tipoVerif,
      inspVisual,
      pago,
      pagoMulta,
      marca,
      submarca,
      modelo,
      modeloDSL,
      serie,
      placas,
      pesoBruto,
      combustible,
      clase,
      servicio,
      limiteLuz,
      limiteOpacidad,
      resultadoLuz,
      resultadoOpacidad,
      proximaVerif,
      nombre,
      direccion,
      codigoPostal,
      municipio,
      estado,
      equipo,
      folioAnt,
      tecnico,
    } = this.fields;

    return html`
      <section class="flex first-row ${repeat ? `first-row-repetition-${repeat}` : ''}">
        <div class="value clave">${clave}</div>
        <div class="value fecha">${this.formatDate(fecha.valueAsNumber)}</div>
        <div class="value hora">${hora}</div>
        <div class="value periodo">${periodo}</div>
        <div class="value tipoVerif">${tipoVerif}</div>
        <div class="value inspVisual">${inspVisual}</div>
        <div class="value pago">${pago}</div>
        <div class="value pagoMulta">${pagoMulta}</div>
      </section>

      <section class="flex">
        <div class="datos-propietario">
          <div class="value nombre">${nombre}</div>
          <div class="value direccion">${direccion}</div>
          <div class="flex datos-propietario-bottom">
            <div class="value codigoPostal">${codigoPostal}</div>
            <div class="value municipio">${municipio}</div>
            <div class="value estado">${estado}</div>
          </div>
        </div>

        <div class="grid datos-vehiculo">
          <div class="marcasYmodelos">
            <div class="value marca">${marca}</div>
            <div class="value submarca">${submarca}</div>
            <div class="flex flex-cols modelos">
              <div class="value modelo">${modelo}</div>
              <div class="value modeloDSL">${modeloDSL}</div>
            </div>
          </div>

          <div class="flex">
            <div class="value h-1 serie">${serie}</div>
            <div class="value h-1 placas">${placas}</div>
            <div class="value h-1 pesoBruto">${pesoBruto}</div>
          </div>

          <div class="flex">
            <div class="value h-1 combustible">${combustible}</div>
            <div class="value h-1 clase">${clase}</div>
            <div class="value h-1 servicio">${servicio}</div>
          </div>
        </div>
      </section>

      <section class="flex equipoTecnicoFolioAnt">
        <div class="value h-1 equipo">${equipo}</div>
        <div class="value h-1 tecnico">${tecnico}</div>
        <div class="value h-1 folioAnt">${folioAnt}</div>
      </section>

      <section class="flex">
        <div class="value proximaVerif">${proximaVerif}</div>
        <div class="value repeatedPlacas" ?hidden=${!hasDuplicatedPlaca}>${placas}</div>
        <div class="estatalDiesel">
          <div class="value statalDieselValue">${limiteLuz}</div>
          <div class="value statalDieselValue">${limiteOpacidad}</div>
          <div class="value statalDieselValue">${resultadoLuz}</div>
          <div class="value statalDieselValue">${resultadoOpacidad}</div>
        </div>
      </section>`;
  }

  // eslint-disable-next-line class-methods-use-this
  formatDate(fecha) {
    if (fecha) {
      return new Date(fecha).toLocaleString('es-MX', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC'
      });
    }

    return '';
  }
}

customElements.define(PwVerificacionPrint.is, PwVerificacionPrint);
