import React from 'react'

function Features() {
  return (
    <section class="courses" id="courses">

   <h1 class="heading">our <span>courses</span></h1>

   <div class="swiper course-slider">

      <div class="swiper-wrapper">

         <div class="swiper-slide slide">
            <img src="../../images/Svg/course-1.svg" alt=""></img>
            <h3>web development</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div class="swiper-slide slide">
            <img src="../../images/Svg/course-2.svg" alt=""></img>
            <h3>digital marketing</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div class="swiper-slide slide">
            <img src="../../images/Svg/course-3.svg" alt=""></img>
            <h3>science and biology</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

         <div class="swiper-slide slide">
            <img src="../../images/Svg/course-5.svg" alt=""></img>
            <h3>graphic design</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
         </div>

        

        

      </div>

      <div class="swiper-pagination"></div>

   </div>

</section>

  )
}

export default Features