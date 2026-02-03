// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Manmeet',
    title: 'Christ University | Bsc Economics Student',
    image: getAsset('images/manmeet.png'), // Customize or replace with your profile image
    description:
      'I am an undergraduate student pursuing a BSc in Economics with Data Science, with a strong interest in data analysis, programming, and business applications of technology.\n'  +
      '\n' +
      'I am currently building my skills in data analytics, machine learning foundations, and research-oriented coursework through academic and self-driven projects.',' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    location: 'Bengaluru,Karnataka',
  },



  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/


  education: [
    {
      institution: 'Christ University',
      degree: 'BSc Economics with Data Science',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Brief description of your focus or thesis'],
    },
    {
      institution: 'Christ Academy Junior College',
      degree: 'CBSE XII(PCMC)-90.2%',
      year: '2023-2025',
      description: ['Key topics or skills learned'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Your Certificate or Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Volunteer',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Snehasadan Boys Home-NGO',
      time: '(Dec 25 – Present)',
      desp: ['Brief responsibility 1', 'Brief responsibility 2'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'manmeetkaur9777@gmail.com.com',
    linkedin: 'https://www.linkedin.com/in/manmeet-840355376/',
  },
};

export default siteConfig;
