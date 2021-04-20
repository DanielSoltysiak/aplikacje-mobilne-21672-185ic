import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles'


const Numbers = ({ liczby }) => {
  var index = 0
    return (
        <ScrollView >
          {liczby.map(liczba => <Text style={styles.txt} key={index++} >{liczba}</Text>)}
        </ScrollView>
    );
};

export default class Sort extends Component{
  constructor(){
    super();
    const arr = []; 
    const sorted = false;
    for (let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * 1000) + 1);
    }
    this.state = { 
      arr 
    };
  }
  sort = () =>{
    if(!this.state.sorted){
      this.state.arr.sort((a,b) => a > b ? 1:-1)
      this.state.sorted = true
    }
    else {
      this.state.arr.sort((a,b) => a > b ? -1:1)
      this.state.sorted = false
    }
    this.forceUpdate()
  }
  randomize = () =>{
    const newarr = []
    for (let i = 0; i < this.state.arr.length; i++) {
      newarr.push(Math.floor(Math.random() * 1000) + 1);
    }
    this.state.arr = newarr
    this.state.sorted = false
    this.forceUpdate()
  }
  
  render(){ 
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Button  onPress={this.sort} title="Sortuj"/>
            </View>
            <View style={{flex:1}}>
                <Button  onPress={this.randomize} title="Random"/>
            </View>
            <View style={{flex:10}}>
                <Numbers  liczby={this.state.arr} />
            </View>
        </View>
    )
};
}