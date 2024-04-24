import React from "react";
import FirstPageCss from "./first_page.module.css";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";
// import axios from "axios";
import buttonNews from "../../app/buttons/buttonNews.module.css";
// const NEWS = 'news';
class CheckNewsOrgAdm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    handleNews = (id, status) => {
        this.props.addNewsUser(id, status);
        window.location.reload();
    }
    // componentDidMount() {
    //     this.props.UserLocation(window.location.href);
    // }
    render() {
        console.log(this.props)
        const { newsList } = this.props;
        // debugger
        let currentNews = [];
        if (this.props.role === "organizer") {
            currentNews = newsList.filter(newsItem => newsItem.status === 2 && newsItem.authorID === this.props.userID.id);
        } else if (this.props.role === "admin"){
            currentNews = newsList.filter(newsItem => newsItem.status === 2);
        } else {
            currentNews = [];
        }
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
                                    <button onClick={() => this.handleNews(newsItem.id, 7)} className={buttonNews.buttonDelete}>Удалить запись</button>
                                </div>
                                <div>
                                    {this.props.role === "admin" && (
                                        <button onClick={() => this.handleNews(newsItem.id, 1)} className={buttonNews.buttonAdd}>Опубликовать запись</button>
                                    )}
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