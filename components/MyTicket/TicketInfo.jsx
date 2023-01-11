import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from '@emotion/native';
import { BLACK_COLOR } from '../../common/colors';

export default function TicketInfo({ period, place, price }) {
  return (
    <>
      <DetailView>
        <Ionicons
          name="calendar-sharp"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DetailText>{period}</DetailText>
      </DetailView>
      <DetailView>
        <Ionicons
          name="location-outline"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DetailText>{place}</DetailText>
      </DetailView>
      <DetailView>
        <Ionicons
          name="pricetag-outline"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
        <DetailText>{price}</DetailText>
      </DetailView>
    </>
  );
}

const DetailView = styled.View`
  flex-direction: row;
`;

const DetailText = styled.Text`
  /* font-size: 13px;
  font-weight: 500;
  margin: 3px; */
  word-break: break-all;
  font-size: 13px;
  flex-shrink: 1;
  font-weight: 500;
  color: ${BLACK_COLOR};
  margin-top: 4px;
`;
