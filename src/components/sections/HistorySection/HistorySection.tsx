import { useState } from 'react';
import style from './HistorySection.module.css';
import { historyData } from '../../../data/history';
import { FadeIn } from '../../UI/FadeIn';
import { useTranslation } from 'react-i18next';

export default function HistorySection() {
  const { t } = useTranslation();

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
                    <p className={style.title}>{t(item.titleKey)}</p>
                    {item.companyKey && <p>{t(item.companyKey)}</p>}
                    {item.locationKey && <p>{t(item.locationKey)}</p>}
                    {item.descriptionKey && <p>{t(item.descriptionKey)}</p>}
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
