import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightFromSquare,
  //   faChevronLeft,
  //   faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectSection() {
  return (
    <>
      <article id='projects'>
        <h3 className='contentName fade'>Projects</h3>

        {/* Triggerbee */}
        <article id='Triggerbee' className='project fade'>
          <div className='projectDetail'>
            <div className='projectTitle'>
              <p>Triggerbee internship</p>
              <div className='icons'>
                <a
                  href='https://help.triggerbee.com/en/articles/10825117-release-notes-2025'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Triggerbee release notes'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>

            <div className='projectType'>
              <p>
                <b>Project Type:</b> Web Development
              </p>
              <p>
                <b>Period:</b> Dec 2024 - May 2025
              </p>
            </div>

            <div className='projectDescriotion'>
              <p>
                As a frontend developer intern at Triggerbee, I worked on UI/UX
                development for a SaaS web customer engagement platform,
                contributing to user interface implementation and improvements
                over six months. In addition to bug fixes, testing, and
                small-scale UI development, I worked on the following projects:
              </p>
              <p>
                - Implemented the front-end for a user activity log feature.
                <br />
                - Developed a new color picker design for the campaign editor.
                <br />- Contributed to a proof of concept (PoC) for introducing
                Storybook.
              </p>
            </div>
          </div>

          <img
            src='./img/material/Triggerbee.jpg'
            className='TriggerbeeImg'
            alt='Triggerbee'
          />
        </article>

        {/* MovieFlix */}
        <article id='MovieFlix' className='project fade'>
          <div className='projectDetail'>
            <div className='projectTitle'>
              <p>MovieFlix</p>
              <div className='icons'>
                <a
                  href='https://github.com/yukasako/movieFlix'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='MovieFlix GitHub'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href='https://movie-flix-teal.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='MovieFlix Live Demo'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>

            <div className='projectType'>
              <p>
                <b>Project Type:</b> Web Development
              </p>
              <p>
                <b>Period:</b> Nov 2025
              </p>
            </div>

            <div className='projectDescriotion'>
              <p>
                MovieFlix is a web application that allows users to browse,
                search, and save favorite movies. Built with React, Vite, and
                TypeScript, deployed on Vercel, and supports English and
                Japanese through internationalization (i18n).
              </p>
            </div>
          </div>

          <video
            className='video'
            src='./video/MovieFlixDemo.mp4'
            autoPlay
            muted
            loop
          />
        </article>

        {/* PokemonApp */}
        <article id='PokemonApp' className='project fade'>
          <div className='projectDetail'>
            <div className='projectTitle'>
              <p>Pokémon App</p>
              <div className='icons'>
                <a
                  href='https://github.com/yukasako/PokemonApp'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='PokemonApp GitHub'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href='https://yukasako.github.io/PokemonApp/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='PokemonApp Live Demo'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>

            <div className='projectType'>
              <p>
                <b>Project Type:</b> Web Development
              </p>
              <p>
                <b>Collaborator:</b> None
              </p>
              <p>
                <b>Period:</b> April 2024
              </p>
            </div>

            <div className='projectDescriotion'>
              <p>
                Game app as a school project by using the Pokémon API. You can
                compare Pokémon stats and play simple battles based on the
                Pokémon stats. Made by JavaScript, HTML/CSS. * Please be aware
                that there is sound.
              </p>
            </div>
          </div>

          <video
            className='video'
            src='./video/PokemonAppDemo.mp4'
            autoPlay
            muted
            loop
          />
        </article>

        {/* TaskOptima */}
        <article id='TaskOptima' className='project fade'>
          <div className='projectDetail'>
            <div className='projectTitle'>
              <p>TaskOptima</p>
              <div className='icons'>
                <a
                  href='https://github.com/yukasako/ProductivityAssistantApp'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='TaskOptima GitHub'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href='https://yukasako.github.io/ProductivityAssistantApp/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='TaskOptima Live Demo'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>

            <div className='projectType'>
              <p>
                <b>Project Type:</b> Web Development
              </p>
              <p>
                <b>Collaborator:</b>{' '}
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
              </p>
              <p>
                <b>Period:</b> March 2024
              </p>
            </div>

            <div className='projectDescriotion'>
              <p>
                Task management app as a school project for an Agile development
                course. Made by JavaScript, HTML/CSS with my classmate Fredrika
                Gerring and Jonas Råhlin.
              </p>
            </div>
          </div>

          <video
            className='video'
            src='./video/TaskOptima-1.mp4'
            autoPlay
            muted
            loop
          />
        </article>

        {/* Ankademin */}
        <article id='Ankademin' className='project fade'>
          <div className='projectDetail'>
            <div className='projectTitle'>
              <p>Ankademin Quiz Farm</p>
              <div className='icons'>
                <a
                  href='https://github.com/yukasako/AnkademinQuiz'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='AnkademinQuiz GitHub'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href='https://yukasako.github.io/AnkademinQuiz/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='AnkademinQuiz Live Demo'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>

            <div className='projectType'>
              <p>
                <b>Project Type:</b> Web Development
              </p>
              <p>
                <b>Collaborator:</b> None
              </p>
              <p>
                <b>Period:</b> Dec 2023
              </p>
            </div>

            <div className='projectDescriotion'>
              <p>
                Quiz-app as a school project. Made by JavaScript, HTML/CSS, and
                all the images are drawn by myself using ClipStudio. Answer the
                Quiz and find baby ducks!
              </p>
            </div>
          </div>

          <video
            className='video'
            src='./video/AnkademinDemo-1.mp4'
            autoPlay
            muted
            loop
          />
        </article>

        {/* Yukainsweden */}
        <article id='Yukainsweden' className='project fade'>
          <div className='projectDetail'>
            <div className='projectTitle'>
              <p>Yuka in Sweden</p>
              <div className='icons'>
                <a
                  href='https://www.instagram.com/yukainsweden/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>

            <div className='projectType'>
              <p>
                <b>Project Type:</b> Comics / Articles
              </p>
              <p>
                <b>Collaborator:</b>{' '}
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
                <a
                  href='https://lobor.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lobor
                </a>
              </p>
              <p>
                <b>Period:</b> 2017 - 2020
              </p>
            </div>

            <div className='projectDescriotion'>
              <p>
                Comic blog on Instagram about my life in Sweden, targeting the
                Japanese audience. This project reached around 20,000 followers
                at its peak.
              </p>
              <p>
                As an extension of this project, I serialized articles in the
                web magazine Pelulu (
                <a
                  href='https://san-ei-corp.co.jp/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  San-Ei Shobo
                </a>
                ) from March to December 2018, as well as created advertising
                comics for{' '}
                <a
                  href='https://manmaru-e.net/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Manmau E-net
                </a>{' '}
                and Lobor.
              </p>
            </div>
          </div>

          <img src='./img/yukainsweden/yukainsweden.webp' alt='' />
        </article>

        {/* YasuragiKids */}
        {/* <article id='YasuragiKids' className='project fade'>
          <div className='projectDetail'>
            <div className='projectTitle'>
              <p>Yasuragi Kids</p>
            </div>

            <div className='projectType'>
              <p>
                <b>Project Type:</b> Comics / Event
              </p>
              <p>
                <b>Collaborator:</b>{' '}
                <a
                  href='https://www.yasuragi.se/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Yasuragi
                </a>
              </p>
              <p>
                <b>Period:</b> Jul - Aug 2018
              </p>
            </div>

            <div className='projectDescriotion'>
              <p>
                The children&apos;s event &quot;Rita Manga dagbok med Yuka&quot;
                at{' '}
                <a
                  href='https://www.yasuragi.se/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Yasuragi
                </a>
                , a Japanese-style spa in Nacka. I taught children how to draw
                manga (comic essays) and helped them to create manga diaries as
                summer memories.
              </p>
            </div>
          </div>

          <div className='slide'>
            <button type='button' onClick={() => (window as any).back?.()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div id='yasuragiImages'>
              <img src='./img/yukainsweden/yasuragi-1.webp' alt='' />
              <img src='./img/yukainsweden/yasuragi-2.webp' alt='' />
              <img src='./img/yukainsweden/yasuragi-4.webp' alt='' />
              <img src='./img/yukainsweden/yasuragi-3.webp' alt='' />
              <img src='./img/yukainsweden/yasuragi-5.webp' alt='' />
              <img src='./img/yukainsweden/yasuragi-8.webp' alt='' />
              <img src='./img/yukainsweden/yasuragi-6.jpeg' alt='' />
            </div>

            <button type='button' onClick={() => (window as any).next?.()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </article> */}
      </article>
    </>
  );
}
