import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useWindowScroll } from '@/hooks/useScrollProgress';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '服务', href: '#services' },
  { label: '案例', href: '#cases' },
  { label: '联系我们', href: '#contact' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useWindowScroll();
  const isScrolled = scrollY > 100;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-4xl mx-4 sm:mx-auto rounded-full glass-red px-6'
              : 'max-w-7xl px-4 sm:px-6 lg:px-8'
          }`}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-bright flex items-center justify-center shadow-gold">
                <span className="text-palace-deep font-bold text-sm">AI</span>
              </div>
              <span className="text-cream font-semibold text-lg group-hover:text-gold transition-colors">
                兜工作室
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-sm text-cream/70 hover:text-gold transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-bright transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-gold to-gold-bright text-palace-deep text-sm font-semibold rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
              >
                开始对话
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-cream"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-palace-deep/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-2xl text-cream/80 hover:text-gold transition-all duration-300 transform ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50 + 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className={`mt-4 px-8 py-3 bg-gradient-to-r from-gold to-gold-bright text-palace-deep font-semibold rounded-full transition-all duration-300 transform ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            开始对话
          </a>
        </div>
      </div>
    </>
  );
}
