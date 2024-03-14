import React from "react";
import Header from './../../app/include/header';
import FirstPageCss from "./first_page.module.css"
const FirstPage = (props) => {

    return (
        <div>
            {/*<Header />*/}
            <div className={FirstPageCss.containerNews}>
                first page
            </div>
        </div>
    )
}

export default FirstPage;