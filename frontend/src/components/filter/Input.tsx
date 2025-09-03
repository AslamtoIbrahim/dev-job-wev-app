
type InputProp = {
    placeHolder: string
}

const Input = ({placeHolder}: InputProp) => {
  return (
    <input className="outline-none w-full font-kumbh placeholder:text-dark-gray px-2 " type="text" placeholder={placeHolder} />
  )
}

export default Input
