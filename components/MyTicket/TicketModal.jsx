import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import { useState } from 'react';
import styled, { css } from '@emotion/native';
import TicketInfo from '../../components/MyTicket/TicketInfo';
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { BLACK_COLOR } from '../../common/colors';
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { async } from '@firebase/util';

const TicketModal = ({
  title,
  imgPath,
  period,
  place,
  price,
  deleteBookmarks,
  setModalVisible,
  modalVisible,
}) => {
  return (
    <ModalView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TitleText>{title}</TitleText>
          <ModalPoster source={{ uri: imgPath }} />
          <ScrollView>
            <ModalText>
              <TicketInfo period={period} place={place} price={price} />
            </ModalText>
          </ScrollView>

          <CloseView>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <AntDesign name="check" size={24} color="black" />
            </Pressable>
            {/* <TicketModal /> */}
            <CheckingBtn onPress={deleteBookmarks}>
              <AntDesign name="delete" size={24} color="black" />
            </CheckingBtn>
          </CloseView>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>상세 보기</Text>
      </Pressable>
    </ModalView>
  );
};

export default TicketModal;

const TitleText = styled.Text`
  word-break: break-all;
  font-size: 20px;
  font-weight: bold;
  color: ${BLACK_COLOR};
  margin-top: 15px;
  margin-bottom: 5px;
`;

const CloseView = styled.View`
  flex-direction: row;
`;
const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const ModalPoster = styled.Image`
  width: 70%;
  height: 55%;
  border-radius: 15px;
  margin: 5px;
`;

const ModalText = styled.Text`
  margin-top: 15px;
  text-align: center;
  justify-content: center;
`;

const CheckingBtn = styled.TouchableOpacity`
  margin-left: 50px;
`;

const styles = StyleSheet.create({
  modalView: {
    marginTop: 95,
    margin: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#cccccc',
  },
  buttonClose: {
    backgroundColor: '#19a1f4',
  },
  textStyle: {
    color: '#af72f9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
