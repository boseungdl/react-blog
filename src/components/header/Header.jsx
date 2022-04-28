import React from "react";
import "./header.css";
import "../../assets/style/reset.css";
import "../../assets/style/common.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    {" "}
                    react <em>class</em>
                </Link>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <Link to="./Login">회원가입</Link>
                    </li>
                    <li>
                        <Link to="/">댓글</Link>
                    </li>
                    <li>
                        <Link to="/">게시판</Link>
                    </li>
                    <li>
                        <Link to="/">블로그</Link>
                    </li>
                    <li>
                        <Link to="/">퀴즈</Link>
                        {/* <ul>
                            <li>
                                <a href="/"></a>
                            </li>
                            <li>
                                <a href="/"></a>
                            </li>
                            <li>
                                <a href="/"></a>
                            </li>
                        </ul> */}
                    </li>
                </ul>
            </nav>
            <div className="member">
                <Link href="/" className="setting">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    한승보 님 환영합니다.
                </Link>
            </div>
        </header>
    );
}
