import { LitElement, html, css } from 'lit';
import './pw-verificacion-form.js';
import './pw-verificacion-print/pw-verificacion-print.js';
import styles from './pw-verificacion.styles.js';

export class PwVerificacion extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      fields: { type: Object }
    };
  }

  static get styles() {
    return [styles]
  }

  constructor() {
    super();
    this.title = 'Verificación';
    this.fields = {
      clave: '',
      fecha: '',
      hora: '',
      periodo: '',
      tipoVerif: '',
      inspVisual: '',
      pago: '',
      pagoMulta: '',
      marca: '',
      submarca: '',
      modelo: '',
      modeloDSL: '',
      serie: '',
      placas: '',
      pesoBruto: '',
      combustible: '',
      clase: '',
      servicio: '',
      equipo: '',
      tecnico: '',
      folioAnt: '',
      limiteLuz: '',
      limiteOpacidad: '',
      resultadoLuz: '',
      resultadoOpacidad: '',
      proximaVerif: '',
      nombre: '',
      direccion: '',
      codigoPostal: '',
      municipio: '',
      estado: ''
    };
  }

  render() {
    return html`
      <header class="print:hidden">
        <h1>${this.title}</h1>
        <section class="actions">
          <button class="btn" @click=${this.print}>Imprimir</button>
          <button class="btn" @click=${this.print}>Imprimir</button>
        </section>
      </header>
      <main>

        <pw-verificacion-form
          .fields=${this.fields}
          @pw-field-changed=${this.onFieldChanged}
          data-testid="form"
          class="print:hidden"
        ></pw-verificacion-form>

        <pw-verificacion-form
          title="Repeticion 1"
          .fields=${this.fields}
          data-testid="form-disabled-1"
          class="print:hidden"
          is-disabled
        ></pw-verificacion-form>

        <pw-verificacion-form
          title="Repeticion 2"
          .fields=${this.fields}
          data-testid="form-disabled-2"
          class="print:hidden"
          is-disabled
        ></pw-verificacion-form>
        
        <pw-verificacion-print
          .fields=${this.fields}
          data-testid="print"
          class="hidden print:visible"
        ></pw-verificacion-print>
      </main>

      <footer class="footer print:hidden">
      <section class="actions">
          <button class="btn" @click=${this.print}>Imprimir</button>
          <button class="btn" @click=${this.print}>Imprimir</button>
        </section>
      </footer>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  print() {
    window.print();
  }

  onFieldChanged(e) {
    this.fields = { ...this.fields, ...e.detail };
  }
}
