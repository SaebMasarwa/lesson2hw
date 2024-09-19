import { FunctionComponent } from "react";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return ( <>
        <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Student</li>
        </ul>
    </> );
}
 
export default Navbar;