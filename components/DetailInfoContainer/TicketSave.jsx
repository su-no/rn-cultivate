import React from 'react';
import * as S from '../DetailInfoContainer/styles';
import { authService, dbService } from '../../common/firebase';
import { doc, updateDoc, arrayUnion, setDoc, getDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

export default function TicketSave({ title }) {
  // 티켓 찜하기
  const uid = authService.currentUser.uid;
  //2. 티켓을 눌렀을때, 그 티켓의 타이틀?정보가 저장되게 만들어보자.

  const addTicket = async () => {
    const docRef = doc(dbService, 'bookmarks', uid);

    // 유저 컬렉션이 존재하는지 확인
    await getDoc(docRef)
      .then((doc) => {
        // 없으면 새로 생성
        if (!doc.exists()) {
          setDoc(docRef, {
            uid: uid,
            bookmarks: [],
          });
        }
      })
      .catch((e) => console.log(e));

    // 유저 컬렉션 배열에 티켓 추가
    await updateDoc(docRef, {
      bookmarks: arrayUnion(title),
    }).catch((e) => console.log(e));
    Alert.alert('', '관심티켓에 등록되었습니다.');
  };

  return (
    <S.TicketContainer activeOpacity={0.8} onPress={addTicket}>
      {/* '관심티켓 추가/삭제' */}
      <S.Ticket source={require('../../assets/ticket.png')} />
    </S.TicketContainer>
  );
}
