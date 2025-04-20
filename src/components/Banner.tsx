function Banner() {
  return (
    <section id="cta" className="flex flex-col items-center justify-center w-full my-10">
        <div className="w-full">
            <div className="h-[400px] md:h-[400px] overflow-hidden shadow-xl w-full border border-border rounded-xl bg-secondary relative z-20">
                <img alt="Agent CTA Background" decoding="async" data-nimg="fill" className="absolute inset-0 w-full h-full object-cover object-right md:object-center" style={{position:"absolute",height:"100%",width:"100%",left:"0",top:"0",right:"0",bottom:"0",color:"transparent"}} sizes="100vw" srcSet="https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=640&amp;q=75 640w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=750&amp;q=75 750w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=828&amp;q=75 828w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=1080&amp;q=75 1080w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=1200&amp;q=75 1200w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=1920&amp;q=75 1920w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=2048&amp;q=75 2048w, https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=3840&amp;q=75 3840w" src="https://agent-magicui.vercel.app/_next/image?url=%2Fagent-cta-background.png&amp;w=3840&amp;q=75"/>
                <div className="absolute inset-0 -top-32 md:-top-40 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tighter max-w-xs md:max-w-xl text-center">Automate. Simplify. Thrive</h1>
                    <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
                        <a className="bg-white text-black font-semibold text-sm h-10 w-fit px-4 rounded-full flex items-center justify-center shadow-md" href="#">Start Your 30-Day Free Trial Today</a>
                        <span className="text-white text-sm">Cancel anytime, no questions asked</span>
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>
  )
}

Banner.propTypes = {}

export default Banner
