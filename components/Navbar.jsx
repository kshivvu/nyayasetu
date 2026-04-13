import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Wrapper component to use next/navigation hook with class component
function NavbarWrapper() {
  return <Navbar />;
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false
    };
  }

  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  render() {
    /
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

    const navLinks = [
      { href: '/', label: 'Home', labelHindi: 'होम' },
      { href: '/about', label: 'About', labelHindi: 'के बारे में' },
      { href: '/contact', label: 'Contact', labelHindi: 'संपर्क' }
    ];

    return (
      <nav className="bg-[#1A2B4A] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">⚖️</span>
              <div>
                <span className="text-xl font-bold font-georgia">NyayaSetu</span>
                <span className="block text-xs text-[#F5B942]">न्याय सेतु</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-[#E8762D] font-bold'
                      : 'text-[#F4F1EB] hover:text-[#F5B942]'
                  }`}
                >
                  {link.label}
                  <span className="block text-xs opacity-75">{link.labelHindi}</span>
                </Link>
              ))}
              <Link
                href="/app"
                className="bg-[#E8762D] hover:bg-[#d66520] text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300"
              >
                Analyse Document
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={this.toggleMobileMenu}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {this.state.mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {this.state.mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#F5B942]">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => this.setState({ mobileMenuOpen: false })}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-[#E8762D] font-bold'
                        : 'text-[#F4F1EB] hover:text-[#F5B942]'
                    }`}
                  >
                    {link.label}
                    <span className="block text-xs opacity-75">{link.labelHindi}</span>
                  </Link>
                ))}
                <Link
                  href="/app"
                  onClick={() => this.setState({ mobileMenuOpen: false })}
                  className="bg-[#E8762D] hover:bg-[#d66520] text-white font-bold py-2 px-4 rounded-lg text-sm text-center transition-all duration-300"
                >
                  Analyse Document
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default NavbarWrapper;
