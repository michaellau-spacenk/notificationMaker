import { useState } from 'react';
import {
  Input
} from "@material-tailwind/react";

function FormField({ label, type, placeholder, onChange }) {
  const [formValue, setFormValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setFormValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-72 mb-4 mx-auto">
      <Input
        label={label}
        color="black"
        type={type}
        value={formValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormField;
