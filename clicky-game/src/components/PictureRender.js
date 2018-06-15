import React from "react";

const styles = {
    imgStyle: {
        padding: 10
    }
}

//Literally the whole goal of this is to display the pictures. Sometime down the line, this will take props, which is how the pictures will be reshuffled?
//So, now we render pictures from a JSON containing all of their data, on click we would set the data-attr value to true, and shuffle the board by targeting the pictures by id and 
//moving them around.
const RendPic = (props) => (
    <div className="col-md-3">
        <span onClick={() => props.clickPic()}>
            <div className="img-container">
                <img id={props.id} alt={props.alt} src={props.src} data-isclicked={props.isclicked} style={styles.imgStyle} />
            </div>
        </span>
    </div>
);

export default RendPic;