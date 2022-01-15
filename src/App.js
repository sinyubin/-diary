import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이 2",
    emotion: 5,
    created_data: new Date().getTime(),
  },
  {
    id: 2,
    author: "신유빈",
    content: "하이 1",
    emotion: 5,
    created_data: new Date().getTime(),
  },
  {
    id: 3,
    author: "주재일",
    content: "하이 3",
    emotion: 5,
    created_data: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
