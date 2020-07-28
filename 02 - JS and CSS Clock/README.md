# 02 - JS and CSS Clock

時鐘。一開始就提供了一個鐘面，也寫好了三支指針。

- 功能
    顯示目前的時間
    - 分别獲取當前時間的時、分、秒。
    - 通過時分秒對一圈360度進行映射，確定每一個指針所需旋轉的角度。
    - 通過CSS的transform：rotate(deg)，來調整指針在鍵盤中的位置。

![](https://github.com/hoovivaf2e/javascript30/blob/master/02%20-%20JS%20and%20CSS%20Clock/demo_2.png)

## 使用到的語法 Javascript

- getSeconds/getMinutes/getHours: 
    getSeconds() 返回時間的秒；getMinutes() 返回時間的分；getHours() 返回時間的時，皆以本地時間顯示。

```javascript
const now = new Date();
console.log(now.getHours());
```

- transform: 
    transform 屬性向元素使用於 2D 或 3D 轉換。該屬性可以旋轉，縮放，傾斜或平移指定元素。

Rotate a div element:
```javascript
document.getElementById("myDIV").style.transform = "rotate(7deg)";
```

- setInterval: 
    setInterval() 方法重複調用一個函數或執行一段程式碼，在每次調用之間具有固定的時間延遲。

Click a button. Wait 3 seconds, and the page will alert "Hello":
```html
<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>
```

## 使用到的語法 CSS

- box-shadow: h-shadow v-shadow blur spread color inset/outset;

- transform: none|transform-functions;
    *
- transform-origin: x-axis y-axis z-axis;

- transition: property duration timing-function delay;

- transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);