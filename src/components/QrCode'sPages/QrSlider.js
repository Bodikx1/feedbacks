import React, {useState} from "react";
import slider from './QrSlider.module.css'
import ukr from '../../img/ukraine.png'
import ger from '../../img/germany.jpg'
import bel from '../../img/belarus.png'

export default function QrSlider(){
    const slides = [ukr,ger,bel]
    const [slideIndex , setSlideIndex] = useState(0)
    function toPrevImg(){
        const isFirstSlide = slideIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1
        setSlideIndex(newIndex)
    }
    function toNextImg(){
        const isLastSlide = slideIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : slideIndex + 1
        setSlideIndex(newIndex)
    }
    return(
            <div className={slider.body}>
                {
                    slides.length > 1 ?
                        <div className={slider.buttons}>
                            <div className={slider.SliderButton} onClick={toPrevImg}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.25 1.06857L1.625 6.6876L7.25 12.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>: ''
                }
                <img src={slides[slideIndex]} alt="ProductPhoto" height='100%' width='60%'/>
                {
                    slides.length > 1 ?
                        <div className={slider.buttons}>
                            <div className={slider.SliderButton} onClick={toNextImg}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 1.06857L6.375 6.6876L0.75 12.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div> : ''
                }
            </div>
    )
}
// class ImgSlider extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             imgIndex : 0
//         }
//         this.slides = this.props.slides
//     }

//     render() {
//         return (

//     }
// }
// export default ImgSlider;