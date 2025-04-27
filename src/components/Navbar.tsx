import { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    // Track scroll position and update state
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 20;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

        // Handle toggle mobile menu
        const toggleMobileMenu = () => {
            setMobileMenuOpen(!mobileMenuOpen);
        };
    
        // Close mobile menu when clicking on a link
        const closeMobileMenu = () => {
            setMobileMenuOpen(false);
        };


    return (
        <header className="sticky z-50 flex justify-center [background-color,border-radius,box-shadow,border,backdrop-filter] duration-300 ease-in-out md:mx-0 top-4 mx-0">
            <div style={{ width: scrolled ?  "50rem" : "100%", transition: "width 0.3s ease-in-out", }}><div className={`mx-auto max-w-7xl rounded-2xl [background-color,border-radius,box-shadow,border,backdrop-filter] duration-300 ease-in-out xl:px-0 px-7 ${
          scrolled ? 'rounded-none bg-background/80 bg-white/55 backdrop-blur-md shadow-sm ' : 'shadow-none'
        }`}>
                <div className={`flex items-center justify-between p-4  ${scrolled ? 'h-[50px]' : 'h-[56px]'}`}>
                    <a className="flex items-center gap-3" href="/">
                        <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[var(--secondary)] size-7 md:size-10"><g clip-path="url(#clip0_322_9172)"><path d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z" fill="current"></path><path d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z" fill="current"></path></g><defs><clipPath id="clip0_322_9172"><rect width="42" height="24" fill="white"></rect></clipPath></defs></svg>
                        <p className="text-lg font-semibold text-primary">TurinIQ</p>
                    </a>
                    <div className="w-full hidden md:block">
                        <ul className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center">
                            <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary tracking-tight">
                                <a href="#hero">Home</a>
                            </li>
                            <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight">
                                <a href="#bento">How it Works</a>
                            </li>
                            <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight">
                                <a href="#features">Features</a>
                            </li>
                            <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight">
                                <a href="#use-cases">Use Cases</a>
                            </li>
                            <li className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border" style={{ left: "8px", width: "68.8594px" }}></li>
                        </ul>
                    </div>
                    <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
                        <div className="flex items-center space-x-6">
                            <a className="bg-secondary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]" href="#cta">Get Early Access</a>
                        </div>
                        <button className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                        onClick={toggleMobileMenu}>
                             {mobileMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x size-5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu size-5">
                                        <line x1="4" x2="20" y1="12" y2="12"></line>
                                        <line x1="4" x2="20" y1="6" y2="6"></line>
                                        <line x1="4" x2="20" y1="18" y2="18"></line>
                                    </svg>
                                )}
                        </button>
                    </div>
                </div>
            </div>
            </div>
            {mobileMenuOpen && (
                        <div className="md:hidden absolute bg-white/50 backdrop-blur-sm border-t border-border animate-in slide-in-from-top duration-300 top-14 w-full rounded-b-xl">
                            <nav className="flex flex-col py-4">
                                <a 
                                    href="#hero" 
                                    className="px-6 py-3 text-primary font-medium" 
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </a>
                                <a 
                                    href="#bento" 
                                    className="px-6 py-3 text-primary/60 hover:text-primary" 
                                    onClick={closeMobileMenu}
                                >
                                    How it Works
                                </a>
                                <a 
                                    href="#features" 
                                    className="px-6 py-3 text-primary/60 hover:text-primary" 
                                    onClick={closeMobileMenu}
                                >
                                    Features
                                </a>
                                <a 
                                    href="#use-cases" 
                                    className="px-6 py-3 text-primary/60 hover:text-primary" 
                                    onClick={closeMobileMenu}
                                >
                                    Use Cases
                                </a>
                                <div className="px-6 pt-4">
                                    <a 
                                        href="#cta" 
                                        className="bg-secondary h-10 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground w-full px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                                        onClick={closeMobileMenu}
                                    >
                                        Get Early Access
                                    </a>
                                </div>
                            </nav>
                        </div>
                    )}
        </header>
    )
}

Navbar.propTypes = {}

export default Navbar
