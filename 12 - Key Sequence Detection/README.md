# 12 - Key Sequence Detection

- 本章練習監聽鍵盤，當輸入特定字後，會顯示特效。
- 設定的密碼(特定字)為「hello」。當連續輸入 h, e, l, l, o 後會出現圖片。

![](https://github.com/hoovivaf2e/javascript30/blob/master/12%20-%20Key%20Sequence%20Detection/12_keydetection.png)

## 使用到的語法 Javascript

- `splice(start, deleteCount, item1, item2, ...)`: 用來插入、刪除或替換陣列中的某一個或某個範圍的元素。此方法會改變原始陣列。start 為 陣列中要開始改動的元素索引； deleteCount 為 欲刪除的原陣列元素數量； item 為 要加入到陣列的元素。
    
    插入新元素
    ```javascript
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2,0,"Lemon","Kiwi");  // ["Banana", "Orange", "Lemon","Kiwi", "Apple", "Mango"]
    ```

    刪除元素
    ```javascript
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2,1);   // ["Banana", "Orange", "Mango"]

    ```

## 步驟

### Step 1:
宣告一個陣列，用來存放輸入的字。宣告會顯示特效的特定字。
    
```javascript
const pressed = [];
const secretCode = 'hello';
```

### Step 2:
對整個頁面添加鍵盤的`keyup`事件監聽。

```javascript
window.addEventListener('keyup', (e) => {...})
```

### Step 3:
當觸發keyup時，將輸入的字元`push()`到陣列中，並使用`splice()`來控制陣列長度，當pressed陣列裡面的字元個數大於密碼陣列的個數時，每新增一個字元，pressed陣列就會將最前面一個值刪掉。最後透過`join()`及`includes()`來驗證輸入的內容是否與設定密碼相同。

```javascript
//當觸發keyup時，將輸入的字元push到陣列中
pressed.push(e.key);
//透過運算使pressed陣列長度始終與設定的密碼相同，且當個數超出時，替換掉陣列第一個元素
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
//判斷輸入值陣列的內容是否與設定密碼相同
if (pressed.join('').includes(secretCode)) {
    //觸發效果
    cornify_add();
}
```