import { LitElement, html, css } from 'lit';

export class PwVerificacionForm extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        row-gap: 3rem;
      }

      input {
        width: 100px;
      }

      .grid {
        display: grid
      }

      .grid-rows-3 {
        grid-template-rows: repeat(3, 1fr);
      }

      .grid-columns-2 {
        grid-template-columns: 1fr 1fr; 
      }

      .grid-x-auto {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        gap: 1rem;
      }
    `;
  }

  constructor() {
    super();
    this.hasPlacaAtCenter = false;
  }

  render() {
    return html`
      <form>
        <section class="grid-x-auto">
          <label>
            CLAVE:<input />
          </label>
          <label>
            FECHA:<input />
          </label>
          <label>
            HORA:<input />
          </label>
          <label>
            PERIODO:<input />
          </label>
          <label>
            TIPO DE VERIF.:<input />
          </label>
          <label>INSP. VISUAL.:
            <input />
          </label>
          <label>
            PAGO:
            <input />
          </label>
          <label>
            PAGO MULTA:
            <input />
          </label>
        </section>
        <section class="grid grid-columns-2">
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
