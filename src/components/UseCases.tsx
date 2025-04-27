function UseCases() {
    const industries = [
        { name: "Healthcare", icon: "stethoscope" },
        { name: "Finance", icon: "bank" },
        { name: "Education", icon: "graduation-cap" },
        { name: "Retail", icon: "shopping-cart" },
        { name: "Hospitality", icon: "hotel" },
        { name: "Real Estate", icon: "building" },
        { name: "Consulting", icon: "briefcase" },
        { name: "Automotive", icon: "car" },
        { name: "Entertainment", icon: "film" },
        { name: "Food & Beverage", icon: "utensils" },
        { name: "Fitness & Wellness", icon: "heartbeat" },
        { name: "Ecommerce", icon: "shopping-bag" },
        { name: "Transportation", icon: "bus" },
        { name: "Legal", icon: "gavel" }
    ];

    // Helper function to render appropriate icon
    const renderIcon = (iconName) => {
        switch (iconName) {
            case "stethoscope":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16v6h-2v4a6 6 0 0 1-12 0v-4H4V4z"></path>
                        <circle cx="9" cy="17" r="1"></circle>
                    </svg>
                );
            case "bank":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="9" width="18" height="12" rx="1"></rect>
                        <path d="M4 4h16a1 1 0 0 1 1 1v4H3V5a1 1 0 0 1 1-1z"></path>
                    </svg>
                );
            case "graduation-cap":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                );
            case "shopping-cart":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2 2h3l2.5 12h10L20 8H6"></path>
                    </svg>
                );
            case "hotel":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                        <path d="M1 21h22"></path>
                        <path d="M8 9h8"></path>
                        <path d="M8 13h8"></path>
                        <path d="M8 17h8"></path>
                    </svg>
                );
            case "building":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M8 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M12 14h.01"></path>
                    </svg>
                );
            case "briefcase":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                );
            case "car":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
                        <circle cx="6.5" cy="16.5" r="2.5"></circle>
                        <circle cx="16.5" cy="16.5" r="2.5"></circle>
                    </svg>
                );
            case "film":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                        <line x1="7" y1="2" x2="7" y2="22"></line>
                        <line x1="17" y1="2" x2="17" y2="22"></line>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <line x1="2" y1="7" x2="7" y2="7"></line>
                        <line x1="2" y1="17" x2="7" y2="17"></line>
                        <line x1="17" y1="17" x2="22" y2="17"></line>
                        <line x1="17" y1="7" x2="22" y2="7"></line>
                    </svg>
                );
            case "utensils":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                        <path d="M7 2v20"></path>
                        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"></path>
                    </svg>
                );
            case "heartbeat":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                        <path d="M3.5 12h6l.5-1 2 3.5 2-7 1.5 3.5h5"></path>
                    </svg>
                );
            case "shopping-bag":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                );
            case "bus":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 17h2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11h2"></path>
                        <path d="M15 17H9"></path>
                        <circle cx="6.5" cy="17.5" r="2.5"></circle>
                        <circle cx="17.5" cy="17.5" r="2.5"></circle>
                    </svg>
                );
            case "gavel":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path>
                        <path d="m16 16 6-6"></path>
                        <path d="m8 8 6-6"></path>
                        <path d="m9 7 8 8"></path>
                        <path d="m21 11-8-8"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section id="use-cases" className="w-full py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full h-full p-10 md:p-14">
                    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-2">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">Adaptable AI ChatGPT for <span className="text-blue-500">Every Industry</span></h2>
                        <p className="text-muted-foreground text-center text-balance font-medium">Our easy-to-use AI Agent can be easily implemented by businesses across all sectors.</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    {industries.map((industry, index) => (
                        <button
                            key={index}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                        >
                            <span className="text-gray-700">
                                {renderIcon(industry.icon)}
                            </span>
                            <span className="text-gray-800 font-medium">
                                {industry.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default UseCases;