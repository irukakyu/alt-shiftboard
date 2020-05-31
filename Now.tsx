import React from 'react'
import {
    View,
    Text,
} from 'react-native';

interface Props {}
interface State { date: string, time: string }
const now = new Date();

export default class Now extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            date: now.getFullYear() + '/' + ('0' + (now.getMonth()+1)).slice(-2) + '/' + ('0' + now.getDate()).slice(-2),
            time: ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2),
        }
    }
    render() {
        return(
            <View>
                {/* <Text>{ this.state.date } { this.state.time }</Text> */}
                <Text>この辺に直近のシフトが表示される予定でんがな</Text>
            </View>
        );
    }
}