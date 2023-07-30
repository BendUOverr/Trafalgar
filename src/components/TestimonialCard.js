import React from 'react'

export const TestimonialCard = (props) => {
  return (
    <div className="min-w-[400px] md:min-w-[800px] lg:min-w-[1120px] h-[425px] bg-gradient-to-l from-[#67C3F3] to-[#5A99F2] rounded-3xl text-white flex justify-center">
          {/* container */}
          <div className="flex flex-col justify-between items-center">
            {/* title div */}
            <div className="font-bold lg:text-3xl mt-10 mx-20 sm:text-xl flex">
              <h1>What our customers are saying</h1>
            </div>
            {/* avatar div */}
            <div className="md:flex md:items-end lg:gap-10 pb-20 flex-col">
              {/*profile pic div*/}
              <div className="lg:w-[420px] ml-40 md:mr-10">
                <div className="flex justify-start items-center gap-10">
                  <img
                    className="w-[133px] h-[133px] rounded-full"
                    src={props.avatar}
                    alt=""
                  />
                  <div className="my-5">
                    <h2 className="font-bold">{props.name}</h2>
                    <p>Founder Circle</p>
                  </div>
                </div>
              </div>
              {/* text div */}
              <div className="lg:w-[420px] w-[300px] ml-10 md:ml-0">
                <div>
                  <p>{props.comment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
