import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projectsData } from '../../../data/project';
import style from './ProjectSection.module.css';
import { FadeIn } from '../../UI/FadeIn';

import yasuragi1 from '@/assets/images/yukainsweden/yasuragi-1.webp';
import yasuragi2 from '@/assets/images/yukainsweden/yasuragi-2.webp';
import yasuragi4 from '@/assets/images/yukainsweden/yasuragi-4.webp';
import yasuragi3 from '@/assets/images/yukainsweden/yasuragi-3.webp';
import yasuragi5 from '@/assets/images/yukainsweden/yasuragi-5.webp';
import yasuragi8 from '@/assets/images/yukainsweden/yasuragi-8.webp';
import yasuragi6 from '@/assets/images/yukainsweden/yasuragi-6.jpeg';

export default function ProjectSection() {
  const [yasuragiImages, setYasuragiImages] = useState<string[]>([
    yasuragi1,
    yasuragi2,
    yasuragi4,
    yasuragi3,
    yasuragi5,
    yasuragi8,
    yasuragi6,
  ]);

  const yasuragiNext = () => {
    setYasuragiImages((prev) => [...prev.slice(1), prev[0]]);
  };

  const yasuragiBack = () => {
    setYasuragiImages((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <>
      <h3 className='contentName'>Projects</h3>
      <article id='projects' className={style.projects}>
        {projectsData.map((project) => {
          const demoLink = project.links.find((l) => l.type === 'external'); // デモ用
          const githubLink = project.links.find((l) => l.type === 'github'); // GitHubアイコン用

          const clickableProps = demoLink
            ? {
                href: demoLink.href,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `${project.title} demo`,
              }
            : undefined;

          return (
            <FadeIn key={project.id}>
              <article id={project.id} className={`${style.project}`}>
                {' '}
                <FadeIn className={style.projectDetail}>
                  <div className={style.projectTitle}>
                    {demoLink ? (
                      <a className={style.projectTitleLink} {...clickableProps}>
                        <p>{project.title}</p>
                      </a>
                    ) : (
                      <p>{project.title}</p>
                    )}

                    {githubLink && (
                      <div className={style.icons}>
                        <a
                          href={githubLink.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={githubLink.ariaLabel}
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className={style.projectType}>
                    <p>
                      <b>Project Type:</b> {project.projectTypeLabel}
                    </p>

                    {project.collaboratorNodes ? (
                      <p>
                        <b>Collaborator:</b> {project.collaboratorNodes}
                      </p>
                    ) : project.collaboratorLabel ? (
                      <p>
                        <b>Collaborator:</b> {project.collaboratorLabel}
                      </p>
                    ) : null}

                    <p>
                      <b>Period:</b> {project.periodLabel}
                    </p>
                  </div>

                  <div className={style.projectDescriotion}>
                    {project.paragraphs.map((text, i) => (
                      <p key={i} style={{ whiteSpace: 'pre-line' }}>
                        {text}
                      </p>
                    ))}
                  </div>
                </FadeIn>
                {demoLink ? (
                  <a className={style.mediaLink} {...clickableProps}>
                    {project.media.kind === 'image' ? (
                      <img
                        src={project.media.src}
                        alt={project.media.alt}
                        className={style.image}
                      />
                    ) : (
                      <video
                        src={project.media.src}
                        className={style.video}
                        autoPlay={project.media.autoPlay ?? true}
                        muted={project.media.muted ?? true}
                        loop={project.media.loop ?? true}
                      />
                    )}
                  </a>
                ) : project.media.kind === 'image' ? (
                  <img
                    src={project.media.src}
                    alt={project.media.alt}
                    className={style.image}
                  />
                ) : (
                  <video
                    src={project.media.src}
                    className={style.video}
                    autoPlay={project.media.autoPlay ?? true}
                    muted={project.media.muted ?? true}
                    loop={project.media.loop ?? true}
                  />
                )}
              </article>
            </FadeIn>
          );
        })}
        <FadeIn>
          <article id='YasuragiKids' className={`${style.project}`}>
            <div className={style.projectDetail}>
              <div className={style.projectTitle}>
                <a
                  href='https://www.yasuragi.se/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p>Yasuragi Kids</p>
                </a>
              </div>

              <div className={style.projectType}>
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

              <div className={style.projectDescriotion}>
                <p>
                  The children&apos;s event &quot;Rita Manga dagbok med
                  Yuka&quot; at{' '}
                  <a
                    href='https://www.yasuragi.se/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Yasuragi
                  </a>
                  , a Japanese-style spa in Nacka. I taught children how to draw
                  manga (comic essays) and helped them to create manga diaries
                  as summer memories.
                </p>
              </div>
            </div>

            <div className={style.slide}>
              <button
                type='button'
                onClick={yasuragiBack}
                aria-label='Previous'
              >
                ‹
              </button>

              <div className={style.yasuragiImages}>
                {yasuragiImages.map((src, idx) => (
                  <img
                    key={`${src}-${idx}`}
                    src={src}
                    alt={`Yasuragi ${idx + 1}`}
                  />
                ))}
              </div>

              <button type='button' onClick={yasuragiNext} aria-label='Next'>
                ›
              </button>
            </div>
          </article>
        </FadeIn>
      </article>
    </>
  );
}
