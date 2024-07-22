import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import slider from './SliderWithLabel';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Calculate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleButtonPress= () => {
    
  }

  render() {
    return (
        <View>
        <View>
            <div>
                <slider/>
            </div>
            <div>
                <slider/>
            </div>
        </View>
        <View>
            <TouchableOpacity onPress={() => this.handleButtonPress()}style ={styles.button}>
              <Text style ={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
  }
}