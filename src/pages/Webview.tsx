import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// export default class HWebview extends Component {
//   render() {
//     return (
//       <View>
//         <Text>webview</Text>
//         <RWebview />
//       </View>
//     );
//   }
// }



export default class RWebview extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            // uri: 'http://localhost:7000/#//user/index'
            uri: "https://m9.loyalvalleycapital.com/native/openUrl?url=https%3A%2F%2Fm9.loyalvalleycapital.com%2Fuser%2Finvest%2FdoorPlank%2Fttxin%3Fid%3DTTX001&accptMd=2&version=2.2.0&custNo=10141225877&token=600BA74E211F8a44_10.66.16.94_2fb379c3-643f-4a25-84b7-7128442d8012&mobileNo=13162965110",
          }}
          onMessage={() => { }}
          // injectedJavaScript={runFirst}
        />
      </View>
    );
  }
}