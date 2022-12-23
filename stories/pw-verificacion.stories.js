import { html } from 'lit';
import '../src/pw-verificacion.js';

export default {
  title: 'PwVerificacion',
  component: 'pw-verificacion',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <pw-verificacion
      style="--pw-verificacion-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </pw-verificacion>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
