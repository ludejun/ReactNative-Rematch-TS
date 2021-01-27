import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, RootState } from '../store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

type Props = {};

function Home(props) {
  const { isAuth, isLogining, userInfo, fetchLogin, navigation } = props;
  const onLoginClick = () => {
    fetchLogin &&
      fetchLogin({
        data: {
          loginName: '',
          loginPwd: '***',
        },
        cb: (userInfo: object) => {
          // 持久化存储
        },
      });
  };

  const onWebviewClick = () => {
    navigation.navigate('Webview');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <View style={styles.reduxSample}>
        <Button title="登陆" onPress={onLoginClick} />
        {isLogining && <Text style={styles.flexItem}> 登陆中... </Text>}
        <Text style={styles.flexItem}>登陆状态：{isAuth ? <Text>已登陆，欢迎{userInfo.username}</Text> : <Text>您未登陆</Text>}</Text>
      </View>
      <Button title="跳转webview" onPress={onWebviewClick} />
    </View>
  );
}

const mapStateToProps = ({ user }: RootState) => ({
  isAuth: user.isAuth,
  isLogining: user.isLogining,
  userInfo: user.userInfo,
});
const mapDispatchToProps = ({ user: { fetchLogin } }: Dispatch) => ({
  fetchLogin,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  reduxSample: {
    flex: 0,
    width: 200,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexItem: {
    flex: 1,
    textAlign: 'center',
  },
});
