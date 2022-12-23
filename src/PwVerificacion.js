import { LitElement, html, css } from 'lit';
import './pw-verificacion-form.js';

export class PwVerificacion extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 100px 1fr 100px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Verificación';
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
      </header>
      <main>
        <pw-verificacion-form></pw-verificacion-form>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    `;
  }
}
