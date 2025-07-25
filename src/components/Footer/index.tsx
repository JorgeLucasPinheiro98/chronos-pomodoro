import style from './styles.module.css'

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href="#">Entenda Mais sobre a tecnica Pomodoro</a>
      <a href="#">Chronos Pomodoro ¢ - Feito em {new Date().getFullYear()}.</a>
    </footer>
  )
}
