# 02 - JS and CSS Clock

時鐘。一開始就提供了一個鐘面，也寫好了三支指針。

- 功能
    顯示目前的時間
    - 分别獲取當前時間的時、分、秒。
    - 通過時分秒對一圈360度進行映射，確定每一個指針所需旋轉的角度。
    - 通過CSS的transform：rotate(deg)，來調整指針在鍵盤中的位置。

## 使用到的語法

### Javascript

- getSeconds/getMinutes/getHours: 
    The getSeconds()/getMinutes()/getHours() method returns the second/minute/hour for the specified date, according to local time.

```javascript
const now = new Date();
console.log(now.getHours());
```

- transform: 
    The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

Rotate a div element:
```javascript
document.getElementById("myDIV").style.transform = "rotate(7deg)";
```

- setInterval: 
    The window object allows execution of code at specified time intervals.

Click a button. Wait 3 seconds, and the page will alert "Hello":
```html
<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>
```

