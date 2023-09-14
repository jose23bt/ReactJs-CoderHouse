import React, { useState, useEffect, useContext } from "react";
import Item from "./Item";
import { ThemeContext } from "../ThemeContext";

const ItemList = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { darkMode } = useContext(ThemeContext);

  const slidesToShow = window.innerWidth >= 768 ? 4 : 1; // Mostrar 3 en PC, 1 en móvil

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCurrentIndex(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const generateSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const adjustedIndex = (currentIndex + i) % products.length;
      const product = products[adjustedIndex];
      slides.push(
        <div
          key={product.id}
          className={`carousel-slide ${
            i === 0 ? "active" : ""
          }`}
          style={{
            flex: `0 0 calc(10% / ${slidesToShow})`,
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          <Item img={product.img} {...product} />
        </div>
      );
    }
    return slides;
  };

  return (
    <div className={`m-3 `}>
      <div className={"d-flex justify-content-center align-items-center mb-3"}>
        <div
          onClick={goToPrevSlide}
        >
          {darkMode ? (
            <span className="material-icons button-icon">arrow_back_ios</span>
          ) : (
            <span className="material-icons button-icon">arrow_back_ios</span>
          )}
        </div>
        <div className="carousel-content" style={{ display: "flex", position: "relative" }}>
          {generateSlides()}
        </div>
        <div
          onClick={goToNextSlide}
        >
          {darkMode ? (
            <span className="material-icons button-icon">arrow_forward_ios</span>
          ) : (
            <span className="material-icons button-icon">arrow_forward_ios</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
