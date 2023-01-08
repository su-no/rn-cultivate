import styled from '@emotion/native';
import { BLACK_COLOR } from '../../common/colors';
import { screenHeight } from '../../common/utils';

export const Container = styled.View`
  margin: 20px 20px 0px 20px;
`;

export const Poster = styled.Image`
  width: 100%;
  height: ${`${screenHeight * 0.4}`}px;
`;

export const Title = styled.Text`
  word-break: break-all;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
  color: ${BLACK_COLOR};
`;
