import style from './IntroductionSection.module.css';
import portrait from '@/assets/images/material/portrait.webp';
import watercolor from '@/assets/images/material/watercolor.webp';
import { FadeIn } from '../../UI/FadeIn';
import { useTranslation } from 'react-i18next';

function IntroductionSection() {
  const { t } = useTranslation();

  return (
    <>
      <article id='introduction' className={style.introduction}>
        <img className={style.waterColor} src={watercolor} alt='' />
        <img className={style.portrait} src={portrait} alt='portrait' />

        <div className={style.text}>
          <h2 style={{ whiteSpace: 'pre-line' }}>{t('introduction.h2')}</h2>
          <FadeIn>
            <p style={{ whiteSpace: 'pre-line' }}>{t('introduction.p')}</p>
          </FadeIn>
        </div>
      </article>
    </>
  );
}

export default IntroductionSection;
