import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';

export default class slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sliderText}>
          {this.state.value }
        </Text>
        <Slider style={{width: 300}}
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})}
        />
        
      </View>
    );
  }
}