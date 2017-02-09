import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bin';

class BinList extends React.Component {

    onRemoveBin(bin){
        Meteor.call('bins.remove',bin);
    }

    renderBins() {
        return this.props.bins.map( (bin) => {
            return (
                <li className="list-group-item" key={bin._id}>
                    Bin : {bin._id}
                    <spam className="pull-right">
                        <button 
                            className="btn btn-danger"
                            onClick={() => this.onRemoveBin(bin)}>
                            Remove
                        </button>
                    </spam>
                </li>
            );
         });
    }

    render() {
        return(
            <ul className="list-group">
                {this.renderBins()}
            </ul>
        );
    }
}

export default createContainer( () => {
    Meteor.subscribe('bins');
    return { bins: Bins.find({}).fetch()};
}
,BinList);