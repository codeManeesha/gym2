import React from "react";
import Background from "../../Components/Backround/Backround";
import back from "../../images/Back1.jpg";
import Expert from '../Home/expert/Expert'

const Home = () => {
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
