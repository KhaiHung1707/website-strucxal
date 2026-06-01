"use client";

import { useState } from "react";
import Link from "next/link";
import type { FooterData } from "@/types/content";

export function Footer({ data }: { data: FooterData }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3>
              {data.newsletterHeadlineTop}{" "}
              <span className="soft-dark">{data.newsletterHeadlineBottom}</span>
            </h3>
            <p>{data.newsletterCopy}</p>
          </div>
          <div>
            <form
              className="subscribe-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                (e.currentTarget.querySelector("input") as HTMLInputElement).value = "";
              }}
            >
              <input type="email" placeholder="email@example.com" required />
              <button type="submit">{submitted ? "Sent ✓" : "Subscribe"}</button>
            </form>
            <div className="subscribe-foot">{data.newsletterFootnote}</div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              Strucxal
            </Link>
            <p>{data.brandDesc}</p>
          </div>
          {data.cols.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>{data.bottomLeft}</span>
          <span>{data.bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
