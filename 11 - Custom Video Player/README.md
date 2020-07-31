# 11 - Custom Video Player

- 本章使用HTML5的`<video>`製作一個客製化的播放器。功能有：播放/暫停、快進/快退、音量控制、速度控制。

![](https://github.com/hoovivaf2e/javascript30/blob/master/11%20-%20Custom%20Video%20Player/11_customvideoplayer.png)


## 使用到的語法 Html

- `video`: HTML5 `<video>` 是影片標籤，可以在瀏覽器中很容易的插入影片，還能夠設定影片長、寬、增加影片播放控制列、是否自動播放、是否自動重覆播放等功能。HTML 5 目前所支援的影片格式有三種，分別為 ogg、mpeg 4 與 WebM。

    ```html
    <video width="360" height="270" controls>
        <source src="video/test.ogg" type="video/ogg">
        <source src="video/test.mp4" type="video/mp4">
        您的瀏覽器不支援此 HTML5 影片標籤
    </video>
    ```

    瀏覽器並不是都支持相同的影片格式，可以在 `<source>` 元素裡提供多个影片來源，然後瀏覽器將會使用它所支持的第一個來源。

    * 屬性
        
        - `controls`: 帶有瀏覽器默認的控制鍵，包括：播放、暫停、定位、音量、全螢幕、字幕、音軌。

        - `autoplay`: 影片自動播放
        
        ```html
        <video controls="controls" autoplay="autoplay">
            <source src="movie.ogg" type="video/ogg" />
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        ```

        - `loop`: 影片循環播放

        ```html
        <video controls="controls" loop="loop">
            <source src="movie.ogg" type="video/ogg" />
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        ```

        - `muted`: 影片被靜音

        ```html
        <video controls muted>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
        ```

        - `muted`: 影片被靜音

        ```html
        <video controls muted>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
        ```

        - `poster`: 帶有預覽圖片

        ```html
        <video controls poster="/images/video_pic.png">
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video> 
        ```

        - `preload`: 在頁面載入後，預先載入影片。

        ```html
        <video controls="controls" preload="auto">
            <source src="movie.ogg" type="video/ogg" />
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video> 
        ```

        * 更多HTML Audio/Video DOM的屬性、方法、事件看[w3school](https://www.w3schools.com/tags/ref_av_dom.asp)

- `<input type="range">`: 範圍控制元件 (滑動條)。min 是最小值，max 是最大值，step 是每隔間距，value 是預設值。

    ```html
        <input type="range" min="0" max="100" step="1" value="50">
    ```

## 使用到的語法 Javascript

- `textContent`: 為 HTML DOM 的屬性。可以取得元素的文本内容，亦可以指定元素的文本內容。當指定元素的文本內容時，其下任何的子節點、文字皆會被移除，替換成指定的文字。

```javascript
function updateButton() {
	const icon = this.paused ? '▶' : '❚ ❚';
	toggle.textContent = icon;
}
```

## 步驟

### Step 暫停/播放: 

寫一個`togglePlay`方法，根據影片的播放狀態來判斷該執行`play()`或`pause()`。

    ```javascript
    function togglePlay() {
        video.paused ? video.play() : video.pause();
    }
    ```

### Step 暫停/播放 icon 切換:

為了讓使用者直觀地知道播放器狀態，監聽`play`跟`pause`按鈕，透過icon來顯示。播放時顯示 ▶，暫停時顯示 ❚ ❚。

    ```javascript
    function updateButton() {
        const icon = this.paused ? '▶' : '❚ ❚';
        toggle.textContent = icon;
    }
    
    video.addEventListener('play', updateButton)；
    video.addEventListener('pause', updateButton)；
    ```
    
    `this`指的是監聽的按鈕 'play' 或 'pause'。

### Step 快退/快進:
在 HTML 中，快退/快進按鍵已添加 `data-skip` 屬性，`querySelectorAll`取得`nodeList`，對應的值即為快退/快進的秒數，而後用`forEach`遍歷，逐一添加click事件`skip`。用`currentTime`來修改影片當前時間。

    ```javascript
    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }

    skipButtons.forEach(button => button.addEventListener('click', skip));
    ```

### Step 音量和播放速度:
透過控制器上的兩個滑動條來控制影片的音量和播放速度。兩個滑動條皆為`<input type="range">`的元素。而 input 的 name 值和 video 對象中的屬性名稱是一樣的，所以當監聽到兩個 input 元素的 change 事件時，就可以很容易的透過其 value 值改變影片屬性了。

    ```javascript
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }   //name分別設置為volume, playbackRate，剛好video的屬性中也有 volume 與 playbackRate

    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ```

### Step 進度條操作:
在影片播放、滑鼠點擊和拖曳的時候改變影片播放的進度。
    
    * 影片播放時

    ```javascript
    function handleProgress() {
        //  影片當前秒數/影片長度(s)*100
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }

    video.addEventListener('timeupdate', handleProgress);
    ```

        - timeupdate 事件在 audio/video 的播放位置發生改變時觸發。
        - timeupdate在以下情況會被調用:
            - 播放 audio/video
            - 移動 audio/video 播放位置
    
    * 滑鼠點擊時，根據點擊位置設置播放時間

    ```javascript
    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * vidoe.duration;
        video.currentTime = scrubTime;
    }

    progress.addEventListener('click', scrub);
    ```

    * 進度條拖曳時，透過設置一個標誌來判斷當前是否出於拖曳狀態，然後配合`mousedown`, `mouseup` 事件來更新這個標誌：

    ```javascript
    let mousedown = false;
    // 滑鼠在 progress 上移動時更新進度
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    // 滑鼠按下改變標誌
    progress.addEventListener('mousedown', () => mousedown = true);
    // 滑鼠抬起恢復標誌
    progress.addEventListener('mouseup', () => mousedown = false);
    ```
