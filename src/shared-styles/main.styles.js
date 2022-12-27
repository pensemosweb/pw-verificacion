import { css } from 'lit';

export default css`
  .grid {
    display: grid;
    gap: 1rem;
  }

  .grid-rows-3 {
    grid-template-rows: repeat(3, 1fr);
  }

  .grid-cols-2 {
    grid-template-columns: 1fr 1fr;
  }

  .grid-template-cols-auto {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .flex {
    display: flex;
  }

  .flex-cols {
    flex-direction: column;
  }

  label {
    text-transform: uppercase;
  }

  input {
    padding: 8px;
    height: 12px;
  }
`;
