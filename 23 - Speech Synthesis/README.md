# 23 - Speech Synthesis

- 本章練習使用WebAPI獲得瀏覽器支持的語言種類列表，並插入下拉選單中。
在`<textarea>`中輸入文字，點擊`speak`按鈕後，瀏覽器會閱讀輸入的文字；在瀏覽器閱讀時，點擊stop按鈕，瀏覽器會停止閱讀；拖動rate和pitch可以改便閱讀速度和音高。

![](https://github.com/hoovivaf2e/javascript30/blob/master/23%20-%20Speech%20Synthesis/23_speechsynthesis.png)

## 使用到的語法 Javascript

- `SpeechSynthesisUtterance()`: 為 Web Speech API，可以輸出語音，調整音量、音調和選擇語言

    * 屬性
        * `SpeechSynthesisUtterance.lang`：語言。
        * `SpeechSynthesisUtterance.pitch`：音調。
        * `SpeechSynthesisUtterance.rate`：速度。
        * `SpeechSynthesisUtterance.text`：文字內容。
        * `SpeechSynthesisUtterance.voice`：不同語言的聲音。
        * `SpeechSynthesisUtterance.volume`：音量。

- `SpeechSynthesis()`: 為 Web Speech API，可以控制語音的撥放、暫停，及移除語音資訊

    * 方法
        * `SpeechSynthesis.getVoices()`：取得一陣列，其中包含目前所有可用語言。
        * `SpeechSynthesis.pause()`：暫停。（搭配resume）
        * `SpeechSynthesis.resume()`：取消暫停。
        * `SpeechSynthesis.cancel()`：移除所有的音訊。（停止播放）
        * `SpeechSynthesis.speak()`：將一段發音加入發音庫，當前面的發音皆播放完成後，就會播放此發音。
     
## 步驟

### Step 1:
設定語音播放語系選單

```javascript

function getSupportVoice() {
  voices = this.getVoices();
  // 將所有語系塞進下拉選單中
  voicesDropdown.innerHTML = voices
    // 使用filter篩選出包含zh及en的語系
    .filter(voice => voice.lang.includes('zh') || voice.lang.includes('en'))
    // 篩選後的array透過map把資料組成html
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    // 用join來合併且消除原本陣列的逗點
    .join('');
}

// 監聽語音清單變更後進行語系清單的更新
speechSynthesis.addEventListener('voiceschanged', getSupportVoice);
```

### Step 2:
播放與功能設定

```javascript
// 設定選擇的發音語系
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

// 播放切換
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// 設定速率跟音高
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

// 監聽語系選單，選擇後切換語系
voicesDropdown.addEventListener('change', setVoice);
// 監聽速率跟音準控制條，移動後設定
options.forEach(option => option.addEventListener('change', setOption));
// 播放按鈕
speakButton.addEventListener('click', toggle);
// 停止按鈕
stopButton.addEventListener('click', () => toggle(false));

```