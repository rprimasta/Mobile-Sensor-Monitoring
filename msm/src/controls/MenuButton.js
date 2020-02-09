import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native'; 
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
import { Icon,Overlay } from 'react-native-elements'
import {color} from '../static/color';
import PropTypes from 'prop-types';

export default class MenuButton extends Component {
  static propTypes = {
    buttonRender: PropTypes.func,
    buttonOptions : PropTypes.object,
    navigation : PropTypes.object,
  }
  static defaultProps = {
    buttonRender: this.buttonRender,
    buttonOptions : this.buttonOptions,
    navigation : null,
  };
  constructor(props){
    super(props);
    this.state = {
      show:false,
    };
  }

  buttonOptions = [
    {
      label : 'Dashboard',
      icon : 'ios-analytics',
      onPress : () => {this.props.navigation.navigate('Dashboard')}
    },
    {
      label : 'Notification',
      icon : 'ios-notifications',
      onPress : () => {}
    },
    {
      label : 'Scan',
      icon : 'ios-barcode',
      onPress : () => {}
    },
    {
      label : 'Settings',
      icon : 'ios-settings',
      onPress : () => {this.props.navigation.navigate('Settings')}
    },
    {
      label : 'Collaps',
      icon : 'ios-close',
      onPress : ()=> {}
    },
    
  ]
  
  

  buttonRender = (item) => {
    return(
      <View
      key={item.label}
      style={{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
      }}>
        <Text style={{color:color.white}}>{item.label}</Text>
        <TouchableOpacity 
        onPress={()=>{
          item.onPress();
          this.setState({show:false});
        }}
        >
                <Icon reverse name={item.icon} type='ionicon' color={color.skin}/>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    const {
      buttonRender,
      buttonOptions
    } = this.props;
    return(
      <>
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.show}
          onRequestClose={() => {
            this.setState({show:false});
          }}>
            <StatusBar  backgroundColor={'rgba(0,0,0,0.8)'} barStyle="dark-light" />
            <View style={{width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.8)'}}/>
            <View 
            style={{
                position:'absolute',
                bottom:20,
                right:20,
                justifyContent:'flex-end',
                }}>
            {
              buttonOptions?
              buttonOptions.map(item=>{
                if(buttonRender)
                  return buttonRender(item);
                else
                  return this.buttonRender(item);
               }):
              this.buttonOptions.map(item=>{
                if(buttonRender)
                  return buttonRender(item);
                else
                  return this.buttonRender(item);
              })
            }

            </View>
            
        </Modal>
        {
          this.state.show==false && 
          <TouchableOpacity 
          onPress={() => this.setState({show:true})}
          style={{
                  position:'absolute',
                  bottom:20,
                  right:20,
                  }}>
                      <Icon reverse name='ios-menu' type='ionicon' color={color.skin}/>
          </TouchableOpacity>
        }
      </>
      );
  }
}