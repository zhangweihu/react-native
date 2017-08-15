import React, {Component} from "react";
import {Text} from "react-native";
import {Container, Content} from "native-base";
//import {TitleBar} from "../../components/";
export default class HomeScreen extends Component{
    render(){
        return(
             <Container>
                
                <Content>
                    <Text>
                        这里显示内容
                    </Text>
                </Content>
              
            </Container>
        )
    }
}