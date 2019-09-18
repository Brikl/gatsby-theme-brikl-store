export const getTextFromLanguage = (text, langCode) => {
  try {
    return text.find(e => e.langCode === langCode).content
  } catch (error) {
    return null
  }
}
