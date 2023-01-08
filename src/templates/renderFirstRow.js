import { html } from 'lit';
import '@vaadin/text-field';
import '@vaadin/custom-field';
import '@vaadin/number-field';

import { onInput, onDateInput } from './eventHandlers.js';

export function renderFirstRow(fields) {
  return html`
    <section class="grid grid-template-cols-auto">
      <div class="flex flex-cols">
        <vaadin-text-field
          label="clave"
          name="clave"
          required
          .value=${fields.clave}
          placeholder="La clave"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="La clave es obligatoria"
        >
        </vaadin-text-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-custom-field label="Fecha">
          <input
            type="date"
            @input=${onDateInput}
            .value=${fields.fecha.value}
            id="fecha"
            name="fecha"
            required
            ?disabled=${fields.isDisabled}
            class="pw-input"
          />
        </vaadin-custom-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-custom-field label="Hora">
          <input
            type="time"
            @input=${onInput}
            .value=${fields.hora}
            id="hora"
            name="hora"
            required
            ?disabled=${fields.isDisabled}
            class="pw-input"
          />
        </vaadin-custom-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-text-field
          label="periodo"
          name="periodo"
          required
          .value=${fields.periodo}
          placeholder="El periodo"
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El periodo es obligatorio"
        >
        </vaadin-text-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-text-field
          label="tipo de verif.:"
          name="tipoVerif"
          required
          .value=${fields.tipoVerif}
          placeholder="Tipo Verif."
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El tipo de verificación es obligatorio"
        >
        </vaadin-text-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-text-field
          label="Insp. visual"
          @input=${onInput}
          .value=${fields.inspVisual}
          name="inspVisual"
          ?disabled=${fields.isDisabled}
          required
          error-message="La inspección visual es obligatoria"
        >
        </vaadin-text-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-number-field
          label="Pago"
          @input=${onInput}
          .value=${fields.pago}
          name="pago"
          ?disabled=${fields.isDisabled}
          required
          error-message="El pago es obligatorio"
        >
          <div slot="prefix">$</div>
        </vaadin-number-field>
      </div>

      <div class="flex flex-cols">
        <vaadin-number-field
          label="Pago multa"
          @input=${onInput}
          .value=${fields.pagoMulta}
          name="pagoMulta"
          ?disabled=${fields.isDisabled}
        >
          <div slot="prefix">$</div>
        </vaadin-number-field>
      </div>
    </section>
  `;
}
