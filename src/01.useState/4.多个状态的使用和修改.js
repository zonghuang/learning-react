import React, { useState } from "react";

export default function MutiHookState() {
  const [age, setAge] = useState(18);
  const [names, setNames] = useState(["abc", "cba"]);
  const [info, setInfo] = useState({ name: "zonghaung", age: 18 });

  // 错误的做法
  function addFriend() {
    names.push("nba");
    console.log(names);
    setNames(names);
  }

  return (
    <div>
      <h2>年龄: {age}</h2>
      <button onClick={(e) => setAge(age + 1)}>aget+1</button>

      <h2>朋友列表</h2>
      <ul>
        {names.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={(e) => setNames([...names, "nba"])}>添加好友</button>
      {/* 错误的做法 */}
      <button onClick={addFriend}>添加好友</button>

      <h2>我的信息:</h2>
      <div>我的名字: {info.name}</div>
      <button onClick={(e) => setInfo({ ...info, name: "li" })}>修改名字</button>
    </div>
  );
}
