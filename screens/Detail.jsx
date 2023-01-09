import { ScrollView } from 'react-native';
import DetailInfoContainer from '../components/DetailInfoContainer/DetailInfoContainer';
import ReviewContainer from '../components/ReviewContainer/ReviewContainer';

export default function Detail() {
  // 굳이 여기서 fetch하지 않고, Main/Category 페이지에서 Poster 클릭할 때 props로 data를 넘겨주면 될 것 같음.

  // 일단 fetch해서 가져오는 방법 사용했음.

  // const title =
  //   'EO(서)발레·서발레씨어터가 함께하는 크리스마스 최고의 선물 호두까기 인형';
  const title = '뮤지컬 캣츠 내한공연-서울 (Musical CATS)';

  return (
    <>
      <ScrollView>
        {/* 공연 정보 */}
        <DetailInfoContainer title={title} />
        {/* 후기 & 기대평 */}
        <ReviewContainer title={title} />
      </ScrollView>
    </>
  );
}
