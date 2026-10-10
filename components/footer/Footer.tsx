import { Link } from "react-router-dom";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="q-footer">
      <div className="q-footer__links">
        <Link to="/">About</Link>
        <Link to="/project/">Project</Link>
        <Link to="/resume/">Resume</Link>
      </div>
      <p className="q-footer__copyright">© 2025 by qian</p>
    </footer>
  );
}
