import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const DOWNLOAD_URL = 'https://github.com/Bigmints-com/autom8-releases/releases/latest';
const SITE_BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const sitePath = (path: string) => `${SITE_BASE}${path.startsWith('/') ? path : `/${path}`}` || '/';
export const siteRoutePath = () => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  return SITE_BASE && pathname.startsWith(SITE_BASE) ? pathname.slice(SITE_BASE.length) || '/' : pathname;
};

export const BrandLogo = () => (
  <span className="inline-flex items-center text-[19px] font-bold tracking-[-0.04em] text-slate-950">
    AutoM8
    <span className="ml-1 grid grid-cols-2 gap-0.5">
      <span className="size-1.5 rounded-[2px] bg-violet-600" />
      <span className="size-1.5 rounded-[2px] bg-violet-400" />
      <span className="size-1.5 rounded-[2px] bg-violet-400" />
      <span className="size-1.5 rounded-[2px] bg-violet-600" />
    </span>
  </span>
);

const navigation = [
  { label: 'Product', href: sitePath('/#features'), match: '/' },
  { label: 'For business leaders', href: sitePath('/for-business-leaders'), match: '/for-business-leaders' },
  { label: 'Docs', href: sitePath('/docs'), match: '/docs' },
  { label: 'Plans', href: sitePath('/plans'), match: '/plans' },
];

const isActive = (match?: string) => {
  const pathname = siteRoutePath();
  if (match === '/docs') return pathname === '/docs' || pathname.startsWith('/docs/');
  return match === pathname;
};

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const dismiss = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', dismiss);
    return () => window.removeEventListener('keydown', dismiss);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee9f4] bg-white/95 text-slate-950 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href={sitePath('/')} aria-label="AutoM8 home"><BrandLogo /></a>
        <nav className="hidden items-center gap-7 text-[13px] font-medium text-[#746b80] lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
              <a key={item.label} href={item.href} aria-current={isActive(item.match) ? 'page' : undefined} className={`transition-colors hover:text-slate-950 ${isActive(item.match) ? 'text-violet-700' : ''}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={sitePath('/plans')} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950">View plans</a>
          <a href={DOWNLOAD_URL} className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 motion-reduce:transform-none">Download AutoM8</a>
        </div>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="flex size-10 items-center justify-center rounded-xl border border-slate-200 lg:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Toggle navigation">
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white p-5 lg:hidden">
          <nav id="mobile-navigation" className="flex flex-col gap-1 text-sm font-medium" aria-label="Mobile navigation" onClick={() => setMenuOpen(false)}>
            {navigation.map((item) => (
                <a key={item.label} href={item.href} aria-current={isActive(item.match) ? 'page' : undefined} className={`rounded-lg px-3 py-2.5 ${isActive(item.match) ? 'bg-violet-50 text-violet-700' : 'text-slate-700 hover:bg-slate-50'}`}>
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
              <a href={sitePath('/plans')} className="rounded-xl border border-slate-200 px-4 py-3 text-center text-slate-700">View plans</a>
              <a href={DOWNLOAD_URL} className="rounded-lg bg-violet-600 px-4 py-3 text-center text-white">Download</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e9e4f0] bg-[#fdfcfe] text-[#231b35]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_auto] md:px-8">
        <div><BrandLogo /><p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">Turn product ideas into experiences you can explore, question, and improve.</p></div>
        <div className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm text-slate-600">
          <a href={sitePath('/#features')} className="hover:text-slate-950">Product</a><a href={sitePath('/docs')} className="hover:text-slate-950">Docs</a>
          <a href={sitePath('/#inspiration')} className="hover:text-slate-950">Examples</a><a href={sitePath('/plans')} className="hover:text-slate-950">Plans</a>
          <a href={sitePath('/for-business-leaders')} className="hover:text-slate-950">For business leaders</a><a href={DOWNLOAD_URL} className="hover:text-slate-950">Download</a><a href={sitePath('/plans')} className="hover:text-slate-950">Buy a plan</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-100 px-5 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between md:px-8"><span>© 2026 AutoM8. All rights reserved.</span><span>Born in the UAE. Built for curious teams everywhere.</span></div>
    </footer>
  );
}
