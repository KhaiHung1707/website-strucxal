"use client";

import { useState } from "react";

export interface InquiryFormProps {
  stepLabel: string;
  heading: string;
  sub: string;
  projectTypes: string[];
  budgets: string[];
  defaultProjectType?: string;
  defaultBudget?: string;
  submitLabel: string;
  footnote: string;
  fieldLabels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    website: string;
    websitePlaceholder: string;
    projectType: string;
    budget: string;
    message: string;
    messagePlaceholder: string;
  };
}

export function InquiryForm(props: InquiryFormProps) {
  const [projectType, setProjectType] = useState(
    props.defaultProjectType ?? props.projectTypes[0],
  );
  const [budget, setBudget] = useState(props.defaultBudget ?? props.budgets[1] ?? props.budgets[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="inquiry-form">
      <div className="if-head">
        <div className="step">{props.stepLabel}</div>
        <h3>{props.heading}</h3>
        <p>{props.sub}</p>
      </div>

      {submitted ? (
        <div className="if-fields">
          <p style={{ fontSize: 15, color: "var(--text-on-dark)" }}>
            ★ Inquiry sent. We&rsquo;ll reply within one business day.
          </p>
        </div>
      ) : (
        <form
          className="if-fields"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="if-row">
            <div className="if-field">
              <label>{props.fieldLabels.name}</label>
              <input type="text" placeholder={props.fieldLabels.namePlaceholder} required />
            </div>
            <div className="if-field">
              <label>{props.fieldLabels.email}</label>
              <input type="email" placeholder={props.fieldLabels.emailPlaceholder} required />
            </div>
          </div>

          <div className="if-row">
            <div className="if-field">
              <label>{props.fieldLabels.company}</label>
              <input type="text" placeholder={props.fieldLabels.companyPlaceholder} />
            </div>
            <div className="if-field">
              <label>{props.fieldLabels.website}</label>
              <input type="url" placeholder={props.fieldLabels.websitePlaceholder} />
            </div>
          </div>

          <div className="if-field">
            <label>{props.fieldLabels.projectType}</label>
            <div className="if-chips">
              {props.projectTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`if-chip${t === projectType ? " active" : ""}`}
                  onClick={() => setProjectType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="if-field">
            <label>{props.fieldLabels.budget}</label>
            <div className="if-chips">
              {props.budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  className={`if-chip${b === budget ? " active" : ""}`}
                  onClick={() => setBudget(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="if-field">
            <label>{props.fieldLabels.message}</label>
            <textarea placeholder={props.fieldLabels.messagePlaceholder} />
          </div>

          <button type="submit" className="if-submit">
            {props.submitLabel}
          </button>
          <div className="if-foot">{props.footnote}</div>
        </form>
      )}
    </div>
  );
}
