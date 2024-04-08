import React from "react";
import buttonNews from "./buttonNews.module.css"
class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.actionButton = props.actionButton;
        this.newNews = this.props.newNews;
    }

    handleAction = () => {
        if (this.actionButton === 1) {
            console.log(this.newNews);
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