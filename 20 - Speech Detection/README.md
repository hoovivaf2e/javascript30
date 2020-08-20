# 20 - Speech Detection

- 使用browser內建的語音識別API`SpeechRecognition`來做語音識別，並透過interimResults來輸出識別的結果。需要同意授權使用麥克風才能使用API，也需要建置本地端伺服器。

## 使用到的 Javascript

### SpeechRecognition 方法

* `SpeechRecognition`: Web語音API是用於識別語音服務。

* `SpeechRecognition.interimResults`: 控制是否應返回臨時結果（true/false）。如果設為`true`，則會一直返回，直到SpeechRecognitionResult.isFinal是true時，即停頓。

* `SpeechRecognition.lang`: 設置當前語言。

* `recognition.start`: 啟動語音識別服務，偵聽傳入的音頻，以識別與當前語言相關的語法。

### 使用addEventListener()或通過將事件偵聽器分配給此接口的屬性來偵聽這些事件。

* `end`: 語音識別服務斷開連接時觸發。

```javascript
recognition.addEventListener('end', recognition.start);
```

* `result`: 回傳已識別的結果，型態為`NodeList`。

    - `result.transcript`: 語音辨識的内容。 

    - `result.confidence`: 識別的準確度，值越大代表正確率越高。

```javascript
recognition.addEventListener('result', e => {
    ...
})
```

## 步驟

### 1. 建立 SpeechRecognition

```javascript

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

```

### 2. 將輸出元素加入頁面

```javascript

// 建立p標籤在html設定好的文字區中
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

```

### 3 .監聽識別系統

```javascript

recognition.addEventListener('result', e => {
  // 將回傳資料先轉為array來操作
  const transcript = Array.from(e.results)
    // 透過map取得回傳陣列中的第0筆
    .map(result => result[0])
    // 在取得第0筆中的transcript
    .map(result => result.transcript)
    // 用join把連結符號消掉
    .join('')

  // 把回傳內容塞到p元素中
  p.textContent = transcript;
  
  // 如果當前一段輸入結束時(當停頓時)，就會新建一個p標籤
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
})

// 監聽如果語音識別結束，則在開啟一次新的識別
recognition.addEventListener('end', recognition.start);
// 開始識別
recognition.start();

```
