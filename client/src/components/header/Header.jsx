import React from "react";
import "./header.css";
import "../../assets/style/reset.css";
import "../../assets/style/common.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="./">
                    {" "}
                    react <em>class</em>
                </Link>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <Link to="./Home">HOME</Link>
                    </li>
                    <li>
                        <Link to="./Login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="./Join">JOIN</Link>
                    </li>
                    <li>
                        <Link to="./View">VIEW</Link>
                    </li>
                    <li>
                        <Link to="./Write">WRITE</Link>
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
                <Link to="./Mypage" className="setting">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="이미지"
                    />
                    한승보 님 환영합니다.
                </Link>
            </div>
        </header>
    );
}
