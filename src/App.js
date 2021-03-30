import React, { Component } from 'react'

// import Home from './3.react-redux（手动与redux联系）/pages/home'
// import Profile from './3.react-redux（手动与redux联系）/pages/profile'

// import Home from './4.react-redux（自定义的connect）/pages/home'
// import Profile from './4.react-redux（自定义的connect）/pages/profile'

// import Home from './5.react-redux（react-redux-connect）/pages/home'
// import Profile from './5.react-redux（react-redux-connect）/pages/profile'

// import Home from './6.react-redux（react-redux-connect）Provider/pages/home'
// import Profile from './6.react-redux（react-redux-connect）Provider/pages/profile'

// import Home from './7.react-redux（react-redux-异步请求）/pages/home';
// import Profile from './7.react-redux（react-redux-异步请求）/pages/profile';

// import Home from './8.redux-thunk中间件/pages/home';
// import Profile from './8.redux-thunk中间件/pages/profile';

// import Home from './9.redux-saga中间件/pages/home'
// import Profile from './9.redux-saga中间件/pages/profile';

import Home from './11.redux-reducer（拆分reducer）/pages/home';
import Profile from './11.redux-reducer（拆分reducer）/pages/profile';

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}


