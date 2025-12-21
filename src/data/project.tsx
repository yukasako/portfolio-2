import triggerbeeImg from '@/assets/images/material/Triggerbee.jpg';
import movieflixVideo from '@/assets/videos/MovieFlixDemo.mp4';
import pokemonVideo from '@/assets/videos/PokemonAppDemo.mp4';
import taskoptimaVideo from '@/assets/videos/TaskOptima-1.mp4';
import ankademinVideo from '@/assets/videos/AnkademinDemo-1.mp4';
import yukainswedenImg from '@/assets/images/yukainsweden/yukainsweden.webp';

export type ProjectLink = {
  type: 'github' | 'external';
  href: string;
  ariaLabel: string;
};

export type ProjectMedia =
  | {
      kind: 'image';
      src: string;
      alt: string;
      className?: string;
    }
  | {
      kind: 'video';
      src: string;
      className?: string;
      autoPlay?: boolean;
      muted?: boolean;
      loop?: boolean;
    };

export type ProjectItem = {
  id: string;
  title: string;
  links: ProjectLink[];
  projectTypeLabel: string;
  periodLabel: string;
  collaboratorLabel?: string;
  collaboratorNodes?: React.ReactNode;
  paragraphs: string[];
  media: ProjectMedia;
};

export const projectsData: ProjectItem[] = [
  {
    id: 'Triggerbee',
    title: 'Triggerbee internship',
    links: [
      {
        type: 'external',
        href: 'https://help.triggerbee.com/en/articles/10825117-release-notes-2025',
        ariaLabel: 'Triggerbee release notes',
      },
    ],
    projectTypeLabel: 'Web Development',
    periodLabel: 'Dec 2024 - May 2025',
    paragraphs: [
      'As a frontend developer intern at Triggerbee, I worked on frontend development for a SaaS web customer engagement platform, contributing to user interface implementation and improvements over six months.',
      'Implemented the front-end for a user activity log feature. Developed a new color picker design for the campaign editor. Contributed to a proof of concept (PoC) for introducing Storybook.',
    ],
    media: {
      kind: 'image',
      src: triggerbeeImg,
      alt: 'Triggerbee',
      className: 'TriggerbeeImg',
    },
  },

  {
    id: 'MovieFlix',
    title: 'MovieFlix',
    links: [
      {
        type: 'github',
        href: 'https://github.com/yukasako/movieFlix',
        ariaLabel: 'MovieFlix GitHub',
      },
      {
        type: 'external',
        href: 'https://movie-flix-teal.vercel.app/',
        ariaLabel: 'MovieFlix Live Demo',
      },
    ],
    projectTypeLabel: 'Web Development',
    periodLabel: 'Nov 2025',
    paragraphs: [
      'MovieFlix is a web application that allows users to browse, search, and save favorite movies. Built with React, Vite, and TypeScript, deployed on Vercel, and supports English and Japanese through internationalization (i18n).',
    ],
    media: {
      kind: 'video',
      src: movieflixVideo,
      className: 'video',
      autoPlay: true,
      muted: true,
      loop: true,
    },
  },

  {
    id: 'PokemonApp',
    title: 'Pokémon App',
    links: [
      {
        type: 'github',
        href: 'https://github.com/yukasako/PokemonApp',
        ariaLabel: 'PokemonApp GitHub',
      },
      {
        type: 'external',
        href: 'https://yukasako.github.io/PokemonApp/',
        ariaLabel: 'PokemonApp Live Demo',
      },
    ],
    projectTypeLabel: 'Web Development',
    periodLabel: 'April 2024',
    paragraphs: [
      'Game app as a school project using the Pokémon API. You can compare Pokémon stats and play simple battles based on the Pokémon stats. Made with JavaScript, HTML/CSS. Please be aware that there is sound.',
    ],
    media: {
      kind: 'video',
      src: pokemonVideo,
      className: 'video',
      autoPlay: true,
      muted: true,
      loop: true,
    },
  },

  {
    id: 'TaskOptima',
    title: 'TaskOptima',
    links: [
      {
        type: 'github',
        href: 'https://github.com/yukasako/ProductivityAssistantApp',
        ariaLabel: 'TaskOptima GitHub',
      },
      {
        type: 'external',
        href: 'https://yukasako.github.io/ProductivityAssistantApp/',
        ariaLabel: 'TaskOptima Live Demo',
      },
    ],
    projectTypeLabel: 'Web Development',
    periodLabel: 'March 2024',
    collaboratorNodes: (
      <>
        <a
          href='https://github.com/fredrika-g'
          target='_blank'
          rel='noopener noreferrer'
        >
          Fredrika Gerring
        </a>
        ,{' '}
        <a
          href='https://github.com/jonas-rahlin'
          target='_blank'
          rel='noopener noreferrer'
        >
          Jonas Råhlin
        </a>
      </>
    ),
    paragraphs: [
      'Task management app as a school project for an Agile development course. Made with JavaScript, HTML/CSS together with Fredrika Gerring and Jonas Råhlin.',
    ],
    media: {
      kind: 'video',
      src: taskoptimaVideo,
      className: 'video',
      autoPlay: true,
      muted: true,
      loop: true,
    },
  },

  {
    id: 'Ankademin',
    title: 'Ankademin Quiz Farm',
    links: [
      {
        type: 'github',
        href: 'https://github.com/yukasako/AnkademinQuiz',
        ariaLabel: 'AnkademinQuiz GitHub',
      },
      {
        type: 'external',
        href: 'https://yukasako.github.io/AnkademinQuiz/',
        ariaLabel: 'AnkademinQuiz Live Demo',
      },
    ],
    projectTypeLabel: 'Web Development',
    periodLabel: 'Dec 2023',
    paragraphs: [
      'Quiz app as a school project. Made with JavaScript, HTML/CSS, and all illustrations were drawn by myself using ClipStudio. Answer the quiz and find baby ducks.',
    ],
    media: {
      kind: 'video',
      src: ankademinVideo,
      className: 'video',
      autoPlay: true,
      muted: true,
      loop: true,
    },
  },

  {
    id: 'Yukainsweden',
    title: 'Yuka in Sweden',
    links: [
      {
        type: 'external',
        href: 'https://www.instagram.com/yukainsweden/',
        ariaLabel: 'Instagram',
      },
    ],
    projectTypeLabel: 'Comics / Articles',
    periodLabel: '2017 - 2020',
    collaboratorNodes: (
      <>
        <a
          href='https://san-ei-corp.co.jp/'
          target='_blank'
          rel='noopener noreferrer'
        >
          San-Ei
        </a>
        ,{' '}
        <a
          href='https://manmaru-e.net/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Manmau-e.net
        </a>
        ,{' '}
        <a href='https://lobor.com/' target='_blank' rel='noopener noreferrer'>
          Lobor
        </a>
      </>
    ),
    paragraphs: [
      'Comic blog on Instagram about my life in Sweden, targeting the Japanese audience. This project reached around 20,000 followers at its peak.',
      'As an extension of this project, I serialized articles in the web magazine Pelulu from March to December 2018, and created advertising comics for Manmau E-net and Lobor.',
    ],
    media: {
      kind: 'image',
      src: yukainswedenImg,
      alt: 'yukainsweden',
    },
  },
];
