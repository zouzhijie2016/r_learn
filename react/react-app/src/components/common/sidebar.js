import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'

import { toogleSidebarStatus } from "../../store/sidebar/action";
import { statusList } from "../../utils/statusList";

import Menu from './menu'
import '../../styles/common/sidebar.css'

class SideBar extends Component{
    constructor(props){
        super(props)
        this.toogleSidebarStatus = this.props.toogleSidebarStatus.bind(this);
        this.state = {
            sideBarClass: '',
            layerClass: 'hide'
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.status === statusList.VISIBLE){
            this.setState({
                sideBarClass: 'slideIn',
                layerClass: 'show'
            })
        }else if(nextProps.status === statusList.HIDDEN){
            this.setState({
                sideBarClass: 'slideOut',
                layerClass: 'hide'
            })
        }
    }
    shouldComponentUpdate(nextState, nextProps){
        return nextProps.status !== statusList.INITTIAL
    }
    render(){
        return ReactDom.createPortal(
            [
            <aside id="sidebar" key="sidebar" className={ this.state.sideBarClass }>
                <Menu toogle={this.toogleSidebarStatus} />
            </aside>,
            <div id="layer" key="layer" className={ this.state.layerClass } onClick={this.toogleSidebarStatus}>
            </div>
            ],
            document.body
        )
    }
}

export default connect(state=>({
    status: state.sidebar.status
}), {
    toogleSidebarStatus
})(SideBar)