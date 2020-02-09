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
import {color} from '../../../../static/color';
import MenuButton from '../../../../controls/MenuButton';
import CardView from 'react-native-cardview'
import Speedometer from 'react-native-speedometer-chart';
import NumberFormat from 'react-number-format';
import { Avatar,Button, Badge, Icon, withBadge,ListItem,Input } from 'react-native-elements'
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
export default class ServerConfiguration extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
    }

    componentDidMount(){
    }
    onSave = () => {
        this.props.navigation.goBack();
    }

    render() {
        return(
        <>
        <View style={{backgroundColor:color.bgSkin,flex:1,padding:7,}}>
        
        
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >
                <Input
                placeholder='Host'
                placeholderTextColor={color.grayDark}
                inputStyle={{color:color.gray}}
                autoCapitalize='none'
                leftIcon={{ type: 'font-awesome', name: 'server', color:color.gray, }}
                />
                <Input
                placeholder='Port'
                keyboardType='numeric'
                inputStyle={{color:color.gray}}
                placeholderTextColor={color.gray}
                leftIcon={{ type: 'font-awesome', name: 'hashtag', color:color.gray, }}
                />
                <Input
                placeholder='Timeout'
                keyboardType='numeric'
                inputStyle={{color:color.gray}}
                placeholderTextColor={color.gray}
                leftIcon={{ type: 'font-awesome', name: 'times-circle', color:color.gray, }}
                />
                
            </ScrollView>
            
        </SafeAreaView>
        
            

        </View>
        <View style={{
            backgroundColor:color.bgSkin,
            bottom:0,
            padding:10,
        }}>
            <Button
            onPress={this.onSave}
            icon={
                <Icon
                name="save"
                size={24}
                color="white"
                />
            }
            buttonStyle={{backgroundColor:color.skin}}
            title="Save"
            />
        </View>
        </>
        );
    }

}