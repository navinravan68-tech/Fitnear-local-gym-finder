import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

const translations = {
  en: {
    findGyms: "Find Best Gyms",
    searchPlaceholder: "Search gyms, areas, or services...",
    nearby: "Nearby Gyms",
    compare: "Compare Gyms",
    profile: "Profile",
    bookTrial: "BOOK FREE TRIAL",
    plans: "Membership Plans",
    aiSelection: "AI POWERED SELECTION",
    lowCrowd: "low crowd",
    moderateCrowd: "moderate crowd",
    heavyCrowd: "heavy crowd"
  },
  ta: {
    findGyms: "சிறந்த ஜிம்களைக் கண்டறியவும்",
    searchPlaceholder: "ஜிம்கள், பகுதிகள் அல்லது சேவைகளைத் தேடுங்கள்...",
    nearby: "அருகிலுள்ள ஜிம்கள்",
    compare: "ஒப்பிடு",
    profile: "சுயவிவரம்",
    bookTrial: "இலவச பயிற்சியை முன்பதிவு செய்யுங்கள்",
    plans: "உறுப்பினர் திட்டங்கள்",
    aiSelection: "AI மூலம் தேர்ந்தெடுக்கப்பட்டது",
    lowCrowd: "குறைந்த கூட்டம்",
    moderateCrowd: "மிதமான கூட்டம்",
    heavyCrowd: "அதிக கூட்டம்"
  }
};

const LanguageContext = createContext({
  lang: 'en' as Language,
  setLang: (l: Language) => {},
  t: (key: keyof typeof translations.en) => ""
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const t = (key: keyof typeof translations.en) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
