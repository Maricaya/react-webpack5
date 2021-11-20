import React from "react";

import Image from "../../assets/img.png";
import AntherModule from "../AntherModule";

import "./index.css";

const App = () => {

    return <div className="red">
        Hello world
        <AntherModule/>
        <img src={Image} alt="123" className="img"/>
    </div>
};

export default App;