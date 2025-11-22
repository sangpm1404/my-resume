// 1. Third-party imports
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// 2. Local Components
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// 3. Local Images
import heroImage from '../images/header-background.webp';
import porfolioImage5 from '../images/portfolio/abbank-pf5.jpg';
import porfolioImage8 from '../images/portfolio/abbankdigital-pf8.jpg';
import porfolioImage7 from '../images/portfolio/neoinvest-pf7.jpg';
import porfolioImage1 from '../images/portfolio/nuce-pf1.jpg';
import porfolioImage9 from '../images/portfolio/scholarship-pf9.jpg';
import porfolioImage2 from '../images/portfolio/viettelAI-pf2.jpg';
import porfolioImage3 from '../images/portfolio/vpbank-pf3.jpg';
import porfolioImage4 from '../images/portfolio/vpbankneo-pf4.jpg';
import porfolioImage6 from '../images/portfolio/vpbanks-pf6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
// 4. Data Definitions (types)
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'SangPM DevOps',
  description: "Some personal information for career opportunities",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Minh Sang.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Ha Noi - VN based <strong className="text-stone-100">DevOps Engineer</strong>, currently working
          at <strong className="text-stone-100">VPBank Securities</strong> - the most modern securities company in Vietnam, affiliated with VPbank Group.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training <strong className="text-stone-100">Gym</strong>,
        enjoy coffee on the street, or exploring beautiful{' '}
        <strong className="text-stone-100">Hanoi Old Quarter</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Pham-Minh-Sang-CV.pdf',
      text: 'Resume (Tiếng Việt)',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `DevOps & System Engineer experienced in banking, securities, and high-availability enterprise systems.
Skilled in Kubernetes/OpenShift, CI/CD pipelines, and monitoring platforms such as Splunk, ELK, Prometheus, and Grafana.
Strong problem-solving mindset with hands-on expertise in Linux, networking, automation, and cloud technologies.`,
  aboutItems: [
    {label: 'Location', text: 'Lang Ha, Ha Noi', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Viet Nam', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Gym, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'Hanoi University of Civil Engineering', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'VPBank Group', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'DevOps',
    skills: [
      {
        name: 'System (Windows,Linux,K8s,VM,Network...)',
        level: 9,
      },
      {
        name: 'Monitoring',
        level: 9,
      },
      {
        name: 'Cloud',
        level: 6,
      },
      {
        name: 'CICD',
        level: 7,
      }
    ],
  },
  {
    name: 'Programming',
    skills: [
      {
        name: 'Bash',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'C/C++',
        level: 6,
      },
    ],
  },
  {
    name: 'Financial Knowledge',
    skills: [
      {
        name: 'Banking operations',
        level: 9,
      },
      {
        name: 'Stock operations',
        level: 8,
      },
      {
        name: 'Crypto',
        level: 6,
      },
    ],
  },
{
    name: 'Spoken languages',
    skills: [
      {
        name: 'Vietnamese',
        level: 10,
      },
      {
        name: 'English',
        level: 5,
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Hanoi University of Civil Engineering',
    description: 'My University - HUCE, is a public higher education institution in Vietnam. The university is one of the leading universities and among the top seven engineering universities in Vietnam.',
    url: 'https://huce.edu.vn',
    image: porfolioImage1,
  },
  {
    title: 'Do Quoc Sam Scholarship',
    description: 'In 2020, after my efforts in studying, I was awarded the Do Quoc Sam scholarship from Hanoi University of Civil Engineering for being among the top 23 outstanding students.',
    url: 'https://vatlieu.huce.edu.vn/quyet-dinh-ve-viec-cap-hoc-bong-do-quoc-sam-nam-2020.html',
    image: porfolioImage9,
  },
  {
    title: 'Viettel AI',
    description: 'Viettel AI is Viettel’s leading center for artificial intelligence research and development, building AI platforms and solutions for telecommunications, finance, security, and national digital transformation.',
    url: 'https://viettelai.vn/en',
    image: porfolioImage2,
  },
  {
    title: 'VPBank',
    description: 'VPBank is one of Vietnam’s leading commercial banks, providing a comprehensive range of financial services and digital banking solutions to individuals, SMEs, and large enterprises.',
    url: 'https://www.vpbank.com.vn/ve-chung-toi',
    image: porfolioImage3,
  },
  {
    title: 'VPBank NEO',
    description: 'VPBank NEO is VPBank’s fully digital banking platform, offering seamless online financial services, mobile transactions, and personalized digital experiences for customers.',
    url: 'https://www.vpbank.com.vn/ca-nhan',
    image: porfolioImage4,
  },
  {
    title: 'ABBank',
    description: 'ABBank is a growing Vietnamese commercial bank that provides financial services for individuals and businesses, focusing on service quality, customer experience, and digital transformation.',
    url: 'https://abbank.vn/ve-chung-toi.html',
    image: porfolioImage5,
  },
  {
    title: 'VPBank Securities',
    description: 'VPBank Securities (VPBankS) is a leading brokerage and investment service provider in Vietnam, offering modern trading platforms, financial advisory solutions, and a strong digital infrastructure for retail and institutional investors.',
    url: 'https://www.vpbanks.com.vn/gioi-thieu-chung',
    image: porfolioImage6,
  },
  {
    title: 'VPBanks NEO Invest',
    description: 'NEO Invest is VPBankS’s digital investment platform, delivering seamless online securities trading, real-time market data, and a user-friendly experience for investors across web and mobile.',
    url: 'https://www.vpbanks.com.vn/vpbanks-digital',
    image: porfolioImage7,
  },
  {
    title: 'ABBank Digital',
    description: 'ABBank’s Digital Banking services offer seamless online transactions, mobile banking, eKYC, and multi-channel financial solutions, supporting the bank’s strategy toward a modern and customer-centric digital experience.',
    url: 'https://abbank.vn/ngan-hang-so-abbank',
    image: porfolioImage8,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2016 - March 2021',
    location: 'Computer Networks & System Engineering',
    title: 'Hanoi University of Civil Engineering',
    content: <p>Graduated with honors with a GPA of 3.42/4</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2025 - Present',
    location: 'VPBank Securities - IT INF',
    title: 'Senior Application Operations Engineer',
    content: (
      <p>
        Operation and deployment trading systems: NEO Invest, FLEX/FDS, FCBonds...
      </p>
    ),
  },
  {
    date: 'July 2024 - October 2025',
    location: 'ABBank - IT I&O Center',
    title: 'Senior Application Deployment & Operations Engineer',
    content: (
      <p>
        Operation and deployment banking systems: Omni-channel, Mobile Banking, eKYC, ESB (CP4I), SMS OTT...
      </p>
    ),
  },
  {
    date: 'November 2021 - July 2024',
    location: 'VPBank Digital Factory ',
    title: 'IT Service Operations Engineer',
    content: (
      <p>
        Operation and deployment banking systems: Omni-channel, SmartOTP, eKYC, WSO2...
      </p>
    ),
  },
  {
    date: 'November 2019 - November 2021',
    location: 'Viettel AI ',
    title: 'System Administrator',
    content: (
      <p>
        Operation and deployment AI service infrastructure
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ho Chi Minh',
      text: 'Love The Nation, love The Compatriot',
      image: "/assets/hochiminh.png",
    },
    {
      name: 'Ho Chi Minh',
      text: 'Study well, work well',
      image: "/assets/hochiminh.png",
    },
    {
      name: 'Ho Chi Minh',
      text: 'Unite well, keep discipline well',
      image: "/assets/hochiminh.png",
    },
    {
      name: 'Ho Chi Minh',
      text: 'Comply with hygienic regulations',
      image: "/assets/hochiminh.png",
    },
    {
      name: 'Ho Chi Minh',
      text: 'Be humble, be truthful, be brave',
      image: "/assets/hochiminh.png",
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please contact me if you have any questions.',
  items: [
    {
      type: ContactType.Email,
      text: 'phamminhsang.nuce@gmail.com',
      href: 'mailto:phamminhsang.nuce@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lang Ha - Ha Noi, VietNam',
      href: 'https://www.google.ca/maps/place/VPBank+Tower+Hanoi/@21.0159762,105.8155895,20z',
    },
    {
      type: ContactType.Facebook,
      text: 'Pham Minh Sang',
      href: 'https://www.facebook.com/sang1404',
    },
    {
      type: ContactType.Github,
      text: 'sangpm',
      href: 'https://github.com/sangpm1404',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sangpm1404'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ph%E1%BA%A1m-sang-293782197/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/sang1404'},
];
