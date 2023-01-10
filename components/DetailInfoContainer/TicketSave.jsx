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
      onPress={() => console.log(user.email)}
    >
      {/* '관심티켓 추가/삭제' */}
      <S.Ticket source={require('../../assets/ticket.png')} />
    </S.TicketContainer>
  );
}
