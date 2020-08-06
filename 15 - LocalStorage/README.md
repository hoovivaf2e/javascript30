# 15 - LocalStorage

- 本章練習 LocalStorage 與 event delegation。使用場景是一個todo list，實現新增項目儲存在`localStorage`，以及刪除項目的功能。

![](https://github.com/hoovivaf2e/javascript30/blob/master/15%20-%20LocalStorage/15_localstorage.png)

## 介紹 localStorage
是由html5所提供的一個web storage，擁有5MB的大小，可供程式設計者使用，無法跨域使用。localStorage 是以key-value方式儲存資料，所儲存的東西沒有限制。且localStorage的資料不會隨著使用者關閉瀏覽器而消失，除非使用者清空localStorage或程式設計者執行clear或removeItem，否則資料將一直存在。

一般在瀏覽器端的儲存方式分為三種：`cookie`、`localStorage`跟 `SessionStorage`。以下說明三者的差異。

| 特性          | Cookie               | LocalStorage               | SessionStorage             |
| ----------- | ---------------------------------------- | -------------------------- | -------------------------- |
| 生命週期        | 由Server端生成，可設置失效時間。若是browser生成，默認關閉browser後失效 | 除非被清除，否則永久保存               | 當前有效，關閉頁面或瀏覽器就會被刪除           |
| 大小          | 4KB                                      | 5MB                        | 5MB                        |
| 與server通信狀況 | 每次送HTTP請求時皆會存在Header中                   | 不參與Server通信                | 不參與Server通信                |
| 儲存型態         | String              | String                     | String                      |
| 使用時機        | 用戶登入訊息        | 購物車訊息                  | 表單頁面處理                 |


## 使用到的語法 Javascript

- `e.preventDefault()`: 停止與事件關聯的默認動作。
在本章中使用`e.preventDefault()`是為了阻止按下enter後的頁面reload動作。
因為透過`form`元素提交表單，會觸發`submit`事件。`submit`事件會reload頁面，並將資料傳送到server端。而當頁面reload的時候就會打斷接下來要做的事，導致無法執行`addItem()`。

```javascript
function addItem(e) {
  e.preventDefault(); // 阻止submit之後的頁面reload
  // 取得form中的 input name=item 的欄位值
  const text = (this.querySelector('[name=item]')).value;
  // 宣告要存入localstorage的物件：輸入的文字 與 是否勾選的狀態(done)
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('item', JSON.stringify(items));
  // 清空輸入欄位
  this.reset();
}
```

- `event delegation`:   
    ｜ 假設同時有很多DOM element都有相同的event handler，與其在每個DOM element上個別附加event handler，不如利用event bubbling的特性，統一在他們的ancestor的event handler處理。

```javascript
function toggleDone(e) {
    // 偵測進來的點擊是input(checkbox)才動作
    if (!e.target.matches('input')) return;
    // 取得checkbox的data-index值
    const el = e.target;
    const index = el.dataset.index;
    // 利用！來使done的狀態在true/false間切換
    items[index].done = !items[index].done;
    // 將更新後的狀態寫入localStorage中
    localStorage.setItem('items', JSON.stringify(items));
    // 更新列表
    populateList(items, itemsList);
}
``` 

這個介紹的非常清楚:

* [Event Bubbling, Event Capturing 及 Event Delegation](https://shubo.io/event-bubbling-event-capturing-event-delegation/)

* [Bubbling and capturing](https://javascript.info/bubbling-and-capturing)

* [Event delegation](https://javascript.info/event-delegation)