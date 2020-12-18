import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
// import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { route } = this.props;
        return (
            <div>
                {renderRoutes(route.routes)}
            </div>
        )
    }
}
export default Home