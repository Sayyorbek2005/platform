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
  BuildItemIcon,
} from "./Projects.style";
import {
  FaGithub,
  FaShoppingCart,
  FaCommentDots,
  FaBriefcase,
  FaFileCode,
  FaDesktop,
  FaBuilding,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FiCode, FiSearch, FiGlobe, FiShield, FiServer } from "react-icons/fi";

// Project images
import Allimg1 from "./assets/2025-10-22_21-08-45.png";
import Allimg2 from "./assets/2025-10-22_22-07-41.png";
import Allimg3 from "./assets/2025-10-22_22-50-18.png";
import Allimg4 from "./assets/2025-10-22_22-52-57.png";
import Allimg5 from "./assets/2025-10-23_19-13-14.png";
import Allimg6 from "./assets/2025-10-23_19-34-42.png";

// Technology images
import HTML from "./assets/icons8-html-240.png";
import CSS from "./assets/logo_CSS.png";
import Bootstrap from "./assets/icons8-bootstrap-240.png";
import Sass from "./assets/icons8-sass-240.png";
import JavaScript from "./assets/icons8-javascript-240.png";
import ReactImg from "./assets/reactJS_logo.jpeg";
import Redux from "./assets/icons8-redux-240.png";
import TypeScript from "./assets/icons8-typescript-240.png";
import Vue from "./assets/icons8-vue-js-240.png";
import CPlusPlus from "./assets/icons8-c-240.png";
import Python from "./assets/icons8-python-240.png";

// Technologies array
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
];

// What I Can Build
const whatICanBuild = [
  {
    name: "Onlayn do‘kon",
    icon: <FaShoppingCart />,
    description: "To‘liq funktsional elektron tijorat saytlari",
  },
  {
    name: "Real vaqtli chat ilovasi",
    icon: <FaCommentDots />,
    description: "Tezkor xabar almashish ilovalari",
  },
  {
    name: "Portfolio veb-sayti",
    icon: <FaBriefcase />,
    description: "Professional portfolio saytlar",
  },
  {
    name: "Landing Page",
    icon: <FaFileCode />,
    description: "Dizayni optimallashtirilgan landing sahifalar",
  },
  {
    name: "Moslashuvchan dizayn",
    icon: <FaDesktop />,
    description: "Mobil va turli ekranlarga moslashuvchan dizaynlar",
  },
  {
    name: "Biznes sayti",
    icon: <FaBuilding />,
    description: "Korporativ biznes saytlar",
  },
  {
    name: "CRM tizimlari",
    icon: <FaBuilding />,
    description: "Mijozlar bilan munosabatlarni boshqarish tizimlari",
  },
  {
    name: "Kompaniya portfoliosi",
    icon: <FaBuilding />,
    description: "Kompaniya loyihalari va xizmatlarini namoyish qilish",
  },
  {
    name: "Formalar dizayni",
    icon: <FaBuilding />,
    description: "Foydalanuvchiga qulay formalar interfeysi",
  },
];

// Project data
const projectData = {
  all: [
    {
      id: 1,
      title: "Kengaytirilgan kalkulyator",
      desc: "Zamonaviy kalkulyator – ilmiy funksiyalar va chiroyli interfeys dizayni bilan aniq hisob-kitoblar uchun",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      img: Allimg1,
      github: "https://github.com/Mukhamadaliev/Arsha.git",
      demo: "https://arsha-opal.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio veb-sayti",
      desc: "Professional portfolio – loyihalarni namoyish qiluvchi, silliq animatsiyalar va zamonaviy dizayn bilan",
      tags: ["React", "Styled Components", "Framer Motion"],
      img: Allimg2,
      github: "https://github.com/Mukhamadaliev/Passion.git",
      demo: "https://passion-opal.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Elektron tijorat platformasi",
      desc: "To‘liq full-stack elektron tijorat yechimi – savatcha, to‘lovlar va admin panel bilan",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      img: Allimg3,
      github: "https://github.com/Mukhamadaliev/Platia.git",
      demo: "https://platia-alpha.vercel.app/",
    },
    {
      id: 4,
      title: "Vazifa boshqaruvchisi",
      desc: "Ish unumdorligini oshiruvchi ilova – real vaqtda hamkorlik va loyiha boshqaruv funksiyalari bilan",
      tags: ["React", "Firebase", "PWA", "Responsive"],
      img: Allimg4,
      github: "https://github.com/Mukhamadaliev/iPortfolio.git",
      demo: "https://i-portfolio-three-chi.vercel.app",
    },
    {
      id: 5,
      title: "Ob-havo boshqaruv paneli",
      desc: "Chiroyli ob-havo ilovasi – prognozlar, grafiklar va interaktiv xaritalar bilan",
      tags: ["React", "API", "Chart.js", "Geolocation"],
      img: Allimg5,
      github: "https://github.com/Mukhamadaliev/FolioOne",
      demo: "https://folio-one-two.vercel.app/",
    },
    {
      id: 6,
      title: "Ijtimoiy tarmoqlar ilovasi",
      desc: "Zamonaviy ijtimoiy platforma – real vaqtli xabarlar va jamoa funksiyalari bilan",
      tags: ["React", "Firebase", "Node.js", "Socket.io"],
      img: Allimg6,
      github: "https://github.com/Mukhamadaliev/MyPage.git",
      demo: "https://my-page-eight-nu.vercel.app/",
    },
  ],
  frontend: [
    {
      id: 7,
      title: "Landing Page",
      desc: "Animatsiyalar va moslashuvchan dizayn bilan zamonaviy landing sahifa",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      img: Allimg1,
      github: "https://github.com/Mukhamadaliev/landing",
      demo: "https://landing-mukhamadaliev.vercel.app",
    },
    {
      id: 8,
      title: "Admin Dashboard",
      desc: "Diagrammalar va ma’lumot vizualizatsiyasi bilan moslashuvchan admin panel",
      tags: ["React", "Chart.js", "Material-UI"],
      img: Allimg2,
      github: "https://github.com/Mukhamadaliev/dashboard",
      demo: "https://dashboard-mukhamadaliev.vercel.app",
    },
  ],
  seo: [
    {
      id: 9,
      title: "SEO optimallashtirilgan blog",
      desc: "Kengaytirilgan SEO funksiyalari va yuqori ishlash samaradorligiga ega blog platforma",
      tags: ["SEO", "React", "Next.js", "Performance"],
      img: Allimg3,
      github: "https://github.com/Mukhamadaliev/seo-blog",
      demo: "https://seo-blog-mukhamadaliev.vercel.app",
    },
  ],
  domainhosting: [
    {
      id: 10,
      title: "Bulutli hosting xizmati",
      desc: "Avtomatlashtirilgan funksiyalarga ega to‘liq hosting boshqaruv tizimi",
      tags: ["Hosting", "cPanel", "Automation", "DNS"],
      img: Allimg4,
      github: "https://github.com/Mukhamadaliev/hosting",
      demo: "https://hosting-mukhamadaliev.vercel.app",
    },
  ],
  ssl: [
    {
      id: 11,
      title: "SSL menejeri",
      desc: "SSL sertifikatlarini boshqarish va xavfsizlik monitoring tizimi",
      tags: ["SSL", "Security", "HTTPS", "Monitoring"],
      img: Allimg5,
      github: "https://github.com/Mukhamadaliev/ssl-manager",
      demo: "https://ssl-manager-mukhamadaliev.vercel.app",
    },
  ],
};

const Projects = ({ sidebarOpen }) => {
  const [filter, setFilter] = useState("all");
  const filteredProjects = projectData[filter] || [];

  const categories = [
    {
      key: "all",
      label: "Barcha loyihalar",
      icon: <FiCode />,
      count: projectData.all.length,
    },
    {
      key: "frontend",
      label: "Frontend",
      icon: <FiGlobe />,
      count: projectData.frontend.length,
    },
    {
      key: "seo",
      label: "SEO",
      icon: <FiSearch />,
      count: projectData.seo.length,
    },
    {
      key: "domainhosting",
      label: "Domain & Hosting",
      icon: <FiServer />,
      count: projectData.domainhosting.length,
    },
    {
      key: "ssl",
      label: "SSL xavfsizligi",
      icon: <FiShield />,
      count: projectData.ssl.length,
    },
  ];

  return (
    <section
      className={`main-container ${!sidebarOpen ? "sidebar-collapsed" : ""}`}
    >
      <div className="content-wrapper">
        <main>
          <ConteinerProjects>
            <div className="header-section">
              <h1>Mening loyihalarim</h1>
              <p className="subtitle">
                Mening ijodiy ishlarim va texnik yechimlarimni kashf eting
              </p>
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
                    <ProjectCard key={project.id} featured={project.featured}>
                      <ProjectImage>
                        <img src={project.img} alt={project.title} />

                        <div className="image-overlay">
                          <IconLinks>
                            <IconLink
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Manba kodni ko‘rish"
                            >
                              <FaGithub size={18} />
                            </IconLink>
                            <IconLink
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Jonli demo"
                            >
                              <SiVercel size={18} />
                            </IconLink>
                          </IconLinks>
                        </div>

                        {project.featured && (
                          <div className="featured-badge">
                            <span>⭐ Tavsiya etilgan</span>
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

                {filter === "all" && (
                  <>
                    <TechnologiesSection>
                      <h2>Texnologiyalarim</h2>
                      <p className="tech-subtitle">
                        Ajoyib veb tajribalarni yaratishda zamonaviy vositalar va
                        texnologiyalar
                      </p>
                      <TechnologiesGrid>
                        {technologies.map((tech, index) => (
                          <TechnologyCard key={index}>
                            <div className="tech-image-wrapper">
                              <img
                                src={tech.img}
                                alt={tech.name}
                                className="tech-image"
                              />
                            </div>
                            <p className="tech-name">{tech.name}</p>
                          </TechnologyCard>
                        ))}
                      </TechnologiesGrid>
                    </TechnologiesSection>

                    <WhatICanBuildSection>
                      <h2>Nimalarni yaratishim mumkin</h2>
                      <p className="build-subtitle">
                        Biznesingiz ehtiyojlariga moslashtirilgan maxsus yechimlar
                      </p>
                      <WhatICanBuildGrid>
                        {whatICanBuild.map((item, index) => (
                          <BuildItemCard key={index}>
                            <BuildItemIcon>{item.icon}</BuildItemIcon>
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
                <h3>Loyiha topilmadi</h3>
                <p>Bu kategoriya uchun yangi loyihalar qo‘shilmoqda.</p>
              </EmptyState>
            )}
          </ConteinerProjects>
        </main>
      </div>
    </section>
  );
};

export default Projects;
