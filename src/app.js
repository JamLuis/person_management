import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends Component {
    static propTypes = {
        prop: PropTypes
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(App)