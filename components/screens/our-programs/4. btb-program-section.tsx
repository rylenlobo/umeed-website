import {
  Gamepad2,
  Heart,
  LineChart,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { ProgramSection } from "./components/program-section";
import SupportBanner from "./components/support-banner";
import React from "react";

const PROGRAM_DETAILS = [
  {
    id: "break-the-barriers",
    title: "Break The Barriers",
    subtitle: "Breaking Barriers, Empowering Women.",
    contentTitle: "Dismantling barriers, creating equality.",
    description: (
      <>
        <p className="mb-4 text-justify">
          Break the Barrier is a groundbreaking initiative in gender
          empowerment, designed to dismantle systemic barriers and foster a
          culture of equality. By equipping women with life skills, self-worth,
          and the ability to engage in critical dialogue with their families, we
          create a ripple effect of sustainable change.
        </p>
      </>
    ),
    pillarsTitle: "Core Pillars",
    pillars: [
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Breaking Stereotypes",
        description:
          "Gender sensitization & understanding socio-economic barriers.",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Self-Worth & Empowerment",
        description:
          "Life skills & self-worth development to strengthen women from within.",
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Dialogue with Family",
        description:
          "Critical dialogue with family members through interactive games.",
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Sustainability Action Plan",
        description:
          "Celebrating progress & building a customized success roadmap.",
      },
    ],
    statsTitle: "Key Features",
    statsSubtitle: "Creating Sustainable Change",
    statsDescription:
      "Empowering women and families through experiential learning and supportive environments.",
    videoText: undefined,
    stats: [
      {
        icon: <Gamepad2 />,
        label: "Experiential Learning",
        value: "",
        description:
          "Interactive games that explore and solve barriers to empowerment through hands-on experiences.",
      },
      {
        icon: <Users />,
        label: "Supportive Environments",
        value: "",
        description:
          "Inspiring family members to be allies in women's growth and creating lasting supportive systems.",
      },
      {
        icon: <LineChart />,
        label: "Sustainable Progress",
        value: "",
        description:
          "Women and families prioritize equality to make stronger decisions for their collective future.",
      },
    ],
    reverse: false,
    className: "bg-white",
  },
];

const programImages = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Tall: Professional women/Team
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Tall: Professional women/Team
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Tall: Professional women/Team
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Tall: Professional women/Team
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Tall: Professional women/Team
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Tall: Professional women/Team
];

export default function BTBProgramSection() {
  return (
    <div>
      {PROGRAM_DETAILS.map((program, index) => (
        <React.Fragment key={program.id}>
          <ProgramSection
            id={program.id}
            title={program.title}
            subtitle={program.subtitle}
            contentTitle={program.contentTitle}
            description={program.description}
            pillarsTitle={program.pillarsTitle}
            pillars={program.pillars}
            images={programImages}
            statsTitle={program.statsTitle}
            statsSubtitle={program.statsSubtitle}
            statsDescription={program.statsDescription}
            stats={program.stats}
            videoText={program.videoText}
            reverse={program.reverse}
            className={program.className}
          />
          <SupportBanner />
        </React.Fragment>
      ))}
    </div>
  );
}
