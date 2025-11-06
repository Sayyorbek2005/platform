import React, { useState } from "react";
import {
  ConteinerProjects,
  TechnologiesSection,
  TechnologiesGrid,
  TechnologyCard,
  FilterBar,
  Button,
  ProjectsGrid,
  ProjectCard,
  Tags,
  IconLinks,
  IconLink,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  EmptyState,
  Tag,
  WhatICanBuildSection,
  WhatICanBuildGrid,
  BuildItemCard,
  BuildItemIcon
} from "./Projects.style";
import { FaGithub, FaShoppingCart, FaCommentDots, FaBriefcase, FaFileCode, FaDesktop, FaBuilding } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FiCode, FiSearch, FiGlobe, FiShield, FiServer } from "react-icons/fi";

// Project images
import Allimg1 from './assets/2025-10-22_21-08-45.png';
import Allimg2 from './assets/2025-10-22_22-07-41.png';
import Allimg3 from './assets/2025-10-22_22-50-18.png';
import Allimg4 from './assets/2025-10-22_22-52-57.png';
import Allimg5 from './assets/2025-10-23_19-13-14.png';
import Allimg6 from './assets/2025-10-23_19-34-42.png';

// Technology images
import HTML from './assets/icons8-html-240.png';
import CSS from './assets/logo_CSS.png';
import Bootstrap from './assets/icons8-bootstrap-240.png';
import Sass from './assets/icons8-sass-240.png';
import JavaScript from './assets/icons8-javascript-240.png';
import ReactImg from './assets/reactJS_logo.jpeg';
import Redux from './assets/icons8-redux-240.png';
import TypeScript from './assets/icons8-typescript-240.png';
import Vue from './assets/icons8-vue-js-240.png';
import CPlusPlus from './assets/icons8-c-240.png'; 
import Python from './assets/icons8-python-240.png';
// import NodeJs from './assets/a0442558db3e99f463efcbe7789d016d.jpg';
// import FirebaseLogo from './assets/firebase-e1534378181405.png';
// import TailwindCSS from './assets/1_llpgEffXPgjMN0qbkLEfWQ.jpg';

// Technologies array with images
const technologies = [
  { name: "HTML5", img: HTML },
  { name: "CSS3", img: CSS },
  { name: "Bootstrap", img: Bootstrap },
  { name: "Sass", img: Sass },
  { name: "JavaScript", img: JavaScript },
  { name: "React", img: ReactImg },
  { name: "Redux Toolkit", img: Redux },
  { name: "TypeScript", img: TypeScript },
  { name: "Vue.js", img: Vue },
  { name: "C++", img: CPlusPlus },
  { name: "Python", img: Python },
  // { name: "Node.js", img: NodeJs },
  // { name: "Firebase", img: FirebaseLogo },
  // { name: "Tailwind CSS", img: TailwindCSS },
];

// What I Can Build section
const whatICanBuild = [
  {
    name: "Online Shop",
    icon: <FaShoppingCart />,
    description: "Full-featured e-commerce websites"
  },
  {
    name: "Real-time Chat App",
    icon: <FaCommentDots />,
    description: "Instant messaging applications"
  },
  {
    name: "Portfolio Website",
    icon: <FaBriefcase />,
    description: "Professional portfolio sites"
  },
  {
    name: "Landing Page",
    icon: <FaFileCode />,
    description: "Design optimized landing pages"
  },
  {
    name: "Responsive Web Design",
    icon: <FaDesktop />,
    description: "Mobile-friendly responsive designs"
  },
  {
    name: "Business Website",
    icon: <FaBuilding />,
    description: "Corporate business websites"
  },
  {
    name: "CRM Systems",
    icon: <FaBuilding />,
    description: "Customer relationship management systems"
  },
  {
    name: "Company Portfolio",
    icon: <FaBuilding />,
    description: "Showcase company projects and services"
  },
  {
    name: "Forms Design",
    icon: <FaBuilding />,
    description: "User-friendly form interfaces"
  },
];

// Project data
const projectData = {
  all: [
    {
      id: 1,
      title: "Advanced Calculator",
      desc: "Modern calculator with scientific functions and beautiful UI design for precise calculations",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      img: Allimg1,
      github: "https://github.com/Mukhamadaliev/Arsha.git",
      demo: "https://arsha-opal.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "Professional portfolio showcasing projects with smooth animations and modern design",
      tags: ["React", "Styled Components", "Framer Motion"],
      img: Allimg2,
      github: "https://github.com/Mukhamadaliev/Passion.git",
      demo: "https://passion-opal.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "E-commerce Platform",
      desc: "Full-stack e-commerce solution with cart, payments and admin dashboard",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      img: Allimg3,
      github: "https://github.com/Mukhamadaliev/Platia.git",
      demo: "https://platia-alpha.vercel.app/"
    },
    {
      id: 4,
      title: "Task Manager",
      desc: "Productivity app with real-time collaboration and project management features",
      tags: ["React", "Firebase", "PWA", "Responsive"],
      img: Allimg4,
      github: "https://github.com/Mukhamadaliev/iPortfolio.git",
      demo: "https://i-portfolio-three-chi.vercel.app"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      desc: "Beautiful weather app with forecasts, charts and interactive maps",
      tags: ["React", "API", "Chart.js", "Geolocation"],
      img: Allimg5,
      github: "https://github.com/Mukhamadaliev/FolioOne",
      demo: "https://folio-one-two.vercel.app/"
    },
    {
      id: 6,
      title: "Social Media App",
      desc: "Modern social platform with real-time messaging and community features",
      tags: ["React", "Firebase", "Node.js", "Socket.io"],
      img: Allimg6,
      github: "https://github.com/Mukhamadaliev/MyPage.git",
      demo: "https://my-page-eight-nu.vercel.app/"
    }
  ],
  frontend: [
    {
      id: 7,
      title: "Landing Page",
      desc: "Modern landing page with animations and responsive design",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      img: Allimg1,
      github: "https://github.com/Mukhamadaliev/landing",
      demo: "https://landing-mukhamadaliev.vercel.app"
    },
    {
      id: 8,
      title: "Admin Dashboard",
      desc: "Responsive admin panel with charts and data visualization",
      tags: ["React", "Chart.js", "Material-UI"],
      img: Allimg2,
      github: "https://github.com/Mukhamadaliev/dashboard",
      demo: "https://dashboard-mukhamadaliev.vercel.app"
    }
  ],
  seo: [
    {
      id: 9,
      title: "SEO Optimized Blog",
      desc: "Blog platform with advanced SEO features and performance optimization",
      tags: ["SEO", "React", "Next.js", "Performance"],
      img: Allimg3,
      github: "https://github.com/Mukhamadaliev/seo-blog",
      demo: "https://seo-blog-mukhamadaliev.vercel.app"
    }
  ],
  domainhosting: [
    {
      id: 10,
      title: "Cloud Hosting Service",
      desc: "Complete hosting management system with automation features",
      tags: ["Hosting", "cPanel", "Automation", "DNS"],
      img: Allimg4,
      github: "https://github.com/Mukhamadaliev/hosting",
      demo: "https://hosting-mukhamadaliev.vercel.app"
    }
  ],
  ssl: [
    {
      id: 11,
      title: "SSL Manager",
      desc: "SSL certificate management and security monitoring system",
      tags: ["SSL", "Security", "HTTPS", "Monitoring"],
      img: Allimg5,
      github: "https://github.com/Mukhamadaliev/ssl-manager",
      demo: "https://ssl-manager-mukhamadaliev.vercel.app"
    }
  ],
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filteredProjects = projectData[filter] || [];

  const categories = [
    { key: "all", label: "All Projects", icon: <FiCode />, count: projectData.all.length },
    { key: "frontend", label: "Frontend", icon: <FiGlobe />, count: projectData.frontend.length },
    { key: "seo", label: "SEO", icon: <FiSearch />, count: projectData.seo.length },
    { key: "domainhosting", label: "Domain & Hosting", icon: <FiServer />, count: projectData.domainhosting.length },
    { key: "ssl", label: "SSL Security", icon: <FiShield />, count: projectData.ssl.length }
  ];

  return (
    <main>
      <ConteinerProjects>
        <div className="header-section">
          <h1>My Projects</h1>
          <p className="subtitle">Discover my creative work and technical solutions</p>
        </div>

        <FilterBar>
          {categories.map((category) => (
            <Button
              key={category.key}
              active={filter === category.key}
              onClick={() => setFilter(category.key)}
            >
              <span className="btn-icon">{category.icon}</span>
              {category.label}
              <span className="project-count">{category.count}</span>
            </Button>
          ))}
        </FilterBar>

        {filteredProjects.length > 0 ? (
          <>
            <ProjectsGrid>
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  featured={project.featured}
                >
                  <ProjectImage>
                    <img src={project.img} alt={project.title} />
                    
                    <div className="image-overlay">
                      <IconLinks>
                        <IconLink 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="View Source Code"
                        >
                          <FaGithub size={18} />
                        </IconLink>
                        <IconLink 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="Live Demo"
                        >
                          <SiVercel size={18} />
                        </IconLink>
                      </IconLinks>
                    </div>
                    
                    {project.featured && (
                      <div className="featured-badge">
                        <span>⭐ Featured</span>
                      </div>
                    )}
                  </ProjectImage>
                  
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.desc}</ProjectDescription>
                    <Tags>
                      {project.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </Tags>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>

            {/* Technologies section - only for "All Projects" */}
            {filter === "all" && (
              <>
                <TechnologiesSection>
                  <h2>Technologies I Use</h2>
                  <p className="tech-subtitle">Modern tools and technologies for building amazing web experiences</p>
                  <TechnologiesGrid>
                    {technologies.map((tech, index) => (
                      <TechnologyCard key={index}>
                        <div className="tech-image-wrapper">
                          <img src={tech.img} alt={tech.name} className="tech-image" />
                        </div>
                        <p className="tech-name">{tech.name}</p>
                      </TechnologyCard>
                    ))}
                  </TechnologiesGrid>
                </TechnologiesSection>

                {/* What I Can Build section */}
                <WhatICanBuildSection>
                  <h2>What I Can Build</h2>
                  <p className="build-subtitle">Custom solutions tailored to your business needs</p>
                  <WhatICanBuildGrid>
                    {whatICanBuild.map((item, index) => (
                      <BuildItemCard key={index}>
                        <BuildItemIcon>
                          {item.icon}
                        </BuildItemIcon>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </BuildItemCard>
                    ))}
                  </WhatICanBuildGrid>
                </WhatICanBuildSection>
              </>
            )}
          </>
        ) : (
          <EmptyState>
            <div className="empty-icon">
              <FiSearch size={60} />
            </div>
            <h3>No projects found</h3>
            <p>We're working on adding more projects to this category.</p>
          </EmptyState>
        )}
      </ConteinerProjects>
    </main>
  );
};

export default Projects;