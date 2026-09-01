import { useState, type ChangeEvent, type MouseEvent } from 'react';

export default function Input() {
  const [value, setValue] = useState<string>('john');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleClick(event: MouseEvent<HTMLParagraphElement>) {
    console.log(event.target);
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p onClick={handleClick}>click me</p>
      <p>hi {value}</p>
    </div>
  );
}