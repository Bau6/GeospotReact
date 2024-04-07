import React from "react";
import FirstPageCss from "./first_page.module.css"
import axios from "axios";

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
        const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews);
        // const fullStars = Math.floor(news.rating);
// const halfStar = news.rating % 1 >= 0.5 ? 1 : 0;
        const showPreviousButton = currentPage > 1;
        const showNextButton = newsList.length > indexOfLastNews;
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
                                <span className={FirstPageCss.newsText}>Дата: {newsItem.date}</   span>&nbsp;
                                <span
                                    className={FirstPageCss.newsText}>Место находжения: {newsItem.country}</span>&nbsp;
                                <span className={FirstPageCss.newsText}>{newsItem.city}</span><br/>
                                <span className={FirstPageCss.newsText}>Автор: {newsItem.autor}</span>&nbsp;
                            </div>
                            <div>
                                <ul className={FirstPageCss.newsText}>Рейтинг: {newsItem.rating}</ul><br/><br/>
                                <ul className={FirstPageCss.newsText}>Дата публикации:</ul><br/>
                                <ul className={FirstPageCss.newsText}>{newsItem.datePub}</ul>
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
