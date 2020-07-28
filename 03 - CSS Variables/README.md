# 03 - CSS Variables

- 用JS與CSS搭配製作一個即時的濾淨效果， 特效為調整內距、模糊、邊框色

![](https://github.com/hoovivaf2e/javascript30/blob/master/03%20-%20CSS%20Variables/demo_3.png)

## 使用到的語法 Javascript

- dataset: 
    用dataset可以取出在HTML中的一個自定義資料屬性的名稱以 data- 開頭的屬性，也等同於getAttribute。

## 使用到的語法 CSS

- :root
    用於定義全域變數

    ```css
    :root {
        --main-bg-color: brown;
    }
    .one {
        color: white;
        background-color: var(--main-bg-color);
        margin: 10px;
        width: 50px;
        height: 50px;
    }
    .two {
        color: red;
        background-color: black;
        margin: 10px;
        width: 150px;
        height: 70px;
    }
    .three {
        color: black;
        background-color: var(--main-bg-color);
        margin: 10px;
        width: 75px;
    }
    ```






