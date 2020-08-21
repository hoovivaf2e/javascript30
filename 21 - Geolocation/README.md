# 21 - Geolocation

- 練習使用瀏覽器內建的 web geolocation api 擷取當前的地理位置狀況，包含 指向 及 速度，

## 使用到的 Javascript

* `navigator`: `navigator`物件可以存取使用者的瀏覽器資訊。
    - `geolocation`: 回傳`geolocation`對象，該對象可用於定位用戶的位置
    * `geolocation`的方法
        - `watchPosition()`: 回傳一個監視id值，然後將其傳遞給`geolocation.clearWatch()`方法即可註銷處理程序。

* `data.coords.{property}`: 可取得資訊。第二個參數若失敗會執行的callback錯誤訊息。
    * `accurency`: 目前位置的精確度。
    * `heading`: 目前位置指向。
    * `latitude及longitude`: 經度及緯度。
    * `speed`: 當前速度。

## 說明

```javascript
// 取得HTML中的元素
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
// 使用watchPosition來取得使用者的地理位置及海拔、速度
navigator.geolocation.watchPosition((data) => {
  // 若成功取回，則會回傳一組Position(這裡定義名稱為data)
  console.log(data);
  // 使用coords.speed取回速度(公尺/秒)
  speed.textContent = data.coords.speed;
  // 使用coords.heading取得方位，代表偏離北方的角度，0為正北、90為正東
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  // 錯誤回傳訊息，例如未取得定位授權時
  console.error(err);
});
```