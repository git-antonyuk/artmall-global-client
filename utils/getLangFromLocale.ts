const getLangFromLocale = (locale: string): "en" | "uk" => {
  const lang = locale.split("_")?.[0] || null;

  if (lang === "en" || lang === "uk") {
    return lang;
  }

  console.warn("getLangFromLocale, cant't find short lang, returned default");
  return "en";
};

export default getLangFromLocale;
