import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from 'react-cookies';// cookie包
import { connect } from 'react-redux';

import { Button, LocaleProvider } from 'antd';// ant组件库
import zhCN from 'antd/lib/locale-provider/zh_CN';

import LeftMenu from './components/LeftMenu/LeftMenu.js';// 左侧导航组件
import Banner from './components/Banner/Banner.js';// 首页Banner播图轮组件
import Header from '../../components/Header';// 头部组件


import './home.css';


class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			content: this.props.homeIntroduce
		}
	}

    render(){
    	console.log(typeof this.state.content);
        return <Route render={
            props =>  cookies.load('accessToken') ?
	            <LocaleProvider locale={zhCN}>
	                <div id="home-container">
	                    <Header />
	                    <div >
	                        <div className="left-menu">
	                            <LeftMenu menuData = { this.props.menus } />
	                        </div>
	                        <div className="right-content">
	                            <Banner />
	                            <div className="home-introduce">
	                                <p> { this.props.homeIntroduce } </p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </LocaleProvider> :
            	<Redirect to={{pathname: '/user/login', state: {from: this.props.location.pathname}}}/>
        } />
    }
}

const mapStateToProps = (state) => {
	return ({
		homeIntroduce: state.content.introduce,
		menus: state.content.menus
	});
}

export default connect( mapStateToProps )(Home);