import React from "react";

import "./slider.css";
const Reviews = () => {
  return (
    <div className="slider container">
      <div className="slider">
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                dolores earum quia ullam corrupti quidem ipsum voluptas eum
                necessitati
                laudantium exercitationem reprehenderit ut earum unde libero!

              </p>
            </div>
            <div class="carousel-item">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                    dolores earum quia ullam corrupti quidem ipsum voluptas eum
                    necessitati
                    laudantium exercitationem reprehenderit ut earum unde libero!
                    Maxime repellat labore amet molestias voluptate, distinctio iure
                    eos fugiat v
                    repellat i
                  </p>
            </div>
            <div class="carousel-item">
                <p class="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                    dolores earum quia ullam corrupti quidem ipsum voluptas eum
                    necessitati
                    laudantium exercitationem reprehenderit ut earum unde libero!
                    Maxime repellat labore amet molestias voluptate, distinctio iure
                    eos fugiat v
                    repellat
                  </p>
            </div>
          </div>
          <button
            class="carousel-control-prev text-dark"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
           
            <span>Previous</span>
          </button>
          <button
            class="carousel-control-next  text-dark"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
           
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
