# 25 - Event Capture, Propagation, Bubbling and Once

- 本章學習DOM的事件機制，主要包括 Event Capture(事件捕捉), Event Bubbling(事件冒泡), Propagation, 及 Once(單次執行)。

## 步驟



### `html`結構

```html
  <div class="one">
    <div class="two">
      <div class="three">
      </div>
    </div>
  </div>
```

### 加入`click`事件
這邊有共三層的div標籤。首先我們先為這三個標籤加入`click`的監聽事件。

```javascript
  const divs = document.querySelectorAll('div');

  function logText(e){
    console.log(this.classList.value);
  }

  divs.forEach(div => div.addEventListener('click', logText));
```

- `EventTarget.addEventListener('eventName', callback, option)`:分別為事件名稱，該事件的回調涵式(監聽器)，及註冊的選項對象(option)。

    - option內有兩個屬性，`capture`及`once`預設皆為`false`。

```javascript
divs.forEach(div => div.addEventListener('click', logText, {
  capture : false,
  once : false,
}));
```

### 冒泡順序
* 接著我們點擊最內圈的`div`，會發現依序會出現`three->two->one`。

* 當我們註冊一個監聽器時，會**由外向內**的去［捕捉］(Capture)這個監聽器的位置，而當位置被觸發時，會**由內向外**去［冒泡］(bubbling)。而預設option內的`capture`選項為`false`，也就是代表我們不去處理［捕捉］的過程，只處理［冒泡的過程］。所以會看到呈現方式會式`three->two->one`。

```javascript
  const divs = document.querySelectorAll('div');

  function logText(e){
    console.log(this.classList.value); //three, two, one
  }

  divs.forEach(div => div.addEventListener('click', logText, {
  capture : false,
  once : false,
}));
```

* 而當我們把`capture`設定為true時，則不會執行［冒泡］程序，所以會看到呈現會式`one->two->three`。

```javascript
  const divs = document.querySelectorAll('div');

  function logText(e){
    console.log(this.classList.value); //one, two, three
  }

  divs.forEach(div => div.addEventListener('click', logText, {
  capture : true,
  once : false,
}));
```

### `e.stopPropagation()`
* 而當我們無論在bubbling或是capture的過程中加入了`e.stopPropagation();`時，會中斷過程。若`capture`為`ture`, 則只會看到one；同理若為`false`，則只會看到`three`。

```javascript
  const divs = document.querySelectorAll('div');

  function logText(e){
    console.log(this.classList.value); 
    //capture:true->one, capture:false->three
    e.stopPropagation();
  }

  divs.forEach(div => div.addEventListener('click', logText, {
  capture : true,
  once : false,
}));
```

* 而`once`則是代表這個事件監聽只執行一次，執行完後即會`removeEventListener`。因此當`once : true`時，只會執行一次監聽事件。

```javascript
  button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  });
```

* 此時應該可以看到點擊按鈕後只會出現一次`Click!!!`。
