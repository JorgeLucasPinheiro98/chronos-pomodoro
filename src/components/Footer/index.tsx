import style from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={style.footer}>
      <RouterLink href='/about-pomodoro'>Entenda Mais sobre a tecnica Pomodoro</RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro ¢ - Feito em {new Date().getFullYear()}.
      </RouterLink>
    </footer>
  );
}
