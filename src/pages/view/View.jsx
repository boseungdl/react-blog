import React from "react";
import "./view.css";

export default function View() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section id="board-type" className="center mb100">
                <div className="blog__label">
                    <h3 className="section__title">react 수업내용입니다.</h3>
                    <div>
                        <div className="info">
                            <span className="author">
                                <a href="/">한승보</a>
                            </span>
                            <span className="date">1625482</span>
                        </div>

                        <span className="modify">
                            <a href="/">수정</a>
                        </span>
                        <span className="delete">
                            <a href="/">삭제</a>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className="blog__layout">
                        <div className="blog__left">
                            <h4>안녕하세요</h4>
                            <div>수업 내용</div>
                        </div>
                        <div className="blog__right">
                            <iframe
                                title="쿠팡"
                                src="https://ads-partners.coupang.com/widgets.html?id=572133&template=carousel&trackingCode=AF8143841&subId=&width=300&height=300"
                                width="300"
                                height="300"
                                frameborder="0"
                                scrolling="no"
                                referrerpolicy="unsafe-url"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
