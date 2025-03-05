import { useEffect, useState } from "react";
import Header from "./Header";
import img2 from "../assets/images/hero1.jpg"
import Books from "./Books";
import {motion} from "framer-motion"
import Featured from "./Featured";
import ProductFilter from "./ProductFilter";
import Footer from "./Footer";

const Home = () => {
    const[show,setshow]=useState(false);
    const [showimage,setshowimage]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setshow(true)
        },2000);
        setTimeout(()=>{
            setshowimage(true)
        },2500)
    })
    return (
        <div>
            <Header></Header>
            <section>
                 
                  
                <div className="home-main">
                    <div className="home-img1">
                        <div ><img src={img2} className="home-img5"></img></div>
                    </div>

                    {show && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="home-img2"
                        >
                            <div className="home-img2">
                                <div className="home-div">
                                    <div className="home-btn3">
                                        <button className="home-btn1">science fiction</button>
                                    </div>
                                    <p className="home-para">The History</p>
                                    <p className="home-para">of Phipino</p>
                                    <div className="home-btn3">
                                        <button className="home-btn2">Browse Store</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    
                </div>
        </section>
        <Books></Books>
        <Featured></Featured>
        <ProductFilter></ProductFilter>
        <Footer></Footer>
        </div>
    )
}
export default Home;