import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Menu, Icon} from 'antd';
import './LeftMenu.css'

class LeftMenu extends Component{
    render() {
        return(
            <div>
                <Menu className='menuIndex' style={{padding:'0 24px'}}>
                    {
                        this.props.menuData.map((menuItem,idx) => {
                            return <Menu.Item
                                key={idx}
                                style={{
                                    width:'168px',height:'64px',lineHeight:'64px',textAlign:'center',
                                    backgroundImage: 'linear-gradient(-180deg, #6FE0FE 7%, #21A2FF 100%)',
                                    borderRadius: '4px',
                                    color:'#fff',
                                    fontSize:'18px',
                                    fontFamily: 'PingFangSC-Semibold',
                                    marginBottom:'16px'
                                }} >

                                    <NavLink to={menuItem.lineTo} >
                                        <Icon type={menuItem.icon} style={{width:'32px',height:'32px',marginRight:'10px'}}/>
                                        {menuItem.title}
                                    </NavLink> 

                            </Menu.Item >
                        })
                    }
                </Menu>
            </div>
        );
    }
}
export default LeftMenu;
