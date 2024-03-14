import '../../assets/css/styleFooter.module.css';

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="footer-content container">
                <div className="row">
                    <div className="footer-section about col-md-4 col-12">
                        <h3 className="logo-text">ГеоСпот</h3>
                        <p>
                            Программа "ГеоСпот" предназначена для использования пользователями с целью участия в
                            различных спортивных мероприятиях.
                        </p>
                        <div className="contact">
                            <span><i className="fa fa-phone"></i> &nbsp; +7(911)123-58-48 </span>
                            <span><i className="fa fa-envelope"></i> &nbsp; xojlodo4ek@mail.ru </span>
                        </div>
                        <div className="socials">
                            <a href="#"><i className="fa fa-vk"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-youtube"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    {/*<?php //if (isset($_SESSION['id'])): ?>*/}
                    <div className="footer-section links col-md-4 col-12">
                        <h3>Страницы</h3>

                            <ul>
                                {/*<a href="<?php echo BASE_URL?>">*/}
                                    <li>Новости</li>
                                {/*</a>*/}
                                {/*<?php //echo BASE_URL?>*/}
                                {/*<?php //echo $_SESSION['login']; ?>*/}
                                {/*<a href="<?php echo BASE_URL . 'pages/event/event.php'?>">*/}
                                    <li>Мероприятия</li>
                                {/*</a>*/}
                                {/*<?php //echo BASE_URL . 'single.php'?>*/}
                            </ul>

                    </div>
                    {/*<?php //endif; ?>*/}
                    <div className="footer-section contact-form col-md-4 col-12">
                        <h3>Контакты</h3>

                            {/*<form action="index.php" method="post">*/}
                            {/*    <input type="email" name="email" className="text-input contact-input yourMail"*/}
                            {/*           placeholder="Ваш почтовый адрес">*/}
                            {/*        <textarea style="width: 100%;" rows="4" name="message"*/}
                            {/*                  className="text-input contact-input yourMess"*/}
                            {/*                  placeholder="  Ваше сообщение"></textarea>*/}
                            {/*        <button type="submit" className="btn btn-big contact-btn">*/}
                            {/*            <i className="fa fa-envelope"></i>*/}
                            {/*            Отправить*/}
                            {/*        </button>*/}
                            {/*    </input>*/}
                            {/*</form>*/}

                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; ГеоСпот.ru | Designed by Bau6
                </div>
            </div>
        </div>
);
}

export default Footer;