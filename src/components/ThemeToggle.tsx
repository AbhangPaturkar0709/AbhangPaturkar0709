
// import { Moon, Sun, Monitor } from 'lucide-react';
// import { useTheme } from '../hooks/useTheme';

// const ThemeToggle = () => {
//   const { theme, setTheme } = useTheme();

//   const cycleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else if (theme === 'dark') {
//       setTheme('system');
//     } else {
//       setTheme('light');
//     }
//   };

//   const getIcon = () => {
//     switch (theme) {
//       case 'light':
//         return <Sun size={16} />;
//       case 'dark':
//         return <Moon size={16} />;
//       case 'system':
//         return <Monitor size={16} />;
//       default:
//         return <Sun size={16} />;
//     }
//   };

//   return (
//     <button
//       onClick={cycleTheme}
//       className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-200 hover-lift"
//       aria-label={`Current theme: ${theme}. Click to cycle themes.`}
//     >
//       {getIcon()}
//     </button>
//   );
// };

// export default ThemeToggle;

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-200 hover-lift"
      aria-label={`Current theme: ${theme}. Click to toggle theme.`}
    >
      {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
