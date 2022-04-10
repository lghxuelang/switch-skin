import React, {useEffect} from 'react';
import {Switch} from 'antd';
import 'antd/dist/antd.css';

import Foo from './Foo/app';
import {setTheme} from './themeUtils';

import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(()=>{
    setTheme('light');
  }, []);

  const onSwitchSkin = (checked) => {
    const themeKey = checked ? 'light' : 'dark';
    setTheme(themeKey);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch
          checkedChildren="亮色"
          unCheckedChildren="暗色"
          defaultChecked
          onChange={onSwitchSkin}
        />
        <Foo />
      </header>
    </div>
  );
}

export default App;
