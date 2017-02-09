import React from 'react';
import Account from './account';

class Header extends React.Component {

    buttonClickHandler(event) {
        event.preventDefault();
        Meteor.call('bins.insert');
    }


    render() {
        return(
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand">Markbin</a>
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
