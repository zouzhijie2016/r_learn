import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MENU_LIST = [{
    label: '首页',
    route: '/'
},{
    label: '图文',
    route: '/graphic'
},{
    label: '阅读',
    route: '/reading'
},{
    label: '音乐',
    route: '/music'
},{
    label: '关于',
    route: '/about'
}]

class Menu extends Component{
    static propType = {
        toogle: PropTypes.func.isRequired
    }
    render(){
        return (
            <div className="sidebar-menu">
                <ul className="menu">
                    {
                        MENU_LIST.map((item, idx)=>(
                            <Link key={idx} to={item.route} onClick={this.props.toogle}>
                                <li>
                                    { item.label }
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                <div className="icon-container">
                    <i className="iconfont icon-close" onClick={this.props.toogle}></i>
                </div>
            </div>
        )
    }
}

export default Menu