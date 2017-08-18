import React, { Component } from 'react';
import { Container, Header, Content, Toast, Button, Text, Icon ,Left,Body,Title,Right} from 'native-base';
import {TitleBar,FootTab} from "../../components/";
export default class ToastScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }
  }
  render() {
    return (
      <Container>
              <Header>
                      <Left>
                      <Button transparent >
                            <Icon name={'arrow-back'} />
                      </Button>
                      </Left>
                      <Body>
                      <Title>{'toast'}</Title>
                      </Body>
                      <Right />
              </Header>
        <Content padder>
          <Button onPress={()=> Toast.show({
              text: 'Wrong password!',
              position: 'center',
              buttonText: 'Okay',
              duration:3000
            })}>
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
 
}