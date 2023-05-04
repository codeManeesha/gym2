import React from "react";

import styled from "./VideoSection.module.css";

export default function Videosection() {
  return (
    <div className={styled.content}>
      <div className={styled.videoContent}>
        <h1>Our Facilities</h1>
        <h3>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
          ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
          non
        </h3>
      </div>

      <div className={styled.video_section}>
        <iframe
          width="470"
          height="315"
          src="https://www.youtube.com/embed/1Bj5PPxgEwo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
