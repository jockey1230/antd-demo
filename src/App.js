import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Button} from 'antd';
import cherriesModel from "./model/cherries"
import './App.css';

@observer
class App extends Component {
    render() {
        const cherries = cherriesModel;

        let html = " ";
        for (let n = 0; n < cherries.number; n++) {
            html += "🍒"
        }

        return (
            <div className="App">
                <div>{html}</div>
                <Button style={{marginRight:10}} type="primary" onClick={cherries.add}>Add</Button>
                <Button type="primary" onClick={cherries.delete}>Delete</Button>

            </div>
        );
    }
}

export default App;