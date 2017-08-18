import React, {Component} from "react";
import {Text,Navigator} from "react-native";
import {Container, Content,Header,Title,Footer,Button, Left, Right, Body, Icon,View,Card,Image,CardItem,Drawer} from "native-base";
import {TitleBar,FootTab} from "../../components/";
import SplashScreen from 'react-native-splash-screen'
import DrawerScreen from '../drawer/drawerScreen'
export default class HomeScreen extends Component{
     componentDidMount() {
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