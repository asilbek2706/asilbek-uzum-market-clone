import type { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = ({className, ...props}: IProps) => {
  return <button className={twMerge("", className)} {...props} />
}

export default Button