import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import styled, { css } from '@emotion/native';

const TicketModal = () => {
  return (
    <CheckBtn>
      {/* <Text>인풋값</Text> */}
      <CheckingBtn>
        <AntDesign name="check" size={24} color="black" />
      </CheckingBtn>
      <CheckingBtn>
        <AntDesign name="delete" size={24} color="black" />
      </CheckingBtn>
    </CheckBtn>
  );
};

export default TicketModal;

const CheckBtn = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const CheckingBtn = styled.TouchableOpacity`
  margin: 5px;
`;
