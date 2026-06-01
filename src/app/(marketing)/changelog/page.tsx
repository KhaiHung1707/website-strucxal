import type { Metadata } from "next";
import { changelogData } from "@/content/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What we've been shipping — new features, fixes, and improvements every two weeks.",
};

export default function ChangelogPage() {
  const d = changelogData;
  return (
    <section className="changelog">
      <div className="container">
        <div className="cl-grid">
          <aside className="cl-aside">
            <span className="eyebrow-pill">{d.hero.eyebrow}</span>
            <h1>
              {d.hero.headingTop}
              <br />
              <span className="soft">{d.hero.headingBottom}</span>
            </h1>
            <p>{d.hero.body}</p>

            <div className="subscribe-tiny">
              <div className="label">{d.hero.subscribe.label}</div>
              <input type="email" placeholder={d.hero.subscribe.placeholder} />
              <button type="button">{d.hero.subscribe.button}</button>
            </div>
          </aside>

          <div className="cl-entries">
            {d.entries.map((entry) => (
              <div className="cl-entry" key={entry.version}>
                <div className="cl-version-col">
                  <span className="cl-version">{entry.version}</span>
                  <span className="cl-date">{entry.date}</span>
                  <span className={`cl-type ${entry.type}`}>{entry.type}</span>
                </div>
                <div className="cl-content">
                  <h3>{entry.title}</h3>
                  <p>{entry.summary}</p>
                  <ul className="cl-items">
                    {entry.items.map((item, i) => (
                      <li key={i}>
                        <span className={`label-mini ${item.label}`}>{item.label}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
