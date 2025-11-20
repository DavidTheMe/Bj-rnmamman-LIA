type ButtonSmallProps = {
  buttonText: string;
};

function ButtonSmall({ buttonText }: ButtonSmallProps) {
  return (
    <>
      <button
        type="button"
        className="bg-[#985A1C] hover:bg-[#B87F45] text-white font-bold py-2 px-4 m-2"
      >
        {buttonText}
      </button>
    </>
  );
}

export default ButtonSmall;
