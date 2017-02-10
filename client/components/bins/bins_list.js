import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Bins } from '../../../imports/collections/bin';


class BinList extends React.Component {

    onRemoveBin(bin){
        Meteor.call('bins.remove',bin);
    }

    renderBins() {
        return this.props.bins.map( (bin) => {

            const url = `/bin/${bin._id}`;

            return (
                <li className="list-group-item" key={bin._id}>
                    <Link to={url} >Bin : {bin._id}</Link>
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
    Meteor.subscribe('sharebins');
    
    return { bins: Bins.find({}).fetch()};
}
,BinList);