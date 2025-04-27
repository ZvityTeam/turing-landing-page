import React, { useState, useRef } from 'react';

interface FormData {
  email: string;
  businessType: string;
}

function Banner() {

  const [formData, setFormData] = useState<FormData>({
    email: '',
    businessType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const submitToGoogleForms = async (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPmqt3EgwDULTcmjAxoO3BwTTh3Qzadw_tfIULwkiq6gyVxQ/formResponse';
    
    // Create URL encoded data
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append('entry.984614680', formData.email);
    formDataEncoded.append('entry.1608056188', formData.businessType);

    try {
      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.style.display = 'none';

      // Add form fields
      formDataEncoded.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Add the form to the document
      document.body.appendChild(form);

      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Set form target to the hidden iframe
      form.target = 'hidden-iframe';
      
      // Submit the form
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setFormData({ email: '', businessType: '' });
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 500);

      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  return (
    <section id="cta" className="flex flex-col items-center justify-center w-full my-20">
        <div className="w-full">
            <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
                <img alt="Agent CTA Background" decoding="async" data-nimg="fill" className="absolute inset-0 w-full h-full object-cover object-right md:object-center" style={{position:"absolute",height:"100%",width:"100%",left:"0",top:"0",right:"0",bottom:"0",color:"transparent"}} sizes="100vw" srcSet="https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=640&amp;q=75 640w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=750&amp;q=75 750w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=828&amp;q=75 828w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=1080&amp;q=75 1080w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=1200&amp;q=75 1200w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=1920&amp;q=75 1920w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=2048&amp;q=75 2048w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=3840&amp;q=75 3840w" src="https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=3840&amp;q=75"/>
                <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">Automate. Simplify. Thrive</h1>
                    <form onSubmit={submitToGoogleForms} className="absolute bottom-10 flex flex-col items-center justify-center gap-4 w-full max-w-xl px-4">
                      
                    <span className="text-white text-sm">Join our exclusive beta program</span>
                        <div className="flex md:flex-row flex-col md:gap-4 gap-2 w-full">
                            <input 
                    type="email"
                    id="entry.984614680"
                    name="entry.984614680"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                placeholder="Your email" 
                                className="bg-white/95 text-black text-sm h-10 px-4 py-2 rounded-full flex-1 outline-none focus:ring-2 focus:ring-white/50 shadow-md transition-all duration-300"
                            />
                            <input 
                    type="text"
                    id="entry.1608056188"
                    name="entry.1608056188"
                    value={formData.businessType}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                    placeholder="What type of business do you run?" 
                                className="bg-white/95 text-black text-sm h-10 px-4 py-2 rounded-full flex-1 outline-none focus:ring-2 focus:ring-white/50 shadow-md transition-all duration-300"
                            />
                        </div>
                        <button 
        type="submit"
        disabled={isSubmitting}
                            className="bg-white text-black font-semibold text-sm h-10 w-fit px-6 rounded-full flex items-center justify-center shadow-md hover:bg-white/90 transition-all duration-300"
                        >
                          {isSubmitted ? (
          <>Yayy!! Added to waitlist!!</>
        ) : isSubmitting ? (
          'Submitting...'
        ) : (
          <>Get Early Access</>
        )}
                        </button>
                    </form>
                        </div>
                        </div>
                        </div>
                        </section>
  )
}

Banner.propTypes = {}

export default Banner
