import { useState } from 'react';

function FormField({ label, type }) {
  const [formValue, setFormValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setFormValue(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type={type}
        value={formValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormField;
