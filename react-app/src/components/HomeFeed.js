import React from 'react';
import Songs from "./Songs";

const HomeFeed = () => {

    return (
        <div className="wholePageContainer">
            <div className="bodyContainer">
                <div className="feedContainer">
                    <h1 className="heading">Featured</h1>
                    <Songs />
                </div>
            </div>
        </div>
    );
}

export default HomeFeed;
