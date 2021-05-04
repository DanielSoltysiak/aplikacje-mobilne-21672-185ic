import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const MyWebComponent = (props) =>  {
    return (
      <WebView
        source={{ uri: 'https://www.google.com/search?q=' + props.search}}
        style={{ marginTop: 20 }}
      />
    );
}

export default MyWebComponent;