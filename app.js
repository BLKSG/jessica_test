/*function sayHello(name){
    console.log('Hello ' + name);
}
sayHello('Yizhang'); */
//install sha256 library: npm install crypto-js
const SHA256 = require('crypto-js/sha256')
class Block{
    constructor(index,timestamp,data,previous_hash){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previous_hash=previous_hash;
        this.hash=this.calculate_hash;
    }

    calculate_hash(){
        return SHA256(this.index,this.timestamp,this.previous_hash,this.data);
    }
}

class Blockchain{
    createGenesis(){
        return new Block(0,"01/01/2020","Hello World","0")
    }

    constructor(){
        this.chain = [];
        this.AddBlock(this.createGenesis());
    }

    LastBlock(){
        this.size = this.chain.length - 1;
        return this.chain[this.size];
    }

    AddBlock(newBlock){
        this.index=LastBlock.index+1;
        newBlock.previous_hash=this.LastBlock.hash;
        //newBlock.index=this.LastBlock.index+1;
        newBlock.hash=newBlock.calculate_hash();
        this.chain.push(newBlock);
    }
}

YizhangChain = new Blockchain();
YizhangChain.AddBlock(new Block("01/01/2021","testing"));
console.log(YizhangChain);

