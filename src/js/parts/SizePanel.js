import React from 'react';
import {SizeItem} from './SizeItem';
import {Grid, Row, Col} from 'react-bootstrap';


export class SizePanel extends React.Component{

    constructor(props){
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            checked : null
        };
    }

    click(e){
        var size = e.target.innerHTML
       this.props._onClick(size);
    }

    render(){
        var sizeObject = this.props.sizes;
        var sizes = sizeObject;
        var self = this;

        var sizesList = sizes.map(function(size){
           return (
               <Col xs={3} sm={3} md={2} lg={1} key={size}>
                   <SizeItem _onclick={self.click} data={size} text={size}/>
               </Col>
           );
       });

        return(
            <div className="container">
                <Row className="">
                {sizesList}
                </Row>
            </div>
        );
    }

}