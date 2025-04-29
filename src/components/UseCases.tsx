import { useState } from 'react';

function UseCases() {
    const industries = [
        { name: "Healthcare", icon: "stethoscope" },
        { name: "Finance", icon: "bank" },
        { name: "Ecommerce", icon: "shopping-bag" },
        { name: "Telecom", icon: "phone" },
        { name: "Real Estate", icon: "building" },
        { name: "Government", icon: "gavel" },
    ];

    // Use cases for each industry
    const useCases = {
        "Real Estate": [
            { title: "Generate Leads", description: "A real estate chatbot can collect potential leads for your business and contribute immensely to overall growth by asking qualifying questions." },
            { title: "Educate Potential Buyers", description: "Not all prospects are potential buyers as some of them are more interested in seeking information rather than making a deal straight away." },
            { title: "Automate Property FAQs", description: "Property buyers have loads of questions and they want answers to each of them in a quick manner. You can train the bot and then automate the FAQs." },
            { title: "Get Buyer Alerts", description: "Prospects often show interest in a property you have listed over the website or portal. A chatbot can help you get an immediate alert." },
        ],
        "Ecommerce": [
            { title: "24/7 Customer Support", description: "Leveraging conversational AI solutions for ecommerce helps to engage customers round the clock and provide immediate answers to their common queries." },
            { title: "Boost Funnel Conversions", description: "Ecommerce chatbots can influence the buying experience with personalized recommendations and use data to drive upsell and cross-sell opportunities." },
            { title: "Re-engage Customers", description: "Using AI chatbots helps to avoid abandoned carts by reminding customers about their cart and providing additional product information." },
            { title: "Converting Abandoned Carts", description: "A chatbot system can be an effective solution to the issue of cart abandonment, sending timely targeted reminders to encourage purchases." },
        ],
        "Telecom": [
            { title: "Answering Packaging Queries", description: "A telecom chatbot can answer questions about account balances, package validity, and current internet plans quickly and efficiently." },
            { title: "Automating Payments", description: "Automating payments in telecom is streamlined with AI chatbots, processing SMS packages, internet bundles, and more in real-time." },
            { title: "Answering Frequently Asked Questions", description: "Chatbots can handle common customer queries instantly, reducing wait times and improving customer service efficiency." },
            { title: "Supporting Customers 24/7", description: "Telecom customers require support at all hours, and AI chatbots can provide 24/7 assistance without human intervention." },
        ],
        "Government": [
            { title: "Citizen Support", description: "A government chatbot can assist citizens by providing information on local services, office hours, and directing them to resources." },
            { title: "Feedback from Citizens", description: "Government agencies can use chatbots to collect valuable feedback from citizens to improve services and processes." },
            { title: "Registration Automation", description: "Chatbots can automate the registration process for various services, guiding citizens through applications efficiently." },
            { title: "Public Health Information", description: "Provide citizens with up-to-date health information, vaccination schedules, and other critical updates through chatbots." },
        ],
        "Healthcare": [
            { title: "Schedule Appointments", description: "A healthcare chatbot can help patients schedule appointments with doctors, reducing administrative workload." },
            { title: "Answer Patient FAQs", description: "Chatbots can quickly answer common patient questions about symptoms, treatments, and clinic hours." },
            { title: "Provide Health Reminders", description: "Send reminders for medication, upcoming appointments, or health checkups to improve patient care." },
            { title: "Support 24/7 Inquiries", description: "Offer round-the-clock support for patient inquiries, ensuring timely responses even outside office hours." },
        ],
        "Finance": [
            { title: "Answer Account Queries", description: "A finance chatbot can quickly respond to customer queries about account balances, recent transactions, and more." },
            { title: "Automate Transaction Support", description: "Assist customers with transactions like bill payments or transfers, streamlining the process with automation." },
            { title: "Provide Financial Advice", description: "Offer personalized financial advice based on customer data, helping them make informed decisions." },
            { title: "Handle Fraud Alerts", description: "Notify customers instantly about potential fraud activities and guide them on next steps to secure their accounts." },
        ],
    };

    const [selectedIndustry, setSelectedIndustry] = useState("Healthcare");

    // Helper function to render appropriate icon
    const renderIcon = (iconName) => {
        const iconMap = {
            stethoscope: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v6h-2v4a6 6 0 0 1-12 0v-4H4V4z"></path><circle cx="9" cy="17" r="1"></circle></svg>,
            bank: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="18" height="12" rx="1"></rect><path d="M4 4h16a1 1 0 0 1 1 1v4H3V5a1 1 0 0 1 1-1z"></path></svg>,
            "shopping-bag": <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
            phone: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
            building: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 14h.01"></path><path d="M16 14h.01"></path><path d="M12 14h.01"></path></svg>,
            gavel: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"></path><path d="m16 16 6-6"></path><path d="m8 8 6-6"></path><path d="m9 7 8 8"></path><path d="m21 11-8-8"></path></svg>,
        };
        return iconMap[iconName] || null;
    };

    return (
        <section id="use-cases" className="w-full py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full h-full p-10 md:p-14">
                    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-2">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">Adaptable AI for <span className="text-blue-500">Every Industry</span></h2>
                        <p className="text-muted-foreground text-center text-balance font-medium">Our easy-to-use AI Agent can be easily implemented by businesses across all sectors.</p>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="md:flex md:flex-wrap md:justify-center md:gap-3 hidden">
                        {industries.map((industry, index) => (
                            <button
                                key={index}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-200 shadow-sm ${
                                    selectedIndustry === industry.name
                                        ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
                                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                                }`}
                                onClick={() => setSelectedIndustry(industry.name)}
                            >
                                <span className={`${
                                    selectedIndustry === industry.name ? 'text-white' : 'text-gray-700'
                                }`}>{renderIcon(industry.icon)}</span>
                                <span className={`font-medium ${
                                    selectedIndustry === industry.name ? 'text-white' : 'text-gray-800'
                                }`}>
                                    {industry.name}
                                </span>
                            </button>
                        ))}
                    </div>
                    <div className="md:hidden overflow-x-auto scrollbar-hide snap-x">
                        <div className="flex gap-3 pb-4">
                            {industries.map((industry, index) => (
                                <button
                                    key={index}
                                    className={`snap-center shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-200 shadow-sm ${
                                        selectedIndustry === industry.name
                                            ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
                                            : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedIndustry(industry.name)}
                                >
                                    <span className={`${
                                        selectedIndustry === industry.name ? 'text-white' : 'text-gray-700'
                                    }`}>{renderIcon(industry.icon)}</span>
                                    <span className={`font-medium ${
                                        selectedIndustry === industry.name ? 'text-white' : 'text-gray-800'
                                    }`}>
                                        {industry.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="hidden md:flex justify-center gap-6">
                        {useCases[selectedIndustry].slice(0, 4).map((useCase, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
                                <h3 className="text-lg font-semibold text-primary mb-2">{useCase.title}</h3>
                                <p className="text-sm text-muted-foreground">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden overflow-x-auto scrollbar-hide snap-x">
                        <div className="flex gap-6 pb-4">
                            {useCases[selectedIndustry].slice(0, 4).map((useCase, index) => (
                                <div key={index} className="snap-center shrink-0 bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
                                    <h3 className="text-lg font-semibold text-primary mb-2">{useCase.title}</h3>
                                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UseCases;