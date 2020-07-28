# 07 - Array Cardio Day 2

- 本章主要是熟悉 Array 的幾個基本方法，包含`some()`、`every()`、`find()`、`findIndex()`。請打開 HTML 後在 Console 面板中查看輸出結果。

## 使用到的語法 Javascript

- `some()`: 用來檢查陣列裡面是否有一些符合條件。只要有一個以上符合條件就會回傳 true，全部都不是的話會回傳 false。
    
    ```javascript
    const array = [1, 2, 3, 4, 5];
    const even = (element) => element % 2 === 0;
    console.log(array.some(even));  // true
    ```

- `every()`: 用來檢查陣列裡面是否所有元素都符合條件。只要有一個以上不符合條件就會回傳 false，全部都符合的話會回傳 true。

    ```javascript
    const isBelowThreshold = (currentValue) => currentValue < 40;
    const array1 = [1, 30, 39, 59, 10, 13];
    console.log(array1.every(isBelowThreshold));    //false
    ```

- `find()`: 此方法會回傳第一個滿足條件的元素值。都沒有元素符合條件則回傳 undefined。

    ```javascript
    const array1 = [5, 12, 8, 130, 44];
    const found = array1.find(element => element > 10);
    console.log(found);     // 12
    ```

- `findIndex()`: 依據所帶入的函式，尋找陣列中符合條件的元素，並回傳其 index(索引)。如果沒有符合的對象，則回傳 -1 。

    ```javascript
    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log(array1.findIndex(isLargeNumber));   // 3
    ```

- `...`: 本篇為擴展運算符（Spread Operator）是ES6中的新特性之一，是把一個陣列展開成個別的值的速寫語法，它只會在陣列字面定義與函式呼叫時使用。這個運算符後面必定接著一個陣列。

    ```javascript
    const params = [ "hello", true, 7 ]
    const other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
    ```

    ```javascript
    function sum(a, b, c) {
        return a + b + c
    }
    const args = [1, 2, 3]
    sum(…args)  // 6
    ```

- `slice()`: 複製開始與結束點（結束點不算）中的內容，回傳一個新的陣列，而原本的陣列不會被修改。

    ```javascript
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));      // ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4));   // ["camel", "duck"]
    ```