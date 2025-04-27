function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 flex flex-row items-center gap-4">
                    <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[var(--secondary)] size-7 md:size-10"><g clip-path="url(#clip0_322_9172)"><path d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z" fill="current"></path><path d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z" fill="current"></path></g><defs><clipPath id="clip0_322_9172"><rect width="42" height="24" fill="white"></rect></clipPath></defs></svg>
                    
                    <span >
                        <h2 className="text-2xl text-start font-bold text-gray-900">TurinIQ</h2>
                        
                        <p className="text-gray-600 mt-2">AI-powered customer support solutions</p>
                        </span>
                    </div>
                    
                    <div className="text-center md:text-right">
                        <p className="text-gray-600">Reach out to us at: <a href="mailto:contact@turiniq.com" className="text-blue-600 hover:underline">info@turiniq.com</a></p>
                    </div>
                </div>
                
                <div className="border-t border-gray-200 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        © {currentYear} TurinIQ. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;