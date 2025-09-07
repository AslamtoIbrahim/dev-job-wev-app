type InputProp = {
  placeHolder: string;
  getVlue: (value: string) => void
};

const Input = ({ placeHolder, getVlue }: InputProp) => {
  return (
    <input
      onChange={(e) => getVlue(e.target.value)}
      className="font-kumbh placeholder:text-dark-gray w-full px-2 py-2 outline-none placeholder-shown:truncate dark:text-gray-50"
      type="search"
      placeholder={placeHolder}
    />
  );
};

export default Input;
