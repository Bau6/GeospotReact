import React from "react";
import buttonNews from "./buttonNews.module.css"
import axios from "axios";
import moment from "moment";
const TABLE = 'news'
class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.actionButton = props.actionButton;
        this.newNews = this.props.newNews;
    }

    handleAction = () => {
        if (this.actionButton === 1) {
            this.newNews.date = moment(this.newNews.date, "DD-MM-YYYY").format("YYYY-MM-DD");
            console.log(this.newNews);
            if (this.newNews.namePub !== "" && this.newNews.date !== "" && this.newNews.textPub !== "" && this.newNews.autor !== "" && this.newNews.city !== "" && this.newNews.country !== "") {
            axios.post('http://localhost:3003/add-news', { nameTable: TABLE, params: this.newNews })
                .then(response => {
                    alert("Данные успешно добавлены");
                    console.log(response.data);
                    this.props.clearTextArea();
                    window.location.reload(); // Перезагрузка страницы
                })
                .catch(error => {
                    alert("Проверьте правильность написания даты!\nDD.MM.YYYY или dd-mm-yyyy");
                    console.error(error);
                });
            } else {
                alert("Введите все обязательные поля!\nНеобязательным полем является только поле картинки!\nЕсли все поля введены, перезагрузите страницу и введите данные заново!");
            }
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