import './styles.css';

import { Docco } from '@docco/docco';

export default function App() {
  return (
    <div className='App'>
      <Docco url='https://api.docco.io/openapi.json' />
    </div>
  );
}
