import { LitElement, html, css } from 'lit';
import './pw-verificacion-first-row/pw-verificacion-first-row.js';
import sharedStyles from './shared-styles/main.styles.js';

import './pw-verificacion-datos-vehiculo/pw-verificacion-datos-vehiculo.js';

export class PwVerificacionForm extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      hasPlacaAtCenter: Boolean,
      isDisabled: { type: Boolean, attribute: 'is-disabled' },
      fields: Object
    };
  }

  static get styles() {
    return [
      sharedStyles,
      css`
      :host {
        display: grid;
        row-gap: 3rem;
        margin-block-end: 6rem;
      }
    `
    ];
  }

  constructor() {
    super();
    this.hasPlacaAtCenter = false;
    this.isDisabled = false;
    this.fields = {}
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
    } = this.fields;

    return html`
      <form>
        <pw-verificacion-first-row
          data-testid="form-first"
          .clave=${clave}
          .fecha=${fecha}
          .hora=${hora}
          .periodo=${periodo}
          .tipoVerif=${tipoVerif}
          .inspVisual=${inspVisual}
          .pago=${pago}
          .pagoMulta=${pagoMulta}
          ?is-disabled=${this.isDisabled}
        ></pw-verificacion-first-row>

        <section class="grid grid-cols-2">
          <div class="grid grid-rows-3">
            <h3 class="subtitle">DATOS DEL PROPIETARIO</h3>
          </div>
          <div class="vehiculo">
            <h3 class="subtitle">DATOS DEL VEHÍCULO</h3>
            <pw-verificacion-datos-vehiculo
              .marca=${marca}
              .submarca=${submarca}
              .modelo=${modelo}
              .modeloDSL=${modeloDSL}
              .serie=${serie}
              .placas=${placas}
              .pesoBruto=${pesoBruto}
              .combustible=${combustible}
              .clase=${clase}
              .servicio=${servicio}
              ?is-disabled=${this.isDisabled}
            >
            </pw-verificacion-datos-vehiculo>
          </div>
        </section>

        <section class="proxima-verif-estatal-diesel">
          <div class="proxima-verif"></div>
          <div class="estatal-diesel"></div>
        </section>
      </form>
    `;
  }
}

customElements.define('pw-verificacion-form', PwVerificacionForm);
