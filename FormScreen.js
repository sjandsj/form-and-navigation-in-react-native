import React, {Component} from 'react';
import {Text,Image, View, Button, StyleSheet, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

var radio_props = [
  {label: 'Male', value: 0}, { label: 'Female', value: 1}, {label: 'Other', value: 2}
];
var myNavigate;
let test123;



export default class FormPage extends Component {

  constructor(props) {
    super(props);
    test123=this;
    this.state = {
      nameField: '',
      nameValidation: true,
      emailField: '', 
      emailValidation: true,
      phoneNumberField: '',
      phoneNumberValidation: true,
      isDatePickerVisible: false,
      date: '',
      avatarSource: '',
      value: 0,
      item: {}
    };
  }

  static navigationOptions={
    title: 'Form Screen'
  };
   
  
  showDateTimePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  navigatingToSecondScreen = () => {
  myNavigate('InformationScreen', {
      JSON_ListView_Clicked_Item1: this.state.nameField,
      JSON_ListView_Clicked_Item2: this.state.emailField,
      JSON_ListView_Clicked_Item3: this.state.phoneNumberField,
      JSON_ListView_Clicked_Item4: this.state.date, 
      JSON_ListView_Clicked_Item5: this.state.item,
      JSON_ListView_Clicked_Item6: this.state.avatarSource, 
      
})
  };

  checkNameValidation(nameField) {
    alph=/^[a-zA-Z]+$/;
    if(alph.test(nameField)) {
      return true
    } else {
      return false
    }
  };

  checkEmailValidation(emailField) {
    email=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(email.test(emailField)) {
      return true
    } else {
      return false
    }
  };

  checkPhoneNumberValidation(phoneNumberField) {
    num=/^[0-9]+$/;
    if(num.test(phoneNumberField)) {
      return true
    } else {
      return false
    }
  };

  submitButtonAction=()=>{
      if((this.state.emailField==='')||(this.state.nameField==='')) {
        Alert.alert('Name and Email Field are Mandatory')
  
      } else {

        if (!this.checkNameValidation(this.state.nameField)) {
          Alert.alert('Please Enter A valid Name')
          return
        } else if (!this.checkEmailValidation(this.state.emailField)) {
          Alert.alert(' Please Enter A valid Email')
          return
        } else if (!this.checkPhoneNumberValidation(this.state.phoneNumberField)){
            if(this.state.phoneNumberField==='') {
              
            }
            else {
              Alert.alert('Please Enter a valid Number');
            return
          }
        }
        this.navigatingToSecondScreen();
      }
  };

  handleDatePicked = date => {
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    console.log("var date", day,month);
    this.setState({date: day + '/' + month + '/' + year});
    this.hideDateTimePicker();
  };

  selectPhotoTapped(){
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
      skipBackup: true,
      path: 'images'
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        test123.setState({
          avatarSource: source,
        });
      }
    });
  };

  render() {

    const {navigate}=this.props.navigation;
    myNavigate=navigate;
    
    return( 
    <View style={myStyles.mainContainer}>
            
        <Text style={myStyles.labelFormat}>
          Enter Your Details 
        </Text>
        

        <TextInput placeholder='Enter Your Name' 
                   type='datetime'
                   value={this.state.nameField}
                   placeholderTextColor='black' 
                   onChangeText={(nameField)=>this.setState({nameField})}
                   style={[!this.state.nameValidation], myStyles.textBoxInput}/>
        
        <TextInput value={this.state.emailField}
                   onChangeText={(emailField) => this.setState({emailField})}
                   placeholder='Enter Your Email'
                   keyboardType='email-address'
                   placeholderTextColor='black'
                   style={myStyles.textBoxInput} />

        <TextInput value={this.state.phoneNumberField}
                   onChangeText={(phoneNumberField) => this.setState({phoneNumberField})}
                   placeholder='Enter Your Phone Number'
                   returnKeyType='done'
                   placeholderTextColor='black' 
                   keyboardType='phone-pad'
                   style={myStyles.textBoxInput} />

        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}} >
          Please Select Your Gender
        </Text>
        <RadioForm radio_props={radio_props} initial={0} 
                   labelHorizontal={true} 
                   labelColor={'red'} onPress={(value) => {radio_props.map((item) => 
                   {item.value === value && this.setState({item: item})})}}/>           
        
        <Button title='Select Date Of Birth'
                onPress={this.showDateTimePicker}/>
        <DateTimePicker isVisible={this.state.isDatePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}/>  

        <Button title='Upload Profile Image' onPress={this.selectPhotoTapped}/>                

        <Button onPress={this.submitButtonAction} 
                title='Submit' color='red'/>                     

        <KeyboardAvoidingView behavior='padding' enabled></KeyboardAvoidingView>
     
    </View>
        
    );
  }
}

const myStyles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    backgroundColor: 'yellow', 
    padding: 50, 
    justifyContent: 'space-evenly', 
    alignItems: 'center'
  }, 
  textBoxInput: {
    backgroundColor: 'yellowgreen', 
    height: 50, 
    width: 300, 
    textAlign: 'center', 
    fontSize: 20
  }, 
  labelFormat: {
    color: 'orangered', 
    fontSize: 30,
    fontWeight: 'bold'
  }
});