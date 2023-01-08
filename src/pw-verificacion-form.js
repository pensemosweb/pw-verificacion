import { LitElement, html, css } from 'lit';
import sharedStyles from './shared-styles/main.styles.js';

import './pw-verificacion-datos-vehiculo/pw-verificacion-datos-vehiculo.js';
import './pw-verificacion-last-row/pw-verificacion-last-row.js';

import { renderFirstRow } from './templates/renderFirstRow.js';
import { renderEquipioTecnicFolio } from './templates/renderEquipoTecnicoFolio.js';
import { renderDatosPropietario } from './templates/renderDatosPropietario.js';
import { renderDatosVehiculo } from './templates/renderDatosVehiculo.js';
import '@vaadin/button';

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
    const {
      limiteLuz,
      limiteOpacidad,
      resultadoLuz,
      resultadoOpacidad,
      proximaVerif,
    } = this.fields;

    return html`
      <form @submit=${this.print}>
        ${this.title ? html`<h1>${this.title}</h1>` : null}
        <button>
          <vaadin-button>Imprimir</vaadin-button>
        </button>

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

        <pw-verificacion-last-row
          .limiteLuz=${limiteLuz}
          .limiteOpacidad=${limiteOpacidad}
          .resultadoLuz=${resultadoLuz}
          .resultadoOpacidad=${resultadoOpacidad}
          .proximaVerif=${proximaVerif}
          ?is-disabled=${this.isDisabled}
        ></pw-verificacion-last-row>

        <section class="proxima-verif-estatal-diesel">
          <div class="proxima-verif"></div>
          <div class="estatal-diesel"></div>
        </section>
      </form>
    `;
  }

  print(e) {
    e.preventDefault();
    window.print();
  }
}

customElements.define('pw-verificacion-form', PwVerificacionForm);
