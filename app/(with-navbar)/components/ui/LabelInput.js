const LabelInput = ({ label, name, type, pattern, placeholder, change, value, required }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-1'>
        <label className='font-bold'>{label}</label>
        {required && <span role='presentation' aria-hidden='true' class='text-[#FC8181] font-bold'>*</span>}
      </div>
      <input className='rounded border p-2' required name={name} type={type} pattern={pattern} placeholder={placeholder} onChange={change} value={value} />
    </div>
  )
}

export default LabelInput
