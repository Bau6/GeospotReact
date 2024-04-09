import React from "react";
import FirstPageCss from "./first_page.module.css";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";
import axios from "axios";
import buttonNews from "../../app/buttons/buttonNews.module.css";
const NEWS = 'news';
class CheckNewsOrgAdm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }
    handleDeleteNews = (id) => {
        const updatedNewsList = this.props.newsList.map(newsItem => {
            if (newsItem.id === id) {
                return axios.get("http://localhost:3003/update-record", {
                    params: {
                        nameTable: NEWS,
                        params: { id: id, status: 7 }
                    }
                })
                    .then(response => {
                        alert("Успешно удалено!");
                        console.log(response.data);
                        return { ...newsItem, status: 7 };
                    })
                    .catch(error => {
                        console.error(error);
                        return newsItem; // Вернуть исходный элемент, если произошла ошибка
                    });
            } else {
                return newsItem;
            }
        });
        // Обновите состояние newsList с новым значением status
        this.props.updateNewsList(updatedNewsList);
        window.location.reload();
    }
    componentDidMount() {
        axios.get('http://localhost:3003/output-table', {
            params: {
                nameTable: NEWS,
                params: {}
            }
        })
            .then(response => {
                this.props.loadNews(response.data);
                this.setState({ isLoading: false });
            })
            .catch(error => {
                console.log(error);
                this.setState({ isLoading: false });
            });
    }
    render() {
        const { newsList } = this.props;
        // debugger
        const currentNews = newsList.filter(newsItem => newsItem.status === 2 && newsItem.authorID === this.props.userID.id);
        return (
            <div>
                <div>
                    <h1>
                        Предложенные записи
                    </h1>
                </div>
                <div className={FirstPageCss.newsContent}>
                    {currentNews.map(newsItem => (
                        <div key={newsItem.id} className={FirstPageCss.newsItem}>
                            <div className={FirstPageCss.newsImage}>
                                <img src={newsItem.image} alt={newsItem.nameEvent}/>
                            </div>
                            <div className={FirstPageCss.newsDetails}>
                                <div className={FirstPageCss.newsMain}>
                                    <span className={FirstPageCss.newsText}>{newsItem.namePub} </span><br/>
                                    <span className={FirstPageCss.newsText}>Организатор: {newsItem.orgPub}</span><br/>
                                    <span
                                        className={FirstPageCss.newsText}>Дата: {dateStrISO(newsItem.date, DATE_FORMAT_DATE)}</span>&nbsp;
                                    <span
                                        className={FirstPageCss.newsText}>Место находжения: {newsItem.country}</span>&nbsp;
                                    <span className={FirstPageCss.newsText}>{newsItem.city}</span><br/>
                                    <span className={FirstPageCss.newsText}>Автор: {newsItem.autor}</span>&nbsp;
                                </div>
                                <div>
                                    <ul className={FirstPageCss.newsText}>Рейтинг: {newsItem.rating}</ul>
                                    <br/><br/>
                                    <ul className={FirstPageCss.newsText}>Дата публикации:</ul>
                                    <br/>
                                    <ul className={FirstPageCss.newsText}>{dateStrISO(newsItem.datePub, DATE_FORMAT_DATE)}</ul>
                                </div>
                                <div>
                                    <span className={FirstPageCss.newsText}>Описание: {newsItem.textPub}   </span>
                                </div>
                                <div>
                                    <button onClick={() => this.handleDeleteNews(newsItem.id)} className={buttonNews.buttonDelete}>Удалить запись</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CheckNewsOrgAdm;