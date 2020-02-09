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
export default class SensorThreshold extends Component {
    constructor(props){
      super(props);
      this.state = {
          DeviceList : [
                {
                    id : 2001,
                    name : 'Server 1',
                    t_min : 0,
                    t_max : 30,
                    h_min : 40,
                    h_max : 70,
                },
                {
                    id : 2002,
                    name : 'Server 2',
                    t_min : 0,
                    t_max : 30,
                    h_min : 40,
                    h_max : 70,
                },
                {
                    id : 2003,
                    name : 'Server 3',
                    t_min : 0,
                    t_max : 30,
                    h_min : 40,
                    h_max : 70,
                },
                {
                    id : 2004,
                    name : 'Server 4',
                    t_min : 0,
                    t_max : 30,
                    h_min : 40,
                    h_max : 70,
                },
                {
                    id : 2005,
                    name : 'Server 5',
                    t_min : 0,
                    t_max : 30,
                    h_min : 40,
                    h_max : 70,
                },
          ]
      };
    }

    componentDidMount(){
    }
    onSave = () => {
        this.props.navigation.goBack();
    }

    deviceRender = (item,index) => {
        return (
            <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={3}
                key={index}
                style={{
                margin:5,
                backgroundColor:color.card,
                padding:15,
                }}
                >
                    <Text style={{color:color.gray}}> Device {item.id}</Text>
                    <Input
                    placeholder='Device Name'
                    value={item.name.toString() }
                    keyboardType='numeric'
                    inputStyle={{color:color.gray}}
                    placeholderTextColor={color.gray}
                    leftIcon={{ type: 'font-awesome', name: 'microchip', color:color.gray, }}
                    />
                    <Text style={{color:color.gray}}>Temperature</Text>
                    <Input
                    placeholder='Min'
                    keyboardType='numeric'
                    value={item.t_min.toString() }
                    inputStyle={{color:color.gray}}
                    placeholderTextColor={color.gray}
                    leftIcon={{ type: 'font-awesome', name: 'hashtag', color:color.gray, }}
                    />
                    <Input
                    placeholder='Max'
                    keyboardType='numeric'
                    value={item.t_max.toString() }
                    inputStyle={{color:color.gray}}
                    placeholderTextColor={color.gray}
                    leftIcon={{ type: 'font-awesome', name: 'hashtag', color:color.gray, }}
                    />
                    <Text style={{color:color.gray}}>Humidity</Text>
                    <Input
                    placeholder={'Min'}
                    keyboardType='numeric'
                    value={item.h_min.toString() }
                    inputStyle={{color:color.gray}}
                    placeholderTextColor={color.gray}
                    leftIcon={{ type: 'font-awesome', name: 'hashtag', color:color.gray, }}
                    />
                    <Input
                    placeholder='Max'
                    keyboardType='numeric'
                    value={item.h_max.toString() }
                    inputStyle={{color:color.gray}}
                    placeholderTextColor={color.gray}
                    leftIcon={{ type: 'font-awesome', name: 'hashtag', color:color.gray, }}
                    />
                </CardView>
                
                
        );
    }

    render() {
        return(
        <>
        <View style={{backgroundColor:color.bgSkin,flex:1,padding:7,}}>
        
        
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >
                {
                    this.state.DeviceList.map((item,index) => {
                        return(
                            this.deviceRender(item,index)
                        );
                    })
                }
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