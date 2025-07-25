import type React from "react";
import style from './styles.module.css'
import '../../styles/theme.css'

type DefaultInputProps = {
  id: string
  labelText?: string
} & React.ComponentProps<'input'>

export function DefaultInput({id, type, labelText, ...rest}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={style.input} type={type} id={id} {...rest}/>
    </>
  );
}
