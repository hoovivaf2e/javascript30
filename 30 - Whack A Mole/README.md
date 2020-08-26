# 30 - Whack A Mole

- 本章練習實作一個打地鼠小遊戲。

![](https://github.com/hoovivaf2e/javascript30/blob/master/30%20-%20Whack%20A%20Mole/30_whackamole.png)

## 步驟


### 設定隨機數 - 地鼠出現的時間

```javascript

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

```

### 設定地鼠隨機出現 - 地鼠出現的位置

```javascript

function randomHole(holes) {
  // 取得地鼠洞數量區間內隨機一個洞
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  // 避免骰到相同的
  if (hole === lastHole) {
    return randomHole(holes);
  }
  // 紀錄最後一個出現的地鼠洞
  lastHole = hole;
  return hole;
}

```

### 打地鼠

```javascript

function bonk(e) {
  // isTrusted防止腳本操作，class有bonked代表已被搥過，若符合上述兩者則不進行
  if(!e.isTrusted || this.classList.contains('bonked')) return;
  // 替被打到的地鼠加上bonked的樣式避免連續點擊得分
  this.classList.add('bonked'); 
  // 打到就移除出現的動畫
  this.classList.remove('up');
  // 加分
  score++;
  // 更新顯示分數
  scoreBoard.textContent = score;
}

```

* `event.isTrusted`: 回傳布林值，表示該事件是否受信任。如果事件是由使用者調用的，則該事件是可信的；如果是由腳本(javascript)調用，則是不可信的事件。


### 遊戲開始

```javascript

function startGame() {
  // 時間重置
  timeUP = false;
  // 分數歸零
  scoreBoard.textContent = 0;
  score = 0;
  // 執行地鼠出現函式
  peep();
  // 設定十秒後把時間押為結束
  setTimeout(() => timeUP = true, 10000);
}

// 替每個地鼠加上click事件綁定bonk（打地鼠）
moles.forEach(mole => mole.addEventListener('click', bonk));

```
