import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
 } from 'react-native';

 import Calendar from 'react-native-calendars';

 interface Props {
    selection: number,
 }
 interface State {
 }

 export default class DisplaySelection extends React.Component<Props, State> {
     constructor(props: any) {
         super(props);
     }
    render() {
        return(
            <View>
                <Text>{ new Date(this.props.selection).toDateString() }を選んでるよ！</Text>
                <Text>この辺に選んでる日付のシフトを追加するメニューだとか、入力済みのシフトそのものを入力する予定ですのよ</Text>
            </View>
        );
    }
 }