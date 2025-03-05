import img1 from "../assets/Images/logo (2).png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav1 = useNavigate()
    const nav2 = useNavigate()
    const nav3 = useNavigate()
    const nav4 = useNavigate()
    const nav5 = useNavigate()
    const nav6 = useNavigate()

    const About = () => {
        nav1("/About")
    }
    const Home = () => {
        nav2("/Home")
    }
    const Category = () => {
        nav3("/Category")
    }
    const Blog = () => {
        nav4("/Blog")
    }

    const Contact = () => {
        nav5("/Contact")
    }

    const Pages = () => {
        nav6("/Pages");
    }

    return (
        <div>
            <div className="header1">


                <div className="header">
                    <div><img src={img1} className="header2"></img></div>
                    <div className="head-int">
                        <div>    <input type="text" placeholder="Search book by author or publisher" className="head-int1"></input></div>
                        <div> <svg width="21" height="21" fill="none" className="srh" stroke="#e20303" stroke-linecap="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
                            <path d="M15.857 15.86 21 21.001"></path>
                        </svg></div>
                    </div>
                </div>

                <div className="head1">
                    <div className="head1-1">FAQ</div>
                    <div className="head1-1">Track Order</div>
                    <div>
                        <svg width="28" height="28" fill="none" className="head1-2" stroke="#1a1919" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                            <path d="M18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                            <path d="M2.25 3.75h3L7.5 16.5h12"></path>
                            <path d="M7.5 13.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75a.376.376 0 0 0-.37-.449H6"></path>
                        </svg>
                    </div>
                    <div><button className="head1-3">Sign in</button></div>
                </div>

            </div>


            <div>
                <div className="head2">
                    <ul className="head2-ul">
                        <li className="head2-li" onClick={Home}>Home</li>
                        <li className="head2-li" onClick={About}>About</li>
                        <li className="head2-li" onClick={Category}>Categories</li>
                        <li className="head2-li" onClick={Pages}>Pages</li>
                        <li className="head2-li" onClick={Blog}>Blog</li>
                        <li className="head2-li" onClick={Contact}>Contact</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header;