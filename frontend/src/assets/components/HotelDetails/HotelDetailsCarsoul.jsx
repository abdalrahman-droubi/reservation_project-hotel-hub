import React from "react";

function HotelDetailsCarsoul() {
  return (
    <div>
      <div class="lg:col-span-3 mb-16">
        <div class="relative mt-4">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.pinimg.com/236x/2f/26/08/2f2608e8aad97f8385d8dca20bd18802.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle bg-blue">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.pinimg.com/236x/2f/26/08/2f2608e8aad97f8385d8dca20bd18802.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle bg-blue">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.pinimg.com/236x/2f/26/08/2f2608e8aad97f8385d8dca20bd18802.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle bg-blue">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.pinimg.com/564x/a4/d0/2a/a4d02ab33b2432aba0d07ab789db1ad7.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle bg-blue">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailsCarsoul;
