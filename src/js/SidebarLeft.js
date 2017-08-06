import React, {Component} from 'react';
import profile from './../img/profile_img.jpg';
class SidebarLeft extends Component {
    render() {
        return (
            <div className="sidebar-left-wrapper">
                <div className="header">
                    <img  className="img-rounded img-responsive" src={profile} alt="face"/>
                </div>
                <ul className="navigation">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                </ul>

            </div>

        );
    }
}

export default SidebarLeft;
