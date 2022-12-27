import { LitElement, html, css } from 'lit';
import './pw-verificacion-form-first/pw-verificacion-form-first.js';
import sharedStyles from './shared-styles/main.styles.js';

export class PwVerificacionForm extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return [
      sharedStyles,
      css`
      :host {
        display: grid;
        row-gap: 3rem;
      }
    `
    ];
  }

  constructor() {
    super();
    this.hasPlacaAtCenter = false;
  }

  render() {
    return html`
      <form>
        <pw-verificacion-form-first></pw-verificacion-form-first>
        <section class="grid grid-cols-2">
          <div class="grid grid-rows-3">
            <h3 class="subtitle">DATOS DEL PROPIETARIO</h3>
          </div>
          <div class="vehiculo">
          <h3 class="subtitle">DATOS DEL VEHÍCULO</h3>
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
