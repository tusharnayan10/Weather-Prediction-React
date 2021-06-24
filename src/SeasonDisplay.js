import "./SeasonDisplay.css";
import React from 'react';
import "semantic-ui-css/semantic.min.css";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}
const seasonCofig = {
    Summer: {
        text: "Let's go to mountains",
        icon: 'sun'
    },
    Winter: {
        text: "Bruh, It's very chill here",
        icon: 'snowflake'
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, icon} = seasonCofig[season];
    // console.log(seasonCofig);
    return (
        <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${icon} icon`}></i>
            <h1 className={`text ${season}`}>{text}</h1>
            <i className={`icon-right massive ${icon} icon`}></i>

        </div>
    );
}

export default SeasonDisplay;