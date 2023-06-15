import React from "react";
import Rating from "../HotelDetails/Rating";
function HotelDetailsCarsoul() {
  return (
    <div>
      <h1>Our Customer Review</h1>

      <div class="lg:col-span-3 mb-16">
        <div class="relative mt-4">
          <div className="carousel w-full">
            <div id="rev1" className="carousel-item relative w-full">
              <div className=" border border-blue border-2">
                <p className="text-center ml-8">
                  <p className="text-left">User Name</p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam facere incidunt sunt totam esse consequuntur in
                  quasi dignissimos quaerat animi temporibus nemo ducimus fuga,
                  quas perspiciatis alias veritatis, similique voluptatem.
                  <div className="my-12">
                    <Rating />
                  </div>
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#rev4" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#rev2" className="btn btn-circle bg-blue">
                  ❯
                </a>
              </div>
            </div>
            <div id="rev2" className="carousel-item relative w-full">
              <div className=" border border-blue border-2">
                <p className="text-center ml-8">
                  <p className="text-left">User Name</p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam facere incidunt sunt totam esse consequuntur in
                  quasi dignissimos quaerat animi temporibus nemo ducimus fuga,
                  quas perspiciatis alias veritatis, similique voluptatem.
                  <div className="my-12">
                    <Rating />
                  </div>
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#rev1" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#rev3" className="btn btn-circle bg-blue">
                  ❯
                </a>
              </div>
            </div>
            <div id="rev3" className="carousel-item relative w-full">
              <div className=" border border-blue border-2">
                <p className="text-center ml-8">
                  <p className="text-left">User Name</p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam facere incidunt sunt totam esse consequuntur in
                  quasi dignissimos quaerat animi temporibus nemo ducimus fuga,
                  quas perspiciatis alias veritatis, similique voluptatem.
                  <div className="my-12">
                    <Rating />
                  </div>
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#rev2" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#rev4" className="btn btn-circle bg-blue">
                  ❯
                </a>
              </div>
            </div>
            <div id="rev4" className="carousel-item relative w-full">
              <div className=" border border-blue border-2">
                <p className="text-center ml-8">
                  <p className="text-left">User Name</p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam facere incidunt sunt totam esse consequuntur in
                  quasi dignissimos quaerat animi temporibus nemo ducimus fuga,
                  quas perspiciatis alias veritatis, similique voluptatem.
                  <div className="my-12">
                    <Rating />
                  </div>
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#rev3" className="btn btn-circle bg-blue">
                  ❮
                </a>
                <a href="#rev1" className="btn btn-circle bg-blue">
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
