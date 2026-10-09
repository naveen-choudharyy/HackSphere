/**
 * HackSphere Hackathon Directory Data
 * 
 * Strict Data Integrity:
 * - Details sourced from verified campus records & public platform archives (Devfolio, Unstop, Eventopia, Bennett University portals).
 * - All unconfirmed future dates, forms, and prizes are marked "To be announced" or null.
 * - No fabricated statistics, participant counts, or AI-generated descriptions.
 */

export const hackathons = [
  {
    id: "bu-annual-2026",
    slug: "bennett-university-hackathon-2026",
    name: "Bennett University Hackathon 2026",
    tagline: "The flagship annual engineering innovation hackathon at Bennett University.",
    organiser: "School of Computer Science Engineering & Technology (SCSET), Bennett University",
    location: "Bennett University Campus, Greater Noida",
    venueDetails: "Main Campus Academic Blocks, Bennett University, Plot Nos 8-11, TechZone II, Greater Noida, UP 201310",
    format: "Offline",
    status: "Upcoming",
    eventDate: "To be announced",
    startDateISO: null,
    endDateISO: null,
    deadline: "To be announced",
    deadlineISO: null,
    teamSize: "2–3 members",
    eligibilitySummary: "Open to currently enrolled undergraduate students at Bennett University across eligible engineering batches.",
    eligibilityDetails: [
      "Must be a bonafide undergraduate student at Bennett University with a valid college ID card.",
      "Eligible batches: B.Tech Computer Science and Engineering, ECE, and allied engineering streams as designated in the official circular.",
      "Teams must consist of 2 to 3 members. Cross-batch teams are subject to the official coordinator guidelines.",
      "Participants must be available in person on the Greater Noida campus for all evaluation stages."
    ],
    tracks: [
      "Open Innovation",
      "Web & Mobile Systems",
      "Applied Systems & Automation",
      "Cybersecurity & Data Privacy"
    ],
    tracksDisclaimer: "Note: These problem domains are indicative based on academic curricula. Final problem statements will be released during the opening briefing.",
    prizePool: "To be announced",
    registrationFee: "Free for university students",
    registrationUrl: null, // Unannounced official link
    registrationNotes: "Official registration portal link will be posted once announced by the department hackathon committee.",
    rulesSummary: "Teams must adhere to standard university lab conduct, originality of code, and mandatory on-campus presence.",
    rules: [
      "All code and prototypes must be developed during the designated hackathon window. Re-using pre-existing completed projects is prohibited.",
      "Third-party open-source libraries, frameworks, and public APIs are permitted provided they are declared in the submission README.",
      "Every team must submit their project via a public git repository before the hard submission cut-off.",
      "Teams must strictly respect the university Code of Conduct and intellectual property norms.",
      "All team members must be present during evaluation rounds for viva and product demonstration."
    ],
    schedule: [
      {
        phase: "Phase 1",
        title: "Official Problem Statement Release",
        time: "To be announced",
        description: "Release of domain tracks and guidelines on university noticeboards and HackSphere."
      },
      {
        phase: "Phase 2",
        title: "Registration Window",
        time: "To be announced",
        description: "Online team registration and confirmation."
      },
      {
        phase: "Phase 3",
        title: "Round 1: Idea Pitch & Architecture Screening",
        time: "To be announced",
        description: "Preliminary evaluation of team project proposals by faculty mentors."
      },
      {
        phase: "Phase 4",
        title: "Round 2: Main Coding Sprint & Final Demos",
        time: "To be announced",
        description: "In-person hackathon sprint at Bennett University campus labs, followed by judging."
      }
    ],
    lastUpdated: "October 2026",
    isFeatured: true
  },
  {
    id: "phantasia-3",
    slug: "phantasia-3-hackathon",
    name: "Phantasia 3.0",
    tagline: "National-level 24-hour hackathon hosted at Bennett University.",
    organiser: "Bennett University Student Clubs & Tech Community",
    location: "Bennett University, Greater Noida",
    venueDetails: "Bennett University Campus, Greater Noida, Uttar Pradesh 201310",
    format: "Offline",
    status: "Completed",
    eventDate: "28 February – 1 March 2026",
    startDateISO: "2026-02-28T09:00:00+05:30",
    endDateISO: "2026-03-01T12:00:00+05:30",
    deadline: "25 February 2026 (Closed)",
    deadlineISO: "2026-02-25T23:59:59+05:30",
    teamSize: "4–5 members",
    eligibilitySummary: "Open to enrolled university students nationwide with valid university photo ID.",
    eligibilityDetails: [
      "Participants must be currently enrolled college or university students.",
      "Teams must have 4 to 5 members.",
      "Valid college ID cards required at check-in.",
      "All team members must participate in-person for the full 24-hour duration."
    ],
    tracks: [
      "Full Stack Web Development",
      "Artificial Intelligence & Machine Learning",
      "Blockchain & Web3",
      "Open Innovation"
    ],
    prizePool: "Cash prizes and sponsor tracks",
    registrationFee: "Free",
    registrationUrl: "https://unstop.com/hackathons/phantasia-bennett-university-bu-greater-noida-1594108",
    registrationNotes: "Official registration was hosted on Unstop. Event cycle completed.",
    rulesSummary: "24-hour non-stop offline hacking. Projects evaluated across novelty, technical depth, and pitch quality.",
    rules: [
      "24-hour building period with scheduled mentoring check-ins.",
      "Submissions hosted via GitHub with live deployment link where applicable.",
      "Zero tolerance for plagiarism or harassment."
    ],
    schedule: [
      {
        phase: "Day 1 - 09:00",
        title: "Check-in and Opening Ceremony",
        time: "28 Feb 2026, 09:00 AM",
        description: "Participant kit collection, badge verification, and opening address."
      },
      {
        phase: "Day 1 - 11:00",
        title: "Hacking Begins",
        time: "28 Feb 2026, 11:00 AM",
        description: "Official timer starts for all tracks."
      },
      {
        phase: "Day 1 - 18:00",
        title: "Mentorship Round 1",
        time: "28 Feb 2026, 06:00 PM",
        description: "Progress evaluation and architectural guidance."
      },
      {
        phase: "Day 2 - 11:00",
        title: "Code Freeze & Submissions",
        time: "1 Mar 2026, 11:00 AM",
        description: "Repository links submitted to judging portal."
      },
      {
        phase: "Day 2 - 14:00",
        title: "Final Pitches & Valedictory",
        time: "1 Mar 2026, 02:00 PM",
        description: "Top team presentations and award announcements."
      }
    ],
    lastUpdated: "October 2026",
    isFeatured: false
  },
  {
    id: "bu-sih-2026",
    slug: "bu-sih-2026-internal-hackathon",
    name: "BU SIH 2026 (Internal Hackathon)",
    tagline: "Official institutional screening hackathon for the Smart India Hackathon.",
    organiser: "Bennett University SIH Committee",
    location: "Bennett University Campus, Greater Noida",
    venueDetails: "School of Engineering Labs, Bennett University, Greater Noida",
    format: "Hybrid",
    status: "Completed",
    eventDate: "Internal Institutional Round (2026)",
    startDateISO: null,
    endDateISO: null,
    deadline: "Institutional Deadline Passed",
    deadlineISO: null,
    teamSize: "Exactly 6 members (Mandatory at least 1 female team member)",
    eligibilitySummary: "Regular Bennett University students compliant with National SIH team composition guidelines.",
    eligibilityDetails: [
      "Strictly for enrolled Bennett University students.",
      "Team composition of exactly 6 members.",
      "Mandatory inclusion of at least one female team member as per Ministry of Education SIH guidelines.",
      "Each team must nominate an official Team Leader."
    ],
    tracks: [
      "Smart Automation",
      "Healthcare & Biomedical",
      "Agriculture & Rural Development",
      "Smart Education",
      "Disaster Management"
    ],
    prizePool: "Institutional Nomination for SIH National Grand Finale",
    registrationFee: "Free",
    registrationUrl: "https://linktr.ee/BU_SIH_2026",
    registrationNotes: "Guidelines, video-pitch formats, and internal shortlisting managed through the BU SIH 2026 resource hub.",
    rulesSummary: "Follows Central Ministry of Education guidelines and problem statement IDs.",
    rules: [
      "Adherence to official Smart India Hackathon problem statement categories.",
      "PowerPoint presentation and preliminary solution video pitch submission.",
      "Internal panel viva with university domain experts."
    ],
    schedule: [
      {
        phase: "Stage 1",
        title: "Internal Portal Registration",
        time: "Completed",
        description: "Team registration with SIH Problem Statement ID."
      },
      {
        phase: "Stage 2",
        title: "Idea Pitch Deck & Video Screening",
        time: "Completed",
        description: "Submission of solution presentation as per prescribed SIH format."
      },
      {
        phase: "Stage 3",
        title: "Campus Jury Presentations",
        time: "Completed",
        description: "In-person evaluation and team shortlisting for national nomination."
      }
    ],
    lastUpdated: "October 2026",
    isFeatured: false
  },
  {
    id: "deep-sight-challenge-2026",
    slug: "deep-sight-challenge-2026",
    name: "Deep Sight Challenge 2026",
    tagline: "An intensive 18-hour applied offline hackathon.",
    organiser: "Bennett Hatchery Foundation & AI Society",
    location: "Bennett University, Greater Noida",
    venueDetails: "Incubation Center & Tech Labs, Bennett University, Greater Noida",
    format: "Offline",
    status: "Completed",
    eventDate: "18-Hour Offline Sprint (Early 2026)",
    startDateISO: null,
    endDateISO: null,
    deadline: "Registration Closed",
    deadlineISO: null,
    teamSize: "1–4 members",
    eligibilitySummary: "Open to engineering students with foundational knowledge of data systems and algorithms.",
    eligibilityDetails: [
      "Students enrolled in higher education programs.",
      "Individual or team entries (1 to 4 members per team).",
      "Bring your own hardware/laptops."
    ],
    tracks: [
      "Applied Data Science",
      "Machine Learning Systems",
      "Computer Vision & Deep Learning"
    ],
    prizePool: "₹10,000",
    registrationFee: "Free",
    registrationUrl: "https://unstop.com/hackathons/deep-sight-challenge-bennett-university-bu-greater-noida-1666692",
    registrationNotes: "Official registration hosted via Unstop platform. Event cycle closed.",
    rulesSummary: "18-hour continuous building sprint with rigorous code demonstration.",
    rules: [
      "Datasets and problem requirements provided at the start of the sprint.",
      "Model weights and reproducible code pipelines must be presented during judging.",
      "Open benchmarking metrics applied for scoring."
    ],
    schedule: [
      {
        phase: "Hour 0",
        title: "Problem Statement Unveiling",
        time: "Day 1",
        description: "Release of data challenge parameters and scoring metrics."
      },
      {
        phase: "Hour 12",
        title: "Interim Checkpoint",
        time: "Day 1",
        description: "Model convergence and architecture validation."
      },
      {
        phase: "Hour 18",
        title: "Submission & Jury Review",
        time: "Day 2",
        description: "Final evaluation against test datasets."
      }
    ],
    lastUpdated: "October 2026",
    isFeatured: false
  },
  {
    id: "techsprint-gdg-2026",
    slug: "techsprint-hackathon-2026",
    name: "TechSprint Hackathon",
    tagline: "Campus community hackathon organized by Google Developer Groups on Campus.",
    organiser: "GDG on Campus Bennett University",
    location: "Bennett University Campus (PLH 101), Greater Noida",
    venueDetails: "PLH 101, Lecture Hall Complex, Bennett University, Greater Noida",
    format: "Offline",
    status: "Completed",
    eventDate: "8 – 13 January 2026",
    startDateISO: "2026-01-08T10:00:00+05:30",
    endDateISO: "2026-01-13T17:00:00+05:30",
    deadline: "8 January 2026 (Closed)",
    deadlineISO: "2026-01-08T10:00:00+05:30",
    teamSize: "2–5 members (You + 1 to 4 friends)",
    eligibilitySummary: "Open exclusively to Bennett University students across all departments.",
    eligibilityDetails: [
      "Must be an active student of Bennett University.",
      "Teams can have 2 to 5 members.",
      "Attendance at the introductory info-session was encouraged."
    ],
    tracks: [
      "Campus Utility Tools",
      "Web Applications",
      "Developer Productivity",
      "Open Innovation"
    ],
    prizePool: "Certificates, Swag & Club Mentorship",
    registrationFee: "Free",
    registrationUrl: null,
    registrationNotes: "Managed via GDG community event platform. Cycle completed in January 2026.",
    rulesSummary: "Community-driven event focused on practical problem-solving for campus workflows.",
    rules: [
      "Submissions required working code and 3-minute video walkthrough.",
      "Final presentations delivered in-person at PLH 101."
    ],
    schedule: [
      {
        phase: "8 Jan 2026",
        title: "Info Session & Workshop",
        time: "10:00 AM (PLH 101)",
        description: "Briefing on problem statements and team formation assistance."
      },
      {
        phase: "8–12 Jan 2026",
        title: "Development Sprint",
        time: "Submissions Window",
        description: "Teams build their solutions with online club mentor support."
      },
      {
        phase: "13 Jan 2026",
        title: "Final Presentations & Demos",
        time: "02:00 PM (PLH 101)",
        description: "Presentations before judge panel and certificates distribution."
      }
    ],
    lastUpdated: "October 2026",
    isFeatured: false
  },
  {
    id: "hackaccino-4",
    slug: "hackaccino-4-hackathon",
    name: "Hackaccino 4.0",
    tagline: "Student-run coding sprint fostering open source and practical engineering.",
    organiser: "Student Tech Society, Bennett University",
    location: "Bennett University, Greater Noida",
    venueDetails: "Bennett University Campus, Plot Nos 8-11, TechZone II, Greater Noida",
    format: "Offline",
    status: "Completed",
    eventDate: "April 2026",
    startDateISO: null,
    endDateISO: null,
    deadline: "Registration Closed",
    deadlineISO: null,
    teamSize: "2–4 members",
    eligibilitySummary: "Enrolled college students with an interest in practical software development.",
    eligibilityDetails: [
      "Open to university and college students.",
      "Free entry with prior online registration.",
      "Digital participation certificates provided."
    ],
    tracks: [
      "Web Platforms",
      "Automation & Scripting",
      "Beginner-Friendly Open Track"
    ],
    prizePool: "Certificates and Sponsor Goodies",
    registrationFee: "Free",
    registrationUrl: "https://eventopia.in/event/hackaccino4",
    registrationNotes: "Published on Eventopia platform. Cycle completed.",
    rulesSummary: "Friendly beginner-friendly guidelines with emphasis on learning and teamwork.",
    rules: [
      "Original work created during the hackathon timeline.",
      "Participants receive verified digital certificates on project completion."
    ],
    schedule: [
      {
        phase: "Phase 1",
        title: "Online Registrations",
        time: "Completed",
        description: "Registration and team confirmation."
      },
      {
        phase: "Phase 2",
        title: "Hackathon Day & Project Submission",
        time: "Completed",
        description: "Build day followed by peer presentations."
      }
    ],
    lastUpdated: "October 2026",
    isFeatured: false
  },
  {
    id: "bu-hack-historical",
    slug: "bu-hack-archive",
    name: "BU'hack (Archive Edition)",
    tagline: "Bennett University's historical student-run virtual hackathon under theme #code4change.",
    organiser: "Bennett University Student Community",
    location: "Online",
    venueDetails: "Virtual Event Platform (Devfolio Archive)",
    format: "Online",
    status: "Completed",
    eventDate: "Historical Archive (Devfolio)",
    startDateISO: null,
    endDateISO: null,
    deadline: "Concluded",
    deadlineISO: null,
    teamSize: "2–4 members",
    eligibilitySummary: "Historical open student event.",
    eligibilityDetails: [
      "College students globally.",
      "Virtual submission via Devfolio platform."
    ],
    tracks: [
      "#code4change Social Impact",
      "Healthcare Tech",
      "Education Technology",
      "Fintech"
    ],
    prizePool: "Cash awards and sponsor bounties",
    registrationFee: "Free",
    registrationUrl: "https://bu-hack.devfolio.co/",
    registrationNotes: "Listed on Devfolio platform. Preserved as an archive of past campus editions.",
    rulesSummary: "Devfolio standard hackathon rules and virtual submission criteria.",
    rules: [
      "All submissions submitted through Devfolio portal.",
      "Adherence to Devfolio Code of Conduct."
    ],
    schedule: [
      {
        phase: "Archive",
        title: "Historical 24-Hour Virtual Hack",
        time: "Concluded",
        description: "Virtual check-in, hacking sprint, and community judging."
      }
    ],
    lastUpdated: "October 2026",
    isFeatured: false
  }
];

export const getHackathonBySlug = (slug) => {
  return hackathons.find((h) => h.slug === slug) || null;
};

export const getAllTracks = () => {
  const set = new Set();
  hackathons.forEach((h) => {
    h.tracks.forEach((t) => set.add(t));
  });
  return Array.from(set).sort();
};
