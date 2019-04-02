import {observable, action} from 'mobx';

class Cherries {
    @observable number = 1;

    @action.bound add() {
        this.number++;
    }

    @action.bound delete() {
        this.number--;
    }

}

const cherries = new Cherries();

export default cherries;