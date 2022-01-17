import DiaryItem from "./DiaryItem";
import styled from "styled-components";
const DiaryList = ({ onEdit, onDelete, diaryList }) => {
  console.log(diaryList);
  return (
    <div>
      <Title>일기 리스트</Title>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <List>
        {diaryList.map((e) => (
          <DiaryItem key={e.id} {...e} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </List>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

const List = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin-top: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;
