import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-imagepicker';


var radio_props = [
  {label: 'Male', value: 0}, { label: 'Female', value: 1}, {label: 'Other', value: 2}
];

export default class FormPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameField: '',
      emailField: '', 
      phoneNumberField: '',
      isDatePickerVisible: false,
      date:'',
      imageField: '',
      value: 0
    };
  }

  static navigationOptions={
    title: 'Form Screen'
  };

  submitTheForm() {
      
  }

  showDateTimePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleDatePicked = date => {
    console.log("<><><><>123", date);
    this.setState({date});
    this.hideDateTimePicker();
  };

  render() {

    const {navigate}=this.props.navigation;

    return(

    <View style={myStyles.mainContainer}>
        
        <Text style={myStyles.labelFormat}>
          Enter Your Details 
        </Text>

        <TextInput placeholder='Enter Your Name' 
                   type='datetime'
                   value={this.state.nameField}
                   placeholderTextColor='black' 
                   onChangeText={nameField => this.setState({nameField})}
                   style={myStyles.textBoxInput}/>
        
        <TextInput value={this.state.emailField}
                   onChangeText={emailField => this.setState({emailField})}
                   placeholder='Enter Your Email'
                   keyboardType='email-address'
                   placeholderTextColor='black'
                   style={myStyles.textBoxInput} />

        <TextInput value={this.state.phoneNumberField}
                   onChangeText={phoneNumberField => this.setState({phoneNumberField})}
                   placeholder='Enter Your Phone Number'
                   returnKeyType='done'
                   placeholderTextColor='black' 
                   keyboardType='phone-pad'
                   style={myStyles.textBoxInput} />

        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}} >
          Please Select Your Gender
        </Text>
        <RadioForm radio_props={radio_props} 
                   labelColor={'red'} onPress={(value) => {this.setState({value:value})}}/>           
        

        <Button title='Select Date Of Birth'
                onPress={this.showDateTimePicker}/>
        <DateTimePicker isVisible={this.state.isDatePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}/>  

        
        <Button onPress={()=>navigate('InformationScreen', {
                             JSON_ListView_Clicked_Item1: this.state.nameField,
                             JSON_ListView_Clicked_Item2: this.state.emailField,
                             JSON_ListView_Clicked_Item3: this.state.phoneNumberField,
                             JSON_ListView_Clicked_Item4: this.state.date, 
                             JSON_ListView_Clicked_Item5: this.state.value
        })} 
                title='Submit' color='red'/>                     

        <KeyboardAvoidingView behavior='padding' enabled></KeyboardAvoidingView>
        
    </View>
    );
  }
}

const myStyles = StyleSheet.create({
  mainContainer: {
    flex: 1, backgroundColor: 'yellow', padding: 50, 
    justifyContent: 'space-evenly', alignItems: 'center'
  }, textBoxInput: {
    backgroundColor: 'yellowgreen', height: 50, width: 300, 
    textAlign: 'center', fontSize: 20
  }, labelFormat: {
    color: 'orangered', fontSize: 30, fontWeight: 'bold'
  }
});