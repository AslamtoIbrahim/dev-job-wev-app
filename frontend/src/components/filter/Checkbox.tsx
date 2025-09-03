const Checkbox = ({ isCheck }: { isCheck: boolean }) => {
  return (
    <div className="bg-gray-500/20 size-5 rounded-xs flex justify-center items-center">
      {isCheck && <div className="bg-primary size-3 rounded-xs" />}
    </div>
  );
};

export default Checkbox;
