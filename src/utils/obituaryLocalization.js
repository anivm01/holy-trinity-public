const getText = (value) => (typeof value === "string" ? value : "");

export const getLocalizedObituary = (obituary, language) => {
  const isBulgarian = language === "bg";

  return {
    name: getText(isBulgarian ? obituary?.name_bg : obituary?.name),
    content: getText(
      isBulgarian ? obituary?.obituary_bg : obituary?.obituary
    ),
  };
};

export const hasLocalizedObituary = (obituary, language) => {
  const localizedObituary = getLocalizedObituary(obituary, language);

  return Boolean(
    localizedObituary.name.trim() || localizedObituary.content.trim()
  );
};
