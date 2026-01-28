import { Brain, Briefcase, Heart, Star, Target, Users } from "lucide-react";
import { ProgramSection } from "./components/program-section";
import SupportBanner from "./components/support-banner";
import React from "react";

const PROGRAM_DETAILS = [
  {
    id: "first-leap",
    title: "FirstLeap",
    subtitle:
      "Empowering young women with the Skills, Mindset, and Exposure needed to thrive.",
    contentTitle:
      "Unlocking potential, launching careers, one woman at a time.",
    description: (
      <>
        <p className="mb-4 text-justify">
          FirstLeap career readiness & Empowerment training is a program for
          unskilled women from low-income urban communities looking to join the
          workforce. This 2-month program helps women learn and grow through
          workshops based on three focus areas of life skill building, values
          that support personal and professional growth, and access to a world
          of opportunities.
        </p>
      </>
    ),
    pillarsTitle: "Our Holistic Training Pillars",
    pillars: [
      {
        icon: <Star className="w-6 h-6" />,
        title: "Skill",
        description:
          "Career readiness, communication, negotiation, CV preparation, and digital literacy.",
      },
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Mindset",
        description:
          "Developing self-worth, a progressive mindset, and individual agency.",
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Exposure",
        description:
          "Providing financial literacy, industry exposure, interview prep, and career linkages.",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Family Support",
        description:
          "Facilitating barrier dialogues and gender awareness to resolve discrimination at home.",
      },
    ],
    stats: [
      {
        icon: <Users />,
        value: "2000+",
        label: "Women Trained",
        description:
          "Strengthening women through skill-building, mentorship, and personalized growth programs.",
      },
      {
        icon: <Target />,
        value: "75%",
        label: "Employment Rate",
        description:
          "Three out of four graduates secure employment within three months of program completion.",
      },
      {
        icon: <Briefcase />,
        value: "₹20K",
        label: "Average Starting Salary",
        description:
          "Graduates earn ₹20,000 average salary, fundamentally transforming their families' futures.",
      },
    ],
    statsDescription:
      "Our success is measured by the tangible improvements in the lives of the women we train.",
    statsTitle: "Impact Highlights",
    statsSubtitle: "Measurable Change, Real-World Results",
    videoText: "Watch the FirstLeap Journey",
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



export default function FirstLeapProgramSection() {
  return (
    <div>
      {PROGRAM_DETAILS.map((program, index) => (
        <React.Fragment key={program.id}>
          <ProgramSection
            id={program.id}
            title={program.title}
            subtitle={program.subtitle}
            contentTitle={program.contentTitle} // Pass contentTitle
            description={program.description}
            pillarsTitle={program.pillarsTitle}
            pillars={program.pillars}
            images={programImages}
            statsTitle={program.statsTitle}
            statsSubtitle={program.statsSubtitle}
            statsDescription={program.statsDescription} // Pass statsDescription
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
