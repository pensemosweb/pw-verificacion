import { css } from 'lit';

export default css`
:host {
  display: block;
}

.hidden {
  display: none;
}

.btn {
  padding: 8px;
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

@media print {
  .print\\:hidden {
    display: none;
  }

  .print\\:visible {
    display: block;
  }
}
`;