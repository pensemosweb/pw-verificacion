import { html } from 'lit';
import '@vaadin/text-field';

import { onInput } from './eventHandlers.js';

export function renderDatosVehiculo(fields) {
  return html`
    <section>
      <vaadin-text-field
        label="marca"
        name="marca"
        required
        .value=${fields.marca}
        placeholder="Marca"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="La marca es obligatoria"
      ></vaadin-text-field>

      <vaadin-text-field
        label="submarca"
        name="submarca"
        required
        .value=${fields.submarca}
        placeholder="Ingrese la submarca"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="La submarca es obligatoria"
      ></vaadin-text-field>

      <vaadin-text-field
        label="modelo"
        name="modelo"
        required
        .value=${fields.modelo}
        placeholder="Modelo"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El modelo es obligatorio"
      ></vaadin-text-field>

      <vaadin-text-field
        label="modeloDSL"
        name="modeloDSL"
        .value=${fields.modeloDSL}
        placeholder="Modelo DSL"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El modelo DSL es obligatorio"
      ></vaadin-text-field>

      <vaadin-text-field
        label="serie"
        name="serie"
        required
        .value=${fields.serie}
        placeholder="Número de serie"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El número de serie es obligatorio"
      ></vaadin-text-field>

      <vaadin-text-field
        label="placas"
        name="placas"
        required
        .value=${fields.placas}
        placeholder="Placas"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El número de placa es obligatorio"
      ></vaadin-text-field>

      <vaadin-text-field
        label="pesoBruto"
        name="pesoBruto"
        required
        .value=${fields.pesoBruto}
        placeholder="Peso bruto"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El peso bruto del vehículo es obligatorio"
      ></vaadin-text-field>

      <vaadin-text-field
        label="combustible"
        name="combustible"
        required
        .value=${fields.combustible}
        placeholder="Ingrese el combustible que corresponde"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El tipo de combustible es obligatorio"
      ></vaadin-text-field>

      <vaadin-text-field
        label="clase"
        name="clase"
        required
        .value=${fields.clase}
        placeholder="Clase"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El dato de clase es obligatorio"
      ></vaadin-text-field>

      <vaadin-text-field
        label="servicio"
        name="servicio"
        required
        .value=${fields.servicio}
        placeholder="Ingrese el tipo de servicio"
        @input=${onInput}
        ?disabled=${fields.isDisabled}
        error-message="El tipo de servicio es obligatorio"
      ></vaadin-text-field>
    </section>
  `;
}
