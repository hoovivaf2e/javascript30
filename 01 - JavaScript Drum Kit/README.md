# 01 - JavaScript Drum Kit

鍵盤爵士鼓

- 功能
  - 按下鍵盤，出現相對應的聲音
  - 按下鍵盤，畫面上的字母方塊會微放大，且有黃色陰影的效果

![](https://github.com/hoovivaf2e/javascript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/demo_1.png)

## 使用到的語法 Javascript

- const: Constants (常數)。區塊變數。const不能重複指定值，也不能重複宣告。

- arrow function

- `${...}`: 模版字符串可以「放入 HTML 的內容」、「很長的字串包含換行」、「字串連結變數」

- propertyName: 返回與transition相關的class名稱, 當有transition事件時才生效。

  * Get the property name associated with the transition:
  ```javascript
  document.getElementById("myDIV").addEventListener("transitionend", myFunction);
  function myFunction(event) {
    this.innerHTML = "Property name is: " + event.propertyName;
  }
  ```

- classList: classList 返回元素的class名稱. 該屬性用於在元素中添加，移除及切換 CSS class。

  * Add the "mystyle" class to a element:
  ```javascript
  document.getElementById("myDIV").classList.add("mystyle");
  ```

  * Get the class name(s) of a element:
  ```html
  <div id="myDIV" class="mystyle anotherClass thirdClass">I am a DIV element</div>

  <script>
  var x = document.getElementById("myDIV").classList;
  </script>
  ```

  * Find out how many class names a element has:
  ```javascript
  var x = document.getElementById("myDIV").classList.length;
  ```

- currentTime: 該屬性可設置或返回音頻/視頻播放的當前位置（以秒計）。當設置該屬性時，播放會跳到指定的位置。

  ```javascript
  document.getElementById("myAudio").currentTime = 1;
  ```

- forEach: forEach()方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。

  ```javascript
  const array1 = ['a', 'b', 'c'];
  array1.forEach(element => console.log(element));
  ```

## 使用到的語法 CSS

- background:
  可以在一個 background 中設置一個或多個的屬性。任何没有被指定的值都會被設定為它們的初始值。可以設置如下屬性，設置時可以按任意順序放置：

  * background-color: color | transparent;
  * background-position: left top | left center | left bottom | right top | right center | right bottom | center top | center center | center bottom | x% y% | x(px) y(px);
  * background-size: y(px) x(px) | x% y% | cover | contain;
  * background-repeat: repeat | no-repeat | repeat-x | repeat-y;
  * background-origin: padding-box|border-box|content-box;
  * background-clip: border-box|padding-box|content-box;
  * background-attachment: scroll | fixed | local;
  * background-image: url() | none | linear-gradient() | radial-gradient() | repeating-linear-gradient() | repeating-radial-gradient();

  ```css
  background: 
    center / contain no-repeat url("../../media/examples/firefox-logo.svg"),
    #eee 35% url("../../media/examples/lizard.png"); 
  ```

  ```css
    background: left 5% / 15% 60% repeat-x url("../../media/examples/star.png");
  ```

  ```css
    background: #00FF00 url(bgimage.gif) no-repeat fixed top;
  ```

- flexbox: 
  盒子模型
  * 外容器
    - display: flex | inline-flex;
    - flex-flow: `<flex-direction>` | `<flex-wrap>`;
      - flex-direction: row | row-reverse | column | column-reverse;
      - flex-wrap: nowrap | wrap | wrap-reverse;
    - justify-content: flex-start|flex-end|center|space-between|space-around;
    - align-items: stretch|center|flex-start|flex-end|baseline;
  
  * 內元件: 
    - flex: `<flex-grow>` | `<flex-shrink>` | `<flex-basis>`;
      - flex-grow: number;
      - flex-shrink: number;
      - flex-basis: number;
    - order: number; 重新定義元件的排列順序，順序會依據數值的大小排列，初始值為0。
    - align-self: auto|stretch|center|flex-start|flex-end|baseline;

- border
  可以在一個 border 中設置一個或多個的屬性。任何没有被指定的值都會被設定為它們的初始值。可以設置如下屬性：

  * border-width: border-top-width border-right-width  border-bottom-width border-left-width
  * border-style: none | hidden | dotted | solid | double | dashed | groove | ridge | inset | outset;
  * border-color
