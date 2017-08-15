import React, {Component} from "react";
import {Text} from "react-native";
import {Container, Content,Header,Title,Footer, FooterTab, Button, Left, Right, Body, Icon,View,DeckSwiper,Card,CardItem,Image,Thumbnail} from "native-base";
//import {TitleBar} from "../../components/";
export default class HomeScreen extends Component{
    render(){
        return(
             <Container>
                    <Header>
                            <Left>
                                <Button transparent>
                                <Icon name='menu' />
                                </Button>
                            </Left>
                            <Body>
                                <Title >Header</Title>
                            </Body>
                            <Right />
                    </Header>
                    <Content>
                       <Text> hello</Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button active>
                              <Icon  active name="apps" />
                            </Button>
                            <Button>
                               <Icon name="camera" />
                            </Button>
                            <Button>
                               <Icon  name="navigate" />
                            </Button>
                            <Button>
                               <Icon name="person" />
                            </Button>
                        </FooterTab>
                   </Footer>
              </Container>
        )
    }
}