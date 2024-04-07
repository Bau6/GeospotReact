import FirstPage from "./first_page";
import React from "react";
class AdminFirstPage extends FirstPage {

    render() {
        const parentRender = super.render();
        return (
            <div>
                {parentRender}
                <div>
                    <button>Сменить информацию</button>
                </div>
            </div>
        );
    }
}

export default AdminFirstPage;