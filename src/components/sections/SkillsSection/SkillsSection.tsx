import { SkillDoughnut } from '../../UI/SkillChart';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const skillGroups = [
    {
      color: ['rgb(0, 165, 191)', 'rgb(178, 228, 236)'],
      skills: [
        { label: 'HTML/CSS', percentage: 85 },
        { label: 'JavaScript', percentage: 70 },
        { label: 'TypeScript', percentage: 60 },
      ],
    },
    {
      color: ['rgb(246, 144, 150)', 'rgb(252, 221, 223)'],
      skills: [
        { label: 'React', percentage: 70 },
        { label: 'Angular', percentage: 70 },
        { label: 'Figma', percentage: 85 },
      ],
    },
    {
      color: ['#fdd876', '#fef3d6'],
      skills: [
        { label: 'Japanese', percentage: 100 },
        { label: 'English', percentage: 75 },
        { label: 'Swedish', percentage: 60 },
      ],
    },
  ];

  return (
    <article id='skills'>
      <h3 className='contentName'>Abilities</h3>

      <div className={styles.allCharts}>
        {skillGroups.map((group, groupIndex) => (
          <div className={styles.charts} key={groupIndex}>
            {group.skills.map((skill) => (
              <div className={styles.chart} key={skill.label}>
                <SkillDoughnut
                  label={skill.label}
                  percentage={skill.percentage}
                  color={group.color}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}
