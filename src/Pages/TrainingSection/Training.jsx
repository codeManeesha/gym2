import React from 'react'
import Card from "./card"
import Team from './Team'
import Background from '../../Components/Backround/Backround'
import success from '../../images/succes.jpg'
import { useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isRefresh } from '../../Recoil'
const TrainingSection = () => {
  const navi =useNavigate()
  const Login = useRecoilValue(isRefresh)
   useEffect(()=>{
    if(!Login){
      navi ("/")
    }
   },[])
  return (
    <>
      <Background
        url={success}
        heading="Online Personal Training"
        desc="Maximum Results in Minimum Time, no matter your location"
      />
    <div id='Training'>
    <Card />
    <Team />
    </div>
    </>
  )
}
export default TrainingSection;