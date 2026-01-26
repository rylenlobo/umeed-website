"use client";

import { HeroSection } from "@/components/screens/components/hero-section";
import {
  ProgramSection,
  ProgramPillar,
  ProgramStat,
} from "@/components/screens/our-programs/program-section";
import SupportBanner from "@/components/screens/our-programs/support-banner";
import {
  Star,
  Brain,
  Target,
  Heart,
  Smartphone,
  Briefcase,
  MessageCircle,
  Users,
  TrendingUp,
  ShieldCheck,
  Home,
  Gamepad2,
  LineChart,
} from "lucide-react";
import React from "react"; // Added React import for React.Fragment

// --- Data Definition ---

const programs = [
  {
    id: "first-leap",
    title: "FirstLeap",
    subtitle:
      "Empowering young women with the Skills, Mindset, and Exposure needed to thrive.",
    description: (
      <>
        <p className="mb-4">
          FirstLeap career readiness & Empowerment training is a program for
          unskilled women from low-income urban communities looking to join the
          workforce.
        </p>
        <p>
          This 2-month program helps women learn and grow through workshops
          based on three focus areas of life skill building, values that support
          personal and professional growth, and access to a world of
          opportunities.
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
    reverse: false,
    className: "bg-white",
  },
  {
    id: "sahyog",
    title: "Sahyog",
    subtitle:
      "Making systemic changes to strengthen graduates from government colleges to contribute to India's powerful growth story.",
    description: (
      <>
        <p className="mb-4">
          'Sahyog' aims to strengthen the already existing employability
          structures of the state education department.
        </p>
        <p className="mb-4">
          The program is designed to train Full-time Mentors (FTMs) of the
          Telangana Skills and Knowledge Centre (TSKC).
        </p>
        <p>
          Through the training, FTMs gain hands-on experience in skills,
          knowledge, values, and the network required to execute their
          mentorship role effectively.
        </p>
      </>
    ),
    pillarsTitle: "What we offer",
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
    videoText: "Watch the Sahyog Journey",
    reverse: true,
    className: "bg-accent/30",
  },
  {
    id: "break-the-barriers",
    title: "Break The Barriers",
    subtitle: "Breaking Barriers, Empowering Women.",
    description: (
      <>
        <p className="mb-4 font-semibold text-primary">
          Dismantling barriers, creating equality.
        </p>
        <p className="mb-4">
          Break the Barrier is a groundbreaking initiative in gender
          empowerment, designed to dismantle systemic barriers and foster a
          culture of equality.
        </p>
        <p>
          By equipping women with life skills, self-worth, and the ability to
          engage in critical dialogue with their families, we create a ripple
          effect of sustainable change.
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
    stats: [
      {
        icon: <Gamepad2 />,
        value: "Experiential Learning",
        label: "",
        description:
          "Interactive games that explore and solve barriers to empowerment through hands-on experiences.",
      },
      {
        icon: <Users />,
        value: "Supportive Environments",
        label: "",
        description:
          "Inspiring family members to be allies in women's growth and creating lasting supportive systems.",
      },
      {
        icon: <LineChart />,
        value: "Sustainable Progress",
        label: "",
        description:
          "Women and families prioritize equality to make stronger decisions for their collective future.",
      },
    ],
    reverse: false,
    className: "bg-white",
  },
];

// Placeholder images - in a real app these would be local assets or from a CMS
const programImages = [
  "/assets/f8dea032-b5ca-4498-acca-9001af9a044a.png",
  "/assets/f8dea032-b5ca-4498-acca-9001af9a044a.png",
  "/assets/f8dea032-b5ca-4498-acca-9001af9a044a.png",
  "/assets/f8dea032-b5ca-4498-acca-9001af9a044a.png",
];

export default function OurProgramsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col">
        {programs.map((program, index) => (
          <React.Fragment key={program.id}>
            <ProgramSection
              id={program.id}
              title={program.title}
              subtitle={program.subtitle}
              description={program.description}
              pillarsTitle={program.pillarsTitle}
              pillars={program.pillars}
              images={programImages}
              statsTitle={program.statsTitle}
              statsSubtitle={program.statsSubtitle}
              stats={program.stats}
              videoText={program.videoText}
              reverse={program.reverse}
              className={program.className}
            />
            <SupportBanner />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
