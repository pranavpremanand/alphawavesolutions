// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";


// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// logo
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  phone: "9741878483",
  email: "abc@xyz.com",
  address: "#22 old airport road kodihalli",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Industries",
  //   link: "/industries",
  // },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "We create powerful e-commerce websites that enhance customer engagement, streamline business operations, and drive sustainable revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Developing dynamic and engaging social media websites designed to foster community interaction, boost brand awareness, and encourage user loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      "Crafting high-conversion landing pages that grab attention and drive meaningful action, tailored to showcase your brand and optimize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Building bespoke websites designed specifically for your business, combining innovative design and seamless functionality for a remarkable online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "We create exceptional iOS apps using Swift and Objective-C, delivering seamless performance, modern design, and enhanced user engagement.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "Our Android apps, crafted with Java and Kotlin, are tailored to your business vision, offering robust features and outstanding user experiences.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Leverage Flutter’s single codebase to build responsive apps for iOS and Android, ensuring efficiency without compromising on quality.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "Our hybrid apps deliver seamless functionality across platforms, combining native performance with versatile design for an enhanced user experience.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img1: require("./assets/services-details/web-development1.webp"),
    title: "Web Development",
    smallPara:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.\n\nAt the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with.",
    keyBenefits: [
      "Custom Websites: Crafting unique websites that represent your brand and engage your audience.",
      "E-Commerce Platforms: Smooth and secure shopping experiences for your customers.",
      "Content Management Systems (CMS): Easy-to-use systems for managing your website’s content.",
      "Search Engine Optimization (SEO): Improving your site’s visibility and organic traffic.",
      "Web Applications: Building high-performance applications that are flexible and scalable.",
    ],
    detailsPageContent: {
      firstPara: `A well-designed website is key to capturing attention in today’s online world. Our web development services focus on building websites that are not only visually appealing but also functional, scalable, and user-friendly. Whether you need an e-commerce platform, a content-rich site, or a custom web application, we craft solutions tailored to your business needs.`,
    },
  },
  {
    id: 2,
    img1: require("./assets/services-details/app-development1.webp"),
    title: "App Development",
    smallPara:
      "Mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. The development of mobile apps requires a unique set of skills and considerations, as compared to website development.\n\nOne of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",
    keyBenefits: [
      "Native Apps: Tailored apps built specifically for iOS or Android devices.",
      "Hybrid Apps: Cross-platform apps that perform like native applications.",
      "UI/UX Design: Creating intuitive and engaging user interfaces for better user experiences.",
      "App Maintenance & Support: Ongoing app updates and support to ensure optimal performance.",
    ],
    detailsPageContent: {
      firstPara: `Mobile apps are an essential part of connecting with customers. Our mobile app development team specializes in creating apps that offer seamless experiences across platforms. Whether you’re interested in developing a native app for iOS or Android or need a hybrid solution, we deliver high-quality mobile applications that meet your business goals.`,
    },
  },
  {
    id: 3,
    img1: require("./assets/services-details/cloud-computing-1.webp"),
    title: "Cloud Computing",
    smallPara:
      "Cloud computing provides scalable and flexible solutions for businesses to store, manage, and process data. It enables organizations to leverage the power of remote servers and services, reducing the need for on-premises infrastructure.\n\nWith cloud computing, businesses can achieve greater efficiency, cost savings, and agility, allowing them to focus on innovation and growth.",
    keyBenefits: [
      "Cloud Migration: Smoothly transitioning your existing systems to the cloud.",
      "Cloud Application Development: Building custom applications optimized for the cloud.",
      "Infrastructure Management: Maximizing efficiency and performance with optimized cloud resources.",
      "Cloud Security: Safeguarding your data with state-of-the-art security measures.",
    ],
    detailsPageContent: {
      firstPara: `Cloud computing offers businesses the flexibility and scalability they need to grow and succeed in a digital-first world. We provide cloud services that ensure your infrastructure is secure, scalable, and optimized for performance, helping you focus on what matters most—growing your business.`,
    },
  },
  {
    id: 4,
    img1: require("./assets/services-details/data-engineering-1.webp"),
    title: "Data Analytics & Business Intelligence",
    smallPara:
      "Data analytics involves the process of examining data sets to draw conclusions and make informed decisions. It encompasses various techniques and tools to analyze, visualize, and interpret data, providing valuable insights for businesses.\n\nBy leveraging data analytics, organizations can optimize operations, improve customer experiences, and drive strategic initiatives.",
    keyBenefits: [
      "Data Integration: Aggregating data from multiple sources to create a unified view.",
      "Business Intelligence Dashboards: Custom dashboards that provide real-time insights into critical business metrics.",
      "Predictive Analytics: Leveraging AI and machine learning to forecast trends and behaviors.",
      "Reporting & Visualization: Turning complex data into easy-to-understand, actionable reports.",
    ],
    detailsPageContent: {
      firstPara: `In a world full of data, making informed decisions is key. Our data analytics and business intelligence services provide the insights you need to drive strategic decision-making, improve performance, and optimize your operations.`,
    },
  },
  {
    id: 5,
    img1: require("./assets/services-details/game-1.webp"),
    img2: require("./assets/services-details/game-2.webp"),
    title: "Game Development",
    smallPara:
      "Game development is a dynamic and creative process that involves designing, developing, and deploying interactive games for various platforms. It combines artistic vision with technical expertise to create engaging and immersive experiences for players.\n\nFrom concept to launch, game development requires a multidisciplinary approach, including programming, design, audio, and storytelling.",
    keyBenefits: [
      "2D & 3D Game Design: Creating visually captivating games for various platforms.",
      "Cross-Platform Development: Games that work across multiple devices to reach a wider audience.",
      "Augmented & Virtual Reality: Creating next-level interactive and immersive gaming experiences.",
      "Monetization Strategies: Helping you implement in-app purchases, ads, and other monetization techniques.",
    ],
    detailsPageContent: {
      firstPara: ` 
      The gaming industry continues to grow rapidly, and we’re at the forefront of creating immersive gaming experiences. From mobile games to high-end virtual reality experiences, we offer a full spectrum of game development services designed to engage and entertain players.   
`,
    },
  },
  {
    id: 6,
    img1: require("./assets/services-details/cybersecurity-1.webp"),
    img2: require("./assets/services-details/cybersecurity-2.webp"),
    title: "UX-UI Design.",
    smallPara:
      "A great user experience is critical for any digital product. Our UX/UI design team focuses on creating visually stunning and intuitive interfaces that ensure users interact with your product easily and efficiently. We design user journeys that improve engagement and conversion rates.",
    keyBenefits: [
      "User Research: We analyze your target audience to understand their needs and pain points.",
      "Wireframing & Prototyping: Building and testing interactive prototypes to refine user flow.",
      "UI Design: Designing clean, functional, and attractive interfaces.",
      "Usability Testing: We ensure that the final design meets user needs and is easy to navigate.",
    ],
    detailsPageContent: {
      firstPara: `A great user experience is critical for any digital product. Our UX/UI design team focuses on creating visually stunning and intuitive interfaces that ensure users interact with your product easily and efficiently. We design user journeys that improve engagement and conversion rates.`,
    },
  },
  {
    id: 7,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "IoT Development",
    smallPara:
      "The Internet of Things (IoT) is revolutionizing how devices and systems interact, enabling seamless connectivity and intelligent automation. IoT solutions enhance operational efficiency, monitor processes in real-time, and improve decision-making through actionable insights.\n\nIoT is transforming industries, from smart homes and cities to manufacturing and healthcare, delivering innovative, data-driven solutions that shape the future.",
    keyBenefits: [
      "IoT Device Design: Creating smart devices that interact with the cloud and other devices.",
      "Data Analytics for IoT: Turning IoT data into actionable insights to improve operations.",
      "Business Automation with IoT: Streamlining workflows and processes through interconnected devices.",
      "IoT Security: Ensuring the integrity and security of your IoT ecosystem.",
    ],
    detailsPageContent: {
      firstPara: `The Internet of Things (IoT) is creating a more connected world. We help businesses develop IoT solutions that optimize processes, gather real-time data, and improve operational efficiency. Whether it’s a smart device or a complex IoT network, we provide the expertise to make your vision a reality.`,
    },
  },
  {
    id: 8,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "Artificial Intelligence",
    smallPara:
      "AI is revolutionizing how businesses operate, offering new ways to automate processes, improve customer interactions, and derive insights from data. Our AI solutions help businesses integrate machine learning, natural language processing, and more to create smarter, more efficient systems.",
    keyBenefits: [
      "Machine Learning Solutions: Building models that automate decision-making and tasks.",
      "AI Chatbots: Creating intelligent chatbots to enhance customer service and engagement.",
      "Natural Language Processing (NLP): Enabling machines to understand and respond to human language.",
      "AI Consulting: Offering strategic guidance to help you incorporate AI into your business processes.",
    ],
    detailsPageContent: {
      firstPara: `AI is revolutionizing how businesses operate, offering new ways to automate processes, improve customer interactions, and derive insights from data. Our AI solutions help businesses integrate machine learning, natural language processing, and more to create smarter, more efficient systems.`,
    },
  },
  {
    id: 9,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "AR & VR Development.",
    smallPara:
      "Augmented Reality (AR) and Virtual Reality (VR) are changing the way users interact with digital environments. From immersive gaming experiences to educational tools, we design AR and VR solutions that engage users in novel, interactive ways.",
    keyBenefits: [
      "Immersive Experiences: Creating interactive virtual worlds and augmented real-world experiences.",
      "AR Apps: Developing apps that integrate digital elements into the physical world for enhanced experiences.",
      "VR Simulations: Building lifelike virtual environments for training, entertainment, and exploration.",
      "Custom AR/VR Applications: Tailoring solutions to suit specific business objectives.",
    ],
    detailsPageContent: {
      firstPara: `Augmented Reality (AR) and Virtual Reality (VR) are changing the way users interact with digital environments. From immersive gaming experiences to educational tools, we design AR and VR solutions that engage users in novel, interactive ways.`,
    },
  },
  {
    id: 10,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "Custom Software Development.",
    smallPara:
      "Every business is unique, which means off-the-shelf software might not always meet your needs. Our custom software development services are designed to create solutions tailored specifically to your business’s requirements, helping you streamline processes and achieve your goals.",
    keyBenefits: [
      "Tailored Software Solutions: Designing software that fits your business model and goals.",
      "Agile Development: Using iterative processes to deliver faster, more efficient solutions.",
      "Enterprise Software Development: Building complex systems to support large-scale operations.",
      "Ongoing Support: Offering continuous maintenance to ensure your software performs optimally.",
    ],
    detailsPageContent: {
      firstPara: `Every business is unique, which means off-the-shelf software might not always meet your needs. Our custom software development services are designed to create solutions tailored specifically to your business’s requirements, helping you streamline processes and achieve your goals.`,
    },
  },
  {
    id: 11,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "Blockchain. ",
    smallPara:
      "Blockchain has the power to transform industries by providing transparency, security, and efficiency. We specialize in developing blockchain-based solutions that streamline operations, build trust, and unlock new business opportunities.",
    keyBenefits: [
      "Smart Contracts: Automating agreements and processes to increase efficiency.",
      "Decentralized Apps (DApps): Building secure and transparent applications that run on blockchain.",
      "Cryptocurrency Development: Developing blockchain platforms or integrating cryptocurrencies into your business.",
      "Consulting & Strategy: Guiding businesses on how blockchain can benefit their operations and long-term strategy.",
    ],
    detailsPageContent: {
      firstPara: `Blockchain has the power to transform industries by providing transparency, security, and efficiency. We specialize in developing blockchain-based solutions that streamline operations, build trust, and unlock new business opportunities.`,
    },
  },
  {
    id: 12,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "Chatbot Development. ",
    smallPara:
      "Chatbots are transforming customer service by automating responses and providing immediate support. Our chatbot development services create AI-powered bots that are intuitive, effective, and capable of handling a wide range of customer interactions.",
    keyBenefits: [
      "Natural Language Understanding: Building bots that comprehend and respond to customer queries.",
      "Multichannel Integration: Deploy chatbots across websites, social media platforms, and messaging apps.",
      "24/7 Availability: Offering constant support to your customers, no matter the time of day.",
      "Customizable Workflows: Tailoring the chatbot to your business’s specific needs and customer interactions.",
    ],
    detailsPageContent: {
      firstPara: `Chatbots are transforming customer service by automating responses and providing immediate support. Our chatbot development services create AI-powered bots that are intuitive, effective, and capable of handling a wide range of customer interactions.`,
    },
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    category: "Web Development",
    description:
      "We had been struggling with our website for a while and reached out to Alphawavesolutions to redesign it. The team truly understood our business needs and audience, crafting a modern and user-friendly site that has boosted both traffic and conversions. We're thrilled with the outcome!",
    name: "Sarah J.",
    title: "Marketing Director, GreenTech Solutions",
  },
  {
    category: "App Development",
    description:
      "Our mobile app needed a major overhaul, and Alphawavesolutions was the perfect partner for the job. They transformed the app into something intuitive, engaging, and full of new features. The final product has had a significant impact on our customer experience, and we couldn’t be happier with the results.",
    name: "David L.",
    title: "CEO, FastTrack Logistics",
  },
  {
    category: "Game Development",
    description:
      "The team at Alphawavesolutions brought our game idea to life in ways we never imagined. From the initial concept to the final launch, they were incredibly thorough and responsive. Our game has become a hit with players, and we couldn't be more satisfied with the result!",
    name: "Mike T.",
    title: "Founder, Pixel Innovations",
  },
  {
    category: "UX/UI Design",
    description:
      "Our platform's interface was complicated and hard to navigate, but Alphawavesolutions's design team worked closely with us to create something user-friendly and intuitive. The new design has improved user engagement, and we’ve received great feedback from our users.",
    name: "Linda W.",
    title: "Head of Product, FinConnect",
  },
  {
    category: "Blockchain",
    description:
      "Implementing blockchain technology into our processes was a huge leap forward for us. Alphawavesolutions helped us design a secure, transparent system that has improved the way we operate and interact with our clients. The team's expertise was invaluable throughout the process.",
    name: "James K.",
    title: "CTO, SecureChain Technologies",
  },
  {
    category: "Data Analytics & Business Intelligence",
    description:
      "Working with Alphawavesolutions was a game-changer for us. Their data analytics solutions have given us a clear picture of our business performance and helped us make data-driven decisions. The insights we've gained have been pivotal in optimizing operations and increasing revenue.",
    name: "Amina S.",
    title: "Operations Manager, Data Solutions Group",
  },
  {
    category: "Artificial Intelligence (AI)",
    description:
      "We were looking for a way to enhance customer service, and Alphawavesolutions delivered exactly what we needed. Their AI-driven chatbots and machine learning solutions have significantly improved response times and customer satisfaction. The team was responsive and always ahead of the curve.",
    name: "Patrick M.",
    title: "Customer Experience Manager, Bright Ideas Inc.",
  },
  {
    category: "Cloud Computing Services",
    description:
      "Transitioning to the cloud with Alphawavesolutions was a smooth and seamless process. Their expertise ensured we faced no downtime during the migration, and our cloud infrastructure is now more flexible and efficient than ever before. We’ve saved money and increased productivity as a result.",
    name: "Olivia R.",
    title: "IT Director, Global Enterprises",
  },
  {
    category: "Chatbot Development",
    description:
      "We needed a solution to handle customer queries more efficiently, and Alphawavesolutions's chatbot development team delivered just that. The chatbot they built is fast, accurate, and has been a huge help in managing customer support, allowing our team to focus on more complex inquiries.",
    name: "Daniel P.",
    title: "Customer Support Manager, RetailCo",
  },
  {
    category: "AR & VR Development",
    description:
      "The augmented reality experience Alphawavesolutions created for our product launch was beyond anything we imagined. It allowed customers to interact with our products in a unique and immersive way, and the feedback has been overwhelmingly positive. Their creativity and technical expertise are second to none.",
    name: "Isabella H.",
    title: "Marketing Manager, LuxeFurniture",
  },
  {
    category: "Internet of Things (IoT) Development",
    description:
      "The IoT solution developed by Alphawavesolutions has had an incredible impact on our operations. We now have real-time data from every device on our production line, allowing us to make data-driven decisions that have improved efficiency and reduced downtime.",
    name: "John C.",
    title: "Head of Operations, AutoTech Industries",
  },
  {
    category: "Custom Software Development",
    description:
      "We had a specific need for a custom software solution to streamline our internal processes, and Alphawavesolutions was the perfect partner. The software they developed has improved efficiency, reduced errors, and made our workflows much smoother. The team’s attention to detail and commitment to our success was impressive.",
    name: "Mark T.",
    title: "COO, TaskForce Solutions",
  },
  {
    category: "Data Analytics Solutions",
    description:
      "Partnering with Alphawavesolutions to implement their data analytics solutions has been transformative for our business. Their expertise helped us unlock insights from our data that have directly informed our strategic decisions. The impact on our bottom line has been incredible.",
    name: "Rebecca L.",
    title: "Senior Data Analyst, MarketEdge Analytics",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: require("./assets/industries/Game.webp"),
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
