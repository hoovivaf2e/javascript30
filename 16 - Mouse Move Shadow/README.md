# 16 - Mouse Move Shadow

- 本章練習會動的文字陰影。當使用者移動滑鼠時，文字陰影也會隨著偏移。

![](https://github.com/hoovivaf2e/javascript30/blob/master/16%20-%20Mouse%20Move%20Shadow/16_mouseshadow.png)

## 使用到的語法 HTML

- `contenteditable`: 表示元素是否可使用者編輯 

```html
<h1 contenteditable>🔥WOAH!</h1>
```

## 步驟

### Step 1:
監聽滑鼠移動事件，並加入事件處理的回調函數`shadowMove`。

```javascript

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadowMove(e) {
    ...
}
//在div範圍内監聽
hero.addEventListener('mousemove', shadowMove);
```

### Step 2:

```javascript

const walk = 100;  // 100px 

function shadowMove(e) {
    // 取得hero的寬、高
    // const width = hero.offsetWidth
    // const height = hero.offsetHeight
    /* 可簡寫如下 */
    const { offsetWidth: width, offsetHeight: height } = hero;
    
    // 取得滑鼠的座標
    /* offsetX與offsetY回傳的座標，是以「目前DOM box model區塊範圍」為主，
    * 回傳滑鼠座標位於「目前的DOM區塊範圍」的哪裡，
    * 而不是以整個「window」為主，另外DOM與DOM重疊的話，依舊是分開計算。
    * 註：起點為左上角： x:0 , y:0 ，向右增加 x ，向下增加 y */
    let { offsetX: x, offsetY: y } = e;
    
    // this: 是你監聽的元素 = hero
    // e.target: 是你觸發事件的對象 = h1

    /* 若滑鼠從父元素移到子元素的話，offsetX與offsetY會 歸0 重新計算，
    * 所以需要將父元素與子元素之間座標的落差補足。 */
    if (this !== e.target) {
        // e.target.offsetLeft: 是 h1 與左邊邊界的距離
        // e.target.offsetTop: 是 h1 與上面邊界的距離
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // Math.round => 四捨五入
    // (座標在hero的比例 * 最大偏移量的值) - (一半的最大偏移量的值)
    // 取得 正值或負值 的座標，如： 最大偏移量的值=100，取得範圍落於 -50~50 之間
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${yWalk * -1}px ${xWalk}px 0 rgba(0,0,0,0.3)`;
}

```