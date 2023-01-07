import { LitElement, html } from 'lit';
import sharedStyles from '../shared-styles/main.styles.js';

class PwVerificacionLastRow extends LitElement {
  static get is() {
    return 'pw-verificacion-last-row';
  }

  static get styles() {
    return [sharedStyles];
  }

  static get properties() {
    return {
      limiteLuz: String,
      limiteOpacidad: String,
      resultadoLuz: String,
      resultadoOpacidad: String,
      proximaVerif: String,
      isDisabled: { type: Boolean, attribute: 'is-disabled' }
    };
  }

  constructor() {
    super();
    this.limiteLuz = '';
    this.limiteOpacidad = '';
    this.resultadoLuz = '';
    this.resultadoOpacidad = '';
    this.proximaVerif = '';
  }

  render() {
    return html`
       <section class="grid grid-cols-2 mbe-2">
          <div class="">
            <pw-field
              label="Proxima verificación"
              name="proximaVerif"
              .value=${this.proximaVerif}
              ?is-disabled=${this.isDisabled}
            ></pw-field>
          </div>
          <div class="grid grid-rows-3 grid-cols-3 gap-0">
            <div class="border p-2 text-lg">Estatal diesel</div>
            <div class="border p-2">
              Coeficiente de absorción de Luz (m<sup>-1</sup>)
            </div>
            <div class="border p-2">Coeficiente de opacidad (%)</div>
            <div class="border p-2">
              Limite
            </div>
            <div class="border p-2">
              <pw-field
                name="limiteLuz"
                .value=${this.limiteLuz}
                ?is-disabled=${this.isDisabled}
              ></pw-field>
            </div>
            <div class="border p-2">
            <pw-field
                name="limiteOpacidad"
                .value=${this.limiteOpacidad}
                ?is-disabled=${this.isDisabled}
              ></pw-field>
            </div>
            <div class="border p-2">
              Resultado
            </div>
            <div class="border p-2">
              <pw-field
                name="resultadoLuz"
                .value=${this.resultadoLuz}
                ?is-disabled=${this.isDisabled}
              ></pw-field>
            </div>
            <div class="border p-2">
              <pw-field
                name="resultadoOpacidad"
                .value=${this.resultadoOpacidad}
                ?is-disabled=${this.isDisabled}
              ></pw-field>
            </div>
          </div>
        </section>
    `;
  }

}

customElements.define(PwVerificacionLastRow.is, PwVerificacionLastRow);