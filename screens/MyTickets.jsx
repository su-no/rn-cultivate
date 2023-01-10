import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from '@emotion/native';
import { screenHeight } from '../common/utils';
import { useState } from 'react';
import { getDetail } from '../common/api';
import TicketModal from '../components/MyTicket/TicketModal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
  PINK_COLOR,
  WHITE_COLOR,
  BLACK_COLOR,
  SKY_COLOR,
} from '../common/colors';
import TicketInfo from '../components/MyTicket/TicketInfo';
import { useQuery } from 'react-query';
import Loader from '../components/Loader/Loader';

export default function MyTickets({ navigation: { navigate } }) {
  const dday = 'D-Day';
  const [modalVisible, setModalVisible] = useState(false);
  const title = '뮤지컬 캣츠 내한공연-서울 (Musical CATS)';

  const {
    isLoading,
    isError,
    data: detail,
  } = useQuery({
    queryKey: 'detail',
    queryFn: () => getDetail(title),
  });

  if (isLoading) {
    return <Loader />;
  }

  const {
    MAIN_IMG: imgPath,
    DATE: period,
    PLACE: place,
    USE_FEE: price,
  } = detail.culturalEventInfo.row[0];

  return (
    <StSafeArea>
      <ScrollView>
        <SwiperChildView
          // onPress={() => navigate('Stack', { screen: 'Detail' })}
          onPress={() => {
            navigate('Stack', {
              screen: 'Detail',
              params: { title },
            });
          }}
        >
          <StTicketHeader>
            <HeaderText>{dday}</HeaderText>
          </StTicketHeader>

          <Row>
            <BackgroundImg source={{ uri: imgPath }} />

            <Column>
              {/* 텍스트 이모지는 통합해서 */}
              <TitleText>{title}</TitleText>
              <TicketInfo period={period} place={place} price="상세보기" />
            </Column>
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
                  <ModalPoster source={require('../assets/sampleImg2.png')} />
                  <ScrollView>
                    <ModalText>
                      <TicketInfo period={period} place={place} price={price} />
                    </ModalText>
                  </ScrollView>

                  <CloseView>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <AntDesign name="check" size={24} color="black" />
                    </Pressable>
                    <CheckingBtn onPress={() => {}}>
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
          </Row>
        </SwiperChildView>
      </ScrollView>
    </StSafeArea>
  );
}

const StSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const SwiperChildView = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  height: ${screenHeight / 4 + 'px'};
  margin: 10px;
  border-radius: 15px;
`;

const StMYTicket = styled.TouchableOpacity`
  flex: 1;
`;

const StTicketHeader = styled.View`
  justify-content: flex-end;
  height: ${screenHeight / 22 + 'px'};
  background-color: ${BLACK_COLOR};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  opacity: 0.3;
`;
const Column = styled.View`
  width: 65%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
`;

const TitleText = styled.Text`
  word-break: break-all;
  font-size: 20px;
  font-weight: bold;
  color: ${BLACK_COLOR};
  margin-top: 10px;
  margin-bottom: 5px;
`;

const HeaderText = styled.Text`
  color: ${WHITE_COLOR};
  padding: 5px;
  font-weight: 600;
  margin-left: 10px;
`;

const CloseView = styled.View`
  flex-direction: row;
`;

// 모달

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
  margin: 15px;
  text-align: center;
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
