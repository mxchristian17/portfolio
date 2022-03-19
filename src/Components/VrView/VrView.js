import React from 'react'
import { Pannellum } from "pannellum-react";
import myImage from "./VrView.jpg";

const VrView = () => {
  return (
    <div>
        <Pannellum
            width="100%"
            height="500px"
            image={myImage}
            pitch={-10}
            yaw={0}
            hfov={110}
            autoLoad
            onLoad={() => {
                console.log("panorama loaded");
            }}
        />
    </div>
  )
}

export default VrView