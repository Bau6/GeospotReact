import React, { Component } from 'react';
import '../../assets/css/styleFooter.module.css';
import FooterCss from '../../assets/css/styleFooter.module.css';
import { FaVk, FaYoutube, FaTelegram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
class Footer extends Component {
    render() {
        return (
            <div className={FooterCss.footer}>
                <div className={`${FooterCss.footer}-content container`}>
                    <div className="row">
                        <div className="footer-section about col-md-4 col-12">
                            <h3 className="logo-text">Геоспот</h3>
                            <p>
                                Геоспот - бесплатный сайт, предназначенный для людей, интересущихся спортом и
                                спортивными мероприятиями. На данном сайте имеется возможность создавать свои мероприятия или нововсти, а
                                также принимать участие в уже существующих мероприятиях!
                            </p>
                        </div>
                        <div className="footer-section contact-form col-md-4 col-12">
                            <h3>Контакты</h3>
                            <p>Контакты для обратной связи с разработчиками:</p>
                            <div className="contact">
                                <span><i className="fa fa-phone"></i> Номер телефона: &nbsp; +7(911)123-58-48 </span><br/>
                                <span><i className="fa fa-envelope"></i> Почта: &nbsp; xojlodo4ek@mail.ru </span>
                            </div>
                        </div>
                        <div className="footer-section contact-form col-md-4 col-12">
                            <h3>Наши соц. сети</h3>
                            <div className="socials">
                                <a href="https://vk.com/xojlodo4ek"><FaVk size={30} color="blue"/></a>
                                {/*<a href="#"><FaYoutube size={30} color="red"/></a>*/}
                                <a href="https://e.mail.ru/compose?to=xojlodo4ek@mail.ru"><IoMdMail size={30} color="green"/></a>
                                <a href="https://t.me/BAU66"><FaTelegram size={30} color="lightblue"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        &copy; {new Date().getFullYear()} Геоспот | Designed by Bau6
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;