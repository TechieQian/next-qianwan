import Link from "next/link";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link href="/">About</Link>
        <Link href="/resume/">Resume</Link>
      </div>
      <p className="footer__copyright">© 2022 by qian</p>
    </footer>
  );
}
