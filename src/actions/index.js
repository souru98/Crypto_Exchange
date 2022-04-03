export const changeTheme = () => {
  return {
    type: "changeTheme",
  };
};
export const changeLang = (lang) => {
  return {
    type: "changeLang",
    payload: lang,
  };
};
export const changeCurrency = (currency) => {
  return {
    type: "changeCurrency",
    payload: currency,
  };
};
