import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from '@emotion/native';
import { useEffect, useState } from 'react';
import { authService } from '../common/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { dbService } from '../common/firebase';

import TicketDetail from '../components/MyTicket/TicketDetail';
import Loader from '../components/Loader/Loader';

export default function MyTickets({ navigation: { navigate } }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBookmarks = async () => {
    const uid = authService.currentUser.uid;
    const q = query(
      collection(dbService, 'bookmarks'),
      where('uid', '==', uid),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setBookmarks(doc.data().bookmarks);
    });
  };

  useEffect(() => {
    getBookmarks()
      .then(() => setIsLoading(false))
      .catch((e) => console.log(e));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StSafeArea>
      <ScrollView>
        <StView>
          {bookmarks.map((title, i) => {
            return (
              <TicketDetail
                getBookmarks={getBookmarks}
                title={title}
                navigate={navigate}
                key={i}
              />
            );
          })}
        </StView>
      </ScrollView>
    </StSafeArea>
  );
}

const StSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
`;
const StView = styled.View`
  background-color: ${(props) => props.theme.color.background};
`;
