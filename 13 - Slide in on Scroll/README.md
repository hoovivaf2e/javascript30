# 13 - Slide in on Scroll

- 本章練習圖片 slide in/out。隨著頁面上下滾動，頁面位置超過圖片一半時，圖片從側邊滑入。圖片離開可見區域時，向側邊滑出。

![](https://github.com/hoovivaf2e/javascript30/blob/master/13%20-%20Slide%20in%20on%20Scroll/13_slideinonscroll.png)


## 使用到的語法 Javascript

- `window.innerHeight`: 瀏覽器視窗（viewport）的高度（以像素為單位）。

- `HTMLElement.offsetTop`: 會回傳當前元素與 offsetParent 元素的距離。
offsetParent 元素：指的是 CSS 的 position 屬性為 `relative`, `absolute`, 或 `fixed` 的元素。若沒設定預設就是 static，此時 offsetParent 就會是根節點(root)。或是上層結構中最接近該元素的 table,td,th,body等元素。


## 步驟

### Step 1:
取得所有圖片

```javascript
const slideImages = document.querySelectorAll('.slide-in');
```

### Step 2:
監聽window的滾動事件`scroll`，綁定函數`debounce(checkSlide)`

```javascript
window.addEventListener('scroll', debounce(checkSlide));
```

### Step 3:
針對每次監聽到的滾動事件，遍歷所有圖片元素，判斷是否顯示或隱藏圖片。

```javascript
function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // 滾動頁面的底部距離-圖片1/2高
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // 圖片底部距離網頁頂端的距離
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // 是否已過了圖片的一半
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // 是否超過圖片
    const isNotScrolledPast = window.scrollY < imageBottom;
    // 對滿足顯示條件的，對此圖片加class: .active，不滿足則拿掉
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}
```

