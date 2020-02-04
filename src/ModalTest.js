/**
 * @flow
 * @description 文件描述
 * @author heykk
 * @lastEditors heykk
 * @lastEditTime 2020-01-21
 */
import React from 'react';
import {Modal,Text,View} from 'react-native'

export default function ( props ) {
    const {visible,content} = props;
    return (<Modal visible={visible}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>{content}</Text>
        </View>
    </Modal>)
}
