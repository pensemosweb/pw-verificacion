export function getField(ancestor, parentSelector, fieldSelector) {
  return ancestor.shadowRoot.querySelector(parentSelector).shadowRoot.querySelector(fieldSelector);
}