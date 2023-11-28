import {  Typography } from '@material-tailwind/react';
import Form from './Form';



function App() {

  return (
    <div className="bg-stark mx-auto pb-12">
      <Typography className="mt-0 text-center pt-12 pb-6" variant="h1">
        Global Notification Maker
      </Typography>
      <Form />
    </div>
  );
}

export default App;
