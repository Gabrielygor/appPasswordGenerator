import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native"


export function ModalPassword({ password, handleClose }) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Senha gerada
                </Text>

                <Pressable style={styles.ineerPassword}>
                    <Text style={styles.text}> {password} </Text>
                </Pressable>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={handleClose}> 
                        <Text style={styles.btnText}>
                            Voltar
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
        marginTop: 12,
        marginBottom: 28
    },

    btn: {
        backgroundColor: 'red',
        padding: 16,
        borderRadius: 12
    },

    btnText: {
        color: '#fff'
    }

})