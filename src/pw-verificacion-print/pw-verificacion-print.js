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
    const {
      clave,
      fecha,
      hora,
      periodo,
      tipoVerif,
      inspVisual,
      pago,
      pagoMulta,
    } = this.fields;

    return html`
      <section class="flex first-row">
        <div class="value clave">${clave}</div>
        <div class="value fecha">${new Date(fecha).toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' })}</div>
        <div class="value hora">${hora}</div>
        <div class="value periodo">${periodo}</div>
        <div class="value tipoVerif">${tipoVerif}</div>
        <div class="value inspVisual">${inspVisual}</div>
        <div class="value pago">${pago}</div>
        <div class="value pagoMulta">${pagoMulta}</div>
      </section>

      <section class="flex first-row first-row-repetition-one">
        <div class="value clave">${clave}</div>
        <div class="value fecha">${new Date(fecha).toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' })}</div>
        <div class="value hora">${hora}</div>
        <div class="value periodo">${periodo}</div>
        <div class="value tipoVerif">${tipoVerif}</div>
        <div class="value inspVisual">${inspVisual}</div>
        <div class="value pago">${pago}</div>
        <div class="value pagoMulta">${pagoMulta}</div>
      </section>

      <section class="flex first-row first-row-repetition-two">
        <div class="value clave">${clave}</div>
        <div class="value fecha">${new Date(fecha).toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' })}</div>
        <div class="value hora">${hora}</div>
        <div class="value periodo">${periodo}</div>
        <div class="value tipoVerif">${tipoVerif}</div>
        <div class="value inspVisual">${inspVisual}</div>
        <div class="value pago">${pago}</div>
        <div class="value pagoMulta">${pagoMulta}</div>
      </section>
    `;
  }
}

customElements.define(PwVerificacionPrint.is, PwVerificacionPrint);
