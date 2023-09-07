'use client'
import React, {useState} from 'react'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Sliders = () => {

    const [current, setCurrent] = useState(0)

    const slides = [
        {
            url: "https://cdn.discordapp.com/attachments/1013244437243117640/1142649045618278420/half_fresh-min.png"
        },
        {
            url: "https://cdn.discordapp.com/attachments/1013244437243117640/1142649044846522429/promo-code-1-min.png"
        },
        {
            url: "https://cdn.discordapp.com/attachments/1013244437243117640/1142649046134165525/nycad_sushi_work-min.png"
        }
    ]

    const prevSlide = () => {
        const goBack = current === 0;
        const prevSlide = goBack ? slides.length -1 : current -1;
        setCurrent(prevSlide)
    }

    const nextSlide = () => {
        const forward = current === slides.length -1;
        const nextSlide = forward ? 0 : current + 1;
        setCurrent(nextSlide)
    }

    const dotSlides = (sushi) => {
        setCurrent(sushi)
    }

  return (
    <div className="bg-black">

        <div className="h-[900px] w-full m-auto relative group">
            <div style={{backgroundImage: `url(${slides[current].url})`}} className="w-full h-full bg-contain bg-no-repeat bg-center duration-300"></div>

            <div onClick={prevSlide} className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] text-white left-10">
                <BsArrowLeftCircle size={30} />
            </div>

            <div onClick={nextSlide} className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] text-white right-10">
                <BsArrowRightCircle size={30} />
            </div>

            <div className="flex justify-center text-white my-2">
                {slides.map((slide,index) => (
                    <div key={index} onClick={() => dotSlides(index)} className="text-2xl cursor-pointer">
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Sliders