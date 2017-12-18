const Hypergrid = require('fin-hypergrid');


const options = {
    data: [
        { name: 'Company 1', price: 300 },
        { name: 'Company 2', price: 200 },
        { name: 'Company 3', price: 150 },
        { name: 'Company 4', price: 500 },
        { name: 'Company 5', price: 999 }
    ]
};



export class Grid { 
    public init() {
        const myGrid = new Hypergrid('#grid', options);
    }
}

