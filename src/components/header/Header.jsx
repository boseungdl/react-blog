import React from "react";
import "./header.css";
import "../../assets/style/reset.css";
import "../../assets/style/common.css";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <a href="/">
                    {" "}
                    react <em>class</em>
                </a>
            </h1>
            <nav className="menu">
                <h2 class="ir_so">
                    메인 메뉴<i class="fa-brands fa-angellist"></i>
                </h2>
                <ul>
                    <li>
                        <a href="./Login">회원가입</a>
                    </li>
                    <li>
                        <a href="/">댓글</a>
                    </li>
                    <li>
                        <a href="/">게시판</a>
                    </li>
                    <li>
                        <a href="/">블로그</a>
                    </li>
                    <li>
                        <a href="/">퀴즈</a>
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
                <a href="../mypage/mypage.php" class="setting">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    한승보 님 환영합니다.
                </a>
            </div>
        </header>
    );
}
