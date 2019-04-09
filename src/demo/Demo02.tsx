import * as React from 'react';
import {View,Text} from 'react-native';

export default class Demo02 extends React.Component{
    constructor(props:any){
        super(props)
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:20}}>第二个！</Text>
            </View>
        )
    }
}