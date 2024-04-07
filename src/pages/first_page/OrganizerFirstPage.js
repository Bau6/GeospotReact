import FirstPage from "./first_page";
import React from "react";
class OrganizerFirstPage extends FirstPage {
    render() {
        const parentRender = super.render();
        return (
            <div>{parentRender}
                <div>
                    <button>Предложить запись</button>
                </div>
            </div>
        );
    }
}
export default OrganizerFirstPage;