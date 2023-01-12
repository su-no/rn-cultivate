import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import styled from '@emotion/native';

export default function TicketInfo({ period, place, price }) {
  return (
    <Detail>
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
          style={{
            marginRight: 8,
          }}
        />
        <DetailText>{price}</DetailText>
      </DetailView>
    </Detail>
  );
}

const Detail = styled.View`
  flex-direction: column;
`;

const DetailView = styled.View`
  flex-direction: row;
`;

const DetailText = styled.Text`
  word-break: break-all;
  font-size: 13px;
  flex-shrink: 1;
  font-weight: 500;
  color: ${(props) => props.theme.color.title};
  margin-top: 4px;
  flex-direction: column;
`;
