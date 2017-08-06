import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './js/Header';
import SideabrLeft from './js/SidebarLeft';
import Content from './js/Content';
import Footer from './js/Footer';




class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 sidebar-left">
                            <SideabrLeft/>
                        </div>
                        <div className="col-sm-9">
                            <Header/>
                            {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                            <Content/>
                            <Footer/>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;
