# 28 -  Video Speed Controller

- 本章練習拖曳右邊的進度條來設置影片的播放速度

![](https://github.com/hoovivaf2e/javascript30/blob/master/28%20-%20%20Video%20Speed%20Controll/28_videospeedcontroller.png)

## 步驟

### 監聽滑鼠移動事件

```javascript

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');


function handleMove(e){
	console.log(e);
}
speed.addEventListener('mousemove', handleMove);
```

### 完成handleMove事件

```javascript
function handleMove (e) {
  // 取得觸發點位置（滑鼠位於整頁頂端的Y軸定位-speed框到整頁頂端的距離）
  // this = .speed
  const y = e.pageY - this.offsetTop;
  // 設定百分比(y / speed框的高度)
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  // 用Math.round來計算取得四捨五入的百分比值
  const height = Math.round(percent * 100) + '%';
  // 取得播放速率(0.4一跳，最多4倍速)
  const playbackRate = percent * (max - min) + min;
  // 調整speed-bar的樣式高度
  bar.style.height = height;
  // 用toFixed(2)來設定最多取得小數點後兩位，顯示於speed-bar上
  bar.textContent = playbackRate.toFixed(2) + 'x';
  // 控制影片的速率
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);

```
* `e.pageY`: 目前滑鼠位於整個頁面中離頂端的距離之Y軸定位。