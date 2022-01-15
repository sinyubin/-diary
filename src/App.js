import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "이정환",
//     content: "하이 2",
//     emotion: 5,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "신유빈",
//     content: "하이 1",
//     emotion: 5,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "주재일",
//     content: "하이 3",
//     emotion: 5,
//     created_data: new Date().getTime(),
//   },
// ];

function App() {
  //일기 데이터 저장
  const [data, setData] = useState([]);

  //id만들어주기
  const dataId = useRef(0);
  //넘겨줄 데이터
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
