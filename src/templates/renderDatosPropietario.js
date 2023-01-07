import { html } from 'lit';
import '@vaadin/text-field';

import { onInput } from './eventHandlers';

export function renderDatosPropietario(fields) {
  return html`
    <section>
      <div>
        <vaadin-text-field
          label="nombre"
          name="nombre"
          required
          .value=${fields.nombre}
          placeholder="Nombre Completo"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El nombre es obligatorio"
        ></vaadin-text-field>
        <br />
        <vaadin-text-field
          label="direccion"
          name="direccion"
          required
          .value=${fields.direccion}
          placeholder="Ingrese la dirección"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="La direccion es obligatoria"
        ></vaadin-text-field>
      </div>

      <div>
        <vaadin-text-field
          label="c.p."
          name="codigoPostal"
          required
          .value=${fields.codigoPostal}
          placeholder="Codigo postal"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El codigo postal es obligatorio"
        ></vaadin-text-field>

        <vaadin-text-field
          label="municipio"
          name="municipio"
          required
          .value=${fields.municipio}
          placeholder="Ingrese el municipio al que corresponde"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El nombre del municipio es obligatorio"
        ></vaadin-text-field>

        <vaadin-text-field
          label="estado"
          name="estado"
          required
          .value=${fields.estado}
          placeholder="Ingrese el estado al que corresponde"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El nombre del estado es obligatorio"
        ></vaadin-text-field>
      </div>
    </section>
  `;
}
