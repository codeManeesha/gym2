import React from "react";
import Background from "../../Components/Backround/Backround";
import back from "../../images/Back1.jpg";
import Expert from '../Home/expert/Expert'
import { useNavigate } from "react-router-dom";
import { isRefresh } from "../../Recoil";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

const Home = () => {
  const nav =useNavigate()
  const Login = useRecoilValue(isRefresh)
   useEffect(()=>{
    if(!Login){
      nav ("/")
    }
   },[])

  return (
    <div>
      <Background
        url={back}
        heading="Online Personal Training"
        desc="Maximum Results in Minimum Time, no matter your location"
      />
      <Expert/>
    </div>
  );
};

export default Home;
