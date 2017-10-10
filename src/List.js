import React,{Component} from 'react';

import {render} from 'react-dom';

export default class List extends React.Component

{
    constructor(props)
    {
        super(props);
        this.state= {
            list: props.list

        };

        console.log("hlgjguy",this.props.list);
    }

    addItem=()=>{

    }


    render()
    {
        const list=this.props.list;

        console.log("hlgjguy",{listRows});

        </div>);
    }
}



