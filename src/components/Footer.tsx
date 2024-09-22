import { FunctionComponent } from "react";

interface FooterProps {
  developer: string;
}

const Footer: FunctionComponent<FooterProps> = ({ developer }) => {
  return (
    <>
      <div>
        Developed by <span className="fw-bold">{developer}</span>
      </div>
      <i className="fa-brands fa-square-instagram m-2"></i>
      <i className="fa-brands fa-square-twitter m-2"></i>
      <i className="fa-brands fa-facebook m-2"></i>
      <i className="fa-brands fa-tiktok m-2"></i>
    </>
  );
};
export default Footer;
