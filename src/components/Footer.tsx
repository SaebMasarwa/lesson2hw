import { FunctionComponent } from "react";

interface FooterProps {
    developer: string;
}
 
const Footer: FunctionComponent<FooterProps> = ({developer}) => {
    return ( <>
        Developed by {developer}
        <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-twitter"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-tiktok"></i>
    </> );
}
 
export default Footer;