import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
// import console = require('console');

export default class InformationScreen extends Component {

  static navigationOptions = {
    title: 'Information Page'
  };
  constructor(props) {
    super(props);
    this.state={
      myDateElement: this.props.navigation.state.params.JSON_ListView_Clicked_Item4.toString(),
      myImage: this.props.navigation.state.params.JSON_ListView_Clicked_Item6
    }
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={myStyle.mainContainer}>
{
  console.log("info scren", this.state.myImage)
}
        <Image style={{width: 100, height: 100}} source={this.state.myImage}/>
        
        <Text style={myStyle.textStyle}>
          Name:      {this.props.navigation.state.params.JSON_ListView_Clicked_Item1}
        </Text>
        <Text style={myStyle.textStyle}>
          Email:     {this.props.navigation.state.params.JSON_ListView_Clicked_Item2}
        </Text>
        <Text style={myStyle.textStyle}>
          Phone Number:      {this.props.navigation.state.params.JSON_ListView_Clicked_Item3}
        </Text>
        <Text style={myStyle.textStyle}>
          Date of Birth:      {this.state.myDateElement}
        </Text>
        <Text style={myStyle.textStyle}>
                    Gender:     {this.props.navigation.state.params.JSON_ListView_Clicked_Item5.label}
         </Text>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1, justifyContent: 'space-evenly', backgroundColor: 'indianred',
    alignItems: 'center'
  }, textStyle: {
    fontSize: 20, fontWeight: '900', color: 'lawngreen'
  }
});