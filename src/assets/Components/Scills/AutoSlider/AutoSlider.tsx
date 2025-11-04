import * as React from "react";
import "./AutoSlider.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 50000, easing: (t: number) => t };

export default function AutoSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src="./Img/Skills/1.webp" alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src="./Img/Skills/2.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src="./Img/Skills/3.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src="./Img/Skills/4.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide5">
        <img src="./Img/Skills/5.png" alt="" />
      </div>
    </div>
  );
}
