import { Linking, View } from 'react-native';
import * as S from './styles';
import DetailInfo from '../DetailInfo/DetailInfo';
import VioletButton from '../VioletButton/VioletButton';

export default function DetailTopContainer({ detail }) {
  const {
    MAIN_IMG: imgPath,
    DATE: period,
    PLACE: place,
    USE_FEE: price,
    ORG_LINK: link,
    TITLE: title,
  } = detail.culturalEventInfo.row[0];

  return (
    <>
      {/* 포스터 이미지 */}
      <View>
        <S.Poster source={{ uri: imgPath }} />
        {/* 관심티켓 버튼 */}
        <S.TicketContainer
          activeOpacity={0.8}
          onPress={() => console.log('관심티켓 추가/삭제')}
        >
          <S.Ticket source={require('../../assets/ticket.png')} />
        </S.TicketContainer>
      </View>
      {/* 공연 정보 */}
      <S.Container>
        {/* 제목 */}
        <S.Title>{title}</S.Title>
        {/* 기간, 장소, 가격 */}
        <DetailInfo period={period} place={place} price={price} />
        {/* 홈페이지 가기 버튼 */}
        <VioletButton
          label="홈페이지 가기"
          onPress={() => Linking.openURL(link)}
        />
      </S.Container>
    </>
  );
}
