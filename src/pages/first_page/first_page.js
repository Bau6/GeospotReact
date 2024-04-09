import React from "react";
import FirstPageCss from "./first_page.module.css"
import axios from "axios";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";

class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3003/output-table', {
            params: {
                nameTable: 'news',
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
        const { newsList, currentPage, newsPerPage, setCurrentPage } = this.props;
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const newListFilter = newsList.filter(newsList => newsList.status===1);
        const currentNews = newsList.filter(newsItem => newsItem.status === 1).slice(indexOfFirstNews, indexOfLastNews);
        // const fullStars = Math.floor(news.rating);
// const halfStar = news.rating % 1 >= 0.5 ? 1 : 0;
        const showPreviousButton = currentPage > 1;
        const showNextButton = newListFilter.length > indexOfLastNews;
        return (
            <div className={FirstPageCss.newsContent}>
                {currentNews.map(newsItem => (
                    <div key={newsItem.id} className={FirstPageCss.newsItem}>
                        <div className={FirstPageCss.newsImage}>
                            <img src={newsItem.image} alt={newsItem.nameEvent} />
                        </div>
                        <div className={FirstPageCss.newsDetails}>
                            <div className={FirstPageCss.newsMain}>
                                <span className={FirstPageCss.newsText}>{newsItem.namePub} </span><br/>
                                <span className={FirstPageCss.newsText}>Организатор: {newsItem.orgPub}</span><br/>
                                <span className={FirstPageCss.newsText}>Дата: {dateStrISO(newsItem.date, DATE_FORMAT_DATE)}</span>&nbsp;
                                <span
                                    className={FirstPageCss.newsText}>Место находжения: {newsItem.country}</span>&nbsp;
                                <span className={FirstPageCss.newsText}>{newsItem.city}</span><br/>
                                <span className={FirstPageCss.newsText}>Автор: {newsItem.autor}</span>&nbsp;
                            </div>
                            <div>
                                <ul className={FirstPageCss.newsText}>Рейтинг: {newsItem.rating}</ul><br/><br/>
                                <ul className={FirstPageCss.newsText}>Дата публикации:</ul><br/>
                                <ul className={FirstPageCss.newsText}>{dateStrISO(newsItem.datePub, DATE_FORMAT_DATE)}</ul>
                            </div>
                            <div>
                                <span className={FirstPageCss.newsText}>Описание: {newsItem.textPub}   </span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={FirstPageCss.pagination}>
                    {showPreviousButton && (
                        <button onClick={() => setCurrentPage(currentPage - 1)}>Страница {currentPage - 1}</button>
                    )}
                    <span className={FirstPageCss.pageNumber}>Страница {currentPage}</span>
                    {showNextButton && (
                        <button onClick={() => setCurrentPage(currentPage + 1)}>Страница {currentPage + 1}</button>
                    )}
                </div>
            </div>
        );

    }
}

export default FirstPage;
