import styled from '@emotion/native';
import { screenHeight } from '../../common/utils';

const Poster = styled.Image`
  width: 100%;
  height: ${`${screenHeight * 0.4}`}px;
`;

const Container = styled.View`
  margin: 20px 20px 0px 20px;
`;

const Title = styled.Text`
  word-break: break-all;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
  color: ${(props) => props.theme.color.common};
`;

const TicketContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;
const Ticket = styled.Image`
  width: 70px;
  height: 35px;
`;

export { Poster, Container, Title, TicketContainer, Ticket };
