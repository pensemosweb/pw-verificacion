import { LitElement, html } from 'lit';
import sharedStyles from '../shared-styles/main.styles.js';
import styles from './pw-verificacion-datos-vehiculo.styles.js';
import '../pw-field/pw-field.js';


class PwVerificacionDatosVehiculo extends LitElement {
  static get is() {
    return 'pw-verificacion-datos-vehiculo';
  }

  static get styles() {
    return [sharedStyles, styles];
  }

  static get properties() {
    return {
      marca: String,
      submarca: String,
      modelo: String,
      modeloDSL: String,
      serie: String,
      placas: String,
      pesoBruto: String,
      combustible: String,
      clase: String,
      servicio: String,
      isDisabled: { type: Boolean, attribute: 'is-disabled' }
    };
  }

  constructor() {
    super();
    this.isDisabled = false;
    this.marca = '';
    this.submarca = '';
    this.modelo = '';
    this.modeloDSL = '';
    this.serie = '';
    this.placas = '';
    this.pesoBruto = '';
    this.combustible = '';
    this.clase = '';
    this.servicio = '';
  }

  render() {
    return html`
      <section class="grid grid-template-cols-auto">
        ${this.renderFields()}
      </section>
    `;
  }

  renderFields() {
    const fields = [
      { label: 'marca', name: 'marca', value: this.marca, type: 'text' },
      { label: 'submarca', name: 'submarca', value: this.submarca, type: 'text' },
      { label: 'modelo', name: 'modelo', value: this.modelo, type: 'text' },
      { label: 'modeloDSL', name: 'modeloDSL', value: this.modeloDSL, type: 'text' },
      { label: 'serie', name: 'serie', value: this.serie, type: 'text' },
      { label: 'placas', name: 'placas', value: this.placas, type: 'text' },
      { label: 'pesoBruto', name: 'pesoBruto', value: this.pesoBruto, type: 'text' },
      { label: 'combustible', name: 'combustible', value: this.combustible, type: 'text' },
      { label: 'clase', name: 'clase', value: this.clase, type: 'text' },
      { label: 'servicio', name: 'servicio', value: this.servicio, type: 'text' }
    ];

    return fields.map(({ label, name, value, type }) => html`
      <pw-field .label=${label} .name=${name} .value=${value} type=${type} ?is-disabled=${this.isDisabled}></pw-field>
    `);
  }

}

customElements.define(PwVerificacionDatosVehiculo.is, PwVerificacionDatosVehiculo);
