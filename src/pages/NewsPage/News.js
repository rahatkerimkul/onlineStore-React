import React, { useState, useEffect } from "react";
import "./News.css";

function News() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Motorola edge 40",
      urlimage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70",
    },
    {
      id: 2,
      name: "Realme 11 Pro 5G",
      urlimage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70",
    },
    {
      id: 3,
      name: "Google Pixel 7a",
      urlimage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70",
    },
    {
      id: 4,
      name: "Redmi Note 12Pro 5G",
      urlimage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70",
    },
    {
      id: 5,
      name: "Samsung s21 FE 2023 5G",
      urlimage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70",
    },
    {
      id: 6,
      name: "Redmi 12",
      urlimage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70",
    },
    {
      id: 7,
      name: "Samsung F34 5G",
      urlimage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/r/8/-original-imagtywatxffk3yh.jpeg?q=70",
    },
  ]);
  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/30690f8d7aa02334.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/021fddbf5a195556.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a31be1537f546bf4.jpg?q=20",
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <div className="newspage">
      <div className="slider-container">
        <div
          className="sliders"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="slider-image"
              alt={`slide ${index + 1}`}
            />
          ))}
        </div>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/icon-library-1/arrow-63.png"
          className="righticon"
          onClick={handleNextSlide}
        />
        <img
          src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png"
          className="lefticon"
          onClick={handlePrevSlide}
        />
        <h1>New Phone lines</h1>
      </div>
      <div className="newsitems">
        {items.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.urlimage}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <a href={product.url}>
                <h3>{product.name}</h3>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}

export default News;
