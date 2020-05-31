import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Alert,
 } from 'react-native';

 import { Calendar, LocaleConfig } from 'react-native-calendars';

 import DisplaySelection from './DisplaySelection'

 interface Props {
     
 }
 interface State {
    selection: number,
 }

 export default class SelectDay extends React.Component<Props, State> {
     constructor(props: any) {
         super(props);
        this.state = {
            selection: 0,
        }
     }
    render() {
        return(
            <View>
                <Calendar
                    onDayPress={(day) => {
                        this.setState({selection: day.timestamp});
                    }}    
                />
                <DisplaySelection selection={ this.state.selection }/>
            </View>
        );
    }
 }