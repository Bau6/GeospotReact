import React from "react";
import buttonNews from "./buttonNews.module.css"
class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.actionButton = props.actionButton
    }

    handleAction = () => {
        if (this.actionButton === 1) {

        } else {

        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAction} className={buttonNews.buttonAdd}>{this.name}</button>
            </div>
        )
    }
}

export default MyButton;