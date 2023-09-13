const Button = ({ label }) => {
  return (
    <button
      className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg font-bold leading-none bg-main-green text-black border-none'
    >
      {label}
    </button>
  )
}

export default Button;