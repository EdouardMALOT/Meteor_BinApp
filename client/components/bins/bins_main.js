import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bin';


import BinEditor from './bins_editor';

class BinMain extends React.Component {
    render() {

        //Wait loading before display Editor
        if(!this.props.bins) { 
            return <div>Loading</div>;
        }

        return(
            <div>
                <BinEditor bin={this.props.bins}/>
            </div>
        );
    }
}

export default createContainer( (props) => {
    Meteor.subscribe('bins');

    const {bin_id} = props.params;
    return { bins: Bins.findOne(bin_id)};
},BinMain);