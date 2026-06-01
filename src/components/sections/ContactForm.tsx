"use client";

import { useState } from "react";

export interface ContactFormProps {
  budgets: string[];
  projectTypes: string[];
}

export function ContactForm({ budgets, projectTypes }: ContactFormProps) {
  const [budget, setBudget] = useState<string | null>(null);
  const [types, setTypes] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleType = (t: string) => {
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <h3>Thanks — we got your message.</h3>
        <p>We&rsquo;ll reply within one business day at the email you provided.</p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required placeholder="you@company.com" />
        </div>
      </div>

      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" placeholder="Brand or company" />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" type="url" placeholder="https://" />
        </div>
      </div>

      <div className="contact-field">
        <label>Budget</label>
        <div className="contact-chips">
          {budgets.map((b) => (
            <label key={b} className={`contact-chip${budget === b ? " is-active" : ""}`}>
              <input
                type="radio"
                name="budget"
                value={b}
                checked={budget === b}
                onChange={() => setBudget(b)}
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div className="contact-field">
        <label>Project type</label>
        <div className="contact-chips">
          {projectTypes.map((t) => (
            <label key={t} className={`contact-chip${types.includes(t) ? " is-active" : ""}`}>
              <input
                type="checkbox"
                name="projectType"
                value={t}
                checked={types.includes(t)}
                onChange={() => toggleType(t)}
              />
              {t}
            </label>
          ))}
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Tell us about the project</label>
        <textarea
          id="contact-message"
          name="message"
          required
          placeholder="What are you trying to build? What's the timeline? What does success look like?"
        />
      </div>

      <button type="submit" className="btn btn-dark contact-submit">
        Send message →
      </button>
    </form>
  );
}
