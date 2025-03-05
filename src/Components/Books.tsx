import { useState } from "react";
import Products from "./Products.json";

const Books = () => {
    const [Product, ] = useState(Products);


    return (
        <div className="container-card">

            <div>
                <div className="home-para2">
                    <p className="home-para1">Best Selling Books Ever</p>
                </div>
            </div>

            <div>
                <div>
                    <div className="row">
                        {Product.map((item: any) => {
                            const { id, book, image, price, author, rating } = item;
                            return (

                                <div className="col" key={id}>
                                    <div >
                                        <img src={image} className="img-card"></img></div>
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
            </div>
        </div>
    )
}
export default Books;