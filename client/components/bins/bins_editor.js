import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';


class BinEditor extends React.Component {

    onTextChange(content){
        Meteor.call('bins.update', this.props.bin, content);
    }


    UpdateValue() {
        if(this.props.bin) {
            return this.props.bin.content;
        }else{
            return '';
        }
    }

    render() {
        return(
            <div className="col-xs-8">
                <h5>Input</h5>
                <CodeMirror 
                    value = {this.UpdateValue()}
                    onChange={this.onTextChange.bind(this)}
                    options={{ mode : 'markdown', lineNumbers : true }}/>
            </div>
        );
    }
}

export default BinEditor;