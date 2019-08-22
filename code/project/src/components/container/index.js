import React, { Component } from 'react';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import Header from '../../components/Header';
import RightNav from '../../components/RightNav';


import './commen.css';

class Container extends Component{

    render(){
        return(
            <LocaleProvider locale={zhCN}>
                <div id="home-container">
                    <Header />
                    <div >
                        <div className="base-page-left-content">
                            { this.props.children }
                        </div>
                        <div className="base-page-right-menu">
                            <RightNav />
                        </div>
                    </div>
                </div>
            </LocaleProvider>
        );
    }
}
export default Container;