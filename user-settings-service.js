let userSettings = {
  theme: "light"
};

const allowedThemeSettings = ["light", "dark"];

const initUserSettingsService = () => {
  const savedSettings = localStorage.getItem("userSettings") || {};

  userSettings = { ...userSettings, ...savedSettings  };
};

initUserSettingsService();

export const getUserSettings = () => {
  return userSettings;
}

export const setTheme = (desiredTheme) =>  {
  if (!allowedThemeSettings.includes(desiredTheme)) {
    throw new Error("Theme value can only be light or dark");
  }

  userSettings.theme = desiredTheme;
}