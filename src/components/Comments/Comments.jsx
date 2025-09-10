import React, { useState } from "react";
import { testimonials } from "./date";
import "./Comments.scss";

export default function Comments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="comments-container rounded-xl flex h-170 bg-white">
      <div className="w-1/2 sides left-side flex flex-col justify-center p-8 relative">
        <div className="testimonials-header mb-8 text-center flex flex-col items-center">
          <h2 className="feedback">Feedback Our Investor</h2>
          <div className="testimonials-badge rounded-xl">
            <p>TESTIMONIALS</p>
          </div>
        </div>
        <div className="carousel-wrapper relative overflow-hidden flex-1 rounded-lg bg-gray-100">
          <div
            className="carousel-slides flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 p-6 flex flex-col justify-center h-full"
              >
                <div className="testimonial-card bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between">
                  <div className="quote-section">
                    <div className="quote-badge  rounded-full w-12 h-12 flex items-center justify-center">
                      {testimonials.findIndex((t) => t.id === testimonial.id) +
                        1}
                    </div>
                    <p className=" text-lg leading-relaxed italic mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="author-section">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      <div className="w-1/2 sides relative overflow-hidden">
        <div className="world-map rounded-xl absolute inset-0 bg-cover bg-center"></div>
        <div className="map-overlay absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`user-pin absolute transition-all duration-500 flex items-center justify-center ${
              index === currentIndex ? "scale-110 z-10" : "opacity-60"
            }`}
            style={{
              top: testimonial.mapPosition.top,
              left: testimonial.mapPosition.left,
              transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
            }}
          >
            <div
              className={`pin-avatar-wrapper ${
                index === currentIndex ? "highlighted" : ""
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full shadow-lg"
              />
              {index === currentIndex && <div className="highlight-ring"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
