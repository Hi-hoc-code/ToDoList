import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.flexRow]}>
                <Text style={{ fontSize: 32, color: '#F79E89', fontWeight: 'bold' }}>TO DO LIST</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../../assets/img/settings.png')} />
                </TouchableOpacity>
            </View>
            <Image style={{ marginVertical: 110, width: 326.12, height: 243 }} source={require('../../assets/img/rafiki.png')} />
            <View style={styles.flexRow}>
                <Text style={{ color: '#272727', opacity: 0.5 }}>Full Name</Text>
                <Text style={[styles.textInfo, styles.mainColor, { fontWeight: 'bold' }]}>HO NGOC Y</Text>
            </View>
            <View style={[styles.flexRow, { marginVertical: 15 }]}>
                <Text style={{ color: '#272727', opacity: 0.5 }}>Email</Text>
                <Text style={[styles.textInfo, styles.mainColor]}>Ngoctyho1612@gmail.com</Text>
            </View>
            <View style={styles.flexRow}>
                <Text style={{ color: '#272727', opacity: 0.5 }}>Password</Text>
                <Text style={[styles.textInfo, styles.mainColor]}>Change Password</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btnLogout}><Text style={{ textAlign: 'center', color: '#fff', fontSize: 14 }}>LOG OUT</Text></TouchableOpacity>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: '#fff'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainColor: {
        color: '#F79E89'
    },
    btnLogout: {
        width: '100%',
        height: 48,
        backgroundColor: '#F79E89',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    textInfo: {
        flex: 1, textAlign: 'right', fontSize: 16
    }
})