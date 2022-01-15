import styled from "styled-components";

const DiaryItem = (e) => {
  return (
    <All>
      <Info>
        <span>
          작성자:{e.author} | 감정 점수:{e.emtion}
        </span>
        <br />
        <DateDay>{new Date(e.created_date).toLocaleString()}</DateDay>
      </Info>

      <Content>{e.content}</Content>
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
