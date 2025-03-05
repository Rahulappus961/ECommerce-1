import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Category.json"
import categorie from "../assets/images/category.jpg"
import img8 from "../assets/images/bg.jpg"

const Category = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [Product, ] = useState(Products);

  const Subscribe = () => {
    alert("Your Email has sented")
  }


  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Header></Header>
      <div className="abt3">
        <div className="abt1"><img src={categorie} className="abt8"></img></div>
        <div className="abt2"><h1>Book Category</h1></div>
      </div>


      <div className="ProCrt1">
        <div className="ctrmain">


          <div>
            <h3 className="ctr">Filtered Genres</h3>
            <div className="ctr-main">
              <label className="ctr1">
                <input type="checkbox" name="inbox1" value="option1" className="ctr-2" />History
              </label>
              <label className="ctr1">  <input type="checkbox" name="inbox2" value="option2" className="ctr-2" />Horror
              </label>
              <label className="ctr1"><input type="checkbox" name="inbox3" value="option3" className="ctr-2" /> Thriller
              </label>
              <label className="ctr1"> <input type="checkbox" name="inbox4" value="option4" className="ctr-2" /> Love Stories
              </label>
              <label className="ctr1"><input type="checkbox" name="inbox5" value="option5" className="ctr-2" />Biography
              </label>
            </div>
          </div>


          <div>
            <select id="dropdown" value={selectedOption} onChange={handleChange} className="ctr-filter">
              <option value="" >Filter By Rating</option>
              <option value="option1">5 Star Rating</option>
              <option value="option2">4 Star Rating</option>
              <option value="option3">3 Star Rating</option>
              <option value="option3">2 Star Rating</option>
              <option value="option3">1 Star Rating</option>
            </select>
          </div>

          <div>
            <h3 className="ctr">Filtered by Publisher</h3>
            <div className="ctr-main">
              <label className="ctr1">
                <input type="checkbox" name="inbox1" value="option1" className="ctr-2" />Green Publications
              </label>
              <label className="ctr1">  <input type="checkbox" name="inbox2" value="option2" className="ctr-2" />Anondo Publications
              </label>
              <label className="ctr1"><input type="checkbox" name="inbox3" value="option3" className="ctr-2" /> Rinku Publications
              </label>
              <label className="ctr1"> <input type="checkbox" name="inbox4" value="option4" className="ctr-2" /> Sheba Publications
              </label>
              <label className="ctr1"><input type="checkbox" name="inbox5" value="option5" className="ctr-2" />Red Publications
              </label>
            </div>
          </div>

          <div>
            <h3 className="ctr">Filtered by Author Name</h3>
            <div className="ctr-main">
              <label className="ctr1">
                <input type="checkbox" name="inbox1" value="option1" className="ctr-2" />Buster Hyman
              </label>
              <label className="ctr1">  <input type="checkbox" name="inbox2" value="option2" className="ctr-2" />Phil Haromonic
              </label>
              <label className="ctr1"><input type="checkbox" name="inbox3" value="option3" className="ctr-2" /> Cam L.Toe
              </label>
              <label className="ctr1"> <input type="checkbox" name="inbox4" value="option4" className="ctr-2" /> Otto Matic
              </label>
              <label className="ctr1"><input type="checkbox" name="inbox5" value="option5" className="ctr-2" />Juan Annatoo
              </label>
            </div>
          </div>

        </div>


        <div>
          <div className="ProCrt">

            <div className="ctrfil1">
              <select id="dropdown" value={selectedOption} onChange={handleChange} className="ctr-filter">
                <option value="" >Browse By Popularity</option>
                <option value="option1">Name</option>
                <option value="option2">Old</option>
                <option value="option3">New</option>
                <option value="option3">Price</option>
              </select>
            </div>

            <div>
              <div className="row row2" >
                {Product.map((item: any) => {
                  const { id, book, image, price, author, rating } = item;
                  return (
                    <div className="col " key={id} >
                      <div >
                        <img src={image} className="img-card imgcrt " alt={book}></img>
                      </div>
                      <div className="card-body bdycrt">
                        <h2 className="title">{book}</h2>
                        <div className="category_title">
                          <span className="catgory">{author}</span>
                        </div>
                        <div className="rate">
                          {rating.rate}
                        </div>
                        <div className="count">(<span className="count1">{rating.count} </span>Review)</div>
                        <div className="btn">
                          <button className="btn_price">Rs.{price * 20}</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="browse1">
                <div ><button className="Browse">Browse More</button></div>
              </div>

            </div>


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
  )
}
export default Category;
