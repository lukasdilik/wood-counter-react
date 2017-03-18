import React from 'react';

export class SizeItem extends React.Component{

    constructor(props){
        super();
        this.onClick = this.onClick.bind(this);

        this.state = {
            isChecked : false
        };
    }

    onClick(e){
        this.props._onclick(e);
    }

    render(){
        return(
            <button type="button" className="btn btn-warning size-item" onClick={this.onClick}>{this.props.text}</button>
        );
    }
}



