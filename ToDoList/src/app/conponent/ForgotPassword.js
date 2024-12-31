import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ForgotPassword = ({ navigation }) => {
    const passwordInputRef = useRef(null);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={[styles.container]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Image
                        style={{ width: 24, height: 24, }}
                        source={require('../../assets/img/chevron-left.png')} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/img/Union.png')} style={styles.imgLogo} />
                </View>
                <View style={styles.borderEdt}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Password"
                        placeholderTextColor={'#939393'}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordInputRef.current.focus()}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={[styles.borderEdt, { marginTop: 15 }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Comfirm Password"
                        placeholderTextColor={'#939393'}
                        secureTextEntry={true}
                        ref={passwordInputRef}
                        returnKeyType="done"
                        onSubmitEditing={() => console.log('Submit Login')}
                    />
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/img/eye-off.png')}
                            style={{ width: 22, height: 16 }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnChangePassword} onPress={() => { navigation.navigate("Login") }}>
                    <Text style={{ textAlign: 'center', color: "#fff" }}>CHANGE PASSWORD</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        backgroundColor: "#fff",
        flex: 1,
        paddingBottom: 30
    },
    imgLogo: {
        width: 187,
        height: 180,
        marginBottom: 170,
        marginTop: 56
    },
    borderEdt: {
        borderRadius: 12,
        borderColor: "#5D5D5D",
        height: 48,
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingEnd: 16.5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnChangePassword: {
        backgroundColor: "#F79E89",
        width: '100%',
        height: '48',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    btnRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    btnForgot: {
        color: "#939393",
        marginVertical: 16,
        textAlign: 'right'
    }
})