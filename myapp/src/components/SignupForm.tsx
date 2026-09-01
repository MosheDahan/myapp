import React, { useState } from "react"

interface SignupFormData {
  firstname: string
  email: string
  age: string
}

export default function SignupForm() {
  const [form, setForm] = useState<SignupFormData>({
    firstname: '',
    email: '',
    age: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const field = e.target.name as keyof SignupFormData
    const value = e.target.value

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Form submitted:', form)
  }

  return (
    <>
      <style>{`
        .signup-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #eef4ff 0%, #f9f7ff 100%);
          padding: 24px;
          font-family: Arial, sans-serif;
        }

        .signup-card {
          width: 100%;
          max-width: 460px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          box-shadow: 0 18px 40px rgba(25, 35, 70, 0.12);
          padding: 32px;
        }

        .signup-title {
          margin: 0 0 24px;
          font-size: 2rem;
          color: #1f2a44;
          text-align: center;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .signup-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          font-size: 1rem;
          background: #f8fafc;
          color: #1e293b;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .signup-input:focus {
          border-color: #5b7cff;
          box-shadow: 0 0 0 4px rgba(91, 124, 255, 0.12);
        }

        .signup-btn {
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #5b7cff, #7c5cff);
          color: #fff;
          padding: 14px 18px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 700;
          transition: transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 10px 22px rgba(91, 124, 255, 0.25);
        }

        .signup-btn:hover {
          transform: translateY(-1px);
        }
      `}</style>

      <div className="signup-wrapper">
        <div className="signup-card">
          <h2 className="signup-title">Sign Up</h2>

          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              className="signup-input"
              type="text"
              name="firstname"
              placeholder="First name"
              value={form.firstname}
              onChange={handleChange}
            />

            <input
              className="signup-input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              className="signup-input"
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
            />

            <button className="signup-btn" type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  )
}