import FirstPage from "./first_page";
import React from "react";
import FirstPageCss from "./first_page.module.css";
// import MyButton from "../../assets/buttons/button";
import MyButtonContainer from "../../assets/buttons/myButtonContainer";
class OrganizerFirstPage extends FirstPage {
    constructor(props) {
        super(props);
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
        this.ref5 = React.createRef();
        this.ref7 = React.createRef();
        this.ref6 = React.createRef();
        this.ref8 = React.createRef();
        this.newNew = {name: "", date: "", country: "", city: "", author: "", description: "", image: "", organizer: ""};
    }
    nameChange = () => {
        let newText = this.ref1.current.value;
        this.newNew.name = newText;
        this.props.onChangeAreaText("NAME", newText);
    }
    orgChange = () => {
        let newText = this.ref2.current.value;
        this.newNew.organizer = newText;
        this.props.onChangeAreaText("ORGANIZER", newText);
    }
    dateChange = () => {
        let newText = this.ref3.current.value;
        this.newNew.date = newText;
        this.props.onChangeAreaText("DATE", newText);
    }
    countryChange = () => {
        let newText = this.ref4.current.value;
        this.newNew.country = newText;
        this.props.onChangeAreaText("COUNTRY", newText);
    }
    cityChange = () => {
        let newText = this.ref5.current.value;
        this.newNew.city = newText;
        this.props.onChangeAreaText("CITY", newText);
    }
    authorChange = () => {
        let newText = this.ref6.current.value;
        this.newNew.author = newText;
        this.props.onChangeAreaText("AUTHOR", newText);
    }
    descriptionChange = () => {
        let newText = this.ref7.current.value;
        this.newNew.description = newText;
        this.props.onChangeAreaText("DESCRIPTION", newText);
    }
    imageChange = () => {
        let newText = this.ref8.current.value;
        this.newNew.image = newText;
        this.props.onChangeAreaText("IMAGE", newText);
    }
    render() {
        const parentRender = super.render();
        return (
            <div>{parentRender}
                <div>
                    <div className={FirstPageCss.newsItem}>
                        <div className={FirstPageCss.newsImage}>
                            <label>Ссылка на изображение: </label>
                            <textarea value={this.props.newNews.image} ref={this.ref8} onChange={this.imageChange} ></textarea>
                        </div>
                        <div className={FirstPageCss.newsDetails}>
                            <div className={FirstPageCss.newsMain}>
                                <label>Название: </label>
                                <textarea value={this.props.newNews.name} ref={this.ref1} onChange={this.nameChange} className={FirstPageCss.newsTextArea}></textarea><br/>
                                <label>Организатор: </label>
                                <textarea value={this.props.newNews.organizer} ref={this.ref2} onChange={this.orgChange} className={FirstPageCss.newsTextArea}></textarea><br/>
                                <label>Дата: </label>
                                <textarea
                                    value={this.props.newNews.date} ref={this.ref3} onChange={this.dateChange} className={FirstPageCss.newsTextArea}></textarea>&nbsp;
                                <label>Страна: </label>
                                <textarea
                                    value={this.props.newNews.country} ref={this.ref4} onChange={this.countryChange} className={FirstPageCss.newsTextArea}></textarea>&nbsp;
                                <label>Город: </label>
                                <textarea value={this.props.newNews.city} ref={this.ref5} onChange={this.cityChange} className={FirstPageCss.newsTextArea}></textarea><br/>
                                <label>Автор: </label>
                                <textarea value={this.props.newNews.author} ref={this.ref6} onChange={this.authorChange} className={FirstPageCss.newsTextArea}></textarea>&nbsp;
                            </div>
                            <div>
                                <label>Описание: </label>
                                <textarea value={this.props.newNews.description} ref={this.ref7} onChange={this.descriptionChange} className={FirstPageCss.newsTextDescription}></textarea>
                            </div>
                            <div>
                                <MyButtonContainer newNews={this.newNew} name={"Предложить запись"} actionButton={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrganizerFirstPage;