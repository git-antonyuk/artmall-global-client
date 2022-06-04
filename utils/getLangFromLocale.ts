const getLangFromLocale = (locale: string): 'en' | 'uk' | null => {
  const lang = locale.split('_')?.[0] || null;

  if (lang === 'en' || lang === 'uk') {
    return lang
  }

  return null;
}

export default getLangFromLocale;
