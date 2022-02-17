import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";

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

//https://jsonplaceholder.typicode.com/comments
function App() {
  //api
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((e) => {
      return {
        author: e.email,
        content: e.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);
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

  //삭제
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newList = data.filter((e) => e.id !== targetId);
    setData(newList);
  };

  //수정 완료
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((e) => (e.id === targetId ? { ...e, content: newContent } : e))
    );
  };

  //감정 비율
  //함수 연산 최적화
  //useMemo를 이용해서 이미 계산한 연산결과를 기억해서 동일한 결과일시 다시 연산x,데치터 반환
  //[]이부분만이 바뀌면 다시 실행
  //useMemo는 함수가 아니라 값을 return한다
  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((e) => e.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 :{data.length}</div>
      <div>기분 좋은 일기 개수:{goodCount}</div>
      <div>기분 안좋은 일기 개수:{badCount}</div>
      <div>기분 좋은 일기 비율:{goodRatio}</div>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
