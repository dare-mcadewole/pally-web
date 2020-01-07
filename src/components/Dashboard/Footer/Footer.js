import React from 'react';
import './Footer.css'

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">OnePally &copy; 2019</div>
                        <div className="col-md-6">
                            <div className="text-md-right footer-links d-none d-sm-block">
                                <a href="/">About Us</a>
                                <a href="/">Help</a>
                                <a href="/">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>);
    }
}