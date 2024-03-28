import LogoUrl from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div>
      <a href="#root">
        {" "}
        <img src={LogoUrl} alt="logo" className="w-[200px]" />
      </a>
    </div>
  );
};

export default Logo;
