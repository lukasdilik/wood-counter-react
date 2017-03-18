import React from 'react';


export class WoodItem extends React.Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){

        this.props._onclick(e);
    }

    render(){
        var button;
        if(this.props.checked){
            button =  <button type="button" className="btn btn-default wood-item" onClick={this.onClick}>{this.props.text}</button>;
        }else{
            button =  <button type="button" className="btn btn-primary wood-item" onClick={this.onClick}>{this.props.text}</button>;
        }
        return(
            <span>
             {button}
            </span>
        );
    }
}



