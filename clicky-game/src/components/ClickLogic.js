import React, {Component} from 'react';
//ok, so this would be a theoretical Higher Order Component to the picture render, 
//and this sets the state on whether or not the picture is clicked
//and shuffles them?
const setClickStatus = (Target) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {isClicked: false};
        }

        onClick = () => {
            this.setState({isClicked: true/* !this.state.isClicked */});
        };

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