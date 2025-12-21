import { useState } from 'react';
import style from './HistorySection.module.css';
import { historyData } from '../../../data/history';
import { FadeIn } from '../../UI/FadeIn';

export default function HistorySection() {
  const INITIAL_SHOW = 2;
  const STEP = 4;

  const [visibleCount, setVisibleCount] = useState(INITIAL_SHOW);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + STEP, historyData.length));
  };

  return (
    <FadeIn>
      <article id='history' className={`${style.history} ${style.fade}`}>
        <h3 className='contentName'>History</h3>

        <div className={style.timeline}>
          <ul className={style.timelineList}>
            {historyData.map((item, index) => {
              const isHidden = index >= visibleCount;

              const contentClass =
                item.type === 'student'
                  ? style.contentStudent
                  : item.type === 'life'
                  ? style.lifeEvent
                  : style.content;

              return (
                <li
                  key={index}
                  className={`${style.timelineListItem} ${
                    isHidden ? style.isHidden : ''
                  }`}
                >
                  <div className={style.date}>{item.date}</div>

                  <div className={contentClass}>
                    <p className={style.title}>{item.title}</p>
                    <div className={style.companyAndLocation}>
                      <p className={style.company}>{item.company}</p>
                      <p className={style.location}>{item.location}</p>
                    </div>
                    <p className={style.jobDescription}>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          {visibleCount < historyData.length && (
            <div className={style.more}>
              <button
                type='button'
                className={style.moreButton}
                onClick={handleLoadMore}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  );
}
