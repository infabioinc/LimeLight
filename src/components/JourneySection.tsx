import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';
import {
  // --- Consolidated Icons for All Sections ---
  Menu,
  X,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  CheckCircle2,
  Coffee,
  Users,
  ChevronLeft,
  ChevronRight,
  Lock,
  VolumeX,
  BadgePercent,
  Search,
  Target,
  Wind,
  Sparkles,
  Briefcase,
  Feather,
  Brain,
  Building,
  Palette, // Added for 'Design' pillar
} from 'lucide-react';

// --- Developer Note ---
// This component is designed for the "Limelight by Payleaf" brand.
// It uses sans-serif fonts throughout (Lato/Poppins).
// Please add these to your main index.html file:
/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
*/
//
// Then, configure Tailwind to use them in `tailwind.config.js`.
/*
theme: {
  extend: {
    fontFamily: {
      'sans': ['Poppins', 'Lato', 'sans-serif'],
    },
    colors: {
      'll-bg': '#f9f3eb',      // Main Background (Very light beige)
      'll-text': '#b68e75',    // Main Text (Muted tan/brown)
      'll-gold': '#b3804d',    // Accent Gold (Brighter gold)
      'll-dark': '#53402d',    // Dark Footer/Headings (Darkest brown)
      'll-cream': '#f6efe4',   // Secondary BG / Cards (Creamy beige)
    },
    animation: {
      'fade-in': 'fadeIn 1s ease-out forwards',
      'slide-in': 'slideIn 0.8s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      slideIn: {
        '0%': { opacity: '0', transform: 'translateX(30px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      }
    }
  },
},
*/

// --- Helper Component for Fade-in Animations ---
const FadeInElement = ({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      ref.current.style.animationDelay = `${delay}s`;
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Analytics placeholder
  const trackClick = (eventName: string) => {
    console.log(`Analytics Event: ${eventName}`);
  };

  return (
    <div
      className="min-h-screen bg-[#f9f3eb] font-sans text-[#a38c75]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at top, white 0%, #FDFBF6 70%)',
      }}
    >
      {/* --- Header / Navigation --- */}
      <header className="border-b border-[#f4ede3] bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2"
              onClick={() => trackClick('Logo Clicked')}
            >
              <img
                src="https://content.app-sources.com/s/440505660917891941/uploads/Gyansetu/Limelight_logo1-1644628.png?format=webp"
                alt="Limelight Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#tour"
                onClick={() => trackClick('Nav: Book Tour Clicked')}
                className="px-6 py-2.5 bg-[#b3804d] text-white font-semibold rounded-full shadow-md hover:bg-[#b3804d]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:ring-offset-2 border-2 border-[#b3804d]"
              >
                Book Your Tour
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open navigation menu"
                className="text-[#53402d] hover:text-[#b3804d]"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </nav>

        {/* --- Mobile Menu (Dropdown) --- */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full min-h-screen bg-[#53402d] z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-12">
              {/* Mobile Logo */}
              <a href="#" className="flex items-baseline gap-2">
                <span className="font-sans text-2xl font-bold text-white">
                  LIMELIGHT
                </span>
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="text-white hover:text-gray-200"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex-grow flex flex-col gap-6">
              <a
                href="#philosophy"
                className="text-2xl font-medium text-white hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Philosophy
              </a>
              <a
                href="#spaces"
                className="text-2xl font-medium text-white hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Spaces
              </a>
              <a
                href="#community"
                className="text-2xl font-medium text-white hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a
                href="#tour"
                className="text-2xl font-medium text-[#b3804d] hover:text-[#b3804d]/80"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Tour
              </a>
            </nav>

            {/* Mobile CTA Button */}
            <div className="flex flex-col gap-4 mt-8">
              <a
                href="#tour"
                onClick={() => {
                  trackClick('Mobile Nav: Book Tour Clicked');
                  setIsMenuOpen(false);
                }}
                className="w-full text-center px-5 py-3 bg-[#b3804d] text-white font-semibold rounded-full shadow-md hover:bg-[#b3804d]/90 transition-colors border-2 border-[#b3804d]"
              >
                Book Your Tour
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- Main Content --- */}
      <main>
        <HeroSection />
        <PhilosophySection />
        <LimelightJourney /> {/* Section 3: Difference */}
        <CustomerJourneySection /> {/* Section 4: 5-Step Transformation */}
        <WhoWeServeSection /> {/* Section 5: Conscious Achievers */}
        <WhyLimelightSection /> {/* Section 6: 4 Pillars */}
        <SuccessStoriesSection /> {/* Section 7: Stories */}
        <InvitationSection /> {/* Section 8: Form */}
      </main>

      <Footer />
    </div>
  );
}

// --- 1. Hero Section ---
function HeroSection() {
  const heroBgUrl =
    'https://horizons-cdn.hostinger.com/118c51d3-a652-4f17-a483-dcecfe46add7/ba08e140db0e32ef5331c88741fb66dd.jpg';

  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 bg-cover bg-center"
      style={{ backgroundImage: `url('${heroBgUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeInElement className="w-full">
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
            Your Limelight <span className="text-[#b3804d]">Awaits </span>
            </h1>
          </FadeInElement>
          <FadeInElement className="w-full" delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            <b>Where Ambition Meets Experience.</b><br/>
              A premium CoWork by Payleaf — designed for<br/> founders, creators, and
              thinkers who prefer calm over clutter.
            </p>
          </FadeInElement>
          <FadeInElement className="w-full" delay={0.3}>
            <p className="text-lg text-gray-300/70 italic max-w-2xl mx-auto mb-12">
              “Here, your focus finds its address.”
            </p>
          </FadeInElement>
          <FadeInElement className="w-full" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tour"
                className="px-8 py-4 bg-[#b3804d] text-white font-semibold text-lg rounded-full shadow-lg hover:bg-[#b3804d]/90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:ring-offset-2 focus:ring-offset-[#f9f3eb] flex items-center justify-center gap-2 border-2 border-[#b3804d]"
              >
                Book a Private Tour
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#membership"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-medium text-lg rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                Explore Membership Plans
              </a>
            </div>
          </FadeInElement>
        </div>
      </div>
    </section>
  );
}

// --- 2. Philosophy Section ---
function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-[#f4ede3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInElement>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#53402d] mb-6">
              We don’t rent desks.
              <br />
              We <span className="text-[#b3804d]">design experiences.</span>
            </h2>
          </FadeInElement>
          <FadeInElement delay={0.2}>
            <p className="text-xl text-[#a38c75] mb-12 leading-relaxed">
              At Limelight, every square foot is crafted to inspire clarity. The
              warmth of sunlight, the silence between sounds, the way your
              chair meets your posture — everything here is intentional.
            </p>
          </FadeInElement>
          <FadeInElement delay={0.3}>
            <p className="text-2xl font-sans italic text-[#a38c75] mb-16">
              “Work isn’t what you do here — it’s who you become while
              doing it.”
            </p>
          </FadeInElement>
        </div>
        <FadeInElement delay={0.4}>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://horizons-cdn.hostinger.com/118c51d3-a652-4f17-a483-dcecfe46add7/eb74bf5a980d17ff9749602eccd029ab.jpg"
              alt="Soft sunlight on a desk, representing an intentional workspace"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </FadeInElement>
      </div>
    </section>
  );
}

// --- 3. Difference Section (LimelightJourney) ---
interface LimelightDifference {
  title: string;
  line: string;
  Icon: React.ElementType;
  image: string;
  features: string[];
}

const limelightDifferences: LimelightDifference[] = [
  {
    title: 'Private Lockable Cabins',
    line: 'Privacy is luxury. Unlike shared chaos, Limelight offers lockable cabins that give you ownership, not just access.',
    Icon: Lock,
    image: 'https://th.bing.com/th/id/OIP.a2U06iK3CUQZG7Bm9WZ-EwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    features: [
      'Fully enclosed, sound-dampened spaces',
      'Personal climate and light control',
      '24/7 exclusive, secure access',
    ],
  },
  {
    title: 'Calm, Acoustic Environment',
    line: 'Productivity doesn’t live in noise. Every inch here is built to absorb chaos and amplify clarity.',
    Icon: VolumeX,
    image: 'https://carusoacoustic.com/wp-content/uploads/2019/11/Tonello-Energie-pannelli-fonoassorbenti-caruso-acoustic-05.jpg',
    features: [
      'Acoustically treated walls and ceilings',
      'Designated "deep work" and "quiet" zones',
      'Ambient soundscaping to mask distractions',
    ],
  },
  {
    title: 'Premium Experience, Honest Pricing',
    line: 'What others call premium, we call standard. Our pricing reflects balance — not brand inflation.',
    Icon: BadgePercent,
    image: 'https://www.officeshub.com/wp-content/uploads/2024/06/3022-570x370.jpg',
    features: [
      'All-inclusive amenities (gourmet coffee, printing)',
      'No hidden fees or complex add-on charges',
      'Transparent, simple membership plans',
    ],
  },
  {
    title: 'Hospitality-Led Workspaces',
    line: 'Coffee served to your desk, mail managed discreetly — you focus on work, we handle the rest.',
    Icon: Coffee,
    image: 'https://horizons-cdn.hostinger.com/118c51d3-a652-4f17-a483-dcecfe46add7/d6eb946d064434ad0c75744de9970521.jpg',
    features: [
      'On-site community manager and concierge',
      'At-your-desk beverage and snack service',
      'Professional mail and package handling',
    ],
  },
  {
    title: 'Culture Beyond Cubicles',
    line: 'Work isn’t isolation. From wellness mornings to art nights, we build culture that nourishes.',
    Icon: Users,
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*OZyU2jOc7yeWkoItXkPfww.jpeg',
    features: [
      'Curated wellness and mindfulness workshops',
      'Exclusive networking and speaker events',
      'Member-led clubs and social gatherings',
    ],
  },
];

function LimelightJourney() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const roadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!roadRef.current) return;
      const road = roadRef.current;
      const roadRect = road.getBoundingClientRect();
      const roadTop = roadRect.top + window.scrollY;
      const roadHeight = road.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.5;
      const scrollStart = roadTop - triggerPoint;
      const totalScrollDistance = roadHeight;
      const currentScroll = scrollY - scrollStart;
      const progress = currentScroll / totalScrollDistance;
      const clamped = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(clamped * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="journey"
      className="py-20 md:py-32 relative overflow-hidden bg-[#f9f3eb]"
    >
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInElement className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#53402d] mb-6 font-sans">
              Peace is the new
              <br />
              <span className="text-[#b3804d]">Productivity.</span>
            </h2>
          </FadeInElement>
        </div>

        <div
          ref={roadRef}
          className="relative w-full max-w-none md:px-0 z-10"
        >
          <div className="absolute left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 top-0 md:-top-10 z-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10752/10752578.png"
              alt="Top Icon"
              className="w-10 h-10 md:w-14 md:h-14 mb-1 md:mb-3 md:mx-auto"
            />
          </div>
          <div className="absolute left-0 md:left-1/2 top-0 bottom-20 w-[24px] md:w-[48px] bg-[#b3804d] translate-x-0 md:-translate-x-1/2 block z-10">
            <div
              className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              style={{
                top: `${scrollProgress}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="absolute inset-0 -m-3 rounded-full bg-[#b3804d]/40 blur-md animate-pulse" />
              <div className="relative w-10 h-10 rotate-45 rounded-xl shadow-xl ring-4 ring-white bg-gradient-to-br from-[#b3804d] to-amber-500 flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3339/3339609.png"
                  alt="Start"
                  className="absolute top-1/2 left-1/2 w-7 h-7 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                />
              </div>
            </div>
          </div>
          <div className="absolute left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 bottom-16 md:bottom-20 z-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5579/5579533.png"
              alt="End Icon"
              className="w-10 h-10 md:w-14 md:h-14 mt-1 md:mt-3 md:mx-auto"
            />
          </div>

          <div className="space-y-12 md:space-y-24 px-0 pl-6 md:pl-0">
            {limelightDifferences.map((step, index) => (
              <FadeInElement
                key={index}
                className="relative"
                delay={index * 0.1}
              >
                <div className="md:flex md:items-stretch">
                  <div className="absolute left-4 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#b3804d] ring-4 ring-white shadow-md md:hidden"></div>
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-full md:w-1/2">
                        <img
                          src={step.image || 'https://via.placeholder.com/600x400'}
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full min-h-[300px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 z-10 shadow-lg"
                        />
                      </div>
                      <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#f4ede3] transition-all duration-300 hover:shadow-2xl h-full border border-[#f4ede3]">
                          <div className="inline-block bg-[#53402d] p-3 rounded-full mb-4">
                            <span className="text-[#b3804d]">
                              <step.Icon className="w-6 h-6" />
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold text-[#53402d] mb-3 font-sans">
                            {step.title}
                          </h3>
                          <p className="text-[#a38c75] text-lg mb-6 italic">
                            "{step.line}"
                          </p>
                          <div className="flex flex-wrap gap-3 mt-6">
                            {step.features.map((feature, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#f4ede3] text-[#53402d] shadow-md transition-all duration-300 hover:shadow-lg"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#b3804d]" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#f4ede3] transition-all duration-300 hover:shadow-2xl h-full border border-[#f4ede3]">
                          <div className="inline-block bg-[#53402d] p-3 rounded-full mb-4">
                            <span className="text-[#b3804d]">
                              <step.Icon className="w-6 h-6" />
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold text-[#53402d] mb-3 font-sans">
                            {step.title}
                          </h3>
                          <p className="text-[#a38c75] text-lg mb-6 italic">
                            "{step.line}"
                          </p>
                          <div className="flex flex-wrap gap-3 mt-6">
                            {step.features.map((feature, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#f4ede3] text-[#53402d] shadow-md transition-all duration-300 hover:shadow-lg"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#b3804d]" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        <img
                          src={step.image || 'https://via.placeholder.com/600x400'}
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full min-h-[300px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 z-10 shadow-lg"
                        />
                      </div>
                    </>
                  )}
                </div>
              </FadeInElement>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#spaces"
              className="px-8 py-3 bg-[#b3804d] text-white font-semibold text-lg rounded-full shadow-lg hover:bg-[#b3804d]/90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:ring-offset-2 focus:ring-offset-[#f9f3eb] flex items-center justify-center gap-2 max-w-xs mx-auto border-2 border-[#b3804d]"
            >
              Explore Our Spaces
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 4. The Journey Section (CustomerJourneySection) ---
const journeySteps = [
  {
    title: 'Discovery',
    text: '“You walk in seeking a desk…” A calm voice welcomes you — sunlight touches the floor, not your anxiety.',
    Icon: Search,
  },
  {
    title: 'Belonging',
    text: '“You find people who work like you think.” Quiet achievers, creators, founders — community without crowd.',
    Icon: Users,
  },
  {
    title: 'Focus',
    text: '“You sit, and silence begins to work with you.” The hum of design, not distraction. The power of stillness.',
    Icon: Target,
  },
  {
    title: 'Flow',
    text: '“Ideas start to move again.” Coffee arrives. Thoughts align. Work becomes movement, not motion.',
    Icon: Wind,
  },
  {
    title: 'Clarity',
    text: '“And that’s when it hits you…” You didn’t just find a workspace. You found your rhythm.',
    Icon: Sparkles,
  },
];

function CustomerJourneySection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        if (card.matches(':hover')) {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        }
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.journey-card') as HTMLDivElement;
      if (card) {
        card.style.transform = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <section id="customer-journey" className="py-20 md:py-32 bg-gradient-to-b from-[#f9f3eb] via-[#f4ede3]/30 to-[#f9f3eb] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b3804d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInElement className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#53402d] mb-6 font-sans">
            Five Steps.
            <br />
            One <span className="text-[#b3804d]">Transformation.</span>
          </h2>
        </FadeInElement>

        {/* Modern card grid with connecting flow */}
        <div className="relative">
          {/* Connecting flow line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 z-0">
            <div className="absolute top-0 left-[10%] right-[10%] h-full bg-gradient-to-r from-transparent via-[#b3804d]/40 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {journeySteps.map((step, index) => (
              <FadeInElement
                key={step.title}
                delay={index * 0.15}
                className="group relative"
              >
                {/* Connection arrow - hidden on mobile */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-2 z-0 w-4 h-4">
                    <ArrowRight className="w-4 h-4 text-[#b3804d]/40 group-hover:text-[#b3804d] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                )}

                {/* Modern glassmorphism card with 3D tilt */}
                <div 
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="journey-card relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#b3804d]/10 group-hover:border-[#b3804d]/40 transition-all duration-500 ease-out overflow-hidden cursor-pointer group-hover:shadow-[0_20px_60px_rgba(179,128,77,0.3)]"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Animated gradient mesh background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b3804d]/8 via-transparent to-amber-400/8"></div>
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#b3804d]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                  </div>

                  {/* Step number badge - modern floating design */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#b3804d] via-amber-500 to-amber-600 shadow-2xl flex items-center justify-center text-black font-bold text-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-20 group-hover:shadow-[0_10px_30px_rgba(179,128,77,0.5)]">
                    <span className="relative z-10 drop-shadow-lg font-extrabold">{index + 1}</span>
                    <div className="absolute inset-0 rounded-2xl bg-white/30 blur-md"></div>
                  </div>

                  {/* Icon with advanced 3D effect */}
                  <div className="relative mb-6 mt-2">
                    <div className="relative inline-block">
                      {/* Multiple glow rings - always visible with glow using #c59d2f */}
                      <div className="absolute inset-0 rounded-2xl blur-2xl scale-125 opacity-60 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 animate-pulse" style={{ backgroundColor: 'rgba(179, 128, 77, 0.3)' }}></div>
                      <div className="absolute inset-0 rounded-xl blur-lg scale-110 opacity-50 group-hover:opacity-90 group-hover:scale-100 transition-all duration-500" style={{ backgroundColor: 'rgba(179, 128, 77, 0.2)' }}></div>
                      
                      {/* Icon container with 3D tilt */}
                      <div 
                        className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#b3804d]/15 via-[#b3804d]/8 to-transparent backdrop-blur-md border border-[#b3804d]/25 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#b3804d] group-hover:to-amber-400 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6"
                        style={{
                          transformStyle: 'preserve-3d',
                          '--glow-color': 'rgba(179, 128, 77, 0.4)',
                        } as React.CSSProperties & { '--glow-color': string }}
                      >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: '0 15px 40px rgba(179, 128, 77, 0.4)' }}></div>
                        <step.Icon 
                          className="w-9 h-9 text-[#b3804d] group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 relative z-10" 
                          style={{ 
                            filter: 'drop-shadow(0 0 8px rgba(179, 128, 77, 0.6))',
                            transition: 'all 0.7s ease, filter 0.7s ease',
                          }} 
                          onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(179, 128, 77, 0.9))';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(179, 128, 77, 0.6))';
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content with reveal animation */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-bold font-sans text-[#53402d] group-hover:text-[#b3804d] transition-colors duration-500 leading-tight group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    
                    {/* Text with smooth reveal */}
                    <div className="relative overflow-hidden">
                      <p className="text-[#a38c75] leading-relaxed group-hover:text-[#53402d]/90 transition-all duration-500 transform group-hover:translate-x-1">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {/* Multi-layer shimmer effects */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#b3804d] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  
                  {/* Side gradient glow */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#b3804d] via-amber-400 to-[#b3804d] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>

                  {/* Top right corner accent */}
                  <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-[#b3804d]/40 group-hover:bg-[#b3804d] group-hover:scale-[2.5] group-hover:shadow-lg group-hover:shadow-[#b3804d]/60 transition-all duration-500"></div>
                  
                  {/* Bottom left accent */}
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-amber-400/30 group-hover:bg-amber-400 group-hover:scale-[3] group-hover:shadow-md transition-all duration-700"></div>

                  {/* Hover overlay shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </FadeInElement>
            ))}
          </div>
        </div>

        <FadeInElement delay={0.7} className="text-center mt-20">
          <div className="inline-block p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-[#b3804d]/20 shadow-2xl group-hover:shadow-[0_20px_60px_rgba(179,128,77,0.2)] transition-all duration-500">
            <p className="text-2xl md:text-3xl font-sans italic text-[#a38c75] max-w-3xl mx-auto">
              "Limelight isn't a space you visit.
              <br />
              It's a state you enter."
            </p>
          </div>
        </FadeInElement>
      </div>
    </section>
  );
}

// --- 5. Who We Serve Section ---
const whoWeServeCards = [
  {
    title: 'Founders & CXOs',
    text: 'Private sanctuaries to think beyond the next quarter.',
    Icon: Briefcase,
  },
  {
    title: 'Creators & Freelancers',
    text: 'Calm corners to craft stories that matter.',
    Icon: Feather,
  },
  {
    title: 'Consultants & Coaches',
    text: 'Distraction-free cabins where clarity is currency.',
    Icon: Brain,
  },
  {
    title: 'Startups & Teams',
    text: 'Collaborative zones built on respect, not noise.',
    Icon: Building,
  },
];

function WhoWeServeSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        if (card.matches(':hover')) {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
        }
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.serve-card') as HTMLDivElement;
      if (card) {
        card.style.transform = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <section id="who-we-serve" className="py-20 md:py-32 bg-gradient-to-b from-[#f4ede3] via-white to-[#f4ede3] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#b3804d]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b3804d]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInElement className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#53402d] mb-6 font-sans">
            The Work Club for
            <br />
            <span className="text-[#b3804d]">Conscious Achievers.</span>
          </h2>
        </FadeInElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-16">
          {whoWeServeCards.map((card, index) => (
            <FadeInElement
              key={card.title}
              delay={index * 0.15}
              className="group relative"
            >
              {/* Glow border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#b3804d] via-amber-400 to-[#b3804d] rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
              
              {/* Modern glassmorphism card */}
              <div 
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="serve-card relative h-full bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#b3804d]/15 group-hover:border-[#b3804d]/40 transition-all duration-500 ease-out overflow-hidden cursor-pointer group-hover:shadow-[0_25px_70px_rgba(197,157,47,0.25)]"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b3804d]/10 via-transparent to-amber-400/10"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#b3804d]/12 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-amber-400/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                {/* Icon with glow effects */}
                <div className="relative mb-8 mt-2">
                  <div className="relative inline-block">
                    {/* Multiple glow rings using #c59d2f */}
                    <div className="absolute inset-0 rounded-2xl blur-2xl scale-125 opacity-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 animate-pulse" style={{ backgroundColor: 'rgba(179, 128, 77, 0.3)' }}></div>
                    <div className="absolute inset-0 rounded-xl blur-lg scale-110 opacity-40 group-hover:opacity-85 group-hover:scale-100 transition-all duration-500" style={{ backgroundColor: 'rgba(179, 128, 77, 0.2)' }}></div>
                    
                    {/* Icon container */}
                    <div 
                      className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#b3804d]/12 via-[#b3804d]/6 to-transparent backdrop-blur-sm border border-[#b3804d]/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#b3804d] group-hover:to-amber-400 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 10px 30px rgba(179, 128, 77, 0)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: '0 10px 30px rgba(179, 128, 77, 0.4)' }}></div>
                      <card.Icon 
                        className="w-10 h-10 text-[#b3804d] group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 relative z-10" 
                        style={{ 
                          filter: 'drop-shadow(0 0 8px rgba(179, 128, 77, 0.6))',
                          transition: 'all 0.7s ease, filter 0.7s ease',
                        }} 
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(179, 128, 77, 0.9))';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(179, 128, 77, 0.6))';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold font-sans text-[#53402d] group-hover:text-[#b3804d] transition-colors duration-500 leading-tight group-hover:translate-x-1">
                    {card.title}
                  </h3>
                  
                  <div className="relative overflow-hidden">
                    <p className="text-[#a38c75] leading-relaxed group-hover:text-[#53402d]/90 transition-all duration-500 transform group-hover:translate-x-1">
                      {card.text}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#b3804d] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#b3804d] via-amber-400 to-[#b3804d] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-[#b3804d]/40 group-hover:bg-[#b3804d] group-hover:scale-[2.5] group-hover:shadow-lg group-hover:shadow-[#b3804d]/60 transition-all duration-500"></div>
                
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-amber-400/30 group-hover:bg-amber-400 group-hover:scale-[3] group-hover:shadow-md transition-all duration-700"></div>

                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </FadeInElement>
          ))}
        </div>

        <FadeInElement delay={0.6} className="text-center">
          <div className="inline-block p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-[#b3804d]/20 shadow-2xl group-hover:shadow-[0_25px_70px_rgba(197,157,47,0.2)] transition-all duration-500">
            <p className="text-2xl md:text-3xl font-sans italic text-[#a38c75] max-w-3xl mx-auto">
              "Every member here shares one unspoken trait—
              <br />
              they value peace as much as performance."
            </p>
          </div>
        </FadeInElement>
      </div>
    </section>
  );
}

// --- 6. Why Limelight Section (UPDATED) ---
const pillars = [
  {
    title: 'Design',
    text: 'Ergonomic, aesthetic, human.',
    Icon: Palette,
  },
  {
    title: 'Privacy',
    text: 'Lockable cabins, acoustic panels, secure connectivity.',
    Icon: Lock,
  },
  {
    title: 'Service',
    text: 'Gourmet coffee, order-at-table, full-time support.',
    Icon: Coffee,
  },
  {
    title: 'Culture',
    text: 'Wellness mornings, cultural evenings, curated community.',
    Icon: Users,
  },
];

function WhyLimelightSection() {
  return (
    <section id="why-limelight" className="pt-20 md:pt-32 pb-10 md:pb-16 bg-[#f9f3eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInElement className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#53402d] mb-6 font-sans">
            We built Limelight like a five-star hotel
            <br />— <span className="text-[#b3804d]">only quieter.</span>
          </h2>
        </FadeInElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <FadeInElement
              key={pillar.title}
              delay={index * 0.1}
              className="bg-[#f4ede3]/50 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-[#b3804d] text-white rounded-full flex items-center justify-center mb-6">
                <pillar.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-sans text-[#53402d] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#a38c75] leading-relaxed">{pillar.text}</p>
            </FadeInElement>
          ))}
        </div>
        <FadeInElement delay={0.4} className="text-center">
          <p className="text-2xl md:text-3xl font-sans italic text-[#a38c75] max-w-3xl mx-auto mb-12">
            “Because true luxury isn’t being seen
            <br />
            — it’s being understood.”
          </p>
          <a
            href="#membership"
            className="px-8 py-3 bg-[#b3804d] text-white font-semibold text-lg rounded-full shadow-lg hover:bg-[#b3804d]/90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:ring-offset-2 focus:ring-offset-[#f9f3eb] flex items-center justify-center gap-2 max-w-xs mx-auto border-2 border-[#b3804d]"
          >
            Explore Membership Plans
            <ArrowRight className="w-5 h-5" />
          </a>
        </FadeInElement>
      </div>
    </section>
  );
}

// --- 7. Success Stories Section (UPDATED) ---
const testimonials = [
  {
    quote: 'From cluttered cafes to creative clarity.',
    author: 'Freelance Designer',
    image: 'https://media.istockphoto.com/id/1415537841/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.webp?a=1&b=1&s=612x612&w=0&k=20&c=kLRdbDIKSqTJbShIpLfgs3gwFDsG-pXSerynt-Jg8-Q=',
  },
  {
    quote: 'A founder who finally found flow.',
    author: 'Startup Founder',
    image: 'https://tse4.mm.bing.net/th/id/OIP.mD-LNfTlPD6jEfnKo8NiPgHaEt?w=1920&h=1222&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    quote: 'A consultant who stopped outsourcing peace.',
    author: 'Management Consultant',
    image: 'https://tse2.mm.bing.net/th/id/OIP.YVyKfKEGsUwX8URVja5YGgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    quote: 'A team that now works together, not over each other.',
    author: 'Agency Director',
    image: 'https://tse3.mm.bing.net/th/id/OIP.fzHXOqrCyHEkkzXw-CIhaQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
];

function SuccessStoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="community"
      className="pt-10 md:pt-16 pb-10 md:pb-20 bg-[#53402d] text-white relative overflow-hidden"
    >
      {/* Bokeh background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#b3804d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#b3804d]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <FadeInElement className="max-w-4xl mx-auto text-center mb-6">
          <p className="text-xl md:text-2xl font-sans italic text-[#b3804d]/80 mb-4">
            STORIES OF LIMELIGHT
          </p>
          <h3 className="text-3xl md:text-4xl font-sans italic text-[#b3804d] mb-6">
            "What Silence Sounds Like."
          </h3>
        </FadeInElement>

        {/* Main Headline */}
        <FadeInElement delay={0.2} className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans leading-tight">
            Real professionals.
            <br />
            <span className="text-[#b3804d]">Real transformation.</span>
          </h2>
        </FadeInElement>

        {/* Carousel with Bokeh Portraits */}
        <FadeInElement delay={0.3} className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100 z-10'
                    : index === currentSlide - 1 || (currentSlide === 0 && index === testimonials.length - 1)
                    ? 'opacity-0 scale-95 -translate-x-full z-0'
                    : index === currentSlide + 1 || (currentSlide === testimonials.length - 1 && index === 0)
                    ? 'opacity-0 scale-95 translate-x-full z-0'
                    : 'opacity-0 scale-95 z-0'
                }`}
              >
                {/* Bokeh Portrait Background */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${testimonial.image}')`,
                      filter: 'blur(40px) brightness(0.3)',
                      transform: 'scale(1.2)',
                    }}
                  ></div>
                  
                  {/* Bokeh overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#53402d]/80 to-[#53402d]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#53402d] via-transparent to-[#53402d]/60"></div>
                </div>

                {/* Portrait Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#b3804d]/30 shadow-2xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover scale-110"
                      style={{ filter: 'blur(0px)' }}
                    />
                    {/* Glow effect around portrait */}
                    <div className="absolute inset-0 rounded-full bg-[#b3804d]/20 blur-2xl -z-10 scale-150"></div>
                  </div>
                </div>

                {/* Testimonial Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-[#53402d] via-[#53402d]/95 to-transparent">
                  <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl md:text-4xl font-sans italic text-white mb-6 leading-relaxed drop-shadow-2xl">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-lg md:text-xl text-[#b3804d] font-semibold uppercase tracking-wider">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-[#b3804d] rounded-full p-4 transition-all duration-300 hover:scale-110 border border-[#b3804d]/30 hover:border-[#b3804d]/60"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-[#b3804d] rounded-full p-4 transition-all duration-300 hover:scale-110 border border-[#b3804d]/30 hover:border-[#b3804d]/60"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-[#b3804d] shadow-lg shadow-[#b3804d]/50'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </FadeInElement>
      </div>
    </section>
  );
}

// --- 8. Invitation Section (UPDATED) ---
function InvitationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    requirement: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      requirement: '',
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="tour" className="relative pt-10 md:pt-20 pb-20 md:pb-32 bg-[#f4ede3] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <FadeInElement className="mb-6">
            <p className="text-xl md:text-2xl font-sans italic text-[#b3804d]/80 mb-4">
              
            </p>
            <h3 className="text-3xl md:text-4xl font-sans italic text-[#53402d] mb-8">
              
            </h3>
          </FadeInElement>

          {/* Headline */}
          <FadeInElement delay={0.1} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#53402d] mb-6 font-sans leading-tight">
              Book a Private Tour.
              <br />
              <span className="text-[#b3804d]">Feel the Difference.</span>
            </h2>
          </FadeInElement>

          {/* Subheadline */}
          <FadeInElement delay={0.2} className="mb-12">
            <p className="text-xl text-[#a38c75] leading-relaxed mb-4">
              Step inside a workspace designed for clarity, culture, and calm.
            </p>
            <p className="text-lg text-[#a38c75]/90 italic">
              We don't promise perfection — just peace.
            </p>
          </FadeInElement>

          {/* Form */}
          <FadeInElement delay={0.3}>
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-[#b3804d]/20 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#a38c75] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#f9f3eb] border border-[#f4ede3] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:border-[#b3804d] text-[#a38c75] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#a38c75] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#f9f3eb] border border-[#f4ede3] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:border-[#b3804d] text-[#a38c75] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#a38c75] mb-2"
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#f9f3eb] border border-[#f4ede3] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:border-[#b3804d] text-[#a38c75] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-[#a38c75] mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-[#f9f3eb] border border-[#f4ede3] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:border-[#b3804d] text-[#a38c75] transition-all"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="requirement"
                    className="block text-sm font-medium text-[#a38c75] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="requirement"
                    id="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Tell us about your workspace needs..."
                    className="w-full bg-[#f9f3eb] border border-[#f4ede3] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:border-[#b3804d] text-[#a38c75] h-32 resize-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#b3804d] text-white font-semibold text-lg rounded-full shadow-xl hover:bg-[#b3804d]/90 transition-all transform hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#b3804d] focus:ring-offset-2 focus:ring-offset-white flex items-center justify-center gap-2 border-2 border-[#b3804d]"
                >
                  Step Into the Limelight
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-400 rounded-3xl p-10 shadow-xl">
                <div className="flex items-center justify-center gap-4 text-green-700">
                  <CheckCircle2 className="w-10 h-10" />
                  <span className="text-xl font-semibold">
                    Tour Requested! We'll be in touch soon.
                  </span>
                </div>
              </div>
            )}
          </FadeInElement>
        </div>
      </div>
    </section>
  );
}

// --- 9. Footer (UPDATED) ---
function Footer() {
  return (
    <footer className="bg-[#53402d] text-[#f9f3eb]/70 py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#b3804d]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Closing Tagline */}
          <FadeInElement className="text-center mb-16">
            <div className="relative inline-block">
              <p className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-[#b3804d] mb-4 tracking-tight">
                Limelight by Payleaf
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-sans italic text-[#f9f3eb]/90 animate-pulse">
                — Where Ambition Meets Experience.
              </p>
              {/* Decorative underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#b3804d] to-transparent"></div>
            </div>
          </FadeInElement>

          <div className="w-24 h-px bg-[#b3804d]/30 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b3804d] flex-shrink-0 mt-1" />
                <p className="leading-relaxed text-[#f9f3eb]/80">
                  Lotus Business Park
                  <br />
                  Sector 127, Noida
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b3804d] flex-shrink-0" />
                <a
                  href="tel:+917835831331"
                  className="hover:text-[#b3804d] transition-colors text-[#f9f3eb]/80"
                >
                  +91 78358 31331
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b3804d] flex-shrink-0" />
                <a
                  href="mailto:info@limelightbypayleaf.com"
                  className="hover:text-[#b3804d] transition-colors break-all text-[#f9f3eb]/80"
                >
                  info@limelightbypayleaf.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <p className="font-semibold mb-3 text-[#f9f3eb]/90">
                Connect With Us
              </p>
              <div className="flex gap-4">
                <a
                  href="#" // Add LinkedIn URL
                  className="w-10 h-10 bg-[#f9f3eb]/10 rounded-full flex items-center justify-center hover:bg-[#b3804d] transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#b3804d] group-hover:text-[#f9f3eb]" />
                </a>
                <a
                  href="#" // Add Instagram URL
                  className="w-10 h-10 bg-[#f9f3eb]/10 rounded-full flex items-center justify-center hover:bg-[#b3804d] transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#b3804d] group-hover:text-[#f9f3eb]" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#f9f3eb]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#f9f3eb]/60">
                © 2025 Limelight by Payleaf. All Rights Reserved.
              </p>
              
              {/* Website Credits */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-md px-1.5 py-1 border border-white/20 flex items-center gap-1.5"
              >
                <motion.a 
                  href="https://fabulousmedia.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded p-0.5 opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center"
                  aria-label="FabulousMedia"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg" 
                    alt="FabulousMedia" 
                    className="h-3 w-auto"
                  />
                </motion.a>
                <motion.div 
                  className="h-3 w-px bg-white/20"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                ></motion.div>
                <motion.a 
                  href="https://gocommercially.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded p-0.5 opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center"
                  aria-label="GoCommercially"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg" 
                    alt="GoCommercially" 
                    className="h-3 w-auto"
                  />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}