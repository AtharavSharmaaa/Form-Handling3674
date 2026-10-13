import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    terms: false,
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.course || !form.terms) {
      setError("Please fill all details and accept the terms.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Registration successful!");
  }

  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <h2>Student Registration Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <select name="course" value={form.course} onChange={handleChange}>
          <option value="">Please select a course</option>
          <option value="BTech">BTech</option>
          <option value="MTech">MTech</option>
          <option value="PHD">PHD</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          I accept the terms and conditions
        </label>

        <button type="submit">Register</button>

        {error && <p className="error">{error}</p>}
      </form>
    </main>
  );
}

export default App;
