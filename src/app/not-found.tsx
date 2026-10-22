import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-mark" aria-hidden="true">
        AN<span>.</span>
      </div>
      <p className="eyebrow"><span className="eyebrow-dot" /> PAGE NOT FOUND</p>
      <h1>This route<br />hasn’t shipped.</h1>
      <p className="not-found-copy">
        The page you’re looking for isn’t here. Head back to the portfolio and explore what’s been built.
      </p>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={16} aria-hidden="true" /> Back to the portfolio
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </main>
  );
}
