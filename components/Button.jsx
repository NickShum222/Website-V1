"use client";

const Button = ({styles, value}) => {
  return (
    <button type="button" className={`${styles} py-4 px-6 font-mono font-medium text-[18px] rounded-sm outline-none`}>{value}</button>
  )
}

export default Button