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
        display: grid;
      }

      .grid-rows-3 {
        grid-template-rows: repeat(3, 1fr);
        border: 0.1rem solid black;
        border-radius: 1rem;
      }

      .subtitle {
        text-align: center;
        margin: 0;
      }

      .grid-columns-2 {
        grid-template-columns: 1fr 1fr;
      }

      .grid-x-auto {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        gap: 1rem;
      }

      .dates-propetary input {
        width: 50%;
        margin: 0 0 1rem 1rem;
      }

      .dates-propetary-bottom {
        margin-top: 3rem;
      }

      .dates-propetary-bottom label {
        margin-left: 0.4rem;
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
          <label> CLAVE:<input /> </label>
          <label> FECHA:<input /> </label>
          <label> HORA:<input /> </label>
          <label> PERIODO:<input /> </label>
          <label> TIPO DE VERIF.:<input /> </label>
          <label
            >INSP. VISUAL.:
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
            <div class="dates-propetary">
              <input type="" name="" value="" placeholder="Nombre completo" />
              <input type="" name="" value="" placeholder="Direccion" />
            </div>

            <div class="dates-propetary-bottom">
              <label for="">C.P: <input type="" name="" value="" /></label>
              <label for=""
                >MUNICIPIO: <input type="" name="" value=""
              /></label>
              <label for="">ESTADO: <input type="" name="" value="" /></label>
            </div>
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
