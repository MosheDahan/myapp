import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const formData: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    setErrorMessage('');
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={handleNameChange} placeholder="Name" />
      <input name="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <textarea name="message" value={message} onChange={handleMessageChange} placeholder="Message" />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Send</button>
    </form>
  );
}