import React from "react";
import "./view.css";
import { Link } from "react-router-dom";

export default function View() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section id="board-type" className=" mb100">
                <div className="container flex">
                    <div className="flex1">
                        <div className="blog__label"></div>
                        <h3 className="section__title">react 수업내용입니다.</h3>
                        <div className="infos">
                            <div className="info">
                                <span className="author">
                                    <Link to="/">한승보</Link>
                                </span>
                                <span className="date">1625482</span>
                            </div>
                            <div className="viewBtn">
                                <span className="modify">
                                    <Link to="/">수정</Link>
                                </span>
                                <span className="delete">
                                    <Link to="/">삭제</Link>
                                </span>
                            </div>
                        </div>
                        <div className="blog__left">
                            <div>수업 내용</div>
                        </div>
                    </div>
                    <div className="blog__layout">
                        <div className="blog__right">
                            <iframe
                                title="쿠팡"
                                src="https://ads-partners.coupang.com/widgets.html?id=572133&template=carousel&trackingCode=AF8143841&subId=&width=300&height=300"
                                width="300"
                                height="300"
                                frameBorder="0"
                                scrolling="no"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
