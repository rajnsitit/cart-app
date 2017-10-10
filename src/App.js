import React,{Component} from 'react';

import {render} from 'react-dom';

export default class App extends React.Component

{
    constructor(props)
    {
        super(props);
        this.state= {
            list: [{
                product: 'mango',
                price: 30,
                quantity: 1

            }],
            total:0
    };
    }

    addItem=(index)=>{
        let item = this.state.list[index];
        item.quantity = item.quantity + 1;
        let list = this.state.list;
        list[index] = item;
        this.setState({
            list: list
        })
    }
    minusItem=(index)=>{
        let item = this.state.list[index];
        if(item.quantity>1)
        item.quantity = item.quantity -1;
        let list = this.state.list;
        list[index] = item;
        this.setState({
            list: list
        })
    }

    calculateTotal=()=>{
        let list=this.state.list;
        let total=0;
        list.forEach((item)=>{
            total=total+item.quantity*item.price;
        })
        this.setState({
            total:total
        })
    }
    removeItem=(index)=>{

        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list: list
        })
    }

    updateState=(e)=>{
        console.log(e.charCode );
         if (e.charCode == 13) {
             let list = this.state.list;
             let listItem={
                 product: e.target.value.split("-")[0],
                 price: e.target.value.split("-")[1],
                 quantity: 1
             }
             list.push(listItem);
             this.setState({
                 list: list
             });
             this.input.value = ''
         }
    }
    render()
    {
        const pStyle = {
            fontSize: '15px',
            textAlign: 'center',
            color:'red'
        };
        this.calculateTotal();
        const listRows=this.state.list.map((listItem, index) => <div><span >{listItem.product}  </span><span >{listItem.quantity}  </span>
            <span >{listItem.price}  </span>
            <button onClick={()=>this.addItem(index)}>+</button>
            <button onClick={()=>this.minusItem(index)}>-</button>
            <button onClick={()=>this.removeItem(index)}>*</button><br/></div>)

        return(<div>
            <input ref={(input) => this.input = input} placeholder="Enter item and price separated by a -(hyphen)" onKeyPress={this.updateState}/>

            {listRows}
            <br/>
            <span>{this.state.total}</span>

        </div>)
    }
}
