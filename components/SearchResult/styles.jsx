import styled from '@emotion/native';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../common/colors';

export const Container = styled.Pressable`
  flex-direction: row;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${LIGHT_GRAY_COLOR};
`;

export const Poster = styled.Image`
  width: 100px;
  height: 150px;
  margin-right: 10px;
  border-radius: 7px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const DescriptionRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.Text`
  word-break: break-all;
  font-size: 14px;
  flex-shrink: 1;
  color: ${BLACK_COLOR};
  margin-top: 2px;
`;
