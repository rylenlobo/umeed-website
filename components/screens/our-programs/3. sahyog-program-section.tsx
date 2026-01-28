import {
  Brain,
  Briefcase,
  MessageCircle,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { ProgramSection } from "./components/program-section";
import SupportBanner from "./components/support-banner";
import React from "react";

const PROGRAM_DETAILS = [
  {
    id: "sahyog",
    title: "Sahyog",
    contentTitle: "Empowering mentors, transforming students.",
    subtitle:
      "Making systemic changes to strengthen graduates from government colleges to contribute to India's powerful growth story.",
    description: (
      <>
        <p className="mb-4 text-justify">
          'Sahyog' aims to strengthen the already existing employability
          structures of the state education department.The program is designed
          to train Full-time Mentors (FTMs) of the Telangana Skills and
          Knowledge Centre (TSKC).Through the training, FTMs gain hands-on
          experience in skills, knowledge, values, and the network required to
          execute their mentorship role effectively.
        </p>
      </>
    ),
    pillarsTitle: "What we offer",
    pillarsDescription: "Comprehensive training and support for mentors",
    pillars: [
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Skill & Knowledge",
        description:
          "Skill & Knowledge building sessions by expert practitioners.",
      },
      {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Application-Focused",
        description: "Application-focused learning with practical insights.",
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Personalised Feedback",
        description: "Personalised feedback from seasoned facilitators.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Networking",
        description: "Industry networking and peer-to-peer learning.",
      },
    ],
    statsTitle: "Impact Highlights",
    statsSubtitle: "Measurable Change, Real-World Results",
    stats: [
      {
        icon: <Users />,
        value: "40+",
        label: "Mentors Trained",
        description:
          "Equipping full-time mentors with skills, knowledge, and values needed to guide students effectively.",
      },
      {
        icon: <Brain />,
        value: "80K+",
        label: "Students Benefitted",
        description:
          "Creating systemic impact across government colleges through well-trained mentors and support systems.",
      },
      {
        icon: <TrendingUp />,
        value: "50+",
        label: "Career Connections",
        description:
          "Building bridges between students and industry through networking opportunities and professional partnerships.",
      },
    ],
    statsDescription:
      "Our success is measured by the systemic impact we create through mentor training.",
    videoText: "Watch the Sahyog Journey",
    reverse: true,
    className: "bg-accent/30",
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

export default function SahyogProgramSection() {
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
