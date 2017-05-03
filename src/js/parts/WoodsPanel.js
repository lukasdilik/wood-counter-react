import React from 'react';
import {WoodItem} from './WoodItem';
import { Row, Col} from 'react-bootstrap';


export class WoodsPanel extends React.Component {

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
        this.state = {
            checked : null
        };
    }

    _onClick(e) {
        var checkedButton = e.target.innerHTML;
        this.setState({
            checked : checkedButton
        });
        this.props._onClick(checkedButton);
    }

    render() {
        var self = this;

        var woodsList = this.props.woods.map(function (wood) {
            if(wood === self.state.checked) {
                return (
                    <Col xs={3} sm={3} md={2} lg={1} key={wood}>
                        <WoodItem checked={true} _onclick={self._onClick} data={wood} text={wood}/>
                    </Col>
                );
            }else{
                return (
                    <Col xs={3} sm={3} md={2} lg={1} key={wood}>
                        <WoodItem _onclick={self._onClick} data={wood} text={wood}/>
                    </Col>
                );
            }
        });

        return (
            <div className="container">
                <Row className="">
                    {woodsList}
                </Row>
            </div>

        );
    }

}