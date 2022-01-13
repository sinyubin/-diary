import { useRef, useState } from "react";
import styled from "styled-components";
const DiaryEditor = () => {
  //useRef  = > HTML DOM요소에 접근할 수 있게 해줌
  const authorInput = useRef();
  const contnetInput = useRef();
  //useState의 두가지 방법
  const [state, setState] = useState({
    author: "",
    content: "",
    emoion: 1,
  });
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert("작성자는 최소 1글자 이상 입력해주세요");
      //focus 현재 authorInput 태그에 focus를 주는것
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // alert("작성자는 최소 5글자 이상 입력해주세요");
      contnetInput.current.focus();
      return;
    }
    alert("저장 완료");
  };
  return (
    <Editor>
      <h2>오늘의 일기</h2>
      <div>
        <Input
          ref={authorInput}
          value={state.author}
          name="author"
          onChange={(e) => {
            //1
            // setAuthor(e.target.value);

            //2
            setState({
              //스프레드 먼저 사용 후 해야함 아니면 값이 다시 업데이트 되지 않는 상태로 되돌아감
              ...state,
              author: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <Textarea
          ref={contnetInput}
          value={state.content}
          name="content"
          onChange={(e) => {
            //1
            // setContent(e.target.value);
            //2
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <Select name="emotion" value={state.emotion} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
      </div>
      <div>
        <Button onClick={handleSubmit}>일기 저장</Button>
      </div>
    </Editor>
  );
};

export default DiaryEditor;

const Editor = styled.div`
  border: 1px solid gray;
  text-align: center;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
`;

const Textarea = styled.input`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
`;

const Select = styled.select`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 500px;
  padding: 10px;
  cursor: pointer;
`;
