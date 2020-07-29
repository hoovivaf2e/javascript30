# 09 - Dev Tools Domination

- 本章介紹 chrome 的開發工具 DevTools，各種`console`的用法。

## 使用到的語法 Javascript

- `console.log()`:
    
    插入變數

    * `%s` 字符
    * `%d` 整数
    * `%f` 浮點數
    * `%o` 可展開的DOM
    * `%O` 列出DOM的屬性
    * `%c` 設定輸出的樣式，`%c`之後的文字將按照第二個參數裡的值進行顯示

    ```javascript
    console.log('hello');
    // Interpolated text
    console.log('Hello I am a %s!', 'good man');
    // Number
    console.log('I am %d years old!', 7);
    // Float
    console.log('This has %f kg!', 2.5);
    // Opening DOM Elements
    console.log('%o',document.body); 
    console.log('%O', document.body);
    // Styled
    console.log('%c I am some great sample', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')
    ```
    顯示的警示

    * `console.warn()`  warning!
    * `console.error()` error

    其他方法

    * `console.clear()`: 清除console的所有訊息。
    
    * `console.dir()`: 顯示選取物件的所有屬性。

    * `console.groupCollapsed(), console.groupEnd()`: 將輸出值grouping。

    * `console.count()`: 累加出現次數。

    * `console.time(), console.timeEnd()`: 計算區域內執行的時間。

    * `console.table()`: 以表格的方式呈現。




