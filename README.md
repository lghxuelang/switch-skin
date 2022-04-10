# 一键换肤 demo
本示例基于[ CSS var() ] (https://www.runoob.com/cssref/func-var.html])函数   
及[ CSSStyleDeclaration setProperty() ] (https://www.runoob.com/jsref/obj-cssstyledeclaration.html) 方法实现前端一键换肤的功能

### 主题变量文件
-  light.js
```js
    export default {
        main_bg_color_0: 'rgba(255, 255, 255, .7)',
        main_color_0: 'red'
    };
```
-  dark.js
```js
        export default {
            main_bg_color_0: 'rgba(0, 0, 0, .3)',
            main_color_0: 'blue'
        };
```
- 统一入口
```js
    import light from './light';
    import dark from './dark';

    export default {light, dark}
```

### 主题切换

```js
    export const setTheme = themeKey => {
    const themeMap = theme[themeKey];
    Object.keys(themeMap).map((key) => {
      document.body.style.setProperty(`--${key}`, themeMap[key]);
    })
    // 实现兼容方案
    cssVars({
      watch: true, // 添加、删除、修改 <link> 或 <style> 元素的禁用或 href 属性时，ponyfill 将自行调用    
      variables: themeMap, // variables 自定义属性名/值对的集合
      onlyLegacy: false, // false  默认将 css 变量编译为浏览器识别的 css 样式 ；true 当浏览器不支持css变量的时候将css变量编译为识别的css  
    });
}
```