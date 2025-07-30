import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import style from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'
    return storageTheme
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <nav className={style.menu}>
      <RouterLink href='/' className={style.menuLink}>
        <HomeIcon />
      </RouterLink>
      <RouterLink href='/history' className={style.menuLink}>
        <HistoryIcon />
      </RouterLink>
      <RouterLink href='/settings' className={style.menuLink}>
        <SettingsIcon />
      </RouterLink>
      <RouterLink href='/' className={style.menuLink} onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
