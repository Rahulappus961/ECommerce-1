import img4 from "../assets/images/book1.webp";
import img5 from "../assets/images/joker.jpg"
import { motion } from "framer-motion";
const Featured = () => {
  return (
    <div className="feat">
      <div className="feat7">
        <div className="feat9">
          <div><h1 className="feat02">Featured This Week</h1></div>
          <div><button className="feat01">view all</button></div>
        </div>
        <div className="featured">
          <div className="feat10">
            <div><img src={img4}></img></div>
          </div>
          <div>
            <div className="feat11">
              <h1 className="feat1">The Rage of Dragons</h1>
              <p className="feat2">By Evan Winter</p>
              <h1 className="feat3">$50.00</h1>
              <p className="feat4">(125 Review)</p>
              <div className="feat6"><motion.button className="feat5"
                whileHover={{ x: 14, backgroundColor: "#ffffff", color: "#000000", border: "2px solid #ffffff", cursor: "pointer" }}
                transition={{ duration: 0.3 }}>
                View Details
              </motion.button></div>
            </div>
          </div>
        </div>
      </div>

      <div className="feat8">
        <div>
          <img src={img5} className="feat12"></img>
        </div>
      </div>
    </div>
  )
}
export default Featured;