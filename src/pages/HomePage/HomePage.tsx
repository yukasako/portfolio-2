import IntroductionSection from '../../components/sections/IntroductionSection/IntroductionSection';
import SkillsSection from '../../components/sections/SkillsSection/SkillsSection';
import HistorySection from '../../components/sections/HistorySection/HistorySection';
import ProjectSection from '../../components/sections/ProjectSection/ProjectSection';
import style from './HomePage.module.css';

function HomePage() {
  return (
    <>
      <article className={style.contents}>
        <IntroductionSection></IntroductionSection>
        <SkillsSection></SkillsSection>
        <HistorySection></HistorySection>
        <ProjectSection></ProjectSection>
      </article>
    </>
  );
}

export default HomePage;
