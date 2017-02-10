import React from 'react';

class BinShare extends React.Component {

    onShareBtn(){
        const email = this.refs.email.value;
        Meteor.call('bins.share', this.props.bin, email);
    }


    onDisplayShareLink(){
        return this.props.bin.shareWith.map( (email) => {
            return (
                <button 
                    key={email}
                    className="btn btn-default">
                    {email}
                </button>
            );
        });
    }

    render() {
        return(
            <footer className="bin-share">
                <div className="input-group">
                    <input ref="email" className="form-control" />
                    <div className="input-group-btn">
                        <button onClick={this.onShareBtn.bind(this)} className="btn btn-default">Share Bin</button>
                    </div>
                </div>
                
                <div>Share with :</div>

                <div className="btn-group">
                    {this.onDisplayShareLink()}
                </div>
            </footer>
        );
    }

}

export default BinShare;
