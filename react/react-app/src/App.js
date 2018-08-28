import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
// store
import store from './store/index'
// components
import Header from './components/common/header'
import Footer from './components/common/footer'
// pages
import Home from './pages/home/index'
import Graphic from './pages/graphic/index'

import './styles/base.css'

class App extends Component{
    render(){
        return (
            <Provider store={ store }>
                <Router>
                    <div className="rootApp">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/graphic" component={Graphic} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App