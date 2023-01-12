import React from 'react';
import * as S from '../DetailInfoContainer/styles';
import { authService, dbService } from '../../common/firebase';
// import { useMutation, useQueryClient } from 'react-query';
import { doc, updateDoc, arrayUnion, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { useState } from 'react';

export default function TicketSave({ title }) {
  // 티켓 찜하기
  // const [newTicket, setNewTicket] = useState({});
  const uid = authService.currentUser.uid;

  //2. 티켓을 눌렀을때, 그 티켓의 타이틀?정보가 저장되게 만들어보자.

  const addTicket = async () => {
    // 조건문만들어서 배열이 없을때도 만들기
    const docRef = doc(dbService, 'bookmarks', uid);
    console.log(docRef);
    await updateDoc(docRef, {
      bookmarks: arrayUnion(title),
    });
  };

  return (
    <S.TicketContainer activeOpacity={0.8} onPress={addTicket}>
      {/* '관심티켓 추가/삭제' */}
      <S.Ticket source={require('../../assets/ticket.png')} />
    </S.TicketContainer>
  );
}

// 1. 티켓 아이콘을 누른다.
//

// {
//   userEmail: abcd@amgeilf.comd, // <- authService.currentUser.email
//   tickets: ["판소리", "마틸다"]
// }

// EO(서)발레·서발레씨어터가 함께하는 크리스마스 최고의 선물 호두까기 인형
// 뮤지컬 캣츠 내한공연-서울 (Musical CATS)
// 용감한 탄티
