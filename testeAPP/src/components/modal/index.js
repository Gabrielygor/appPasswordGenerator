import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native"
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'

export function ModalPassword({ password, handleClose }) {

    const { saveItem } = useStorage();


    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)
        alert("Senha salva com sucesso.")
        handleClose()
    }

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Senha gerada
                </Text>

                <Pressable style={styles.ineerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}> {password}</Text>
                </Pressable>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={[styles.btn, styles.btnExit]} onPress={handleClose}>
                        <Text style={styles.btnText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, styles.btnSave]} onPress={handleCopyPassword}>
                        <Text style={styles.btnText}>
                            Salvar senha
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        backgroundColor: '#fff',
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6

    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,

    },

    ineerPassword: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8
    },

    text: {
        color: "#fff",
        textAlign: 'center'

    },

    btnArea: {
        flexDirection: "row",
        width: "90%",
        gap: 16,
        justifyContent: "space-between",
        marginTop: 12,
        marginBottom: 18
    },

    btn: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        borderRadius: 12
    },

    btnExit: {
        backgroundColor: 'red',
    },

    btnSave: {
        backgroundColor: "green",
    },

    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }

})