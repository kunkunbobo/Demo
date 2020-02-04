import React,{useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ModalTest from './ModalTest';
import {Button} from "react-native-elements"
// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={styles.box}>
//                 <Text style={styles.text}>Hello, world!</Text>
//                 <Button title={'相册选择'} onPress={()=>{
//
//                 }}/>
//             </View>
//         );
//     }
// }




export default function () {
    const [visible,setVisible] = useState(false);
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Hello, world!</Text>
            <Button title={'相册选择'} onPress={() => {
                setVisible(true);
            }}/>
            <ModalTest visible={visible} content={'xxxx'}/>
        </View>
    );

}

const styles = StyleSheet.create({
    box: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {fontWeight: 'bold'},

});
