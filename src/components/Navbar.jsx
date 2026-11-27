import { useEffect, useState } from 'react';
import { IconMenu, IconClose } from './Icons.jsx';

const LINKS = [
  { href: '#about', label: 'عني' },
  { href: '#skills', label: 'المهارات' },
  { href: '#projects', label: 'المشاريع' },
  { href: '#contact', label: 'تواصل معي' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // إغلاق القائمة بزر Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <nav className="navbar" aria-label="القائمة الرئيسية">
      <a href="#" className="logo" onClick={() => setOpen(false)}>
        HAZEM<span>.dev</span>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <IconClose /> : <IconMenu />}
      </button>

      <ul id="primary-nav" className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
