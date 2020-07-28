# 08 - Fun with HTML5 Canvas

- 本章透過Html的 `<canvas>` 的路徑繪製搭配Javascript做出畫布的效果。效果包括: 顏色呈彩虹漸變，畫筆軌跡變粗。

### 使用到的語法 Javascript

- `canvas`: HTML5 `<canvas>` 標籤只是圖形容器，必需使用javascript來繪製圖形。canvas 是一個二維網格，以左上角為起點，座標為(0,0)。

    ```html
    <canvas id="myCanvas" width="200" height="100"></canvas>
    ```

    ```javascript
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0,0,150,75);
    ```

    * `getContext()`: 創建 context 對象。getContext("2d") 對象是内建的 HTML5 對象，擁有多種繪制路徑、矩形、圓形、文字以及添加圖像的方法。

    * `fillStyle`: `fillStyle` 屬性可以是CSS顏色，漸變，或圖案。默認設置是 #000000（黑色）。
    
    * `fillRect(x,y,width,height) `: 畫出一個填滿的矩形。`ctx.fillRect(0,0,150,75)`意思是：在畫布上繪製 150x75 的矩形，從左上角(0,0)開始。

    ```javascript
    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(75,50);
            ctx.lineTo(100,75);
            ctx.lineTo(100,25);
            ctx.fill();
        }
    }
    ```

    * `beginPath()`: 產生一個新路徑，產生後再使用繪圖指令來設定路徑。
    * `moveTo(x,y) `:  移動畫筆到指定的(x, y)座標點。
    * `lineTo(x,y)` 從目前繪圖點畫一條直線到指定的(x, y)座標點。
    * `fill()`: 填滿路徑內容區域來產生圖形。

    ```javascript
    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.fillRect(25,25,100,100);
            ctx.clearRect(45,45,60,60);
            ctx.strokeRect(50,50,50,50);
        }
    }
    ```

    * `strokeRect(x, y, width, height)`: 畫出一個矩形的邊框。
    * `clearRect(x, y, width, height)`: 清除指定矩形區域內的內容，使其變為全透明。

    ```javascript
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    ```

    * `stroke()`: 畫出圖形的邊框。
    * `arc(x, y, radius, startAngle, endAngle, anticlockwise)`: 畫一個弧形。x, y代表圓心座標點，radius代表半徑，startAngle, endAngle分別代表沿著弧形曲線上的起始點與結束點的弧度，弧度測量是相對於x軸，anticlockwise為true代表逆時針作圖、false代表順時針作圖。
        - arc()方法用的是弧度(radians)而非角度(degrees)，如果要在弧度與角度間換算，可以利用以下方式: radians = (Math.PI/180) * degrees。


- `hsl`: 在 CSS3 中新增了 HSL 及 HSLA 等兩種跟顏色有關的屬性。其中 H 為 hue(色相)、S 為 saturation(飽合度)、L 為 lightness(亮度)。HSLA 就跟 RGBA 一樣，是在原本的屬性中多加入了不透明度的設定。
    * 色相: 色相是色輪上從0到360的度。0是紅色，120是綠色，240是藍色。
    * 飽和度: 飽和度是一個百分比值；0％表示灰色陰影，而100％是全彩色。
    * 亮度: 亮度是一個百分比；0％是黑色，100％是白色。

    ```css
    div {
        background-color: hsl(180, 50%, 50%);
        color: hsl(0, 0%, 100%);
    }
    ```