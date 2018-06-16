import React from "react";
import photos from "../pictures.json"

const styles = {
    imgStyle: {
        padding: 10
    }
}

//Literally the whole goal of this is to display the pictures.
const RendPic = (props) => (
    <div className="col-md-3">
        <span onClick={() => props.onClick(photos[props.id])}>
            <div className="img-container">
                <img id={props.id} alt={props.alt} src={props.src} style={styles.imgStyle} />
            </div>
        </span>
    </div>
);

export default RendPic;