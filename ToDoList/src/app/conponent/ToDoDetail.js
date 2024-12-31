import { Image, Modal, PanResponder, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const ToDoDetail = ({ route, navigation }) => {
    const { item } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [title, setTitle] = useState(item.title);
    const [content, setContent] = useState(item.content);
    const [date, setDate] = useState(item.dates);


    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dy > 50) {
                    setModalVisible(false);
                }
            },
            onPanResponderRelease: () => {
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={deleteVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setDeleteVisible(!deleteVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.btnStyle}><Text style={{color:'#F76C6A', fontSize: 14,fontWeight: '500'}}>Delete TODO</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => setDeleteVisible(!deleteVisible)} style={styles.btnStyle}><Text style={{color:'#00FF19', fontSize: 14,fontWeight: '500'}}>Cancel</Text></TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalOverlay}  {...panResponder.panHandlers} >
                    <View style={styles.modalContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
                            <View style={{ width: 90, height: 5, backgroundColor: '#fff', borderRadius: 20 }}></View>
                        </View>
                        <View style={[styles.borderText,]}>
                            <TextInput
                                multiline={true}
                                placeholder={item.content}
                                placeholderTextColor={"#fff"}
                                value={title}
                                onChangeText={(text) => setTitle(text)}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }}
                            />
                        </View>
                        <View style={[styles.borderText, { flex: 1, marginVertical: 15, justifyContent: 'flex-start' }]}>
                            <TextInput
                                multiline={true}
                                placeholder={item.content}
                                placeholderTextColor={"#fff"}
                                value={content}
                                onChangeText={(text) => setContent(text)}
                                style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                    color: '#fff',
                                }}
                            />
                        </View>
                        <View style={[styles.borderText, { marginBottom: 15 }]}>
                            <TextInput
                                multiline={true}
                                placeholder={item.content}
                                placeholderTextColor={"#fff"}
                                value={date}
                                onChangeText={(text) => setDate(text)}
                                style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                    color: '#fff'
                                }}
                            />
                        </View>
                        <TouchableOpacity style={styles.addImageButton}>
                            <Text style={styles.addImageText}>Add Image (Optional)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.editButton}>
                            <Text style={[styles.editButtonText, { color: '#F79E89' }]}>EDIT TODO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={[styles.flexRow]}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/img/chevron-left.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.flexRow]}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/img/clock333.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={{ marginHorizontal: 8 }} source={require('../../assets/img/edit-2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDeleteVisible(true)}>
                        <Image source={require('../../assets/img/trash-2.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.darkText, { fontSize: 26, fontWeight: 'bold', marginTop: 25 }]}>{item.title.toUpperCase()}</Text>
            <Text style={[styles.darkText, { flex: 1, marginTop: 25, marginBottom: 20, fontSize: 16, fontWeight: '400' }]}>{item.content}</Text>
            <Text style={[styles.darkText, { fontSize: 14, fontWeight: '400', textAlign: 'center', }]}>{item.dates}</Text>
        </View>
    )
}

export default ToDoDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 20
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    darkText: {
        color: '#272727'
    },
    whiteText: {
        color: '#fff'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        marginTop: 90,
        backgroundColor: '#F79E89',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        height: '85%',
        width: '100%'
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    addImageButton: {
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff',
        height: 48,
        paddingStart: 15,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    addImageText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 16
    },
    editButton: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
    },
    editButtonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F79E89',
    },
    borderText: {
        borderRadius: 12,
        paddingStart: 10,
        borderWidth: 2,
        borderColor: '#fff',
        height: 48,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    btnStyle: {
        width: '100%',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '100%',
        margin: 20,
        borderRadius: 20,
        padding: 35,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})