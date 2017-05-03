import React from 'react';
import {WoodsPanel} from './parts/WoodsPanel';
import {SizePanel} from './parts/SizePanel';

export class App extends React.Component {
    constructor() {
        super();
        this.loadFromServer = this.loadFromServer.bind(this);
        this.onClickWood = this.onClickWood.bind(this);
        this.onClickSize = this.onClickSize.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
        this.prepareWoodsList = this.prepareWoodsList.bind(this);
        this.state = {
            woods : null,
            selectedWood : null,
            woodsMap : null,
        };

        this.loadFromServer();

    }

    onClickReset(){
        var map = this.state.woodsMap;

        Object.keys(map).forEach(function (key) {
            var row = map[key];
            Object.keys(row).forEach(function (col) {
               row[col] = 0;
            })
        })

        this.setState({
            woodsMap : map
        });
    }

    onClickWood(e) {
        this.setState({
           selectedWood : e
        });
    }

    onClickSize(size){
        if(this.state.selectedWood != null) {
            var map = this.state.woodsMap;
            map[this.state.selectedWood][size] += 1;
            this.setState({
               woodsMap : map
            });
        }
    }

    loadFromServer() {
        var self = this;
        var map = {};
        var data = {
            "woods": [ "BK", "DB", "HB", "JS", "AG", "OS", "CS", "JP", "JH", "JM", "LP", "BR", "BO", "SC", "SM", "BC" ],
            "range": {
            "from": 20,
                "to": 150,
                "step": 10
            }
        }
        data.woods.forEach(function (element) {
            map[element] = {};

            var start = data.range.from;
            var end = data.range.to;
            var step = data.range.step;
            for (var i = start; i <= end; i = i + step) {
                map[element][i] = 0;
            }
        })

        self.state = {
            woods: data,
            woodsMap: map
        };
    }

    prepareWoodsList(){
        var map = this.state.woodsMap;
        var selectedWoods = [];
        Object.keys(map).forEach(function (key) {
            var row = map[key];
            Object.keys(row).forEach(function (col) {
                var val = row[col];
                if(val > 0)
                    selectedWoods.push(key+"  "+col+" :  "+val+" ks");
            })
        });

        var woodCountList = selectedWoods.map(function (count) {
            return (
                <span className="result-item" key={count}>{count}<br/></span>
            )
        });

        return woodCountList;
    }

    render() {
        var self = this;
        if(this.state.woods == null){
            return(<div></div>);
        }
        var conf = this.state.woods;
        var woodsObject = conf.woods;
        var range = conf.range;
        var rangeItems = [];
        for(var i = range.from; i < range.to; i += range.step){
            rangeItems.push(i);
        }

        var woodCountList = this.prepareWoodsList();

        return (
            <div>
                <WoodsPanel _onClick={self.onClickWood} woods={woodsObject}/>
                <hr/>
                <SizePanel _onClick={self.onClickSize} sizes={rangeItems}/>
                <hr/>
                <button type="button" className="btn btn-primary" onClick={this.onClickSave}>Save</button>
                <button type="button" className="btn btn-danger" onClick={this.onClickReset}>Reset</button>
                <hr/>
                {woodCountList}
            </div>

        );
    }
}
