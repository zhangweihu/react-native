import React, {Component} from "react";
import {Text,Navigator,NetInfo,StyleSheet} from "react-native";
import {Container, Content,Header,Title,Footer,Button, Left, Right, Body, Icon,View,Card,Image,CardItem,Drawer} from "native-base";
import {TitleBar,FootTab} from "../../components/";
import SplashScreen from 'react-native-splash-screen'
import DrawerScreen from '../drawer/drawerScreen'
export default class HomeScreen extends Component{
      constructor(props){
             super(props)
             this.state={
                  isConnected:null,
                  connectionInfo:null 
             }
      }
     componentDidMount() { 
           //检查网络是否连接
           NetInfo.isConnected.fetch().done((isConnected)=>{
               this.setState({isConnected});
           })
           //检测网络连接信息
            NetInfo.fetch().done((connectionInfo) => {
                  this.setState({connectionInfo});
            });
            //监听网络变化事件
            NetInfo.addEventListener('change', (networkType) => {
                  this.setState({isConnected: networkType})
            })
            SplashScreen.hide()
      }
    render(){
      return(
          <Drawer ref={(ref) => {this._drawer = ref}} 
            content={<DrawerScreen />} 
            >
          
             <Container>
                <TitleBar
                   Icon={'menu'}
                   title={'Home'}
                   leftIconPress={()=>{
                         this._openDrawer()
                   }}
                />
                        
                    <Content>
                          <Card>
                               <CardItem>
                                     <Icon active name="logo-googleplus" />
                                     <Text>Google Plus</Text>
                                     <Right>
                                        <Icon name="arrow-forward" />
                                     </Right>
                               </CardItem>
                          </Card>
                           <Button  block  success onPress={()=>this.props.navigation.navigate('camera')}>
                                <Text>take picture </Text>
                           </Button>
                           <Button  block  warning onPress={()=>this.props.navigation.navigate('toast')}>
                                <Text>show toast </Text>
                           </Button>
                           <Button  block  danger onPress={()=>this.props.navigation.navigate('Scanner')}>
                                <Text>show Scan </Text>
                           </Button>
                           <Text style={styles.welcome}>
                                    当前的网络状态：
                                    {this.state.isConnected ? '网络在线': '离线'}
                                    </Text>
                                    <Text style={styles.welcome}>
                                          当前网络连接类型： {this.state.connectionInfo}
                                    </Text>
                                    <Text style={styles.welcome}>
                                          当前连接网络是否计费：
                                          {NetInfo.isConnectionExpensive === true ? '需要' : '不要'}
                           </Text>
                    </Content>
                    <Footer>
                         <Text>
                               footer
                         </Text>
                    </Footer>
              </Container>
              </Drawer>
      )
     
    }
    _openDrawer() {
      this._drawer._root.open();
   }
}
//样式定义
const styles = StyleSheet.create({
      container: {
          flex: 1,
          paddingTop: 30
      },
      welcome: {
          fontSize: 16,
          textAlign: 'left',
          margin: 10
      }
  });