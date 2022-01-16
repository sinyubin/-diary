import { useState } from "react";
import styled from "styled-components";

const DiaryItem = (e) => {
  // 수정
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState("");
  //삭제버튼
  const handleDelete = () => {
    if (window.confirm(`${e.id}번째 일기를 정말 삭제하시겠습니까?`)) {
      e.onDelete(e.id);
    }
  };
  return (
    <All>
      <Info>
        <span>
          작성자:{e.author} | 감정 점수:{e.emtion}
        </span>
        <br />
        <DateDay>{new Date(e.created_date).toLocaleString()}</DateDay>
      </Info>

      <Content>
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onChange={(e) => {
                setLocalContent(e.target.value);
              }}
            />
          </>
        ) : (
          <>{e.content}</>
        )}
      </Content>
      <button onClick={handleDelete}>삭제하기</button>
      <button onClick={toggleIsEdit}>수정하기</button>
    </All>
  );
};

export default DiaryItem;

const All = styled.div` 
  background-color:rgb(240,240,240)
  margin-bottom:10px
  padding: 20px;
`;

const Info = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin: 10px;
`;

const DateDay = styled.span`
  color: gray;
`;

const Content = styled.div`
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 30px;
`;
