type ButtonBigProps = {
  buttonText: string;
};

function ButtonBig({ buttonText }: ButtonBigProps) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-black hover:bg-gray-800 text-xl text-center min-w-40 min-h-24"
      >
        {buttonText}
      </button>
    </>
  );
}

export default ButtonBig;
