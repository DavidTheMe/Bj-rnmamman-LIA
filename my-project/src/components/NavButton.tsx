import ButtonBig from "./ButtonBig"

type NavButtonProps = {
  buttonText: string;
  href: string;
};


function NavButton( {buttonText, href}: NavButtonProps) {
  return (
    <>
    <a href={href}>
      <ButtonBig buttonText={buttonText}/>
    </a>
    </>
  );
}

export default NavButton;