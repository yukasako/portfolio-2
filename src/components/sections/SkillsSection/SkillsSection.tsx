export default function SkillsSection() {
  return (
    <>
      <article id='skills'>
        <h3 className='contentName'>Abilities</h3>

        <div id='allCharts'>
          <div className='charts fade'>
            <div className='chart'>
              <canvas id='HTML'></canvas>
            </div>
            <div className='chart'>
              <canvas id='JavaScript'></canvas>
            </div>
            <div className='chart'>
              <canvas id='TypeScript'></canvas>
            </div>
          </div>

          <div className='charts fade'>
            <div className='chart'>
              <canvas id='React'></canvas>
            </div>
            <div className='chart'>
              <canvas id='Angular'></canvas>
            </div>
            <div className='chart'>
              <canvas id='Figma'></canvas>
            </div>
          </div>

          <div className='charts fade'>
            <div className='chart'>
              <canvas id='Japanese'></canvas>
            </div>
            <div className='chart'>
              <canvas id='English'></canvas>
            </div>
            <div className='chart'>
              <canvas id='Swedish'></canvas>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
