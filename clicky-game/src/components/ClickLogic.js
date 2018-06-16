import React, { Component } from 'react';
//ok, so this would be a theoretical Higher Order Component to the picture render, 
//and this sets the state on whether or not the picture is clicked

//So, all this does is set click status on the pictures.
//I should be writing another component that can shuffle the pics
const setClickStatus = (Target) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { isClicked: false };
        };
        //onClick is passed through to pictureRender.js where it is actually used.
        onClick = (photoObj) => {
            if (this.state.isClicked) {
                console.log("You Failed!")
            } else {
                //!this.state.isClicked would allow for the state to be toggle-able.
                photoObj.isClicked = true;
                this.setState({ isClicked: true });
            }
        };
        //Target is a cool trick.
        render() {
            return (
                <Target {...this.props}
                    isClicked={this.state.isClicked}
                    onClick={this.onClick}
                />
            );
        }
    }
};
export default setClickStatus;