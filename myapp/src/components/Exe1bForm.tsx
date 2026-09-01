import { useState, type ChangeEvent, type FormEvent } from 'react';

interface ContactFormData {
  firstname: string;
  email: string;
  message: string;
}

export default function Exe1bForm() {
  const [form, setForm] = useState<ContactFormData>({
    firstname: '',
    email: '',
    message: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const fieldName = event.target.name as keyof ContactFormData;

    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      form.firstname.trim() === '' ||
      form.email.trim() === '' ||
      form.message.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstname"
        value={form.firstname}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
      />

      <button type="submit">Send</button>
    </form>
  );
}
