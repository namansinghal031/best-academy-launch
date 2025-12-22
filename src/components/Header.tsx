import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="BEST ACADEMY Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div>
              <h1 className={`font-display font-bold text-lg md:text-xl ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
                BEST ACADEMY
              </h1>
              <p className={`text-xs hidden sm:block ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                Building Bright Futures
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-accent'
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button className="ml-4 bg-gold hover:bg-gold-dark text-primary font-semibold">
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-card rounded-xl shadow-xl p-4 mb-4 animate-scale-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gold hover:bg-gold-dark text-primary font-semibold">
              Enroll Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
