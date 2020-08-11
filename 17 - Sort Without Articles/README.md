# 17 - Sort Without Articles

- 本章練習使用javascript在`<ul>`中加入`<li>`。首先對字串進行排序，排序時排除"The," "An,", "A"這些冠詞後再進行排序，並把排序後的結果作為項目清單插入`<ol>`中。

![](https://github.com/hoovivaf2e/javascript30/blob/master/17%20-%20Sort%20Without%20Articles/17_sortwithoutarticles.png)

## 步驟

### Step 1: 
使用replace搭配正則式將包含了a, the, an開頭的文字替換為空白。

```javascript
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
```

* `str.replace(regexp|substr, newSubStr|function)`: `replace()`回傳已被替換的新字串。模式可以是一個字串或者一個正則式, 替換值可以是一個字串或者一個函式。

* `/^(a |the |an )/i`: `^`代表以什麼開頭，`^(a |an |the )`代表以`a`，或者`an`，或者`the`開頭，`i`代表不區分大小寫。

* `trim()`: 去除字串中的空格。

### Step 2: 
對目標陣列進行篩選與排序。

```javascript
//原本的寫法
const sortedBands = bands.sort(function(a, b){
    if(strip(a) > strip(b)) {
        return 1;
    }else {
        return -1;
    }
})
//利用箭頭函數與三元運算式的簡寫：
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);
```

### Step 3:
把排序完陣列渲染到HTML中。使用`join('')`修改連結符號為空白, 否則原先陣列的分隔符號是,也會一併渲染在html中。

```javascript
document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
```
