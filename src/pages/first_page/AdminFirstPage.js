import FirstPage from "./first_page";
import React from "react";
import CheckNewsOrgAdmContainer from "./checkNewsOrgAdmContainer";
class AdminFirstPage extends FirstPage {

    render() {
        const parentRender = super.render();
        return (
            <div>
                {parentRender}
                <div>
                    <div>
                        {<CheckNewsOrgAdmContainer />}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminFirstPage;