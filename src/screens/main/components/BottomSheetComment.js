import React, { useCallback, useEffect, useRef, useState } from 'react';
import BottomSheet from '../../../components/bottomSheets/BottomSheet';
import HeaderBottomSheetComment from './HeaderBottomSheetComment';
import FooterBottomSheetComment from './FooterBottomSheetComment';
import { Container, Loading } from '../../../components';
import { HEIGHT } from '../../../configs/constant';
import { SPACING } from '../../../configs/styles';
import { FlatList } from 'react-native-gesture-handler';
import ItemComment from '../../../components/item/ItemComment';
import { useSelector, useDispatch } from 'react-redux';
import { setIsShowComment } from '../../../store/mainScreenSlice';
import * as commentApi from '../../../apis/comment.api';

const data = [
  {
    "_id": 93,
    "user_id": 367,
    "video_id": 1132,
    "comment": "How To Manage video Comment", "created": "2022-11-22T15:40:45.000Z"
  },
  {
    "_id": 94,
    "user_id": 367,
    "video_id": 1132,
    "comment": "How To Manage video Comment", "created": "2022-11-22T15:40:45.000Z"
  },
  {
    "_id": 95,
    "user_id": 367,
    "video_id": 1132,
    "comment": "How To Manage video Comment", "created": "2022-11-22T15:40:45.000Z"
  },
  {
    "_id": 96,
    "user_id": 367,
    "video_id": 1132,
    "comment": "How To Manage video Comment", "created": "2022-11-22T15:40:45.000Z"
  }
];








const BottomSheetComment = () => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const isShowComment = useSelector(state => state.mainScreen.isShowComment);
  const currentComment = useSelector(state => state.mainScreen.currentComment);

  const fetchData = useCallback(async () => {
    try {
      const result = await commentApi.getComment(currentComment);

      setData(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentComment]);

  useEffect(() => {
    if (isShowComment) {
      const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
      bottomSheetRef?.current?.scrollTo(-heightLayout);
      fetchData();
    }
  }, [isShowComment, fetchData]);

  const handleClickClose = useCallback(() => {
    bottomSheetRef?.current?.scrollTo(0);
    dispatch(setIsShowComment(false));
  }, [dispatch]);

  const onCloseBottomSheet = () => {
    dispatch(setIsShowComment(false));
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      HeaderComponent={
        <HeaderBottomSheetComment handleClickClose={handleClickClose} />
      }
      FooterComponent={
        <FooterBottomSheetComment
          idVideo={currentComment}
          fetchData={fetchData}
        />
      }
      onCloseBottomSheet={onCloseBottomSheet}>
      <Container padding={SPACING.S3} height={HEIGHT / 2} marginBottom={50}>
        {/* {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            scrollEventThrottle={16}
            data={data}
            renderItem={({ item, index }) => {
              return <ItemComment item={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollToOverflowEnabled={true}
          />
        )} */}

        <ItemComment item={{}} />
      </Container>
    </BottomSheet>
  );
};

export default BottomSheetComment;
