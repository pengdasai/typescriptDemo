import * as React from 'react';
import {View,Text} from 'react-native';

interface props {
    title ?: any;
}

export default class  Demo extends React.Component<props> {
    render() {
        return (
            <View>
                <Text style={{fontSize:30}}>第一个！</Text>
            </View>
        )
    }
}
