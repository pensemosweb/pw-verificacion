/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import '@vaadin/button';
import '@vaadin/text-field';

import sharedStyles from './shared-styles/main.styles.js';

import { renderFirstRow } from './templates/renderFirstRow.js';
import { renderEquipioTecnicFolio } from './templates/renderEquipoTecnicoFolio.js';
import { renderDatosPropietario } from './templates/renderDatosPropietario.js';
import { renderDatosVehiculo } from './templates/renderDatosVehiculo.js';
import { onInput } from './templates/eventHandlers.js';
import { renderEstatalDiesel } from './templates/renderEstatalDiesel.js';

export class PwVerificacionForm extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      hasPlacaAtCenter: Boolean,
      isDisabled: { type: Boolean, attribute: 'is-disabled' },
      fields: Object,
    };
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: grid;
          row-gap: 3rem;
          margin-block-end: 3rem;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.hasPlacaAtCenter = false;
    this.isDisabled = false;
    this.fields = {};
  }

  render() {
    return html`
      <form @submit=${this.print}>
        ${this.title ? html`<h1>${this.title}</h1>` : null}

        ${this.renderPrintButton()}
        
        ${renderFirstRow({
          clave: this.fields.clave,
          fecha: this.fields.fecha,
          hora: this.fields.hora,
          periodo: this.fields.periodo,
          tipoVerif: this.fields.tipoVerif,
          inspVisual: this.fields.inspVisual,
          pago: this.fields.pago,
          pagoMulta: this.fields.pagoMulta,
          isDisabled: this.isDisabled,
        })}
        <section class="grid grid-cols-2 mbe-2">
          <div class="datos-propietario-container">
            <h3 class="subtitle">DATOS DEL PROPIETARIO</h3>
            <div class="grid grid-template-cols-auto">
              ${renderDatosPropietario({
                nombre: this.fields.nombre,
                direccion: this.fields.direccion,
                codigoPostal: this.fields.codigoPostal,
                municipio: this.fields.municipio,
                estado: this.fields.estado,
                isDisabled: this.isDisabled,
              })}
            </div>
          </div>

          <div class="vehiculo">
            <h3 class="subtitle">DATOS DEL VEHÍCULO</h3>
            ${renderDatosVehiculo({
              marca: this.fields.marca,
              submarca: this.fields.submarca,
              modelo: this.fields.modelo,
              modeloDSL: this.fields.modeloDSL,
              serie: this.fields.serie,
              placas: this.fields.placas,
              pesoBruto: this.fields.pesoBruto,
              combustible: this.fields.combustible,
              clase: this.fields.clase,
              servicio: this.fields.servicio,
              isDisabled: this.isDisabled,
            })}
          </div>
        </section>

        <section class="grid grid-template-cols-auto mbe-2">
          ${renderEquipioTecnicFolio({
            equipo: this.fields.equipo,
            tecnico: this.fields.tecnico,
            folio: this.fields.folioAnt,
            isDisabled: this.isDisabled,
          })}
        </section>

        <section class="grid grid-cols-2 mbe-2">
          <div>
            <vaadin-text-field
              label="Próxima verificación"
              name="proximaVerif"
              required
              .value=${this.fields.proximaVerif}
              placeholder="Próxima verificación"
              @input=${onInput}
              ?disabled=${this.isDisabled}
              error-message="La próxima verificación es obligatoria"
            >
            </vaadin-text-field>
          </div>

          ${renderEstatalDiesel({
            limiteLuz: this.fields.limiteLuz,
            limiteOpacidad: this.fields.limiteOpacidad,
            resultadoLuz: this.fields.resultadoLuz,
            resultadoOpacidad: this.fields.resultadoOpacidad,
            isDisabled: this.isDisabled,
          })}
        </section>
      </form>
    `;
  }

  renderPrintButton() {
    return html`<button>
      <vaadin-button>Imprimir</vaadin-button>
    </button>`;
  }

  print(e) {
    e.preventDefault();
    window.print();
  }
}

customElements.define('pw-verificacion-form', PwVerificacionForm);
