import { Linking, View } from 'react-native';

import styles from '../../common/styles';
import { Poster, Container, Title } from './styles';

import DetailInfo from '../DetailInfo/DetailInfo';
import VioletButton from '../VioletButton/VioletButton';
import TicketSave from './TicketSave';

export default function DetailInfoContainer({ detail }) {
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
        <Poster source={{ uri: imgPath }} />
        {/* 관심티켓 버튼 */}
        <TicketSave title={title} />
      </View>
      {/* 공연 정보 */}
      <Container>
        {/* 제목 */}
        <Title>{title !== '' ? title : '홈페이지 확인'}</Title>
        {/* 기간, 장소, 가격 */}
        <DetailInfo
          period={period !== '' ? period : '홈페이지 확인'}
          place={place !== '' ? place : '홈페이지 확인'}
          price={price !== '' ? price : '홈페이지 확인'}
        />
        {/* 홈페이지 가기 버튼 */}
        <View style={styles.shadow}>
          <VioletButton
            label="홈페이지 방문"
            onPress={() =>
              Linking.openURL(link).catch((err) => console.log('error:', err))
            }
          />
        </View>
      </Container>
    </>
  );
}
