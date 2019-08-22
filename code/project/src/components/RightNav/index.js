import React, { Component } from "react";
import { NavLink, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import {Menu, Icon} from 'antd';
import './RightNav.css';
class RightNav extends Component{
    // constructor(){
    //     super();
    // }
    state={
        lisArr:[],
        activeTab: ""
    }

    gotoComponent(path, id){
            this.props.history.push({
                pathname: `${path}`,
            })
        }

    componentDidMount(){
            this.setState({
                activeTab: this.props.match.url
            })
        }

        getClassName = (idx, menuPath)=>{
            let computedClassName =  "";
            if(idx===this.state.currentIdx){
                computedClassName += "listcurrent"
            } else {
                computedClassName += "lis"
            }
            if(this.state.activeTab.includes(menuPath)){
                computedClassName += " active"
            } else {
                computedClassName += " "
            }
            return computedClassName
        }

    render(){
        return(
            <div className='nav'>
                <Menu className='hh'>
                    <Menu.Item  className='special'
                         key='1'
                         style={{
                            width:'60px',height:'56px',lineHeight:'56px',textAlign:'center',
                            backgroundImage: 'linear-gradient(-180deg, #6FE0FE 7%, #21A2FF 100%)',
                            borderRadius: '4px',
                            marginBottom:'16px',
                            position:'relative',
                            right:'-20px'
                     }}>
                        <NavLink to="/" >
                          <Icon type='home' style={{marginRight:'10px',color:'#fff'}}/>
                        </NavLink>
                    </Menu.Item>
                    {
                        this.props.menus.map((menuItem,idx)=>{
                        return <Menu.Item
                                className={this.getClassName(idx, menuItem.lineTo)}
                                key={idx}
                                onClick={ ()=>{this.gotoComponent(menuItem.lineTo)} }>
                                <div>
                                    {menuItem.title}
                                    <p>{ idx }</p>
                                </div>
                            </Menu.Item>
                        })
                    }
                </Menu>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return ({
        menus: state.content.menus
    });
}

export default withRouter(connect( mapStateToProps )(RightNav));
