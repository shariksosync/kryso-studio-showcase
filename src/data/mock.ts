/**
 * KRYSO DJ Academy — local mock data layer.
 * Everything the site renders comes from here so it can later be swapped
 * for API/DB calls without touching components.
 */

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import cta from "@/assets/cta.jpg";
import courseDj from "@/assets/course-dj.jpg";
import courseProduction from "@/assets/course-production.jpg";
import courseVocal from "@/assets/course-vocal.jpg";
import courseKeyboard from "@/assets/course-keyboard.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import student4 from "@/assets/student-4.jpg";

/** Every image on the site, used exactly once. */
export const images = {
  hero,
  about,
  cta,
  courseDj,
  courseProduction,
  courseVocal,
  courseKeyboard,
  trainer1,
  trainer2,
  trainer3,
  trainer4,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  event1,
  event2,
  event3,
  event4,
  event5,
  student1,
  student2,
  student3,
  student4,
};

export type CourseCategory = "DJ" | "Production" | "Vocals" | "Keyboard";

export type Course = {
  id: string;
  title: string;
  category: CourseCategory;
  image: string;
  short: string;
  overview: string;
  level: string;
  duration: string;
  mode: string;
  highlights: string[];
  curriculum: { module: string; topics: string[] }[];
  skills: string[];
  careers: string[];
  status: "Active" | "Draft";
};

export const courseCategories: ("All" | CourseCategory)[] = [
  "All",
  "DJ",
  "Production",
  "Vocals",
  "Keyboard",
];

export const courses: Course[] = [
  {
    id: "dj-training",
    title: "DJ Training",
    category: "DJ",
    image: images.courseDj,
    short:
      "Learn professional DJ techniques, mixing, beat matching, transitions, set preparation and live performance.",
    overview:
      "Our flagship DJ training programme in Viman Nagar, Pune takes you from your first beat match to a confident club-ready set. You train on professional controllers and CDJs with one-to-one mentoring through every session.",
    level: "Beginner to Advanced",
    duration: "3 Months",
    mode: "Offline · Practical Studio Sessions",
    highlights: [
      "Beat matching & phrasing",
      "Harmonic mixing and key selection",
      "Creative transitions & effects",
      "Set preparation and crowd reading",
      "Live performance practice",
    ],
    curriculum: [
      {
        module: "Module 01 — Console Foundations",
        topics: ["Signal flow & gain staging", "Decks, mixer and headphone cueing", "Beat grids and BPM"],
      },
      {
        module: "Module 02 — Mixing Craft",
        topics: ["Beat matching by ear", "EQ blending", "Loops, hot cues and rolls"],
      },
      {
        module: "Module 03 — Set Design",
        topics: ["Track selection & energy curves", "Harmonic mixing", "Building a 60-minute set"],
      },
      {
        module: "Module 04 — Performance",
        topics: ["Crowd reading", "Live mic & hype basics", "Recording and sharing your mix"],
      },
    ],
    skills: ["Mixing", "Beat matching", "Track curation", "Stage confidence", "Gear handling"],
    careers: ["Club & lounge DJ", "Wedding / event DJ", "Festival opening acts", "Radio & podcast mixes"],
    status: "Active",
  },
  {
    id: "electronic-music-production",
    title: "Electronic Music Production",
    category: "Production",
    image: images.courseProduction,
    short:
      "Learn music production fundamentals, arrangement, sound design, beat creation and professional production workflow.",
    overview:
      "A structured music production course in Pune covering everything from your first drum pattern to a release-ready master. You build original tracks from session one inside a professional DAW workflow.",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    mode: "Offline · Studio + Practice Assignments",
    highlights: [
      "DAW workflow mastery",
      "Drum programming & groove",
      "Synthesis and sound design",
      "Arrangement & song structure",
      "Mixing and export standards",
    ],
    curriculum: [
      {
        module: "Module 01 — Production Basics",
        topics: ["DAW setup and routing", "Tempo, grid and quantise", "Your first 8-bar loop"],
      },
      {
        module: "Module 02 — Sound Design",
        topics: ["Subtractive synthesis", "Bass and lead design", "Sampling and layering"],
      },
      {
        module: "Module 03 — Arrangement",
        topics: ["Intro, build, drop, breakdown", "Automation and transitions", "Vocal chopping"],
      },
      {
        module: "Module 04 — Mix & Release",
        topics: ["EQ, compression, reverb", "Loudness and export", "Releasing on streaming platforms"],
      },
    ],
    skills: ["DAW fluency", "Sound design", "Arrangement", "Mixing", "Creative workflow"],
    careers: ["Independent music producer", "Beat maker for artists", "Ad & content music", "Remix & sync work"],
    status: "Active",
  },
  {
    id: "vocal-training",
    title: "Vocal Training",
    category: "Vocals",
    image: images.courseVocal,
    short:
      "Develop vocal control, pitch, confidence, performance skills and musical expression.",
    overview:
      "Guided vocal training in Pune focused on healthy technique and expressive performance, with regular studio recording so you can hear your progress every month.",
    level: "All Levels",
    duration: "3 Months",
    mode: "Offline · Small Batches & One-to-One",
    highlights: [
      "Breath support & posture",
      "Pitch accuracy and range building",
      "Tone, texture and expression",
      "Mic technique in the studio",
      "Stage performance confidence",
    ],
    curriculum: [
      {
        module: "Module 01 — Voice Foundations",
        topics: ["Breathing and support", "Warm-ups and vocal health", "Pitch matching"],
      },
      {
        module: "Module 02 — Technique",
        topics: ["Range extension", "Registers and blending", "Rhythm and timing"],
      },
      {
        module: "Module 03 — Interpretation",
        topics: ["Song interpretation", "Dynamics and emotion", "Harmony basics"],
      },
      {
        module: "Module 04 — Studio & Stage",
        topics: ["Microphone technique", "Recording a full take", "Live performance practice"],
      },
    ],
    skills: ["Pitch control", "Breath control", "Expression", "Studio recording", "Performance"],
    careers: ["Playback & cover artist", "Studio session vocalist", "Live band vocalist", "Content creator"],
    status: "Active",
  },
  {
    id: "keyboard-training",
    title: "Keyboard Training",
    category: "Keyboard",
    image: images.courseKeyboard,
    short:
      "Learn keyboard fundamentals, chords, scales, rhythm and practical musical application.",
    overview:
      "Keyboard classes in Viman Nagar built around real playing, not just theory. You learn chords, scales and rhythm and immediately apply them to songs and your own production ideas.",
    level: "Beginner Friendly",
    duration: "3 Months",
    mode: "Offline · Weekly Practical Classes",
    highlights: [
      "Finger technique & posture",
      "Major/minor scales",
      "Chord families and inversions",
      "Rhythm patterns & grooves",
      "Playing songs by ear",
    ],
    curriculum: [
      {
        module: "Module 01 — First Notes",
        topics: ["Keyboard layout", "Hand position", "Simple melodies"],
      },
      {
        module: "Module 02 — Chords & Scales",
        topics: ["Major and minor scales", "Triads and inversions", "Chord progressions"],
      },
      {
        module: "Module 03 — Rhythm & Groove",
        topics: ["Left hand patterns", "Arpeggios", "Playing along to tracks"],
      },
      {
        module: "Module 04 — Applied Music",
        topics: ["Playing songs by ear", "Accompanying a vocalist", "Using MIDI in production"],
      },
    ],
    skills: ["Chord knowledge", "Scales & theory", "Rhythm", "Ear training", "MIDI playing"],
    careers: ["Keyboard player in bands", "Music teacher", "Composer / arranger", "Studio session musician"],
    status: "Active",
  },
];

export type Trainer = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
};

export const trainers: Trainer[] = [
  {
    id: "t1",
    name: "Santosh Panchal",
    specialty: "DJ Trainer & Academy Head",
    experience: "12+ years",
    bio: "Founder of KRYSO DJ Academy and a working club DJ across Pune. Known for teaching clean beat matching and honest, practical set craft.",
    image: images.trainer1,
  },
  {
    id: "t2",
    name: "Rohit Kulkarni",
    specialty: "Music Production Mentor",
    experience: "9 years",
    bio: "Electronic producer and mixing engineer who guides students from a first loop to a fully mastered release-ready track.",
    image: images.trainer2,
  },
  {
    id: "t3",
    name: "Aditi Deshmukh",
    specialty: "Vocal Trainer",
    experience: "8 years",
    bio: "Playback and stage vocalist focused on healthy technique, pitch confidence and expressive performance for every voice type.",
    image: images.trainer3,
  },
  {
    id: "t4",
    name: "Nikhil Joshi",
    specialty: "Keyboard Instructor",
    experience: "10 years",
    bio: "Keyboardist and arranger who makes chords, scales and rhythm click quickly through song-first practical teaching.",
    image: images.trainer4,
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: "DJ Sessions" | "Music Production" | "Vocal Training" | "Keyboard" | "Studio" | "Events";
  image: string;
  alt: string;
};

export const galleryCategories = [
  "All",
  "DJ Sessions",
  "Music Production",
  "Vocal Training",
  "Keyboard",
  "Studio",
  "Events",
] as const;

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "DJ Batch Practice",
    category: "DJ Sessions",
    image: images.gallery1,
    alt: "Students practising on DJ controllers at KRYSO DJ Academy in Viman Nagar, Pune",
  },
  {
    id: "g2",
    title: "Beat Making Session",
    category: "Music Production",
    image: images.gallery2,
    alt: "Student producing beats on a drum machine during a music production class in Pune",
  },
  {
    id: "g3",
    title: "Vocal Coaching",
    category: "Vocal Training",
    image: images.gallery3,
    alt: "Vocal trainer guiding a student with sheet music in the KRYSO vocal room",
  },
  {
    id: "g4",
    title: "Keyboard Class",
    category: "Keyboard",
    image: images.gallery4,
    alt: "Young student learning scales during a keyboard class in Pune",
  },
  {
    id: "g5",
    title: "The KRYSO Studio",
    category: "Studio",
    image: images.gallery5,
    alt: "KRYSO DJ Academy recording studio control room with mixing desk",
  },
  {
    id: "g6",
    title: "Live Club Night",
    category: "Events",
    image: images.gallery6,
    alt: "KRYSO student performing a live DJ set at a club night in Pune",
  },
];

export type EventItem = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  active: boolean;
};

export const events: EventItem[] = [
  {
    id: "e1",
    name: "DJ Workshop: Mix Like a Pro",
    date: "12 Sep 2026",
    time: "5:00 PM – 8:00 PM",
    location: "KRYSO Studio, Viman Nagar, Pune",
    description:
      "A hands-on introduction to beat matching, EQ blending and transitions on professional gear. Open to absolute beginners.",
    image: images.event1,
    active: true,
  },
  {
    id: "e2",
    name: "Music Production Masterclass",
    date: "26 Sep 2026",
    time: "4:00 PM – 7:30 PM",
    location: "KRYSO Studio, Viman Nagar, Pune",
    description:
      "Watch a full track built from scratch — drums, bass, sound design, arrangement and a quick mix walkthrough.",
    image: images.event2,
    active: true,
  },
  {
    id: "e3",
    name: "Live Performance Night",
    date: "10 Oct 2026",
    time: "7:00 PM onwards",
    location: "Clover Park Stage, Viman Nagar, Pune",
    description:
      "Our students take the stage — DJ sets, vocal performances and live keyboard showcases in front of a real audience.",
    image: images.event3,
    active: true,
  },
  {
    id: "e4",
    name: "Vocal Performance Workshop",
    date: "24 Oct 2026",
    time: "11:00 AM – 2:00 PM",
    location: "KRYSO Vocal Room, Pune",
    description:
      "Group warm-ups, breath support drills and mic technique, closing with a recorded performance for each participant.",
    image: images.event4,
    active: true,
  },
  {
    id: "e5",
    name: "Artist Meet & Jam Session",
    date: "08 Nov 2026",
    time: "6:00 PM – 9:00 PM",
    location: "KRYSO Studio Lounge, Pune",
    description:
      "An open jam where producers, keyboardists, vocalists and DJs collaborate and swap ideas over a relaxed evening.",
    image: images.event5,
    active: false,
  },
];

export type Testimonial = {
  id: string;
  name: string;
  course: string;
  rating: number;
  quote: string;
  image: string;
  approved: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "ts1",
    name: "Aniket Shinde",
    course: "DJ Training",
    rating: 5,
    quote:
      "I walked in without touching a mixer before. Three months later I played my first paid gig in Koregaon Park. The practical sessions are what made the difference.",
    image: images.student1,
    approved: true,
  },
  {
    id: "ts2",
    name: "Sneha Patil",
    course: "Vocal Training",
    rating: 5,
    quote:
      "My pitch and breath control improved so much faster than I expected. Recording in the studio every month showed me exactly how far I had come.",
    image: images.student2,
    approved: true,
  },
  {
    id: "ts3",
    name: "Zaid Khan",
    course: "Electronic Music Production",
    rating: 5,
    quote:
      "The mentors sit with you inside your own project file. My first original track is now live on streaming platforms — that still feels unreal.",
    image: images.student3,
    approved: true,
  },
  {
    id: "ts4",
    name: "Meera Iyer",
    course: "Keyboard Training",
    rating: 4,
    quote:
      "Chords and scales finally made sense because we applied them to actual songs from day one. Great environment for working professionals too.",
    image: images.student4,
    approved: true,
  },
];

export type Achievement = {
  id: string;
  student: string;
  skill: string;
  achievement: string;
  course: string;
  year: string;
  description: string;
  category: string;
};

export const achievements: Achievement[] = [
  {
    id: "a1",
    student: "Aniket Shinde",
    skill: "Club Mixing",
    achievement: "First residency DJ slot",
    course: "DJ Training",
    year: "2026",
    description: "Landed a weekly Friday slot at a Koregaon Park lounge within weeks of completing the course.",
    category: "DJ Performance",
  },
  {
    id: "a2",
    student: "Zaid Khan",
    skill: "Track Production",
    achievement: "Original single released",
    course: "Electronic Music Production",
    year: "2026",
    description: "Produced, mixed and released an original progressive house single on all major streaming platforms.",
    category: "Original Music",
  },
  {
    id: "a3",
    student: "Sneha Patil",
    skill: "Vocal Performance",
    achievement: "City-level singing finalist",
    course: "Vocal Training",
    year: "2025",
    description: "Reached the finals of a Pune inter-college singing competition after six months of vocal training.",
    category: "Vocal Performance",
  },
  {
    id: "a4",
    student: "Meera Iyer",
    skill: "Live Keyboard",
    achievement: "Joined a gigging band",
    course: "Keyboard Training",
    year: "2025",
    description: "Now plays keys for a Pune-based cover band performing weekend shows across the city.",
    category: "Keyboard Performance",
  },
  {
    id: "a5",
    student: "Rahul Gaikwad",
    skill: "Festival Set",
    achievement: "Opened a college fest main stage",
    course: "DJ Training",
    year: "2026",
    description: "Prepared and performed a 45-minute opening set for a 2,000-strong college festival crowd.",
    category: "Live Events",
  },
  {
    id: "a6",
    student: "Pooja Raut",
    skill: "Sound Design",
    achievement: "Ad music commission",
    course: "Electronic Music Production",
    year: "2026",
    description: "Scored background music for a local brand campaign while still in her final course module.",
    category: "Original Music",
  },
];

export type Faq = { id: string; question: string; answer: string };

export const faqs: Faq[] = [
  {
    id: "f1",
    question: "What courses does KRYSO DJ Academy offer?",
    answer:
      "We offer DJ training, electronic music production, vocal training and keyboard training, along with short workshops and artist development guidance.",
  },
  {
    id: "f2",
    question: "Is DJ training suitable for beginners?",
    answer:
      "Absolutely. Most of our students start with zero experience. You begin on professional gear from your very first session with step-by-step mentoring.",
  },
  {
    id: "f3",
    question: "Do I need previous music experience?",
    answer:
      "No prior experience or theory background is required. We assess your comfort level in the first class and pace the training accordingly.",
  },
  {
    id: "f4",
    question: "How long are the courses?",
    answer:
      "Most programmes run for 3 to 4 months with weekly practical sessions. Flexible batches are available for students and working professionals.",
  },
  {
    id: "f5",
    question: "Do you provide practical training?",
    answer:
      "Yes — our training is 100% practical. Every concept is applied immediately on DJ consoles, studio monitors, microphones and keyboards.",
  },
  {
    id: "f6",
    question: "Can I learn music production from beginner level?",
    answer:
      "Yes. The production course starts with DAW basics and takes you through sound design, arrangement and mixing until you release a finished track.",
  },
  {
    id: "f7",
    question: "Do you offer vocal and keyboard training?",
    answer:
      "We do. Vocal and keyboard training run in small batches and one-to-one formats so each student gets individual attention.",
  },
  {
    id: "f8",
    question: "How can I enquire about admission?",
    answer:
      "Call us on 9767378750, email krysomusic@gmail.com, or submit the enquiry form on this website and our team will get back to you the same day.",
  },
];

export type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  preferred: string;
  message: string;
  date: string;
  status: "New" | "Contacted" | "Converted" | "Closed";
};

export const enquiries: Enquiry[] = [
  {
    id: "q1",
    name: "Prathamesh Bhosale",
    phone: "9822011234",
    email: "prathamesh.b@example.com",
    course: "DJ Training",
    preferred: "Weekend Batch",
    message: "Interested in weekend DJ classes. I work on weekdays.",
    date: "18 Aug 2026",
    status: "New",
  },
  {
    id: "q2",
    name: "Ritika Sharma",
    phone: "9730456789",
    email: "ritika.sharma@example.com",
    course: "Vocal Training",
    preferred: "One-to-One",
    message: "Looking for personal vocal coaching before an audition.",
    date: "16 Aug 2026",
    status: "Contacted",
  },
  {
    id: "q3",
    name: "Omkar Jadhav",
    phone: "9890123456",
    email: "omkar.j@example.com",
    course: "Electronic Music Production",
    preferred: "Evening Batch",
    message: "Want to learn production. Already using FL Studio at home.",
    date: "12 Aug 2026",
    status: "Converted",
  },
  {
    id: "q4",
    name: "Sanika More",
    phone: "9765098712",
    email: "sanika.more@example.com",
    course: "Keyboard Training",
    preferred: "Weekday Morning",
    message: "Beginner keyboard classes for my daughter, age 12.",
    date: "09 Aug 2026",
    status: "New",
  },
  {
    id: "q5",
    name: "Faisal Ahmed",
    phone: "9922334455",
    email: "faisal.a@example.com",
    course: "DJ Training",
    preferred: "Weekend Batch",
    message: "Enquired earlier, wanted the fee structure again.",
    date: "04 Aug 2026",
    status: "Closed",
  },
];

export type Settings = {
  academyName: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  heroHeading: string;
  heroDescription: string;
  ctaText: string;
  footerContent: string;
};

export const settings: Settings = {
  academyName: "KRYSO DJ Academy",
  phone: "9767378750",
  email: "krysomusic@gmail.com",
  address:
    "KRYSO DJ Academy, Datta Mandir Chowk, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
  website: "krysomusic.com",
  heroHeading: "Master Music. Create Your Sound. Become an Artist.",
  heroDescription:
    "Professional training in DJing, music production, vocals and keyboard for the next generation of artists.",
  ctaText: "Turn your passion for music into real skills, confidence and creative expression.",
  footerContent:
    "A professional music education and media training academy in Viman Nagar, Pune — training DJs, producers, vocalists and keyboard players since 2014.",
};

export const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "10+", label: "Professional Programs" },
  { value: "50+", label: "Workshops & Sessions" },
  { value: "100%", label: "Practical Learning" },
];

/** Demo-only credentials for the mock admin panel. */
export const ADMIN_CREDENTIALS = {
  email: "admin@krysomusic.com",
  password: "admin123",
};
