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
export default class Dashboard extends Component {
    constructor(props){
      super(props);
      this.state = {
        value1:this.getRandomInt(27,28),
        value2:this.getRandomInt(25,26),
        value3:this.getRandomInt(26,27),
        value4:this.getRandomInt(30,31),
        value5:this.getRandomInt(29,30),
        hum1 : this.getRandomInt(50,51),
        hum2 : this.getRandomInt(62,65),
        hum3 : this.getRandomInt(45,46),
        hum4 : this.getRandomInt(55,57),
        hum5 : this.getRandomInt(40,42),
        
      };


    }

    componentDidMount(){
      const that = this;
      that.startTimer();
    }

    componentWillUnmount(){
      this.clearTimeout(timeWatch);
    }

    getRandomInt = (min, max) => {
      return Math.random() * (max - min) + min;
    }

    startTimer = () => {    
      this.timeWatch = setTimeout(() => {
          this.setState({
            value1:this.getRandomInt(27,28),
            value2:this.getRandomInt(25,26),
            value3:this.getRandomInt(26,27),
            value4:this.getRandomInt(30,31),
            value5:this.getRandomInt(29,30),
            hum1 : this.getRandomInt(50,51),
            hum2 : this.getRandomInt(62,65),
            hum3 : this.getRandomInt(45,46),
            hum4 : this.getRandomInt(55,57),
            hum5 : this.getRandomInt(40,42),

          });
          this.startTimer();
      }, 1000);
    
    }
    gaugeRender = (label='label',hum=0,temp=0,hum_max=0,max=100) => {
      return(
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={3}
        style={{
          margin:5,
          backgroundColor:color.card,
          
        }}
        >
        <View style={{alignItems:'center',padding:15,}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{flex:1,marginBottom:10,alignSelf:'flex-start',color:color.gray,textAlign:'left'}}>
              {label} (Celcius)
            </Text> 
            
            <Badge status='primary' value={<Text style={{color:color.white,marginHorizontal:10,}}>Online</Text>} />
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{marginBottom:10,color:color.gray}}>
              Temperature
              </Text> 
              <Speedometer
              value={temp}
              totalValue={max}
              size={(width-40)/2}
              outerColor={color.bgSkin}
              internalColor={color.red}
              showText
              text={temp.toFixed(2)}
              textStyle={{ color: color.gray,backgroundColor:color.card}}
              //showLabels
              showIndicator
              labelStyle={{ color: color.gray ,backgroundColor:color.card}}
              //showPercent
              percentStyle={{ color: color.gray,backgroundColor:color.card }}
              innerCircleStyle={{backgroundColor:color.card}}
              />
            </View>
            <View style={{width:5,}}/>
            <View style={{alignItems:'center'}}>
              <Text style={{marginBottom:10,color:color.gray}}>
              Humidity
              </Text> 
              <Speedometer
              value={hum}
              totalValue={hum_max}
              size={(width-40)/2}
              outerColor={color.bgSkin}
              internalColor={color.blue}
              //showText
              text={hum.toFixed(2)}
              textStyle={{ color: color.gray,backgroundColor:color.card}}
              //showLabels
              showIndicator
              labelStyle={{ color: color.gray ,backgroundColor:color.card}}
              showPercent
              percentStyle={{ color: color.gray,backgroundColor:color.card }}
              innerCircleStyle={{backgroundColor:color.card}}
              />
            </View>
          </View>
          
        </View>
      </CardView>
      );
    }

    render() {
        return(
        <View style={{backgroundColor:color.bgSkin,flex:1,padding:7,}}>
        
        
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >
              <ListItem
                leftAvatar={{
                  title: "PT Skyreach",
                  source: { uri: "http://skyreach.id/assets/images/sr_logo_white_120x120.png" },
                  showEditButton: true,
                }}
                title={'PT Skyreach'}
                subtitle={'Mobile Sensors Monitoring'}
                chevron
                subtitleStyle={{color:color.gray}}
                titleStyle={{color:color.gray}}
                containerStyle={{margin:5,backgroundColor:color.card}}
              />
              
              <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={3}
                style={{
                  margin:5,
                  backgroundColor:color.card,
                  padding:10,
                }}
              >
                <Text style={{alignSelf:'flex-start',color:color.gray,textAlign:'left'}}>Top Highest Temperature</Text>
                <PieChart
                  data={[
                    {
                      name: "Server 1",
                      population: parseFloat(this.state.value1.toFixed(2)),
                      color: "#233A4D",
                      legendFontColor: color.gray,
                      legendFontSize: 15
                    },
                    {
                      name: "Server 2",
                      population: parseFloat(this.state.value2.toFixed(2)),
                      color: "#4A306D",
                      legendFontColor: color.gray,
                      legendFontSize: 15
                    },
                    {
                      name: "Server 3",
                      population: parseFloat(this.state.value3.toFixed(2)),
                      color: "#A167A5",
                      legendFontColor: color.gray,
                      legendFontSize: 15
                    },
                    {
                      name: "Server 4",
                      population: parseFloat(this.state.value4.toFixed(2)),
                      color: "#D3BCCC",
                      legendFontColor: color.gray,
                      legendFontSize: 15
                    },
                    {
                      name: "Server 5",
                      population: parseFloat(this.state.value5.toFixed(2)),
                      color: "#6A626E",
                      legendFontColor: color.gray,
                      legendFontSize: 15
                    }
                  ]}
                  width={width-40}
                  height={220}
                  chartConfig={chartConfig}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="15"
                  absolute
                />
              </CardView>

              {this.gaugeRender('Server 1',this.state.hum1,this.state.value1,100,60)}
              {this.gaugeRender('Server 2',this.state.hum2,this.state.value2,100,60)}
              {this.gaugeRender('Server 3',this.state.hum3,this.state.value3,100,60)}
              {this.gaugeRender('Server 4',this.state.hum4,this.state.value4,100,60)}
              {this.gaugeRender('Server 5',this.state.hum5,this.state.value5,100,60)}
            </ScrollView>
        </SafeAreaView>


        <MenuButton navigation={this.props.navigation}/>
        </View>
        );
    }

}