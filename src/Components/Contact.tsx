import { useState } from "react";
import Header from "./Header";
import abt from "../assets/images/about.jpg"
import Footer from "./Footer";

const Contact = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");


    return (
        <div>
            <Header></Header>

            <div>
                <div className="abt3">
                    <div className="abt1"><img src={abt} className="abt8"></img></div>
                    <div className="abt2"><h1>Contact</h1></div>
                </div>

                <div>
                    <div className="cont-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125281.99161540574!2d77.28141047374979!3d11.108739502351169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0424d75b9%3A0x4750551698a91687!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741085155580!5m2!1sen!2sin"
                            width="1340"
                            height="450"
                            className="map"
                            style={{ border: 0 }}
                            allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>

                    </div>
                </div>

                <div className="main-contact">
                    <div className="maincontact1">
                        <div><h1>Get in Touch</h1>
                            <textarea placeholder="Enter Message" className="contact-textarea"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            ></textarea><br></br>
                            {inputValue.trim() === "" && (
                                <p className="textarea-para">um...yea, you have to write something to send this form.</p>
                            )}
                            <input type="text" placeholder="Enter Name" className="contact-text"
                                value={inputValue1}
                                onChange={(e) => setInputValue1(e.target.value)}
                            ></input>
                            {inputValue1.trim() === "" && (
                                <p className="textarea-para">come on, you have a name, don't you?</p>
                            )}
                            <input type="email" placeholder="Email" className="contact-text"
                                value={inputValue2}
                                onChange={(e) => setInputValue2(e.target.value)}
                            ></input>
                            {inputValue2.trim() === "" && (
                                <p className="textarea-para">no email, no message</p>
                            )}
                            <br></br>
                            <input type="text" placeholder="Enter Subject" className="contact-text"
                                value={inputValue3}
                                onChange={(e) => setInputValue3(e.target.value)}
                            ></input>
                            {inputValue3.trim() === "" && (
                                <p className="textarea-para">come on, you have a subject, don't you?</p>
                            )}<br></br>
                            <button className="contact-btn" >Send</button>
                        </div>
                    </div>

                    <div>
                        <div className="contact-details">
                            <div className="home-contmain">
                                <div>
                                    <svg width="31" height="31" fill="none" stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 21V9L2 11l10-8 10 8-2.5-2v12h-15Z"></path>
                                        <path d="M9.5 14.5V21h5v-6.5h-5Z"></path>
                                        <path d="M4.5 21h15"></path>
                                    </svg>
                                </div>
                                <div><h3 className="home-cont1">Buttonwood,California.</h3><p className="home-contact">Rosemead, CA 91770</p></div>
                            </div>

                            <div className="home-contmain">
                                <div>
                                    <svg width="31" height="31" fill="none" stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 15h16v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Z"></path>
                                        <path d="M20 15V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12"></path>
                                        <path d="M11 18.5h2"></path>
                                    </svg>
                                </div>
                                <div><h3 className="home-cont1">+1 253 565 2365</h3><p className="home-contact">Mon to Fri 9am to 6pm</p></div>
                            </div>

                            <div className="home-contmain">
                                <div>
                                    <svg width="31" height="31" fill="none" stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 19.5h20v-15H2v15Z"></path>
                                        <path d="M2 4.5 12 12l10-7.5"></path>
                                        <path d="M12 4.5H2V12"></path>
                                        <path d="M22 12V4.5H12"></path>
                                    </svg>
                                </div>
                                <div><h3 className="home-cont1">support@colorlib.com</h3><p className="home-contact">Send us your query anytime!</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Contact;