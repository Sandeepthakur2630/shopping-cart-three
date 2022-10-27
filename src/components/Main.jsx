import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {data.map((product) => {
        return (
          <div key={product.id}>
            {" "}
            <div className="w-24">
              <img src={product.image} alt="/#" />
            </div>
            <div className="">
              <p>{product.title}</p>
              <p>{`Price: ${product.price}`}</p>
              <p>{product.catagory}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Main;
