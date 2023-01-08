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
          ?disabled=${fields.isDisabled}
          error-message="El técnico es obligatorio"
        >
        </vaadin-text-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-text-field
          label="folio ant"
          name="folioAnt"
          required
          .value=${fields.folioAnt}
          placeholder= "Número de folio"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El número de folio es obligatorio"
        >
        </vaadin-text-field>
      </div>

      
    </section>
  `;
}
