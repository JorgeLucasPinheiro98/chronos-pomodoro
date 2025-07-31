import style from './styles.module.css'

type DefaultButtonProps = {
  icon: React.ReactNode
  color?: 'green' | 'red'
} & React.ComponentProps<'button'>

export function DefaultButton({icon, color = 'green', ...props}: DefaultButtonProps) {
  return (
    <>
      <button className={`${style.button} ${style[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
