//npx expo start
import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../../src/components/modal'

let chaset = 'asbcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%*<>?@-_+=!'


export function Home() {

    const [size, setSize] = useState(10);
    const [passwordValue, setPassWordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false);



    function generatePassword() {

        let password = '';
        for (let i = 0, n = chaset.length; i < size; i++) {
            password += chaset.charAt(Math.floor(Math.random() * n))
        }

        console.log(password);

        setPassWordValue(password);
        setModalVisible(true);

    };

    return (

        <View style={styles.container}>

            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>
                {size} Caracteres
            </Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor='#000'
                    minimumTrackTintColor='#fff'
                    thumbTintColor='#EAD040'
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>

            <TouchableOpacity style={styles.btn} onPress={generatePassword}>
                <Text style={styles.btnText}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>

        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#102C57"
    },

    logo: {
        marginBottom: 60,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#fff"
    },

    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#0E46A3",
        borderRadius: 12,
        padding: 8
    },

    btn: {
        backgroundColor: '#0E46A3',
        width: '45%',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 20

    },

    btnText: {
        color: "#fff",
        fontSize: 20,
    },

})