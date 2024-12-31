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

const RegisterScreen = ({ navigation }) => {
    const passwordInputRef = useRef(null);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={[styles.container]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/img/Union.png')} style={styles.imgLogo} />
                </View>
                <View style={styles.borderEdt}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholderTextColor={'#939393'}
                        placeholder="Email"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordInputRef.current.focus()}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={styles.borderEdt}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholderTextColor={'#939393'}
                        placeholder="Email"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordInputRef.current.focus()}
                        blurOnSubmit={false}
                    />
                </View>
                <View style={[styles.borderEdt]}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholderTextColor={'#939393'}
                        placeholder="Password"
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
                <View style={[styles.borderEdt]}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholderTextColor={'#939393'}
                        placeholder="Password"
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
                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center', color: "#fff" }}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.btnRegister}>
                        <Text style={{ color: "#A9A9A9", fontSize: 12, marginTop: 16 }}>
                            Have an account? {<Text style={{ color: "#F79E89" }}>Sign up</Text>}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

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
        marginBottom: 90,
        marginTop: 80
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
        alignItems: 'center',
        marginBottom: 15
    },
    btnLogin: {
        backgroundColor: "#F79E89",
        width: '100%',
        height: '48',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
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