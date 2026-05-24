import React, { useState } from "react";
import "./ad-banner.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { KeenSliderInstance } from "keen-slider";

const AdBanner = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [instance, setInstance] = useState<KeenSliderInstance | null>(null);
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created(slider) {
            setLoaded(true);
            setInstance(slider);
        },
    });

    return (
            <div className="navigation-wrapper rounded-xl overflow-hidden cursor-pointer">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <img
                            src="https://images.uzum.uz/d827ckq1146tv06vtu0g/main_page_banner.jpg"
                            alt="banner"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src="	https://images.uzum.uz/d86qhpa1146tv071p4c0/main_page_banner.jpg"
                            alt="banner"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src="	https://images.uzum.uz/d85v4drsv8vo2t0fort0/main_page_banner.jpg"
                            alt="banner"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src="	https://images.uzum.uz/d85v2jc9g1ktqmlnrlj0/main_page_banner.jpg"
                            alt="banner"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src="	https://images.uzum.uz/d81d67a1146tv06vguig/main_page_banner.jpg"
                            alt="banner"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src="	https://images.uzum.uz/d7pc2brsv8vo2t0akkp0/main_page_banner.jpg"
                            alt="banner"
                        />
                    </div>
                </div>
                {loaded && instance && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => {
                                e.stopPropagation();
                                instance?.prev();
                            }}
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) => {
                                e.stopPropagation();
                                instance?.next();
                            }}
                            disabled={
                                currentSlide ===
                                instance.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
                {loaded && instance && (
                    <div className="dots">
                        {[
                            ...Array(
                                instance.track.details.slides.length
                            ).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instance?.moveToIdx(idx);
                                    }}
                                    className={
                                        "dot" +
                                        (currentSlide === idx ? " active" : "")
                                    }
                                ></button>
                            );
                        })}
                    </div>
                )}
            </div>
    );
};

function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: React.MouseEvent<SVGElement>) => void;
}) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
}

export default AdBanner;
