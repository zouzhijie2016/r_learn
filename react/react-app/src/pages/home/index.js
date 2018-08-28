import React, { Component } from 'react'
import Forward from '../../components/common/forward'
import {get} from '../../api/index'

import '../../styles/index.css'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }
    componentWillMount(){
        get('/index').then(res => {
            if(res.list && res.list.length){
                this.setState({
                    list: res.list
                })
            }
        })
    }
    render(){
        return (
            <div className="page-home">
                {
                    this.state.list.map((item, index) => (
                        <Forward key={index} {...item} />
                    ))
                }
            </div>
        )
    }
}

export default Home