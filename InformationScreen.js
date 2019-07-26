import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import console = require('console');


export default class InformationScreen extends Component {

  static navigationOptions = {
    title: 'Information Page'
  };
  constructor(props) {
    super(props);
    this.state={
      myDateElement: this.props.navigation.state.params.JSON_ListView_Clicked_Item4,
    }
    //  var myDateElement = 
    // let radioValue = this.props.navigate.state.params.JSON_ListView_Clicked_Item5;
    // console.log("radiovalue", radioValue);
  }

  render() {

    const { navigate } = this.props.navigation;

    var radioLabel = '';

    return (
      <View style={myStyle.mainContainer}>
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
        <Text>
                    Gender:     {this.props.navigation.state.params.JSON_ListView_Clicked_Item5}
         </Text>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1, backgroundColor: 'cornflowerblue', justifyContent: 'space-evenly',
    alignItems: 'center'
  }, textStyle: {
    fontSize: 25, fontWeight: '900', color: 'orange'
  }
});