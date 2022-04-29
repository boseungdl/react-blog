import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import View from "./pages/view/View";
import Join from "./pages/join/Join";
import Write from "./pages/write/Write";
import Mypage from "./pages/mypage/Mypage";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/view" exact>
                    <View />
                </Route>
                <Route path="/join" exact>
                    <Join />
                </Route>
                <Route path="/write" exact>
                    <Write />
                </Route>
                <Route path="/mypage" exact>
                    <Mypage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
