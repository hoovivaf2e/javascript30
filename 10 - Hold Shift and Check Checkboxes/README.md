# 10 - Hold Shift and Check Checkboxes

- 本章介紹使用`Shift + 滑鼠左鍵`來實現連續區間選取。功能包括：勾選某個checkbox時，其 <p> 標籤中的文字會出現刪除線；按下 Shift + 滑鼠左鍵進行多選操作。

![](https://github.com/hoovivaf2e/javascript30/blob/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/10_shiftcheckboxes.png)

## 步驟

#### Step 1:
使用`querySelectorAll('.inbox input[type="checkbox"]`取得各個 checkbox，此時得到一個 `nodeList`(checkboxes)，並設置一個變數`lastChecked`作為紀錄勾選的位置。

#### Step 2:
將`checkboxes`使用`forEach`逐一加入click事件`handelCheck`。

#### Step 3:
在`handelCheck`裡，建立一個區域變數`inBetween`作為是否選取區間的標記，並在每次觸發時檢查是否「有按著shift點擊」`if(e.shiftKey && this.checked)`，若有的話則進入`forEach`，透過設`inBetween`為`true`對每個checkbox進行區間標記，把屬於區間內的checkbox勾起來，並記錄此次點擊的位置。


```javascript

//選取所有的checkbox
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    // 檢查是否按著shift點選
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
        // 將當前點選的checkbox開始記錄到最後一個點選的checkbox標記起來
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
        }
        // 將勾選區間內為true的checkbox勾選起來
        if (inBetween) {
            checkbox.checked = true;
        }
        });
    }
    lastChecked = this;
}
// 為每個checkbox加上click事件
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

```