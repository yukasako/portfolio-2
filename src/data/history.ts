export type HistoryItem = {
  date: string;
  type: 'work' | 'student' | 'life';
  title: string;
  company?: string;
  location?: string;
  description?: string;
};

export const historyData: HistoryItem[] = [
  {
    date: '2024 - 2025',
    type: 'work',
    title: 'Frontend Developer',
    company: 'Triggerbee',
    location: 'Stockholm, Sweden',
    description:
      'Triggerbee is a SaaS platform that provides web customer engagement and on-site marketing solutions. I joined them as a front-end developer intern for six months, contributing to UI/UX development. Angular, TypeScript, Scss, Git, Figma, Agile, AzureDevOps, Storybook.',
  },
  {
    date: '2023 - 2025',
    type: 'student',
    title: 'Frontend Development Student',
    company: 'Nackademin',
    location: 'Stockholm, Sweden',
    description:
      'JavaScript, HTML, CSS(SASS), Git, Accessibility, Figma, Agile, CMS.',
  },
  {
    date: '2020 - 2022',
    type: 'work',
    title: 'Marketing Associate / Japanese Market',
    company: 'Triwa',
    location: 'Stockholm, Sweden',
    description:
      'Marketing for the Japanese market. Influencer marketing, social media communication, copy writing for digital ads and newsletter communication for subscribers. Content localization, product translation and updating e-commerce website. Inventory control and customer service in Japanese.',
  },
  {
    date: '2018 - 2019',
    type: 'student',
    title: 'Student',
    company: 'Stockholm University',
    location: 'Stockholm, Sweden',
    description: 'Svenska som främmande språk',
  },
  {
    date: '2017',
    type: 'work',
    title: 'Banquet Server',
    company: 'Stadshusrestauranger',
    location: 'Stockholm, Sweden',
    description: 'Serving the Nobel banquet 2018, 2019 and 2022.',
  },
  {
    date: '2016',
    type: 'life',
    title: 'Move to Stockholm',
  },
  {
    date: '2015 - 2016',
    type: 'work',
    title: 'Export Clerk',
    company: 'Kintetsu World Express',
    location: 'Stockholm, Sweden',
    description:
      'Receiving shipping orders from clients and arrange the shipments.',
  },
  {
    date: '2013 - 2015',
    type: 'work',
    title: 'Assistant Store Manager',
    company: 'UNIQLO',
    location: 'Tokyo, Japan',
    description:
      'Managing UNIQLO apparel stores in Tokyo after the 6 month UMC (Uniqlo Management Candidate) program.',
  },
  {
    date: '2008 - 2013',
    type: 'student',
    title: 'Student',
    company: 'Rikkyo University',
    location: 'Tokyo, Japan',
    description: 'Bachelor of Arts - BA, Contemporary Psychology',
  },
  {
    date: '1989',
    type: 'life',
    title: 'Born in Tokyo',
  },
];
