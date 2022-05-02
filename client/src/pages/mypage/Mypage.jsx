import React from "react";
import { Link } from "react-router-dom";

export default function Mypage() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="join-type gray">
                <div className="member-form">
                    <h3 className="mb30">회원 정보</h3>
                    <div className="join-intro">
                        <div className="face">
                            <img
                                className="img2"
                                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="기본 이미지"
                                id="view"
                            />
                        </div>
                    </div>
                    <div className="join-info">
                        <ul>
                            <li>
                                <strong>자기소개</strong>
                                <span></span>
                            </li>

                            <li>
                                <strong>이메일</strong>
                                <span></span>
                            </li>

                            <li>
                                <strong>닉네임</strong>
                                <span></span>
                            </li>

                            <li>
                                <strong>이름</strong>
                                <span></span>
                            </li>

                            <li>
                                <strong>생일</strong>
                                <span></span>
                            </li>

                            <li>
                                <strong>번호</strong>
                                <span></span>
                            </li>

                            <li>
                                <strong>성별</strong>
                                <span></span>
                            </li>

                            <li>
                                <strong>사이트</strong>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                    <div className="join-btn">
                        <Link to="/">수정하기</Link>
                        <Link to="/">탈퇴하기</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
