import React, { Component, createContext } from "react";

// import CounterClass from './01.useState/1.counter-class'
// import CounterHook from './01.useState/2.counter-hook'
// import CounterHook from './01.useState/3.counter-hook'
// import MutiHookState from "./01.useState/4.多个状态的使用和修改";

// import CounterTitleClass from "./02.useEffect/1.counter-title-class";
// import CounterTitleHook from "./02.useEffect/2.counter-title-hook";
// import MutiUseEffect from "./02.useEffect/3.多个useEffect一起使用";

// import ContextHook from "./03.useContext/context-hook";

// import Home from "./04.useReducer/home";
// import Profile from "./04.useReducer/profile";

// import CallbackHook from "./05.useCallback/1.useCallback不能进行性能优化";
// import CallbackHook from './05.useCallback/2.useCallback进行性能优化';

// import MemoHook from './06.useMemo/1.memo-hook';
// import MemoHook from './06.useMemo/2.useMemo用于子组件的性能优化';

// import RefHook from "./07.useRef/1.useRef引入DOM";
// import RefHook from "./07.useRef/2.useRef保存上一次的值";

// import ForwardRef from "./08.useImperativeHandle/1.回顾forwardRef的使用";
// import ImperativeHandleHook from "./08.useImperativeHandle/2.useImperativeHandle-hook";

// import EffectHook from "./09-useLayoutEffect/1.useLayoutEffect-hook";

// import CustomHook from "./10.自定义Hook/1.组件在创建和销毁时打印";
// import CustomContextShareHook from "./10.自定义Hook/2.Context共享";
// import CustomScrollPositionHook from "./10.自定义Hook/3.获取滚动位置";
import CustomDataStoreHook from "./10.自定义Hook/4.localStorage存储";

export const UserContext = createContext();
export const TokenContext = createContext();
export const ThemeContext = createContext();

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 1.useState */}
        {/* <CounterClass /> */}
        {/* <CounterHook /> */}
        {/* <MutiHookState /> */}

        {/* 2.useEffect */}
        {/* <CounterTitleClass /> */}
        {/* <CounterTitleHook /> */}
        {/* <MutiUseEffect /> */}

        {/* 3.useContext */}
        {/* <UserContext.Provider value={{ name: "zh", age: 18 }}>
          <ThemeContext.Provider value={{ color: "red", fontSize: "20px" }}>
            <ContextHook />
          </ThemeContext.Provider>
        </UserContext.Provider> */}

        {/* 4.useReducer */}
        {/* <Home /> */}
        {/* <Profile /> */}

        {/* 5.useCallback */}
        {/* <CallbackHook /> */}

        {/* 6.useMemo */}
        {/* <MemoHook /> */}

        {/* 7.useRef */}
        {/* <RefHook /> */}

        {/* 8.useImperativeHandle */}
        {/* <ForwardRef /> */}
        {/* <ImperativeHandleHook /> */}

        {/* 9.useLayoutEffect */}
        {/* <EffectHook /> */}

        {/* 10.自定义Hook */}
        {/* <CustomHook /> */}
        {/* <UserContext.Provider value={{id: 1, name: 'zonghuang'}}>
          <TokenContext.Provider value="123456">
            <CustomContextShareHook />
          </TokenContext.Provider>
        </UserContext.Provider> */}
        {/* <CustomScrollPositionHook /> */}
        <CustomDataStoreHook />
      </div>
    );
  }
}
