# 24 - Sticky Nav

- 本章練習CSS `position: fixed;`。當頁面往下滾動超過導覽列時，不論頁面如何往下走，導覽列依舊固定在上方。當頁面向上滾動到看得見標題圖片時，導覽列恢復初始樣式。

![]()

## 步驟

### 偵測元素距離頂部的高度

```javascript

const nav = document.querySelector('#main');
//  透過offsetTop取得nav到頁面頂的距離
let topOfNav = nav.offsetTop;

```

### 偵測網頁滾動是否超過導覽列，再來改變樣式

```javascript
function fixNav() {
  // 如果目前捲軸滾動超過導覽列的頂部
  if (window.scrollY >= topOfNav) {
    /* 增加一個padding-top，並增加class - fixed-nav
    因為當position被設定為fixed時，將不會再佔據原有的高度
    所以要動態的增加一個offsetHeight，將內容部位增高避免元素往內縮  */
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
      // 還原padding-top並移除class - fixed-nav
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
// 監聽scroll動作
window.addEventListener('scroll', fixNav);
```

### 增加CSS樣式: fixed-nav

```css
/* 當有fixed-nav時，把site-wrap縮放回1，讓整體有放大效果*/
.fixed-nav .site-wrap {
  transform: scale(1);
}
/* 當有fixed-nav時，把nav改為fixed並加上陰影*/
.fixed-nav nav {
  position: fixed;
  box-shadow: 0 5px rgba(0,0,0,0.1);
}
/* 當有fixed-nav時，把logo寬度增加，使其顯示出來*/
.fixed-nav li.logo {
  max-width: 500px;
}
```