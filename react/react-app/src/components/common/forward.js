import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../../styles/common/forward.css'

class Forward extends Component{
    static propTypes = {
        "id": PropTypes.number.isRequired,
        "title": PropTypes.string.isRequired,
        "image": PropTypes.string.isRequired,
        "description": PropTypes.string.isRequired
    }
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="forward">
                <header className="forward-header">
                    <div className="title">{ this.props.title }</div>
                </header>
                <Link className="forward-content" to={`/graphic`}>
                    <img className="image" alt="" src={this.props.image} />
                </Link>
                <footer className="forward-footer">
                    <div className="description">{ this.props.description }</div>
                </footer>
            </div>
        )
    }
}

export default Forward