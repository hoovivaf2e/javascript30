# 26 - Stripe Follow Along Nav

- 本章練習導覽列選單顯示。當滑鼠hover在不同的導覽列選項上時顯示選單內容。

![]()

## 步驟

### 處理滑鼠移入移出

```javascript

const triggers = document.querySelectorAll('.cool > li');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

function handleEnter() {
    console.log('ENTER');
}

function handleLeave() {
    console.log('LEAVE');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

```

### 當滑鼠移入時，顯示下拉選單內容；移出時隱藏

```javascript

function handleEnter() {
    this.classList.add('trigger-enter');
    // 製作下拉選單顯示的過度效果
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

```

```css
/* 將下拉選單的 opacity 設為 0， display 設為 none */
.dropdown {
    opacity: 0;
    position: absolute;
    overflow: hidden;
    padding: 20px;
    top: -20px;
    border-radius: 2px;
    transition: all 0.5s;
    transform: translateY(100px);
    will-change: opacity;
    display: none;
}

/* 為製作下拉選單顯示的過度效果
* 使用js將以下css加入dropdown： 
* 將滑鼠移入時『區塊顯示』與『內容顯示』分開來寫，效果更好 
*/
.trigger-enter .dropdown {
    display: block;
}

.trigger-enter-active .dropdown {
    opacity: 1;
}
```

### 增加白色下拉選單背景
* 這裡之所以要使用一個白色背景的div而不是直接為下拉選單設置白色背景，是因為我們想要一個左右滑動的過度動畫效果，若直接設置下拉選單為白色背景，那麼每一次滑鼠從一個選項移動到另一選項時，都會有選單短暫消失的間隙，這並不是我們想要的效果。

* 所以製作了一個獨立的白色背景，在下拉選單的顯示與隱藏時增加過度的動畫。過度動畫的實現：當滑鼠移動到某一個選項後，使用了`settimeout(fn,150)`，來延遲添加下拉選單的 class - `trigger-enter-active`。


```javascript
// 下拉選單的白色背景原本就存在
// 當滑鼠移入時顯示，離開時隱藏
const background  = document.querySelector('.dropdownBackground');

function handleEnter() {
    ...
    background.classList.add('open');
}

function handleLeave() {
    ...
    background.classList.remove('open');
}

```

```css
.dropdownBackground {
    width: 100px;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
    transition: all 0.3s, opacity 0.1s, transform 0.2s;
    transform-origin: 50% 0;
    display: flex;
    justify-content: center;
    opacity: 0;
}

.dropdownBackground.open {
    opacity: 1;
}
```

* 要讓白色背景符合內容寬高，必須要先抓到內容寬高，也要知道nav的位置，如此才能將白色背景放在nav選單下。

```javascript
function handleEnter() {
    ...
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    // 取得選單內容寬高等資訊
    const dropdownCoords = dropdown.getBoundingClientRect();
    // 取得nav位置
    const navCoords = nav.getBoundingClientRect();
    // 要減去nav的定位，避免上方區塊增加時造成的錯位
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}
```
