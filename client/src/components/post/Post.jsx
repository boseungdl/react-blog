import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

function Post() {
    return (
        <>
            <article class="blog">
                <Link to="./View">
                    <figure class="blog__header">
                        <img src="https://source.unsplash.com/800x600/?nature" alt="" />
                    </figure>
                    <div class="blog__body">
                        <span class="blog__cate">java</span>
                        <div class="blog__title">수업</div>
                        <div class="blog__desc">
                            전체적으로 기능이 오토데스크 3D 맥스, 오토데스크 마야, 시네마 4D에 비해서는 빈약한 편이지만,
                            자연 지형
                        </div>
                        <div class="blog__info">
                            <span class="author">한승보 </span>
                            <span class="date">1648096007</span>
                        </div>
                    </div>
                </Link>
            </article>
            {/* <article class="blog">
                <figure class="blog__header">
                    <a href="/">
                        <img src="https://source.unsplash.com/800x600/?travel" alt="" />
                    </a>
                </figure>
                <div class="blog__body">
                    <span class="blog__cate">java</span>
                    <div class="blog__title">수업</div>
                    <div class="blog__desc">
                        전체적으로 기능이 오토데스크 3D 맥스, 오토데스크 마야, 시네마 4D에 비해서는 빈약한 편이지만,
                        자연 지형
                    </div>
                    <div class="blog__info">
                        <span class="author">한승보 </span>
                        <span class="date">1648096007</span>
                    </div>
                </div>
            </article>
            <article class="blog">
                <figure class="blog__header">
                    <a href="/">
                        <img src="https://source.unsplash.com/800x600/?nature,water" alt="" />
                    </a>
                </figure>
                <div class="blog__body">
                    <span class="blog__cate">java</span>
                    <div class="blog__title">수업</div>
                    <div class="blog__desc">
                        전체적으로 기능이 오토데스크 3D 맥스, 오토데스크 마야, 시네마 4D에 비해서는 빈약한 편이지만,
                        자연 지형
                    </div>
                    <div class="blog__info">
                        <span class="author">한승보 </span>
                        <span class="date">1648096007</span>
                    </div>
                </div>
            </article> */}
        </>
    );
}

export default Post;
