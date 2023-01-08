import { html } from 'lit';
import '@vaadin/number-field';

import { onInput } from './eventHandlers.js';

export function renderEstatalDiesel(fields) {
  return html`
    <div class="grid grid-rows-3 grid-cols-3 gap-0">
      <div class="border p-2 text-lg">Estatal diesel</div>
      <div class="border p-2">
        Coeficiente de absorción de Luz (m<sup>-1</sup>)
      </div>
      <div class="border p-2">Porcentaje de opacidad (%)</div>
      <div class="border p-2">Límite</div>
      <div class="border p-2">
        <vaadin-number-field
          name="limiteLuz"
          required
          .value=${fields.clave}
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El Límite de luz es obligatorio"
        >
        </vaadin-number-field>
      </div>
      <div class="border p-2">
        <vaadin-number-field
          name="limiteOpacidad"
          required
          .value=${fields.limiteOpacidad}
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El Límite de opacidad es obligatorio"
        >
        </vaadin-number-field>
      </div>
      <div class="border p-2">Resultado</div>
      <div class="border p-2">
      <vaadin-number-field
          name="resultadoLuz"
          required
          .value=${fields.resultadoLuz}
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El resultado de luz es obligatorio"
        >
        </vaadin-number-field>
      </div>
      <div class="border p-2">
      <vaadin-number-field
          name="resultadoOpacidad"
          required
          .value=${fields.resultadoOpacidad}
          @input=${onInput}
          ?disabled=${fields.isDisabled}
          error-message="El resultado de opacidad es obligatorio"
        >
        </vaadin-number-field>
      </div>
    </div>
  `;
}
