import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconChartBar,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
          title: "Zero-Friction Onboarding",
          description:
            "Most CRMs stall at step one. Ours fills itself — first-touch data captured automatically.",
          icon: <IconEaseInOut />,
        },
        {
          title: "Human-Friendly, AI-Powered",
          description:
            "Let AI do the typing. You focus on closing. Our system works like magic, feels like butter.",
          icon: <IconHeart />,
        },
        
        {
            title: "No Setup? No Problem.",
            description:
              "We eliminate the #1 reason CRMs fail — getting started. Just log in and let the AI handle it.",
            icon: <IconAdjustmentsBolt />,
          },
        {
          title: "Instant Credibility",
          description:
            "Trusted by SMEs to simplify customer engagement and support with AI-driven automation and intuitive tools.",
          icon: <IconHelp />,
        },
        {
          title: "No More Blank CRMs",
          description:
            "Forget staring at an empty screen. We auto-log your pipeline before you even blink.",
          icon: <IconCloud />,
        },
        {
            title: "One Unified Solution",
            description:
              "Seamlessly integrate AI agents, ticketing, and knowledge bases into one platform, eliminating the need for disjointed tools.",
            icon: <IconEaseInOut />,
          },
        {
          title: "Try First. Commit Later.",
          description:
            "Explore TurinIQ with a no-commitment trial—no credit card required. Start transforming your business today.",
          icon: <IconCurrencyDollar />,
        },
        {
          title: "Actionable AI Insights",
          description:
            "Get real-time analytics from AI-driven interactions to optimize customer engagement and streamline operations.",
          icon: <IconChartBar />,
        },
      ];
  return (
    <>
    <div id="features" className=" w-full h-full p-4 md:p-14">
                    <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">Everything That Makes It Click</h2>
                        <p className="text-muted-foreground text-center text-balance md:font-medium">From effortless onboarding to AI that feels human — here’s what makes us more than just another CRM.</p>
                    </div>
                </div>
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  py-10 max-w-7xl mx-auto">
  {features.map((feature, index) => (
    <Feature key={feature.title} {...feature} index={index} />
  ))}
</div>
</>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r  py-10 relative group/feature ",
        (index === 0 || index === 4) && "border-l ",
        index < 4 && "border-b "
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100  pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100  pointer-events-none" />
      )}
      {/* <div className="mb-4 relative z-10 px-10 text-neutral-600 ">
        {icon}
      </div> */}
      <div className="text-lg font-semibold mb-4 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 ">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600  md:max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
