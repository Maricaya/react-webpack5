import React from "react";
import _ from "lodash";

const AntherModule = () => {
    return <div>
        Hello lodash
        {_.join(['Another', 'module', 'loaded!'], ' ')}
    </div>
};

export default AntherModule;