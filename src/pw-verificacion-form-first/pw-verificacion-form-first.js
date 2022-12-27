import { LitElement, html } from 'lit';
import sharedStyles from '../shared-styles/main.styles.js';
import styles from './pw-verificacion-form-first.styles.js';

class PwVerificacionFormFirst extends LitElement {
  static get is() {
    return 'pw-verificacion-form-first';
  }

  static get styles() {
    return [sharedStyles, styles];
  }

  static get properties() {
    return {
      clave: String,
      fecha: String,
      hora: String,
      periodo: String,
      tipoVerif: String,
      inspVisual: String,
      pago: String,
      pagoMulta: String,
      isDisabled: { type: Boolean, attribute: 'is-disabled' }
    };
  }

  constructor() {
    super();
    this.clave = '';
    this.fecha = '';
    this.hora = '';
    this.periodo = '';
    this.tipoVerif = '';
    this.inspVisual = '';
    this.pago = '';
    this.pagoMulta = '';
  }

  render() {
    return html`
      <form class="grid grid-template-cols-auto">
        <div class="flex flex-cols">
          <label for="clave">CLAVE:</label>
          <input
            @input=${this.onInput}
            .value=${this.clave}
            id="clave"
            name="clave"
            ?disabled=${this.isDisabled}
          />
        </div>

        <div class="flex flex-cols">
          <label for="fecha">FECHA:</label>
          <input
            type="date"
            @input=${this.onInput}
            .value=${this.fecha}
            id="fecha"
            name="fecha"
            ?disabled=${this.isDisabled}
          />
        </div>

        <div class="flex flex-cols">
          <label for="hora">hora:</label>
          <input
            type="time"
            @input=${this.onInput}
            .value=${this.hora}
            id="hora"
            name="hora"
            ?disabled=${this.isDisabled}
          />
        </div>

        <div class="flex flex-cols">
          <label for="periodo">periodo:</label>
          <input
            type="text"
            @input=${this.onInput}
            .value=${this.periodo}
            id="periodo"
            name="periodo"
            ?disabled=${this.isDisabled}
          />
        </div>

        <div class="flex flex-cols">
          <label for="tipo-verif">tipo de verif.:</label>
          <input
            type="text"
            @input=${this.onInput}
            .value=${this.tipoVerif}
            id="tipo-verif"
            name="tipoVerif"
            ?disabled=${this.isDisabled}
          />
        </div>

        <div class="flex flex-cols">
          <label for="insp-visual">insp. visual:</label>
          <input
            type="text"
            @input=${this.onInput}
            .value=${this.inspVisual}
            id="insp-visual"
            name="inspVisual"
            ?disabled=${this.isDisabled}
          />
        </div>

        <div class="flex flex-cols">
          <label for="pago">pago:</label>
          <input
            type="text"
            @input=${this.onInput}
            .value=${this.pago}
            id="pago"
            name="pago"
            ?disabled=${this.isDisabled}
          />
        </div>

        <div class="flex flex-cols">
          <label for="pago-multa">pago multa:</label>
          <input
            type="text"
            @input=${this.onInput}
            .value=${this.pagoMulta}
            id="pago-multa"
            name="pagoMulta"
            ?disabled=${this.isDisabled}
          />
        </div>
      </form>
    `;
  }

  onInput(e) {
    const { name, value } = e.target;

    const fieldChanged = new CustomEvent('pw-field-changed', {
      composed: true,
      detail: { [name]: value },
    });

    this.dispatchEvent(fieldChanged);
  }
}

customElements.define(PwVerificacionFormFirst.is, PwVerificacionFormFirst);
