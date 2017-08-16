import React, {Component} from "react";
import {Text,Navigator} from "react-native";
import {Container, Content,Header,Title,Footer,FooterTab, Button, Left, Right, Body, Icon,View,DeckSwiper,Card,CardItem,Image,Thumbnail} from "native-base";
import {TitleBar,FootTab} from "../../components/";

export default class HomeScreen extends Component{
    render(){
        return(
             <Container>
                   <TitleBar
                     title ={'Home'}
                     Icon ={'menu'}
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
                           <Button  onPress={()=>this.props.navigation.navigate('camera')}>
                                <Text>点击去拍照 </Text>
                           </Button>
                         
                    </Content>
                    <Footer>
                        <FootTab/>
                   </Footer>
              </Container>
        )
    }
}