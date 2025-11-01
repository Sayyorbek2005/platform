// import styled from 'styled-components';

// export const ConteinerProjects = styled.section`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 60px 20px;
//   position: absolute;
//   left: 300px;
//   top: 70px;
//   width: calc(100% - 300px);

//   .header-section {
//     text-align: center;
//     margin-bottom: 50px;

//     h1 {
//       font-size: 3rem;
//       color: #1e293b;
//       margin-bottom: 15px;
//       font-weight: 800;
//       background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//     }

//     .subtitle {
//       font-size: 1.2rem;
//       color: #64748b;
//       max-width: 500px;
//       margin: 0 auto;
//       line-height: 1.6;
//     }
//   }
// `;

// export const TechnologiesSection = styled.div`
//   text-align: center;
//   margin-top: 80px;
//   margin-bottom: 40px;
//   padding: 60px 40px;
//   /* background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); */
//   border-radius: 24px;
//    box-shadow: 
//     0 20px 40px rgba(0, 0, 0, 0.05),
//     0 0 0 1px rgba(59, 130, 246, 0.05);
//   /*border: 1px solid rgba(59, 130, 246, 0.1); */
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 4px;
//     background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//   }
  
//   h2 {
//     font-size: 2.5rem;
//     color: #1e293b;
//     margin-bottom: 15px;
//     font-weight: 700;
//   }
  
//   .tech-subtitle {
//     font-size: 1.1rem;
//     color: #64748b;
//     margin-bottom: 40px;
//     max-width: 400px;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

// export const TechnologiesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
//   gap: 30px;
//   max-width: 900px;
//   margin: 0 auto;
  
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
//     gap: 20px;
//   }
// `;

// export const TechnologyCard = styled.div`
//   background: white;
//   border-radius: 20px;
//   padding: 30px 20px;
//   text-align: center;
//   transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//   box-shadow: 
//     0 8px 25px rgba(0, 0, 0, 0.08),
//     0 0 0 1px rgba(59, 130, 246, 0.05);
//   border: 1px solid rgba(59, 130, 246, 0.1);
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, 
//       transparent, 
//       rgba(59, 130, 246, 0.05), 
//       transparent
//     );
//     transition: left 0.6s ease;
//   }
  
//   &:hover::before {
//     left: 100%;
//   }
  
//   &:hover {
//     transform: translateY(-10px) scale(1.05);
//     /* box-shadow: 
//       0 20px 40px rgba(59, 130, 246, 0.15),
//       0 0 0 1px rgba(59, 130, 246, 0.1); */
//   }
  
//   .tech-image-wrapper {
//     width: 70px;
//     height: 70px;
//     margin: 0 auto 20px;
//     border-radius: 16px;
//     /* background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 12px;
//     transition: all 0.3s ease;
//     font-size: 2rem;
//   }
  
//   &:hover .tech-image-wrapper {
//     background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//     transform: scale(1.1);
//     font-size: 2rem;
//     color: white;
//   }
  
//   .tech-image {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//     border-radius: 12px;
//     transition: all 0.3s ease;
//     filter: grayscale(30%);
//   }
  
//   &:hover .tech-image {
//     filter: grayscale(0%) brightness(1.1);
//   }
  
//   .tech-name {
//     font-size: 0.9rem;
//     font-weight: 700;
//     color: #374151;
//     margin: 0;
//     transition: all 0.3s ease;
//   }
  
//   &:hover .tech-name {
//     color: #1d4ed8;
//   }
// `;

// export const FilterBar = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 15px;
//   margin-bottom: 50px;
// `;

// export const Button = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 14px 24px;
//   border: 2px solid;
//   border-color: ${props => props.active ? 'transparent' : '#e2e8f0'};
//   border-radius: 12px;
//   background: ${props => props.active 
//     ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' 
//     : 'white'};
//   color: ${props => props.active ? 'white' : '#64748b'};
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   box-shadow: ${props => props.active 
//     ? '0 8px 20px rgba(59, 130, 246, 0.3)' 
//     : '0 4px 12px rgba(0, 0, 0, 0.05)'};
  
//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: ${props => props.active 
//       ? '0 12px 25px rgba(59, 130, 246, 0.4)' 
//       : '0 8px 20px rgba(0, 0, 0, 0.1)'};
//     border-color: ${props => props.active ? 'transparent' : '#3b82f6'};
//   }

//   .btn-icon {
//     display: flex;
//     align-items: center;
//   }

//   .project-count {
//     background: ${props => props.active 
//       ? 'rgba(255, 255, 255, 0.2)' 
//       : '#f1f5f9'};
//     color: ${props => props.active ? 'white' : '#64748b'};
//     padding: 4px 10px;
//     border-radius: 20px;
//     font-size: 0.8rem;
//     font-weight: 700;
//     min-width: 24px;
//   }
// `;

// export const ProjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
//   gap: 35px;
//   margin-bottom: 40px;
  
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 25px;
//   }
// `;

// export const ProjectCard = styled.div`
//   background: white;
//   border-radius: 20px;
//   overflow: hidden;
//   box-shadow: 
//     0 10px 30px rgba(0, 0, 0, 0.08),
//     0 0 0 1px rgba(0, 0, 0, 0.02);
//   transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//   border: 1px solid rgba(0, 0, 0, 0.05);
//   position: relative;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: ${props => props.featured ? '4px' : '0'};
//     background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//     z-index: 2;
//     transition: height 0.3s ease;
//   }
  
//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 
//       0 25px 50px rgba(0, 0, 0, 0.12),
//       0 0 0 1px rgba(59, 130, 246, 0.1);
//     border-color: rgba(59, 130, 246, 0.2);
//   }
// `;

// export const ProjectImage = styled.div`
//   position: relative;
//   overflow: hidden;
//   height: 260px;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }

//   &:hover img {
//     transform: scale(1.08);
//   }

//   .image-overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(135deg, 
//       rgba(59, 130, 246, 0.95) 0%, 
//       rgba(29, 78, 216, 0.95) 100%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     opacity: 0;
//     transition: all 0.3s ease;
//   }

//   &:hover .image-overlay {
//     opacity: 1;
//   }

//   .featured-badge {
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//     color: white;
//     padding: 8px 16px;
//     border-radius: 20px;
//     font-size: 0.8rem;
//     font-weight: 700;
//     z-index: 3;
//     box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    
//     span {
//       display: flex;
//       align-items: center;
//       gap: 5px;
//     }
//   }
// `;

// export const IconLinks = styled.div`
//   display: flex;
//   gap: 20px;
// `;

// export const IconLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 50px;
//   height: 50px;
//   background: white;
//   border-radius: 50%;
//   color: #1e293b;
//   text-decoration: none;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  
//   &:hover {
//     background: #1e293b;
//     color: white;
//     transform: scale(1.15) translateY(-3px);
//     box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
//   }
// `;

// export const ProjectContent = styled.div`
//   padding: 32px;
// `;

// export const ProjectTitle = styled.h3`
//   font-size: 1.4rem;
//   font-weight: 700;
//   color: #1e293b;
//   margin-bottom: 15px;
//   line-height: 1.3;
// `;

// export const ProjectDescription = styled.p`
//   color: #64748b;
//   line-height: 1.6;
//   margin-bottom: 24px;
//   font-size: 1rem;
// `;

// export const Tags = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

// export const Tag = styled.span`
//   background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
//   color: #475569;
//   padding: 8px 16px;
//   border-radius: 20px;
//   font-size: 0.85rem;
//   font-weight: 600;
//   border: 1px solid #e2e8f0;
//   transition: all 0.3s ease;
  
//   &:hover {
//     background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//     color: white;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 15px rgba(59, 130, 246, 0.3);
//   }
// `;

// export const EmptyState = styled.div`
//   text-align: center;
//   padding: 100px 20px;
//   color: #64748b;
  
//   .empty-icon {
//     margin-bottom: 25px;
//     color: #cbd5e1;
//   }
  
//   h3 {
//     margin: 0 0 15px;
//     color: #475569;
//     font-size: 1.6rem;
//     font-weight: 600;
//   }
  
//   p {
//     font-size: 1.1rem;
//     max-width: 300px;
//     margin: 0 auto;
//     line-height: 1.6;
//   }
// `;


// // What I Can Build bo'limi uchun yangi style'lar
// export const WhatICanBuildSection = styled.div`
//   text-align: center;
//   margin-top: 80px;
//   margin-bottom: 40px;
//   padding: 60px 40px;
//   border-radius: 24px;
//   /* box-shadow: 
//     0 20px 40px rgba(0, 0, 0, 0.05),
//     0 0 0 1px rgba(59, 130, 246, 0.05); */
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 4px;
//     /* background: linear-gradient(135deg, #10b981 0%, #059669 100%); */
//   }
  
//   h2 {
//     font-size: 2.5rem;
//     color: #1e293b;
//     margin-bottom: 15px;
//     font-weight: 700;
//   }
  
//   .build-subtitle {
//     font-size: 1.1rem;
//     color: #64748b;
//     margin-bottom: 40px;
//     max-width: 400px;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

// export const WhatICanBuildGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 30px;
//   max-width: 1000px;
//   margin: 0 auto;
  
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 20px;
//   }
// `;

// export const BuildItemCard = styled.div`
//   background: white;
//   border-radius: 20px;
//   padding: 40px 30px;
//   text-align: center;
//   transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//   box-shadow: 
//     0 8px 25px rgba(0, 0, 0, 0.08),
//     0 0 0 1px rgba(16, 185, 129, 0.05);
//   border: 1px solid rgba(16, 185, 129, 0.1);
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     /* background: linear-gradient(90deg, 
//       transparent, 
//       #00509d, 
//       transparent
//     ); */
//     transition: left 0.6s ease;
//   }
  
//   &:hover::before {
//     left: 100%;
//   }
  
//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 
//       0 20px 40px rgba(16, 185, 129, 0.15),
//       0 0 0 1px rgba(16, 185, 129, 0.1);
//   }
  
//   h3 {
//     font-size: 1.3rem;
//     font-weight: 700;
//     color: #1e293b;
//     margin: 20px 0 10px;
//   }
  
//   p {
//     color: #64748b;
//     line-height: 1.6;
//     margin: 0;
//     font-size: 0.95rem;
//   }
// `;

// export const BuildItemIcon = styled.div`
//   width: 70px;
//   height: 70px;
//   margin: 0 auto;
//   border-radius: 50%;
//   background: linear-gradient(135deg, #00509d 0%, #00509d 100%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 1.8rem;
//   transition: all 0.3s ease;
  
//   ${BuildItemCard}:hover & {
//     transform: scale(1.1) rotate(5deg);
//   }
// `;






















// // import styled from 'styled-components';

// // export const ConteinerProjects = styled.div`
// //   max-width: 1200px;
// //   margin: 0 auto;
// //   padding: 2rem;

// //   .header-section {
// //     text-align: center;
// //     margin-bottom: 3rem;

// //     h1 {
// //       font-size: 3rem;
// //       font-weight: 700;
// //       color: #2d3748;
// //       margin-bottom: 1rem;
// //     }

// //     .subtitle {
// //       font-size: 1.2rem;
// //       color: #718096;
// //       max-width: 600px;
// //       margin: 0 auto;
// //     }
// //   }
// // `;

// // export const FilterBar = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   flex-wrap: wrap;
// //   gap: 1rem;
// //   margin-bottom: 3rem;
// // `;

// // export const Button = styled.button`
// //   display: flex;
// //   align-items: center;
// //   gap: 0.5rem;
// //   padding: 0.75rem 1.5rem;
// //   border: 2px solid #e2e8f0;
// //   border-radius: 50px;
// //   background: ${props => props.active ? '#4299e1' : 'transparent'};
// //   color: ${props => props.active ? 'white' : '#4a5568'};
// //   font-weight: 600;
// //   cursor: pointer;
// //   transition: all 0.3s ease;

// //   &:hover {
// //     border-color: #4299e1;
// //     background: ${props => props.active ? '#3182ce' : '#ebf8ff'};
// //   }

// //   .btn-icon {
// //     display: flex;
// //     align-items: center;
// //   }

// //   .project-count {
// //     background: ${props => props.active ? 'rgba(255,255,255,0.2)' : '#e2e8f0'};
// //     padding: 0.25rem 0.5rem;
// //     border-radius: 20px;
// //     font-size: 0.8rem;
// //   }
// // `;

// // export const ProjectsGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
// //   gap: 2rem;
// //   margin-bottom: 4rem;
// // `;

// // export const ProjectCard = styled.div`
// //   background: white;
// //   border-radius: 12px;
// //   overflow: hidden;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
// //   border: 1px solid #e2e8f0;
// //   transition: all 0.3s ease;
// //   position: relative;

// //   &:hover {
// //     transform: translateY(-5px);
// //     box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
// //   }

// //   ${props => props.featured && `
// //     border: 2px solid #4299e1;
// //   `}
// // `;

// // export const ProjectImage = styled.div`
// //   position: relative;
// //   height: 200px;
// //   overflow: hidden;

// //   img {
// //     width: 100%;
// //     height: 100%;
// //     object-fit: cover;
// //     transition: transform 0.3s ease;
// //   }

// //   &:hover img {
// //     transform: scale(1.05);
// //   }

// //   .image-overlay {
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     right: 0;
// //     bottom: 0;
// //     background: rgba(0, 0, 0, 0.7);
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     opacity: 0;
// //     transition: opacity 0.3s ease;
// //   }

// //   &:hover .image-overlay {
// //     opacity: 1;
// //   }

// //   .featured-badge {
// //     position: absolute;
// //     top: 1rem;
// //     right: 1rem;
// //     background: #4299e1;
// //     color: white;
// //     padding: 0.5rem 1rem;
// //     border-radius: 20px;
// //     font-size: 0.8rem;
// //     font-weight: 600;
// //   }
// // `;

// // export const IconLinks = styled.div`
// //   display: flex;
// //   gap: 1rem;
// // `;

// // export const IconLink = styled.a`
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   width: 45px;
// //   height: 45px;
// //   background: white;
// //   border-radius: 50%;
// //   color: #2d3748;
// //   text-decoration: none;
// //   transition: all 0.3s ease;

// //   &:hover {
// //     background: #4299e1;
// //     color: white;
// //     transform: scale(1.1);
// //   }
// // `;

// // export const ProjectContent = styled.div`
// //   padding: 1.5rem;
// // `;

// // export const ProjectTitle = styled.h3`
// //   font-size: 1.25rem;
// //   font-weight: 700;
// //   color: #2d3748;
// //   margin-bottom: 0.5rem;
// // `;

// // export const ProjectDescription = styled.p`
// //   color: #718096;
// //   line-height: 1.6;
// //   margin-bottom: 1rem;
// // `;

// // export const Tags = styled.div`
// //   display: flex;
// //   flex-wrap: wrap;
// //   gap: 0.5rem;
// // `;

// // export const Tag = styled.span`
// //   background: #edf2f7;
// //   color: #4a5568;
// //   padding: 0.25rem 0.75rem;
// //   border-radius: 20px;
// //   font-size: 0.8rem;
// //   font-weight: 500;
// // `;

// // export const TechnologiesSection = styled.section`
// //   margin: 4rem 0;
// //   text-align: center;

// //   h2 {
// //     font-size: 2.5rem;
// //     font-weight: 700;
// //     color: #2d3748;
// //     margin-bottom: 1rem;
// //   }

// //   .tech-subtitle {
// //     font-size: 1.1rem;
// //     color: #718096;
// //     max-width: 600px;
// //     margin: 0 auto 3rem;
// //   }
// // `;

// // export const TechnologiesGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
// //   gap: 2rem;
// // `;

// // export const TechnologyCard = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   padding: 1.5rem 1rem;
// //   background: white;
// //   border-radius: 12px;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
// //   border: 1px solid #e2e8f0;
// //   transition: all 0.3s ease;

// //   &:hover {
// //     transform: translateY(-3px);
// //     box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
// //   }

// //   .tech-image-wrapper {
// //     width: 60px;
// //     height: 60px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     margin-bottom: 1rem;
// //   }

// //   .tech-image {
// //     width: 100%;
// //     height: 100%;
// //     object-fit: contain;
// //   }

// //   .tech-name {
// //     font-weight: 600;
// //     color: #2d3748;
// //     margin: 0;
// //   }
// // `;

// // export const WhatICanBuildSection = styled.section`
// //   margin: 4rem 0;
// //   text-align: center;

// //   h2 {
// //     font-size: 2.5rem;
// //     font-weight: 700;
// //     color: #2d3748;
// //     margin-bottom: 1rem;
// //   }

// //   .build-subtitle {
// //     font-size: 1.1rem;
// //     color: #718096;
// //     max-width: 600px;
// //     margin: 0 auto 3rem;
// //   }
// // `;

// // export const WhatICanBuildGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// //   gap: 2rem;
// // `;

// // export const BuildItemCard = styled.div`
// //   background: white;
// //   padding: 2rem 1.5rem;
// //   border-radius: 12px;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
// //   border: 1px solid #e2e8f0;
// //   text-align: center;
// //   transition: all 0.3s ease;

// //   &:hover {
// //     transform: translateY(-3px);
// //     box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
// //   }

// //   h3 {
// //     font-size: 1.25rem;
// //     font-weight: 700;
// //     color: #2d3748;
// //     margin: 1rem 0 0.5rem;
// //   }

// //   p {
// //     color: #718096;
// //     line-height: 1.6;
// //     margin: 0;
// //   }
// // `;

// // export const BuildItemIcon = styled.div`
// //   width: 70px;
// //   height: 70px;
// //   background: #4299e1;
// //   border-radius: 50%;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   margin: 0 auto;
// //   color: white;
// //   font-size: 1.5rem;
// // `;

// // export const EmptyState = styled.div`
// //   text-align: center;
// //   padding: 4rem 2rem;
// //   color: #718096;

// //   .empty-icon {
// //     margin-bottom: 1.5rem;
// //     color: #cbd5e0;
// //   }

// //   h3 {
// //     font-size: 1.5rem;
// //     margin-bottom: 1rem;
// //     color: #4a5568;
// //   }

// //   p {
// //     font-size: 1.1rem;
// //   }
// // `;

// // export default ConteinerProjects;










































































import styled from 'styled-components';

export const ConteinerProjects = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  position: absolute;
  left: 300px;
  top: 70px;
  width: calc(100% - 300px);

  /* Planshet (768px - 1024px) */
  @media (max-width: 1024px) {
    left: 250px;
    width: calc(100% - 250px);
    padding: 50px 20px;
  }

  /* Kichik planshet (576px - 768px) */
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    left: 0;
    padding: 40px 20px;
    margin-top: 60px;
  }

  /* Telefon (320px - 576px) */
  @media (max-width: 576px) {
    padding: 30px 15px;
    margin-top: 50px;
  }

  .header-section {
    text-align: center;
    margin-bottom: 50px;

    /* Planshet */
    @media (max-width: 1024px) {
      margin-bottom: 40px;
    }

    /* Telefon */
    @media (max-width: 576px) {
      margin-bottom: 30px;
    }

    h1 {
      font-size: 3rem;
      color: #1e293b;
      margin-bottom: 15px;
      font-weight: 800;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      /* Planshet */
      @media (max-width: 1024px) {
        font-size: 2.5rem;
      }

      /* Kichik planshet */
      @media (max-width: 768px) {
        font-size: 2.2rem;
      }

      /* Telefon */
      @media (max-width: 576px) {
        font-size: 1.8rem;
        margin-bottom: 10px;
      }
    }

    .subtitle {
      font-size: 1.2rem;
      color: #64748b;
      max-width: 500px;
      margin: 0 auto;
      line-height: 1.6;

      /* Planshet */
      @media (max-width: 1024px) {
        font-size: 1.1rem;
      }

      /* Telefon */
      @media (max-width: 576px) {
        font-size: 1rem;
        padding: 0 10px;
      }
    }
  }
`;

export const TechnologiesSection = styled.div`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(59, 130, 246, 0.05);
  position: relative;
  overflow: hidden;
  
  /* Planshet */
  @media (max-width: 1024px) {
    margin-top: 60px;
    padding: 50px 30px;
  }

  /* Kichik planshet */
  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 40px 20px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    margin-top: 40px;
    padding: 30px 15px;
    border-radius: 16px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  }
  
  h2 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 15px;
    font-weight: 700;

    /* Planshet */
    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    /* Kichik planshet */
    @media (max-width: 768px) {
      font-size: 2rem;
    }

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
  }
  
  .tech-subtitle {
    font-size: 1.1rem;
    color: #64748b;
    margin-bottom: 40px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    /* Kichik planshet */
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 30px;
    }

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 0.9rem;
      margin-bottom: 25px;
      padding: 0 10px;
    }
  }
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  
  /* Planshet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 25px;
    max-width: 800px;
  }
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
  }
  
  /* Telefon */
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 15px;
  }
`;

export const TechnologyCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    padding: 25px 15px;
    border-radius: 16px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    padding: 20px 10px;
    border-radius: 12px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(59, 130, 246, 0.05), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
  }
  
  .tech-image-wrapper {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    transition: all 0.3s ease;
    font-size: 2rem;

    /* Kichik planshet */
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
    }

    /* Telefon */
    @media (max-width: 576px) {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
      padding: 8px;
    }
  }
  
  &:hover .tech-image-wrapper {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    transform: scale(1.1);
    font-size: 2rem;
    color: white;
  }
  
  .tech-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    transition: all 0.3s ease;
    filter: grayscale(30%);
  }
  
  &:hover .tech-image {
    filter: grayscale(0%) brightness(1.1);
  }
  
  .tech-name {
    font-size: 0.9rem;
    font-weight: 700;
    color: #374151;
    margin: 0;
    transition: all 0.3s ease;

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }
  
  &:hover .tech-name {
    color: #1d4ed8;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 50px;

  /* Kichik planshet */
  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 40px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    gap: 8px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border: 2px solid;
  border-color: ${props => props.active ? 'transparent' : '#e2e8f0'};
  border-radius: 12px;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' 
    : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active 
    ? '0 8px 20px rgba(59, 130, 246, 0.3)' 
    : '0 4px 12px rgba(0, 0, 0, 0.05)'};
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  /* Telefon */
  @media (max-width: 576px) {
    padding: 10px 16px;
    font-size: 0.8rem;
    gap: 6px;
    border-radius: 10px;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.active 
      ? '0 12px 25px rgba(59, 130, 246, 0.4)' 
      : '0 8px 20px rgba(0, 0, 0, 0.1)'};
    border-color: ${props => props.active ? 'transparent' : '#3b82f6'};
  }

  .btn-icon {
    display: flex;
    align-items: center;

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }

  .project-count {
    background: ${props => props.active 
      ? 'rgba(255, 255, 255, 0.2)' 
      : '#f1f5f9'};
    color: ${props => props.active ? 'white' : '#64748b'};
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    min-width: 24px;

    /* Telefon */
    @media (max-width: 576px) {
      padding: 3px 8px;
      font-size: 0.7rem;
      min-width: 20px;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 35px;
  margin-bottom: 40px;
  
  /* Planshet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
  }
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }
  
  /* Telefon */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    border-radius: 16px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    border-radius: 12px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${props => props.featured ? '4px' : '0'};
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    z-index: 2;
    transition: height 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.2);
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 260px;
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    height: 220px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    height: 200px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.95) 0%, 
      rgba(29, 78, 216, 0.95) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover .image-overlay {
    opacity: 1;
  }

  .featured-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    z-index: 3;
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);

    /* Telefon */
    @media (max-width: 576px) {
      top: 15px;
      right: 15px;
      padding: 6px 12px;
      font-size: 0.7rem;
    }
    
    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const IconLinks = styled.div`
  display: flex;
  gap: 20px;

  /* Telefon */
  @media (max-width: 576px) {
    gap: 15px;
  }
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  color: #1e293b;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  
  /* Telefon */
  @media (max-width: 576px) {
    width: 45px;
    height: 45px;
  }
  
  &:hover {
    background: #1e293b;
    color: white;
    transform: scale(1.15) translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  }
`;

export const ProjectContent = styled.div`
  padding: 32px;

  /* Kichik planshet */
  @media (max-width: 768px) {
    padding: 25px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 15px;
  line-height: 1.3;

  /* Kichik planshet */
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const ProjectDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 1rem;

  /* Kichik planshet */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 18px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  /* Telefon */
  @media (max-width: 576px) {
    gap: 8px;
  }
`;

export const Tag = styled.span`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #475569;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  /* Telefon */
  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(59, 130, 246, 0.3);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 100px 20px;
  color: #64748b;
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    padding: 80px 20px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    padding: 60px 15px;
  }
  
  .empty-icon {
    margin-bottom: 25px;
    color: #cbd5e1;

    /* Telefon */
    @media (max-width: 576px) {
      margin-bottom: 20px;
    }
  }
  
  h3 {
    margin: 0 0 15px;
    color: #475569;
    font-size: 1.6rem;
    font-weight: 600;

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 1.4rem;
      margin-bottom: 12px;
    }
  }
  
  p {
    font-size: 1.1rem;
    max-width: 300px;
    margin: 0 auto;
    line-height: 1.6;

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 1rem;
      max-width: 250px;
    }
  }
`;

// What I Can Build bo'limi uchun yangi style'lar
export const WhatICanBuildSection = styled.div`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 60px 40px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  
  /* Planshet */
  @media (max-width: 1024px) {
    margin-top: 60px;
    padding: 50px 30px;
  }

  /* Kichik planshet */
  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 40px 20px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    margin-top: 40px;
    padding: 30px 15px;
    border-radius: 16px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  }
  
  h2 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 15px;
    font-weight: 700;

    /* Planshet */
    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    /* Kichik planshet */
    @media (max-width: 768px) {
      font-size: 2rem;
    }

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
  }
  
  .build-subtitle {
    font-size: 1.1rem;
    color: #64748b;
    margin-bottom: 40px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    /* Kichik planshet */
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 30px;
    }

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 0.9rem;
      margin-bottom: 25px;
      padding: 0 10px;
    }
  }
`;

export const WhatICanBuildGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  
  /* Planshet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
  }
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }
  
  /* Telefon */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

// Avval BuildItemIcon ni e'lon qilamiz
export const BuildItemIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(135deg, #00509d 0%, #00509d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.6rem;
  }

  /* Telefon */
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// Keyin BuildItemCard ni e'lon qilamiz
export const BuildItemCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  position: relative;
  overflow: hidden;
  
  /* Kichik planshet */
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
  }

  /* Telefon */
  @media (max-width: 576px) {
    padding: 25px 15px;
    border-radius: 12px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(16, 185, 129, 0.05), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 40px rgba(16, 185, 129, 0.15),
      0 0 0 1px rgba(16, 185, 129, 0.1);
  }

  &:hover ${BuildItemIcon} {
    transform: scale(1.1) rotate(5deg);
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1e293b;
    margin: 20px 0 10px;

    /* Kichik planshet */
    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin: 15px 0 8px;
    }

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 1.1rem;
      margin: 12px 0 6px;
    }
  }
  
  p {
    color: #64748b;
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;

    /* Telefon */
    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
`;