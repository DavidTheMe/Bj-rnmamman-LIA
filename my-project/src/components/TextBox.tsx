type TextBoxProps = {
  title: string;
  text: string;
};

function TextBox({ text, title}: TextBoxProps) {
  return (
    <div className="bg-[#985A1C] text-white p-12 m-8 xl:mx-42 2xl:mx-96">
      <h3 className="m-2">{title}</h3>
      <p className="m-2"> {text}</p>
    </div>

  );
}


export default TextBox;
