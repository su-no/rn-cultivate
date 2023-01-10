export const API_KEY = '78526f445070736837397761636864';

export const getDetail = async (title) => {
  // 공백을 _로 변경 후 encoding

  const encodedTitle = encodeURI(title.replaceAll(' ', '_'));
  const path = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/1000/%20/${encodedTitle}`;
  return fetch(path).then((res) => res.json());
};

export const getData = async () => {
  const path = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/10`;
  return fetch(path)
    .then((res) => res.json())
    .then((data) => data.culturalEventInfo.row);
};
