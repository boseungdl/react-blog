import React from "react";
import Post from "../post/Post";

import "../../assets/style/reset.css";
import "../../assets/style/common.css";

function Posts() {
    return (
        <div className="blog__inner container">
            <div className="blog__cont">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts;
