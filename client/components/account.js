import React from 'react';
import ReactDom from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Account extends React.Component {

    componentDidMount() {

        //Render the Blaze component and put it into div
            this.view = Blaze.render(
                Template.loginButtons,
                ReactDom.findDOMNode(this.refs.container)
            );
    }

    componentWillUnmount() {
            Blaze.remove(this.view);
    }

    render() {
        return(
            <div ref="container"></div>
        );
    }
}

export default Account;