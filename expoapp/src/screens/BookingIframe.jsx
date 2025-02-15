import React from 'react';
import { View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

function BookingWidget() {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const widgetUrl = 'https://padelpuls.simplybook.asia/v2/#book'; // SimplyBook widget URL

    const injectScript = `
    console.log("🚀 ~ BookingWidget ~ iframe:")
    const iframe = document.querySelector('iframe'); // Find the iframe
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document; // Access iframe's document
    const sectionToHide = iframeDocument.querySelector('#footer'); // Replace with the section you want to hide
    if (sectionToHide) {
        sectionToHide.style.display = 'none'; 
    }
        `;
    
    return (
        <View style={{ flex: 1 }}>
            <WebView
                originWhitelist={['*']}
                source={{ uri: widgetUrl }}
                injectedJavaScript={injectScript}
                // javaScriptEnabled={true}
                style={{ width: screenWidth, height: screenHeight }}
            />
        </View>
    );
}

export default BookingWidget;
