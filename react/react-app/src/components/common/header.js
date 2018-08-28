import React, { Component } from 'react'
import { getCurrentDate } from "../../utils/timer";
import { connect } from "react-redux"
import { toogleSidebarStatus } from "../../store/sidebar/action";
import '../../styles/common/header.css'

import SideBar from '../../components/common/sidebar'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: getCurrentDate()
        }
    }
    handlerMenu(){
        this.props.toogleSidebarStatus()
    }
    handlerSearch(){

    }
    render(){
        return (
            <div className="oneHeader">
                <div className="menu">
                    <div className="icon-container">
                        <i className="iconfont icon-menu" onClick={this.handlerMenu.bind(this)}></i>
                    </div>
                </div>
                <div className="time">
                    <div className="time-container">
                        <span className="time-day">{ this.state.date.day }</span>
                        <span className="time-other">{ this.state.date.month + this.state.date.year }</span>
                    </div>
                </div>
                <div className="search">
                    <div className="icon-container">
                        <i className="iconfont icon-search" onClick={this.handlerSearch.bind(this)}></i>
                    </div>
                </div>
                <SideBar />
            </div>
        )
    }
}

export default connect(state => ({
}), { toogleSidebarStatus
})(Header)