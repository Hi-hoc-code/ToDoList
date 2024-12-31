import { FlatList, Image, Modal, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { data } from '../mockData/todoData';

const renderListToDO = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ToDoDetail', { item })}>
      <View style={[styles.itemList, item.done && { backgroundColor: '#F79E89' }]}>
        <View style={[styles.flexRow]}>
          <Text style={[styles.whiteColor, { fontSize: 16, fontWeight: 'bold' }]}>{item.title}</Text>
          {!item.done && (
            <Image source={require('../../assets/img/clock.png')} style={styles.icon} />
          )}
        </View>
        <Text style={[styles.whiteColor, { fontSize: 14, flex: 1, marginVertical: 5 }]}>{item.content}</Text>
        <Text style={[styles.whiteColor, { fontSize: 11 }]}>{item.dates}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const translateY = useRef(new Animated.Value(0)).current;
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
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalOverlay} {...panResponder.panHandlers}>
          <Animated.View
            style={[styles.modalContainer, { transform: [{ translateY }] }]}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
              <View style={{ width: 90, height: 5, backgroundColor: '#fff', borderRadius: 20 }}></View>
            </View>
            <View style={[styles.borderText]}>
              <TextInput
                multiline={true}
                placeholder="Title"
                placeholderTextColor={"#fff"}
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              />
            </View>
            <View style={[styles.borderText, { flex: 1, marginVertical: 15, justifyContent: 'flex-start' }]}>
              <TextInput
                multiline={true}
                placeholder="Content"
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
                placeholder="Date"
                placeholderTextColor={"#fff"}
                value={date}
                onChangeText={(text) => setDate(text)}
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#fff',
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
          </Animated.View>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.flexRow]}>
          <Text style={{ fontSize: 32, color: '#F79E89', fontWeight: 'bold' }}>TO DO LIST</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../../assets/img/settings.png')} />
          </TouchableOpacity>
        </View>
        <View style={[styles.flexRow, { marginTop: 40 }]}>
          <Image style={{ width: 25, height: 25 }} source={require('../../assets/img/Union1.png')} />
          <Text style={{ fontSize: 36, color: '#F76C6A', flex: 1, alignItems: 'flex-start', marginStart: 10 }}>LIST OF TODO</Text>
          <TouchableOpacity>
            <Image style={{ width: 24, height: 24 }} source={require('../../assets/img/filter.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 30 }}
          data={data}
          renderItem={({ item }) => renderListToDO({ item, navigation })}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/img/plus-circle.png')}
            style={{ width: 60, height: 60 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemList: {
    width: '100%',
    height: 120,
    backgroundColor: '#F76C6A',
    marginBottom: 16,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  whiteColor: {
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    width: '100%',
  },
  borderText: {
    borderRadius: 12,
    paddingStart: 10,
    borderWidth: 2,
    borderColor: '#fff',
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  addImageButton: {
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
    height: 48,
    paddingStart: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  addImageText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 16,
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
  addButtonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
