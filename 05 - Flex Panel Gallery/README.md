# 05 - Flex Panel Gallery

- 用JS與CSS搭配製作一個點擊圖片後展開，同時從圖片上下分别移入文字。點擊已經展開的圖片後，圖片被壓縮成1/5，同時移出該圖片上下兩端的文字。

![](https://github.com/hoovivaf2e/javascript30/blob/master/05%20-%20Flex%20Panel%20Gallery/5_flexpanelgallery.png)

## 使用到的語法 CSS

- `flex`: 

    * 想要使用Flexbox，首先要將外容器的 `display` 調整為 `flex` 或 `inline-flex`
    
    ```css
    .container {
        display: flex | inline-flex;
    }
    ```

    * `flex-direction`: 決定主軸的方向，主軸的方向將會影響容器內的元素排序順序、方向，其中row為預設值。

    ```css
    .container {
        flex-direction: row | row-reverse | column | column-reverse;
    }
    ```

    * `flex`: 這是簡寫`flex-grow`, `flex-shrink`和`flex-basis`的合併。第二和第三個參數（flex-shrink和flex-basis）是可選的。默認值為 `0 1 auto`。

    ```css
    .item {
        flex: 0 1 auto;
    }
    ```

    - 參考網站
        * [FLEXBOX FROGGY](https://flexboxfroggy.com/#zh-tw)
        * [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- 比較 `*`, `<h1>`, `.content`, `#content`, `inline css`, `載入CSS` 等的 CSS 優先順序

    * 行內(inline)套用CSS ＞ HTML內部載入CSS ＞ 外部載入CSS
    * id選擇器 > class選擇器 > 標籤元素
    * 總結排序：!important > 行內樣式 > id選擇器 > class選擇器 > 標籤元素 > 萬用字元(*) > 繼承 > 瀏覽器預設屬性


## 使用到的語法 Javascript 

- `includes()`: 本篇為`String.prototype.includes()`，判斷字串中是否包含某特定字串，並回傳 true 或 false。該includes()方法區分大小寫。

    ```javascript
    'Blue Whale'.includes('blue')  // returns false
    ```

- `toggle(className)`: 本篇為切換 hide() 和 show()。

    ```javascript
    document.getElementById('data-target').classList.toggle('data-toggle-class');
    ```
