import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from'./Card.module.css'

export default function Card() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 5,
     
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };



    return (
        <div className={Styles.container}>

      <h1 className={Styles.heading}>Training Programs</h1>
      <Carousel swipeable={true} infinite={true}
  draggable={true} showDots={true} responsive={responsive}>
 < div>
        <h1 className={Styles.head1}>Weight Lifting Training</h1>
         <img className={Styles.pict} src="https://img.freepik.com/free-photo/gym-handsome-man-during-workout_144627-6224.jpg?size=626&ext=jpg&ga=GA1.1.658885505.1676437022&semt=ais" alt="dummy"/>
         
    </div>
    <  div >
        <h1 className={Styles.head1}>Yoga Training</h1>
         <img className={Styles.pict} src="https://media.istockphoto.com/id/1254455335/photo/back-rear-view-young-professional-instructor-giving-yoga-master-class.jpg?s=612x612&w=0&k=20&c=XeBUJKuNUbgtsZfhE3aMfLuVZykgLg0BrKwfUl2NoXA="  alt="dummy"/> 
         
    </div>
    <  div >
        <h1 className={Styles.head1}>Zumba Training</h1>
         <img className={Styles.pict} src="https://media.istockphoto.com/id/670724074/photo/exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=jr9YMXFCD2ON4QsU9-ZdVSUd7tdR4vhx0TXaysfasTc="  alt="dummy"/> 
         
    </div>
    <  div >
        <h1 className={Styles.head1}>Flexibility Training</h1>
         <img className={Styles.pict} src="https://stamina11.com/wp-content/uploads/2023/03/Acquire-Flexibility-with-Martial-Arts.jpg"  alt="dummy"/> 
         
    </div>
    <  div >
        <h1 className={Styles.head1}>Strength Training</h1>
         <img className={Styles.pict} src="https://images.ctfassets.net/psi7gc0m4mjv/23d45747-af59-40da-9b22-06fc14418433/b2b8fd4034625dc8c8be2c1711013e1c/hiit-and-strength-training-battle-ropes.jpg"  alt="dummy"/> 
         
    </div>
    <  div >
        <h1 className={Styles.head1}>Circuit Training</h1>
         <img className={Styles.pict} src= "https://media.istockphoto.com/id/1067774764/photo/it-all-starts-with-determination.jpg?s=612x612&w=0&k=20&c=HQP48vtJZx7YC_0bx1POY52B4M--Hv5-rpM8IZF_Esk="  alt="dummy"/> 
         
    </div>
    
    
   
        </Carousel>
   
      {/* <img className={Styles.backimage} src='https://media.istockphoto.com/id/865428362/photo/fitness-center-background.jpg?s=612x612&w=0&k=20&c=wByuD_AJUOSQl3W7MCikZrQ1s0r13SEOlwSnZbG8bhE=' alt='background_image' /> */}
    </div>
  );
}