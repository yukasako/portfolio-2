import style from './IntroductionSection.module.css';
import portrait from '@/assets/images/material/portrait.webp';
import watercolor from '@/assets/images/material/watercolor.webp';
import { FadeIn } from '../../UI/FadeIn';

function IntroductionSection() {
  return (
    <>
      <article id='introduction' className={style.introduction}>
        <img className={style.waterColor} src={watercolor} alt='' />
        <img className={style.portrait} src={portrait} alt='portrait' />

        <div className={style.text}>
          <h2>Hi I'm Yuka</h2>
          <h2>A Junior Frontend Developer</h2>
          <FadeIn>
            <p>
              Junior front-end developer, recently graduated from Nackademin, a
              higher vocational education institution in Sweden. While studying,
              I worked as a front-end developer intern at Triggerbee,
              contributing to UI/UX development and user-facing features.
            </p>

            <p>
              Previous experience in web marketing, international logistics,
              customer service and store management. Originally from Tokyo and
              moved to Stockholm in 2016. After completing all the Swedish
              courses, I worked in E-commerce marketing for the Japanese market.
            </p>

            <p>
              I also created an Instagram comic project about life in Sweden,
              @yukainsweden, which reached around 20,000 followers at its peak.
              Frontend development and comic creation are very similar to me.
              Both involve visualising ideas by considering the perspectives of
              users or readers. Both require concentration, persistence and
              patience, and it brings great joy of creating. Skaparglädje is my
              key word, and I aspire to make such work my livelihood.
            </p>
          </FadeIn>
        </div>
      </article>
    </>
  );
}

export default IntroductionSection;
