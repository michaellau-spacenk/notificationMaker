import { useState } from 'react';
import FormField from './FormField';

function App() {
  const [data, setData] = useState({});

  return (
    <div className="bg-cyan-500 h-screen container mx-auto">
      <h1 className="text-3xl font-bold underline">Notification Maker</h1>
      <form>
        <FormField label="headline" type="text" />
      </form>
    </div>
  );
}

export default App;
