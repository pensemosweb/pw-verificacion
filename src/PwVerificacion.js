import { LitElement, html, css } from 'lit';
import './pw-verificacion-form.js';
import './pw-verificacion-print/pw-verificacion-print.js';

export class PwVerificacion extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      fields: { type: Object }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .hidden {
        display: none;
      }

      @media print {
        .print\\:hidden {
          display: none;
        }

        .print\\:visible {
          display: block;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Verificación';
    this.fields = {};
  }

  render() {
    return html`
      <header class="print:hidden">
        <h1>${this.title}</h1>
      </header>
      <main>
        <pw-verificacion-form
          @pw-field-changed=${this.onFieldChanged}
          data-testid="form"
          class="print:hidden"
        ></pw-verificacion-form>
        <pw-verificacion-print
          .fields=${this.fields}
          data-testid="print"
          class="hidden print:visible"
        ></pw-verificacion-print>
      </main>

      <footer class="print:hidden">
        <button class="btn" @click=${() => window.print()}>Imprimir</button>
      </footer>
    `;
  }

  onFieldChanged(e) {
    this.fields = { ...this.fields, ...e.detail };
  }
}
