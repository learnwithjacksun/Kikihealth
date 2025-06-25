interface ThemeStore {
    theme: string;
    toggleTheme: () => void;
    fetchTheme: () => void;
}

interface ButtonWithLoaderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  initialText: string;
  loadingText: string;
}