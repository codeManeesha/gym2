import React from 'react'
import Styles from'./Team.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Team = () => {

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


    const data=[{name: "Squat "}, {name:"Chest Press"}, {name: "Deadlift"}, {name:"Leg Press"} , {name:"Overhead Press"} , {name:"Biceps Arm Curl "}]
    const yogas=[{name: "Padmasana "}, {name:"Simhasan"}, {name: "Bhujangasana"}, {name:"The Butterfly"} , {name:"Kapalbhati pranayama"} , {name:"Anulom vilom pranayama "}]
    const zumbas=[{name: "Zumba Step "}, {name:"Zumba Toning"}, {name: "Zumba in the Circuit"}, {name:"Zumba Sentao"} , {name:"Zumba Kids"} , {name:"Zumba Kids Junior"}]
    const flexible=[{name: "Forward Lunges "}, {name:"Side Lunges"}, {name: "Cross-Over"}, {name:"Standing Quad Stretch."} , {name:"Seat Straddle Lotus"} , {name:"Seat Side Straddle"}]
    const strength=[{name: "Agile Strength "}, {name:"Endurance Strength"}, {name: " Explosive Strength"}, {name:"Maximum Strength."} , {name:"Speed Strength"} , {name:"Starting Strength"}] 
 
 return (
<>
<div className={Styles.mainsContainer}>
<div className={Styles.container}>
<h1 className={Styles.head1}>Meet Our Team Member's </h1>
<p className={Styles.para}>Whether you are a workout newbie or a fitness pro, our coaches lead team and one-on-one workouts <br />
    that actually work. Workouts are designed using science and experience to maximize calorie burn, <br />
    build strength, and cultivate community.</p>
    </div>


<Carousel swipeable={true} 
  draggable={true} showDots={true} responsive={responsive} infinite={true}>


                    <div className={Styles.box}>
                  
                                <img className={Styles.first} src='https://media.istockphoto.com/id/924924078/photo/go-hard-or-go-home.jpg?s=612x612&w=0&k=20&c=TbKrHsTLeJ28nKi3wUmI54VB9zEkDrlWdXbWpCsXtcU=' alt='' />
                                <h2 className={Styles.name}>Name: John</h2>
                            <p className={Styles.description}>Weight Lifting Trainer   </p>
                            <p className={Styles.experience}>7 Year Experience as a Weight Lifting Trainer</p>
                            <ul>{
                                data.map((ele)=>{
                                    return(<li className={Styles.lis}>{ele.name}</li>)})
                                }</ul>
                            </div>
                    
                    <div>
                <img className={Styles.first} src='https://media.istockphoto.com/id/529417546/photo/keep-it-up.jpg?s=612x612&w=0&k=20&c=JloNeLEM3q3y1xdj0km8IjfORQ2jfOMNg8R58fbhNRI=' alt='' />
                  <h2 className={Styles.name}>Name:Emma</h2>
                            <p className={Styles.description}>Yoga Trainer </p>
                            <p className={Styles.experience}>4 Year of Experience as a Yoga Trainer </p>
                            <ul>{
                                yogas.map((yog)=>{
                                    return(<li className={Styles.lis}>{yog.name}</li>)})
                                }</ul>
                        </div>
                 <div>
                                <img className={Styles.first} src='https://media.istockphoto.com/id/1204577442/photo/low-angle-view-of-handsome-trainer-performing-zumba-with-multicultural-dancers-in-studio.jpg?s=612x612&w=0&k=20&c=ALBWRBYnLIz3tl-rnSzk9Yw8h2IgoSon21UaOZRo8ow=' alt='' />
                       
                            <h2 className={Styles.name}>Name:Rahul</h2>
                            <p className={Styles.description}>Zumba Trainer</p>
                            <p className={Styles.experience}>3 Year of Experience as a Zumba Trainer</p>
                            <ul>{
                                zumbas.map((zumb)=>{
                                    return(<li className={Styles.lis}>{zumb.name}</li>)})
                                }</ul>
                        </div>
                    <div>
                                <img className={Styles.first} src='https://media.istockphoto.com/id/671203352/photo/fitness-trainer-helps-woman-doing-forward-bend-yoga-pose.jpg?s=612x612&w=0&k=20&c=awpma1ByC2Amx61UZ7j0xB3TdHVsZQ_DbqheKF9LPng=' alt='' />
                         
                            <h2 className={Styles.name}>Name:Raghuv</h2>
                            <p className={Styles.description}>Flexibility Trainer </p>
                            <p className={Styles.experience}>8 Year of experience as a flexibility Trainer</p>
                            <ul>{
                                flexible.map((flex)=>{
                                    return(<li className={Styles.lis}>{flex.name}</li>)})
                                }</ul>
                        </div>
                 <div>
                                <img className={Styles.first} src='https://media.istockphoto.com/id/1201176142/photo/you-can-do-this.jpg?s=612x612&w=0&k=20&c=iTEZv5sW0SEJglRjXrYArepa14WUj3XzAI8JDCqpVIM=' alt='' />
                         
                            <h2 className={Styles.name}>Name:Andy</h2>
                            <p className={Styles.description}>Strength Trainer </p>
                            <p className={Styles.experience}>7 Year of experience as a Strength Trainer</p>
                            <ul>{
                                strength.map((stren)=>{
                                    return(<li className={Styles.lis}>{stren.name}</li>)})
                                }</ul>
                        </div>
                   
                    <div>
               <img className={Styles.first} src='https://media.istockphoto.com/id/521374546/photo/personal-trainer-helping-men-working-out-in-weights-room-at.jpg?s=612x612&w=0&k=20&c=68OMrdkyL9ws3Dvl-GAQdk8L152L5Y0U_AP5GaZTShU=' alt='' />
                    <h2 className={Styles.name}>Name:Smith</h2>
                            <p className={Styles.description}>Circuit Trainer </p>
                            <p className={Styles.experience}>5 Year of experience as a Circuit Trainer</p>
                            <ul>{
                                strength.map((stren)=>{
                                    return(<li className={Styles.lis}>{stren.name}</li>)})
                                }</ul>

                        </div>
             
                    </Carousel>
                 </div>
              
               </>
  )
}
export default Team;