import { html } from 'lit';
import '@vaadin/text-field';

import { onInput } from './eventHandlers.js';

export function renderEquipioTecnicFolio(fields) {
  return html`
    <section class="grid grid-template-cols-auto">
      <div class="flex flex-cols">
        <vaadin-text-field
          label="Equipo"
          name="Equipo"
          required
          .value=${fields.equipo}
          @input=${onInput}
          readonly
          ?disabled=${fields.isDisabled}
          error-message="El equipo es obligatorio"
        >
        </vaadin-text-field>
      </div>

  

      <div class="flex flex-cols">
        <vaadin-text-field
          label="tecnico"
          name="tecnico"
          required
          .value=${fields.tecnico}
          @input=${onInput}
          readonly
          ?disabled=${fields.isDisabled}
          error-message="El tecnico es obligatorio"
        >
        </vaadin-text-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-text-field
          label="folio ant"
          name="folio"
          required
          .value=${fields.folio}
          placeholder= "numro de folio"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El folio es obligatorio"
        >
        </vaadin-text-field>
      </div>

      
    </section>
  `;
}
