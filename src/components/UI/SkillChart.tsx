import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

export const SkillDoughnut = ({
  label,
  percentage,
  color,
}: {
  label: string;
  percentage: number;
  color: string[];
}) => {
  const centerText = {
    id: 'centerText',
    beforeDraw(chart: ChartJS<'doughnut'>) {
      const { ctx, chartArea } = chart;

      const x = (chartArea.left + chartArea.right) / 2;
      const y = (chartArea.top + chartArea.bottom) / 1.8;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#000';
      ctx.fillText(label, x, y - 6);
    },
  };

  return (
    <div>
      <Doughnut
        data={{
          labels: ['complete', 'uncomplete'],
          datasets: [
            {
              data: [percentage, 100 - percentage],
              backgroundColor: color,
              borderWidth: 0,
            },
          ],
        }}
        options={{
          cutout: '85%',
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
        }}
        plugins={[centerText]}
      />
    </div>
  );
};
