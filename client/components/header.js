import React from 'react';
import Account from './account';
import { Link, browserHistory } from 'react-router';

class Header extends React.Component {

    buttonClickHandler(event) {
        event.preventDefault();

        //Insert bin and redirect
        Meteor.call('bins.insert', (error, bin_id) => {
            browserHistory.push(`/bin/${bin_id}`);
        });
    }


    render() {
        return(
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markbin</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Account />
                    </li>
                    <li>
                        <a href='#' onClick={this.buttonClickHandler.bind(this)}>Create Bin</a>                        
                    </li>                    
                </ul>
            </nav>
        );
    }
}

export default Header;
