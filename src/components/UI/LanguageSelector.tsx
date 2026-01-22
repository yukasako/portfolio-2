import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select value={i18n.language} onChange={(e) => changeLang(e.target.value)}>
      <option value='en'>English</option>
      <option value='ja'>日本語</option>
      <option value='sv'>Svenska</option>
    </select>
  );
}
