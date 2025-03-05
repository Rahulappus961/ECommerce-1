import { useState } from "react";
import Products from "./Filter.json"
import img6 from "../assets/images/bg2.jpg"
import img7 from "../assets/images/bg1.jpg"
import img8 from "../assets/images/bg.jpg"
const ProductFilter = () => {
    const [Product, setProduct] = useState(Products);

    const categoryFilter = (filterItem: string) => {
        const FilterData = Products.filter((item: any) => {
            return item.category === filterItem;
        });
        setProduct(FilterData);
    }
    const Subscribe = () => {
        alert("Your Message Has Been Send!")
    }
    return (
        <div>
            <div>
                <div className="filter">
                    <div><h1>Latest Published Items</h1></div>
                    <div className="filter1">
                        <button onClick={() => setProduct(Products)} className="FilterDesign filter2">All</button>
                        <button onClick={() => categoryFilter("horror")} className="FilterDesign">Horror</button>
                        <button onClick={() => categoryFilter("thriller")} className="FilterDesign">Thriller</button>
                        <button onClick={() => categoryFilter("history")} className="FilterDesign">History</button>

                        <button onClick={() => categoryFilter("science fiction")} className="FilterDesign">Science Fiction</button>

                    </div>
                </div>

                <div className="row">
                    {Product.map((item: any) => {
                        const { id, book, image, price, author, rating } = item;
                        return (
                            <div className="col" key={id}>
                                <div>
                                    <img src={image} className="img-card" alt={book}></img>
                                </div>
                                <div className="card-body">
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

            </div>
            <div className="browse1">
                <div ><button className="Browse">Browse More</button></div>
            </div>

            <div>
                <div className="bgmain">

                    <div className="bg3"><div className="bg"><img src={img6} className="bg4"></img></div>
                        <div className="bg-main">
                            <div className="bg1"><h1>The History of  Phipino</h1></div>
                            <div className="bg2"><button className="bg-btn">view Details</button></div>
                        </div>
                    </div>

                    <div className="bg3"><div className="bg"><img src={img7} className="bg4"></img></div>
                        <div className="bg-main">
                            <div className="bg1"><h1>Wilma Mumduya</h1></div>
                            <div className="bg2"><button className="bg-btn">view Details</button></div>
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
        </div>
    )
}
export default ProductFilter;