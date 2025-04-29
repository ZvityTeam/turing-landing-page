function MetricsSection() {
    const metrics = [
        { 
            icon: "dollar", 
            metric: "50%", 
            title: "Support Cost Reduction",
            description: "Reduce up to 50% of your customer support costs per agent."
        },
        { 
            icon: "clock", 
            metric: "3x", 
            title: "Faster Response",
            description: "Our AI Agent responds 3x faster than a human."
        },
        { 
            icon: "file", 
            metric: "100%", 
            title: "Accuracy",
            description: "Our AI Agent has 100% accuracy in answering questions."
        },
        { 
            icon: "message", 
            metric: "24/7", 
            title: "Support Assistant",
            description: "Compared with standard support, the AI Agent is available 24/7 for your clients."
        }
    ];

    return (
        <section className="w-full relative my-15 py-16">
            <div className="relative flex flex-col items-center w-full px-6">
                <div className="absolute inset-0 -z-10 h-full w-full rounded-none"></div>
                <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-10 items-center justify-center">
                    {/* <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-primary">See the Impact</h2>
                    <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">Discover how TurinIQ transforms your customer support with measurable results.</p> */}
                    <div className="w-full h-full mb-5">
                    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">See the Impact</h2>
                        <p className="text-muted-foreground text-center text-balance md:font-medium">Discover how TurinIQ transforms your customer support with measurable results.</p>
                    </div>
                </div>
                    
                <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12">
                        {metrics.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                {/* <div className="mb-3 text-primary">
                                    {renderIcon(item.icon)}
                                </div> */}
                                <p className="text-4xl md:text-5xl text-secondary font-bold mb-2">{item.metric}</p>
                                <h3 className="text-lg font-medium text-secondary mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MetricsSection;