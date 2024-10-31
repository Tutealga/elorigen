const HowToBuy = ({ children, text, title }) => {
  return (
    <div className='w-full rounded-lg bg-white shadow-[0_1px_1px_0_rgb(0,0,0,0.1)] flex flex-col items-center justify-center gap-4 p-8'>
      <div className='flex flex-col items-center justify-center'>
        {children}
        <strong>{title}</strong>
      </div>
      <p className='text-[#4d4d4d]'>{text}</p>
    </div>
  )
}

export default HowToBuy
