import { useCallback, useState } from 'react';
import { Alert, RefreshControl, ScrollView, View } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import styled from '@emotion/native';

import { getDetail } from '../common/api';
import { BLACK_COLOR } from '../common/colors';

import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import SearchResult from '../components/SearchResult/SearchResult';

export default function Search() {
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ['search'],
    queryFn: () => getDetail(value),
    enabled: isSubmitted, // submit 되었을 때만 query가 실행 됨
    onSuccess: () => {
      setResult(data?.culturalEventInfo?.row);
      setIsSubmitted(false);
      setValue('');
      queryClient.invalidateQueries('search'); // invalidate하여 다시 fetch
    },
  });

  const searchTitle = () => {
    if (value.length < 3) {
      Alert.alert('검색어는 3자 이상입니다.');
      return;
    }
    setIsSubmitted(true);
  };

  // pull to refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Container>
        {/* 검색창 */}
        <SearchInput
          autoFocus
          placeholder="검색어를 입력하세요."
          value={value}
          onChangeText={setValue}
          onSubmitEditing={searchTitle}
        />
        {/* 로딩 중일 경우 Loader 보여주기 */}
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <View>
            {/* 검색 결과가 없거나 에러 발생할 경우 에러메세지 보여주기 */}
            {!result || isError ? (
              <Error message="검색 결과가 없습니다." />
            ) : (
              result
                .slice(0, 20) // 검색결과 20건 표시
                .map((detail, idx) => (
                  <SearchResult key={idx} detail={detail} />
                ))
            )}
          </View>
        )}
      </Container>
    </ScrollView>
  );
}

const Container = styled.View`
  margin: 20px;
`;

const SearchInput = styled.TextInput`
  border: ${(props) => props.theme.color.lightGray};
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.color.inputBackground};
`;
