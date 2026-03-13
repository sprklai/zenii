export type Theme = "light" | "dark" | "system";

const THEME_KEY = "zenii_theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem(THEME_KEY) as Theme) ?? "system";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "system") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    root.classList.toggle("dark", prefersDark);
  } else {
    root.classList.toggle("dark", theme === "dark");
  }
}

function createThemeStore() {
  let theme = $state<Theme>(getInitialTheme());

  // Apply initial theme in a closure to capture reactive value
  applyTheme(getInitialTheme());

  return {
    get theme() {
      return theme;
    },

    get isDark(): boolean {
      if (typeof document === "undefined") return false;
      if (theme === "system") {
        return (
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }
      return theme === "dark";
    },

    set(value: Theme) {
      theme = value;
      localStorage.setItem(THEME_KEY, value);
      applyTheme(value);
    },

    toggle() {
      const next: Theme =
        theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
      this.set(next);
    },
  };
}

export const themeStore = createThemeStore();
