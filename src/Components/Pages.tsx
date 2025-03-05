import Header from './Header';
import Footer from './Footer';
import img8 from "../assets/images/bg.jpg"
import { motion } from "framer-motion";
import img4 from "../assets/images/book1.webp";


const Pages = () => {
    const Pages = () => {
        const page = document.querySelector(".Pages-para") as HTMLElement;
        if (page) {
            page.style.animation = "fade-in-out 3s";
        }
    }

    const Subscribe = () => {
        alert("Your Message Has Been Send!")
    }
    return (
        <div>
            <Header></Header>
            <div className="featured pages1">
                <div className="feat10 pages3">
                    <div><img src={img4} className='page-img'></img></div>
                </div>
                <div>
                    <div className="feat11 pages2">
                        <h1 className="feat1 pages4">The Rage of Dragons</h1>
                        <p className="feat2">By Evan Winter</p>
                        <h1 className="feat3 pages-rup">$50.00</h1>
                        <p className="feat4">(125 Review)</p>
                        <div className="feat6 pages_4">
                            <div><motion.button className="feat5"
                                whileHover={{ x: 14, backgroundColor: "#ffffff", color: "#000000", border: "2px solid #ffffff", cursor: "pointer" }}
                                transition={{ duration: 0.3 }}>
                                Add Cart
                            </motion.button></div>
                            <div className='pages-share'>
                                <svg width="21" height="21" fill="#949494" className='pages-share1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 16.12c-.76 0-1.44.3-1.96.77l-7.13-4.15c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.85c-.54-.5-1.25-.81-2.04-.81-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92Zm0-12.08c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm-12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='filter pages-filter'>
                <div className="filter1">
                    <button className="FilterDesign filter2 page-filter" onClick={() => Pages()}>Description</button>
                    <button className="FilterDesign page-filter" onClick={() => Pages()}>Author</button>
                    <button className="FilterDesign page-filter" onClick={() => Pages()}>Comments</button>
                    <button className="FilterDesign page-filter" onClick={() => Pages()}>Review</button>
                </div>
            </div>
            <div className='pages-mainpara'>
                <div className='pages-para1'>
                    <div className='Pages-para'>
                        Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                    </div>
                    <div className='Pages-para'>  It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
                    </div>
                </div>

            </div>

            <div className="mail-main">
                <div className="mail6">
                    <div className="mail"><img src={img8} className="mail7"></img></div>
                    <div className="mail1">
                        <h1 className="mail2">Join NewsLetter</h1>
                        <p className="mail3">Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.
                        </p>
                        <div className="mail5">
                            <input type="email" placeholder="Enter your email" className="mail4"></input>
                            <button className="bg-btn bg-btn2" onClick={() => Subscribe()}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Pages;