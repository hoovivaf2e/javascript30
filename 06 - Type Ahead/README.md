# 06 - AJAX Type Ahead

- 利用`fetch()`方法以 ajax 的方式來取資料(城市名稱)，並透過`filter()`及`RegExp()`等語法來處理字串，製作即時搜尋顯示的效果！

![](https://github.com/hoovivaf2e/javascript30/blob/master/06%20-%20Type%20Ahead/6_typeahead.png)

### 使用到的語法 Javascript

- `fetch()`: 發送 HTTP Request 或取得網路資料。基於Promise語法結構。回傳promise對象，使用 then 處理請求成功的回傳值，使用 catch 作為請求失敗的錯誤捕捉。

    ```javascript
    fetch('http://abc.com/', {method: 'get'})
    .then(function(response) {
        //處理 response
    }).catch(function(err) {
        // Error :(
    })
    ```

    ```javascript
    fetch('http://abc.com/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: 'response data'})
    })
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);      
    })
    .catch(function(err){
        console.log(err);
    });
    ```

- `RegExp()`: 正規表達式是被用來匹配字串中字元組合的模式。
    
    ```javascript
    cities.filter(place => {
    //建立一個 Regex 物件
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
    ```

    * RegExp 物件內建的方法 (Methods)
        - `exec()`: 用來搜尋匹配的字串，如果找到會回傳一個陣列 (array)，陣列的第一個元素是匹配的字串，第二個之後的元素則是匹配的群組 (capturing groups)；如果沒有匹配則回傳 null。

            ```javascript
            var re = /quick\s(brown).+?(jumps)/ig;
            var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
            console.log(result);    
            // ["Quick Brown Fox Jumps", "Brown", "Jumps"]
            ```

        - `test()`: 用來測試字串中是否有符合正規表示式的字串，回傳 boolean true/false。

            ```javascript
            var str = 'hello world!';
            var result = /^hello/.test(str);
            console.log(result);    // true
            ```

    * String 物件內建的 RegExp 相關方法
        - `match()`: 用來搭配正規表示式 (Regex)來找出字串中匹配的內容。回傳一個陣列，第一個元素是完整匹配內容，第二個元素之後是匹配的群組 (capturing group)；如果沒有匹配則回傳 null。

            ```javascript
            var str = 'For more information, see Chapter 3.4.5.1';
            var re = /see (chapter \d+(\.\d)*)/i;
            var found = str.match(re);
            console.log(found);
            // ["see Chapter 3.4.5.1", "Chapter 3.4.5.1", ".1"]
            ```

        - `replace()`: 將字串中的字取代為另一個字。取代後會返回一個新的字串。
        
            ```javascript
            var re = /apples/gi;
            var str = 'Apples are round, and apples are juicy.';
            var newstr = str.replace(re, 'oranges');
            console.log(newstr);
            //'oranges are round, and oranges are juicy.'
            ```

        - `search()`: 用來找出一個字串在另一個字串中的位置。返回一個數字表示第一個找到的位置。第一個位置從 0 開始算起，找不到則返回 -1。

            ```javascript
            var str = 'Apples are red, and apples are good.';
            console.log(str.search(/apple/i));  // 0
            ```

    * 正規表達式: 
        * 又稱正規表示式、正規表達式、正則式；英文：Regular Expression，簡稱 Rege 或 RegExp。
        * 是一套特殊的符號表示法，用來判斷字串字元組合是否符合規則。
        * 目的是方便搜尋字串、取代字串、刪除字串或測試字串是否符合樣式規則。

    關於正規表達式如何撰寫，可以參考MDN 正規表達式(https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)。


- `join()`: 會將陣列中所有的元素連接、合併成一個字串，並回傳此字串。
    ```javascript
    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join());
    // expected output: "Fire,Air,Water"
    ```
