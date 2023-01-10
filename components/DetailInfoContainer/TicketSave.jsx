import React from 'react';
import * as S from '../DetailInfoContainer/styles';
import { authService } from '../../common/firebase';
import { useState } from 'react';

export default function TicketSave({ title }) {
  // 티켓 찜하기
  const user = authService.currentUser;

  return (
    <S.TicketContainer
      activeOpacity={0.8}
      onPress={() => console.log(user.uid)}
    >
      {/* '관심티켓 추가/삭제' */}
      <S.Ticket source={require('../../assets/ticket.png')} />
    </S.TicketContainer>
  );
}

// 1. 티켓 아이콘을 누른다.
// 2.

// {
//   userEmail: abcd@amgeilf.comd, // <- authService.currentUser.email
//   tickets: ["판소리", "마틸다"]
// }

// EO(서)발레·서발레씨어터가 함께하는 크리스마스 최고의 선물 호두까기 인형
// 뮤지컬 캣츠 내한공연-서울 (Musical CATS)
// 용감한 탄티
