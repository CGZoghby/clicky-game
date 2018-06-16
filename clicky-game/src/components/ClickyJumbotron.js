import React from "react"

//Bootstrap jumbotron, has fun texture/backgroun, and introduces the game and explains rules.
const HeroUnit = () => (
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-4">Welcome to My Stupid-Hard Clicky-Game!</h1>
            <p className="lead">Click once on each photo below to increase your score, but take care to click 
            EXACTLY once. If you click on the same photo twice, you score is reset!</p>
            <p className="lead">Two photos are in there for freebies, because I'm nice like that.</p>
        </div>
    </div>
)

export default HeroUnit;