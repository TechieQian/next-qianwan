import Link from "next/link";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="q-footer">
      <div className="q-footer__links">
        <Link href="/">About</Link>
        <Link href="/resume/">Resume</Link>
      </div>
      <p className="q-footer__copyright">© 2025 by qian</p>
    </footer>
  );
}
