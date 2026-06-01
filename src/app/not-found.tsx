import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { GradientDefs } from "@/components/svg/Gradients";
import { navData, footerData } from "@/content/shared";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <GradientDefs />
      <Nav data={navData} />
      <section className="not-found-redesign">
        <div className="container">
          <div className="nf-content">
            <div className="nf-num">
              4<span className="lime">0</span>4
            </div>
            <h1>This page wandered off.</h1>
            <p>
              The link is broken, the page was retired, or you typed something the router doesn&rsquo;t
              recognise. Either way — let&rsquo;s get you back.
            </p>
            <div className="nf-actions">
              <Link href="/" className="primary">
                Back to home →
              </Link>
              <Link href="/work" className="secondary">
                See selected work
              </Link>
            </div>

            <div className="nf-suggestions">
              <div className="label">★ Or try these</div>
              <div className="nf-suggestions-list">
                <Link href="/services">Services</Link>
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer data={footerData} />
    </>
  );
}
