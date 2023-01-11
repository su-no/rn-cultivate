import styled from '@emotion/native';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getDetail } from '../common/api';
import { BLACK_COLOR } from '../common/colors';
import Loader from '../components/Loader/Loader';

export default function Search() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const queryClient = useQueryClient();

  const { isLoading, isFetching, isError, data } = useQuery({
    queryKey: ['search'],
    queryFn: () => getDetail(value),
    enabled: isClick,
    onSuccess: () => {
      setResult(data?.culturalEventInfo?.row);
      setIsClick(false);
      setValue('');
      queryClient.invalidateQueries('search');
    },
  });

  const searchTitle = () => {
    if (value.length < 3) {
      Alert.alert('검색어는 3자 이상입니다.');
      return;
    }
    setIsClick(true);
  };

  return (
    <ScrollView style={{ margin: 20 }}>
      <SearchInput
        autoFocus
        value={value}
        onChangeText={setValue}
        onSubmitEditing={searchTitle}
      />
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <View>
          {!result || isError ? (
            <Text>검색 결과가 없습니다.</Text>
          ) : (
            result.map((item) => <Text>{item.TITLE}</Text>)
          )}
        </View>
      )}
    </ScrollView>
  );
}

const SearchInput = styled.TextInput`
  border: 1px solid ${BLACK_COLOR};
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
`;
