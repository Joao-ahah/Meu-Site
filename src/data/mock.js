// Mock data for projects and services

export const mockServices = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Desenvolvimento de interfaces modernas e responsivas'
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    description: 'Design de experiência e interface do usuário'
  },
  {
    id: 'graphic',
    name: 'Design Gráfico',
    description: 'Identidade visual e materiais gráficos'
  },
  {
    id: 'video',
    name: 'Edição de Vídeo',
    description: 'Produção e edição de conteúdo audiovisual'
  }
];

export const mockProjects = [
  // Frontend Projects
  {
    id: 1,
    title: 'Catálogo Eletrosol',
    description: 'Catálogo digital para empresa de produtos de limpeza com visualização dos principais produtos e dashboard completo para gerenciamento pelos funcionários.',
    category: 'frontend',
    categoryName: 'Frontend',
    image: '/imagens/eletrosol.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Dashboard', 'Responsive Design'],
    demoUrl: 'https://eletrosolimp.netlify.app/',
    githubUrl: 'https://github.com/Joao-ahah/Catalogo-do-Eletrosolimp'
  },
  {
    id: 2,
    title: 'E-commerce Centro de Artesanato',
    description: 'Plataforma e-commerce completa para o Centro de Artesanato de Russas, com catálogo de produtos artesanais e sistema de vendas online.',
    category: 'frontend',
    categoryName: 'Frontend',
    image: '/imagens/centroartesanato.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'Responsive Design'],
    demoUrl: 'https://centroartesanato.netlify.app/',
    githubUrl: 'https://github.com/Joao-ahah/Centro-de-Artesanato---SITE'
  },
  {
    id: 3,
    title: 'Site Campori Regional',
    description: 'Website institucional para o Campori Regional de Desbravadores com informações do evento, programação e inscrições.',
    category: 'frontend',
    categoryName: 'Frontend',
    image: '/imagens/campori.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Event Management'],
    demoUrl: 'https://camporiregional.netlify.app/',
    githubUrl: 'https://github.com/Joao-ahah/Campori-Regional---Site'
  },
  {
    id: 4,
    title: 'Catálogo Top Natus',
    description: 'Catálogo digital especializado em produtos naturais da empresa Top Natus, incluindo dashboard administrativo para controle de estoque e produtos.',
    category: 'frontend',
    categoryName: 'Frontend',
    image: '/imagens/topnatus.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Dashboard', 'Product Management'],
    demoUrl: 'https://catalogoadriel.netlify.app/',
    githubUrl: 'https://github.com/Joao-ahah/Cat-logoTopNatus'
  },
  {
    id: 5,
    title: 'Quiz da Lição Jovem IASD',
    description: 'Aplicação interativa de quiz para testar o conhecimento dos jovens adventistas sobre a lição da semana, com sistema de pontuação e feedback.',
    category: 'frontend',
    categoryName: 'Frontend',
    image: '/imagens/quiz.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Quiz System', 'Interactive Learning'],
    demoUrl: 'https://quizlicaojovem.netlify.app/',
    githubUrl: 'https://github.com/Joao-ahah/Quizdali-ojovem'
  },

  // UI/UX Projects
  {
    id: 6,
    title: 'Protótipo Aluguel de Imóveis',
    description: 'Protótipo completo de plataforma para aluguel de imóveis, centralizando todos os imóveis disponíveis de uma cidade para facilitar pesquisas e locações.',
    category: 'uiux',
    categoryName: 'UI/UX Design',
    image: '/imagens/aluga+.png',
    technologies: ['Figma', 'Prototyping', 'UX Research', 'Real Estate', 'User Experience'],
    demoUrl: 'https://www.figma.com/proto/KJmY8NVwZVy1OZAeA3hQ9a/Untitled?node-id=0-1',
    githubUrl: null
  },
  
  {
    id: 8,
    title: 'App Foco Zero - Combate à Dengue',
    description: 'Protótipo de aplicativo mobile desenvolvido para auxiliar agentes de endemias no combate à dengue, com ferramentas de monitoramento e prevenção.',
    category: 'uiux',
    categoryName: 'UI/UX Design',
    image: '/imagens/focozero.png',
    technologies: ['Figma', 'Mobile Design', 'App Prototyping', 'Health Tech', 'Social Impact'],
    demoUrl: 'https://www.figma.com/proto/9XE4vl4C9S0jNZyVyy89Pj/FOCO-ZERO--?node-id=14-441&starting-point-node-id=14%3A441',
    githubUrl: null
  },

  // Graphic Design Projects
  {
    id: 9,
    title: 'Identidades Visuais Gastronômicas',
    description: 'Criação de identidades visuais completas para hamburguerias, pizzarias e açaiterias, incluindo logotipos, paletas de cores e aplicações.',
    category: 'graphic',
    categoryName: 'Design Gráfico',
    image: '/imagens/hambur.png',
    technologies: ['Lovart.ai', 'Canva', 'Brand Identity', 'Logo Design', 'Visual Identity'],
    demoUrl: 'https://www.canva.com/design/DAGxalmOPUc/Jg39D0UHXQWB9vEA2dWZjQ/edit?utm_content=DAGxalmOPUc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    githubUrl: null
  },
  {
    id: 10,
    title: 'Eventos Esportivos - Futsal',
    description: 'Desenvolvimento de identidade visual para Copa de Futsal 3x3 e X1 de Futsal, incluindo logos, certificados e materiais promocionais.',
    category: 'graphic',
    categoryName: 'Design Gráfico',
    image: '/imagens/copa.png',
    technologies: ['Canva', 'Sports Branding', 'Lovart.ai', 'Certificate Design', 'Promotional Material'],
    demoUrl: 'https://wa.me/5575992881961?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto!',
    githubUrl: null
  },
  {
    id: 11,
    title: 'Grupo Eletrosol - Identidades Corporativas',
    description: 'Criação de identidades visuais para as empresas do grupo: Eletrosol (tratamento de água), Eletrosolimp (produtos de limpeza) e Eletrosolpiscinas (produtos para piscinas).',
    category: 'graphic',
    categoryName: 'Design Gráfico',
    image: '/imagens/eletrosoll.png',
    technologies: ['Canva', 'Lovart.ai', 'Capcut', 'Industrial Design', 'Multi-brand Strategy'],
    demoUrl: 'https://www.canva.com/design/DAGxaonh_8Q/Qe_IST2iQ4nFFucuLhBE-w/edit?utm_content=DAGxaonh_8Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    githubUrl: null
  },

  // Video Editing Projects
  {
    id: 12,
    title: 'Vídeos Promocionais Empresariais',
    description: 'Produção e edição de vídeos promocionais para empresas do setor alimentício e corporativo, incluindo motion graphics e trilhas sonoras.',
    category: 'video',
    categoryName: 'Edição de Vídeo',
    image: '/imagens/videopromo.png',
    technologies: ['Capcut', 'Canva', 'Inshot', 'Color Grading', 'Audio Editing'],
    demoUrl: 'https://www.linkedin.com/in/jo%C3%A3o-victor-b971482a6/',
    githubUrl: null
  }
];

// Additional mock data for testimonials, skills, etc.
export const mockTestimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    position: 'CEO, TechStart',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face',
    content: 'O trabalho do Victorize superou todas as expectativas. Entregou um produto final excepcional com atenção aos detalhes impressionante.'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    position: 'Product Manager, InnovaCorp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'Profissional altamente qualificado e criativo. Transformou nossa visão em uma interface incrível que nossos usuários adoram.'
  },
  {
    id: 3,
    name: 'Marina Costa',
    position: 'Marketing Director, CreativeHub',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'Colaboração fantástica! O Victorize entende perfeitamente as necessidades do cliente e entrega resultados que realmente fazem a diferença.'
  }
];

export const mockSkills = [
  { category: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'Design', skills: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'] },
  { category: 'Graphics', skills: ['Illustrator', 'Photoshop', 'InDesign', 'CorelDRAW', 'Canva'] },
  { category: 'Video', skills: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Motion'] }
];