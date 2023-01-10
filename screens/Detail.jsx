import { ScrollView } from 'react-native';
import { useQueries } from 'react-query';
import { getDetail, getReviews } from '../common/api';
import DetailInfoContainer from '../components/DetailInfoContainer/DetailInfoContainer';
import Loader from '../components/Loader/Loader';
import ReviewContainer from '../components/ReviewContainer/ReviewContainer';
import { useCallback } from 'react';

export default function Detail({ route }) {
  // * params : title 받아오기
  const { title } = route.params;

  const queries = useQueries([
    {
      // firebase에서 공연 상세정보 받아오는 함수
      queryKey: 'detail',
      queryFn: () => getDetail(title),
      enabled: !!title,
    },
    // {
    //   // firebase에서 리뷰 데이터 받아오는 함수
    //   queryKey: 'reviews',
    //   queryFn: () => getReviews(title),
    // },
  ]);

  const [
    { data: detail, isLoading: isDetailLoading },
    // { data: reviewData, isLoading: isReviewLoading },
  ] = queries;

  if (isDetailLoading) {
    return <Loader />;
  }
  if (!detail?.culturalEventInfo) {
    console.log('해당하는 정보가 없습니다.');
    return;
  }

  return (
    <ScrollView>
      {/* 공연 정보 */}
      <DetailInfoContainer detail={detail} />
      {/* 후기 & 기대평 */}
      {/* <ReviewContainer title={title} reviewData={reviewData} /> */}
    </ScrollView>
  );
}
