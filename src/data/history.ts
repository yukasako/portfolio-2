export type HistoryItem = {
  date: string;
  type: 'work' | 'student' | 'life';
  titleKey: string;
  companyKey?: string;
  locationKey?: string;
  descriptionKey?: string;
};

export const historyData: HistoryItem[] = [
  {
    date: '2024 - 2025',
    type: 'work',
    titleKey: 'history.triggerbee.title',
    companyKey: 'history.triggerbee.company',
    locationKey: 'history.stockholm',
    descriptionKey: 'history.triggerbee.description',
  },
  {
    date: '2023 - 2025',
    type: 'student',
    titleKey: 'history.nackademin.title',
    companyKey: 'history.nackademin.company',
    locationKey: 'history.stockholm',
    descriptionKey: 'history.nackademin.description',
  },
  {
    date: '2020 - 2022',
    type: 'work',
    titleKey: 'history.triwa.title',
    companyKey: 'history.triwa.company',
    locationKey: 'history.stockholm',
    descriptionKey: 'history.triwa.description',
  },
  {
    date: '2018 - 2019',
    type: 'student',
    titleKey: 'history.stockholmUniversity.title',
    companyKey: 'history.stockholmUniversity.company',
    locationKey: 'history.stockholm',
    descriptionKey: 'history.stockholmUniversity.description',
  },
  {
    date: '2017',
    type: 'work',
    titleKey: 'history.stadshusrestauranger.title',
    companyKey: 'history.stadshusrestauranger.company',
    locationKey: 'history.stockholm',
    descriptionKey: 'history.stadshusrestauranger.description',
  },
  {
    date: '2016',
    type: 'life',
    titleKey: 'history.moveToStockholm',
  },
  {
    date: '2015 - 2016',
    type: 'work',
    titleKey: 'history.kwe.title',
    companyKey: 'history.kwe.company',
    locationKey: 'history.tokyo',
    descriptionKey: 'history.kwe.description',
  },
  {
    date: '2013 - 2015',
    type: 'work',
    titleKey: 'history.uniqlo.title',
    companyKey: 'history.uniqlo.company',
    locationKey: 'history.tokyo',
    descriptionKey: 'history.uniqlo.description',
  },
  {
    date: '2008 - 2013',
    type: 'student',
    titleKey: 'history.rikkyo.title',
    companyKey: 'history.rikkyo.company',
    locationKey: 'history.tokyo',
    descriptionKey: 'history.rikkyo.description',
  },
  {
    date: '1989',
    type: 'life',
    titleKey: 'history.bornInTokyo',
  },
];
