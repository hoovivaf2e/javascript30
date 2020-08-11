# 18 - Adding Up Times with Reduce

- 本章練習使用`reduce()`累計時間。將`data-time`屬性的資料－時間累加起來，並用時:分:秒顯示計算結果。

## 步驟

### Step 1: 
取得全部`[data-time]`的值並將其轉換為陣列

```javascript
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```

* `document.querySelectorAll()`: 回傳`nodeList`，而非真正的陣列，若想要使用陣列的方法如 `map()` 或 `reduce()` 等，需先將其轉換為陣列。常見的有以下兩種轉換方法：

    - `Array.from(document.querySelectorAll())`
    - `[...document.querySelectorAll()]`

* `nodeList`中的`nodeValue`為字串型態。


### Step 2: 
取出每個元素中的`data-time`資料並轉換為秒數後加總。
因為`nodeValue`為字串型態，字串無法運算，所以分別取出`時`跟`分`後再轉換為數字型態，以便計算。

```javascript
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);
```
* `map()`: 遍歷每個元素，並回傳一個新的array。

* `HTML5 中的 data-* attribute 屬性`: 
    - html中：在使用 data-* attribute 時，* 字號的地方不能包含大寫字母，也就是屬性名稱不能包含大寫字母，而屬性值則可以是任何的字串。

        ```html
        <div id="container" data-type="content">
            <div class='box' data-item="1" data-size="xs"></div>
            <div class='box' data-item="2" data-size="lg"></div>
        </div>
        ```

    - 使用 JS 取得 data-* attribute 的屬性值: 可以利用 JavaScript 中的 `dataset` 物件取值。

        ```javascript
        let box = document.querySelectorAll('.box');
        console.log(box[0].dataset.item);   //  "1"
        console.log(box[0].dataset.size);   //  "xs"
        ```

    - 使用 `jQuery` 的 `.data( )` 取得屬性值：

        ```javascript
        $('#container').data('type')); //  "content"
        ```

* `.map(parseFloat)`: 遍歷每個元素，轉換成`float`型態並回傳。也可以這樣寫：

    ```javascript
    .map(function(str){
        return parseFloat(str);
    })
    ```

* `array.reduce(total, currentValue)`: 會對陣列中的每一個元素，由左至右傳入指定的函數，最後返回一個累加的值。`total`用來累積回呼函式回傳的值，`currentValue`是原陣列目前處理中的元素。

    ```javascript
    var ary = ['Hi', ',', 'I am ', 'good', '!'];

    var concatStr = ary.reduce(function(str, el) {
        return str + el;
    }, '');

    console.log(concatStr);  // Hi,I am good!
    ```

### Step 3:
把總秒數轉為時分秒格式並輸出結果。

```javascript
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

document.querySelector('span').innerHTML = hours+':'+mins+':'+secondsLeft;
```

* `Math.floor()`: 回傳最大整數。

```javascript
Math.floor(3.94);    // 3
Math.floor(5.4);     // 5
Math.floor(-5.8);    // -6
Math.floor("-5.4");  // -6
```
