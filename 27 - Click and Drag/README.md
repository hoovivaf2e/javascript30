# 27 - Click and Drag

- 本章練習當滑鼠拖動畫面移動時，捲軸隨之向拖動方向移動。

![](https://github.com/hoovivaf2e/javascript30/blob/master/27%20-%20Click%20and%20Drag/27_clickanddrag.png)

## 步驟

### 監聽mouse event事件

```javascript
const slider = document.querySelector(".items");
let isMouseDown = false; //紀錄滑鼠是否按下
let startX;     //滑鼠按下時的位置的x坐標
let scrollLeft; //紀錄視窗相對於items最左側差距多少距離

/** 滑鼠按鍵按下 **/
slider.addEventListener('mousedown', () => {
    ...
});

/** 滑鼠滑出範圍**/
slider.addEventListener('mouseleave', () => {
    ...
});

/** 滑鼠按鍵放開 **/
slider.addEventListener('mouseup', () => {
    ...
});

/** 滑鼠移動 **/
slider.addEventListener('mousemove', () => {
    ...
});
```

### mousedown

```javascript
slider.addEventListener('mousedown', (e) => {
  // 給予按下的flag
  isDown = true;
  // 加上抓取效果樣式
  slider.classList.add('active');
  // 設定移動的初始值為目前頁面距離-當前item左邊距
  startX = e.pageX - slider.offsetLeft;
  // 設定目前捲軸的左距
  scrollLeft = slider.scrollLeft;
});
```

### mouseleave

```javascript
slider.addEventListener('mouseleave', () => {
  // 將按下的flag與樣式移除
  isDown = false;
  slider.classList.remove('active');
});
```

### mouseup

```javascript
slider.addEventListener('mouseup', () => {
  // 將按下的flag與樣式移除
  isDown = false;
  slider.classList.remove('active');
});
```

### mousemove

```javascript
slider.addEventListener('mousemove', (e) => {
  // 若移動時的狀態非按下，不作動
  if (!isDown) return;
  // 避免觸發其他預設事件（按下且移動預設是選取範圍）
  e.preventDefault();
  // 設定X（當前定位）為目前頁面距離-當前item左邊距
  const x = e.pageX - slider.offsetLeft;
  // 設定移動距離為 X-初始值
  const walk = x - startX;
  // 設定水平捲軸的偏移量
  slider.scrollLeft = scrollLeft - walk;
});
```

### css 

* `perspective`: 用於為3D定位的元素提供一些透視圖。定義對象與用戶的距離。因此，值越低越能產生強烈的3D效果。在定義`perspective`元素的屬性時，是其子元素獲得透視圖，而不是元素本身。

```css
/* 透視距離，即視點位於垂直距離螢幕的距離，值越大，離的越遠，變形效果看起來越微小 */
.items{perspective: 500px;}
```