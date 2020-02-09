import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native'; 
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
import {color} from '../../static/color';
import MenuButton from '../../controls/MenuButton';
import CardView from 'react-native-cardview'
import Speedometer from 'react-native-speedometer-chart';
import NumberFormat from 'react-number-format';
import { Avatar, Badge, Icon, withBadge,ListItem } from 'react-native-elements'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const {width,height} = Dimensions.get('window'); 
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};
export default class Settings extends Component {
    constructor(props){
      super(props);
      this.state = {
        settingsMenuData:[
          {
            title:'Profile',
            subtitle:'Edit profile picture, name, and subtitle',
            icon:(<Icon reverse name='ios-person' type='ionicon' color={color.orange}/>),
            onPress: () => {}
          },
          {
            title:'Notification',
            subtitle:'Enable/disable, ringtone, via email, etc...',
            icon:(<Icon reverse name='ios-notifications' type='ionicon' color={color.orange}/>),
            onPress: () => {}
          },
          {
            title:'Sensor Threshold',
            subtitle:'Adjust sensor value thershold',
            icon:(<Icon reverse name='ios-options' type='ionicon' color={color.orange}/>),
            onPress: () => {this.props.navigation.navigate('SensorThreshold')}
          },
          {
            title:'Server Configurations',
            subtitle:'Destination server, timeout, ports',
            icon:(<Icon reverse name='ios-cloud' type='ionicon' color={color.orange}/>),
            onPress: () => {this.props.navigation.navigate('ServerConfiguration')}
          },
          
        ]
        
      };
    }

    componentDidMount(){
    }



    
    menuSettingsRender = (item,index) => {
      return(
        <TouchableOpacity
        key={index}
        onPress={item.onPress}
        >
          
          <ListItem
            leftElement={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            chevron
            subtitleStyle={{color:color.gray}}
            titleStyle={{color:color.gray}}
            containerStyle={{margin:5,backgroundColor:color.card}}
          />
        </TouchableOpacity>
      );
    }

    render() {
        return(
        <View style={{backgroundColor:color.bgSkin,flex:1,padding:7,}}>
        
        
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >
              {
                this.state.settingsMenuData.map((item,index) => {
                  return this.menuSettingsRender(item,index);
                })
              }
            </ScrollView>
        </SafeAreaView>


        <MenuButton navigation={this.props.navigation}/>
        </View>
        );
    }

}