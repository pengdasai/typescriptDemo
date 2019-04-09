import React from 'react'
import { Component } from 'react'
import {
    ScrollView,
    Platform
} from 'react-native'
import ChatItem from './chat_item';
import {resolveSrv} from "dns";

interface State {
    
}
interface Props{

}

interface Item {
    img:Object,
    name:string,
    time:string,
    conetnt:string
}

const DATAS:Item[]=[
    {
        img: require('../../assets/images/奶茶.png'),
        name: '张二',
        time: '10:43',
        conetnt: '你好啊张二'
    },
    {
        img: require('../../assets/images/汉堡.png'),
        name: '张三',
        time: '10:44',
        conetnt: '你好啊张三'
    },
    {
        img: require('../../assets/images/面条.png'),
        name: '张四',
        time: '10:45',
        conetnt: '你好啊张四'
    },
];

export default class ChatList extends Component<Props,State>{
    constructor(props:Props){
        super(props);
    }
    render(){
        return(
            <ScrollView style={{marginTop: Platform.OS === 'ios' ? 24 : 0}}>
                {DATAS.map((item,index)=>{
                    return <ChatItem item={item} key={index}/>
                })}
            </ScrollView>
        )
    }
}