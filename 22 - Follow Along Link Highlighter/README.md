# 22 - Follow Along Link Highlighter

- 本章練習HightLight樣式會跟著滑鼠移動到指定位置。當滑鼠移動到錨點處，會有一個白色的色塊移動到當前錨點所在的位置。

![](https://github.com/hoovivaf2e/javascript30/blob/master/22%20-%20Follow%20Along%20Link%20Highlighter/22_followhighlighter.png)

## 使用到的語法 Javascript
 
- `Element.getBoundingClientRect()`: 
回傳一個`DOMRect`對象，這個對象是由該元素的`getClientRects()`方法回傳的一組矩形的集合，就是該元素的CSS邊框大小。回傳的結果是包含完整元素的最小矩形，並且擁有`left`, `top`, `right`, `bottom`, `x`, `y`, `width`, 和 `height` 這幾個以像素為單位的`readonly`屬性用於描述整個邊框。除了 width 和 height 以外的屬性是相對於視窗的左上角來計算的。

![](https://github.com/hoovivaf2e/javascript30/blob/master/22%20-%20Follow%20Along%20Link%20Highlighter/viewport.png)

## 步驟

### Step 1:
- 取得所有能夠觸發事件的DOM元素`<a>`
- 創建一個 `span`標籤，並對其添加`highlight`的class，再放到DOM裡

```javascript
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);
```
* 白色的`highlight`是一個相對於文檔絕對定位的`<span>`，當我們的滑鼠移動到`<a>`的時候，它的top和left回隨滑鼠移動的位置的變化而動態變化，再加上我們對 css class `highlight`設置了`transition: all 0.2s`，因此會有動畫的效果。

### Step 2:
- 監聽所有`<a>`標籤，當滑鼠移動到某一`<a>`標籤時，就會觸發`highlightLink`方法
- 設置高亮狀態的`span`標籤樣式

```javascript
function highlightLink() {
  // this: 觸發這個方法的<a>標籤
  // 取得<a>標籤的座標、寬、高
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  // coords: 用來存放會使用到的定位資訊和寬、高。
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
  //設置高亮狀態的span標籤樣式
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}
// 監聽所有<a>標籤
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
```


參考資料：
- [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
