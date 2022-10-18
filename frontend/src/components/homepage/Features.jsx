import { Center, Grid, Heading,VStack ,Container } from '@chakra-ui/react'
import React from 'react'
import course1 from '../../images/Svg/course-1.svg'
import course2 from '../../images/Svg/course-2.svg'
import course3 from '../../images/Svg/course-3.svg'
import course4 from '../../images/Svg/course-4.svg'
import FeatureCard from './FeatureCard'
import FeatureCard2 from './FeatureCard2'
import FeatureCard3 from './FeatureCard3'
import FeatureCard4 from './FeatureCard4'
function Features() {
  return (

   <Center>
    <VStack>
    <Heading fontSize="7xl" >OUR FEATURES</Heading>
    <Grid p={10} templateColumns="repeat(4, 1fr)" gap="12">
      <FeatureCard></FeatureCard>
      <FeatureCard2></FeatureCard2>
      <FeatureCard3></FeatureCard3>
      <FeatureCard4></FeatureCard4>
    </Grid>
    </VStack>



   </Center>
//     <section class="courses" id="courses">

//    <h1 class="heading">our <span>courses</span></h1>

//    <div class="swiper course-slider">

//       <div class="swiper-wrapper">

//          <div class="swiper-slide slide">
//             <img src={course1} alt=""></img>
//             <h3>web development</h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
//          </div>

//          <div class="swiper-slide slide">
//             <img src={course2} alt=""></img>
//             <h3>digital marketing</h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
//          </div>

//          <div class="swiper-slide slide">
//             <img src={course4} alt=""></img>
//             <h3>science and biology</h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
//          </div>

//          <div class="swiper-slide slide">
//             <img src={course3} alt=""></img>
//             <h3>graphic design</h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!</p>
//          </div>

        

        

//       </div>

//       <div class="swiper-pagination"></div>

//    </div>

// </section>

  )
}

export default Features