# 14 - JavaScript References VS Copying

- 本章主要介紹JavaScript中陣列與物件的引用(refrence)及複製(Copying)，打開 HTML 後在 Console 面板中查看輸出結果。

## 使用到的語法 Javascript

- strings, numbers 和 boolean型別，當變數1值改變時，並不會影響到變數2。因為傳的是value。物件傳的是 reference。

基本型別又分成 string、number、boolean、null、undefined 這幾種，除了以上幾種之外，其他都可以歸類至物件型別 (Object)。

基本型別 => 傳值(value)
物件型別 => 傳址(reference)

```javascript

let age1 = 100;
let age2 = age1;
console.log(age1, age2);     // 100  100

age1 = 200;
console.log(age1, age2);     // 200  100

let name1 = 'Wes';
let name2 = name1;
console.log(name1, name2);   // Wes  Wes

name1 = 'wesley';
console.log(name1, name2);   // wesley  Wes


// 複製一份 players 叫做 team ，然後把 team[3] 改成 Lux，players 也會跟著改。
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
team[3] = 'Lux';
console.log(players, team);
// ["Wes", "Sarah", "Ryan", "Lux"]        ["Wes", "Sarah", "Ryan", "Lux"]
```


### Shallow Copy 淺拷貝
在複製物件時，會參考到同一個物件，並沒有將此物件拷貝並建立出新的關聯。
以下方法都是屬於淺拷貝：

#### Array

```javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
team[3] = 'Lux';
console.log(players, team);
// ["Wes", "Sarah", "Ryan", "Lux"]        ["Wes", "Sarah", "Ryan", "Lux"]
```

#### Object

```javascript
const person = {
  name: 'Wes Bos',
  age: 80
}

const captain = person;
captain.number = 99;
console.log(person, captain) 
// {name: "Wes Bos", age: 80, number: 99}  {name: "Wes Bos", age: 80, number: 99}

```


### Deep Copy 深拷貝
在複製物件時，會獨立出來，不共用同一個記憶體位置。改動新拷貝出來的物件時，不會動到原本的物件。
以下方法都是屬於深拷貝：

#### Array

- `Array.prototype.slice()`: `slice` 得到的是一個對原陣列的淺拷貝，原陣列不會被修改。所以如果修改這兩個陣列中任意一個，另一個都不會受到影響。

```javascript
const team2 = players.slice();
team2[3] = 'Lux2';
console.log(players, team2); 
// ["Wes", "Sarah", "Ryan", "Poppy"]        ["Wes", "Sarah", "Ryan", "Lux2"]
```

- `Array.prototype.concat()`: `concat()` 方法是用來合併陣列的，它也不會更改原有的陣列，而是回傳一個新的陣列。

```javascript
const team3 = [].concat(players);
team3[3] = 'Lux';
console.log(players, team3);
// ["Wes", "Sarah", "Ryan", "Poppy"]        ["Wes", "Sarah", "Ryan", "Lux"]
```

- `...`: ES6 擴展運算符。效果與`concat()`方法類似。

```javascript
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(players, team4);
// ["Wes", "Sarah", "Ryan", "Poppy"]        ["Wes", "Sarah", "Ryan", "heeee hawww"]
```
- `Array.from()`: 建立新的陣列。

```javascript
const team5 = Array.from(players);
team5[3] = 'Lux5';
console.log(players, team5);
// ["Wes", "Sarah", "Ryan", "Poppy"]        ["Wes", "Sarah", "Ryan", "Lux5"]
```

#### Object

- `Object.assign()`: ES6 函式，可以複製物件，但是只能處理深度只有一層的物件。

```javascript
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person ,cap2);
// {name: 'Wes Bos', age: 80}   {"name":"Wes Bos","age":12,"number":99}
```

- `JSON.parse(JSONString)` + `JSON.stringify(obj)`: 利用 JSON.stringify() 把整個物件變成字串，再藉由 JSON.parse() 帶入變數，此方法可以【完全複製整個原型鏈】達到 深拷貝(Deep Copy)的效果。

```javascript
const dev2 = JSON.parse(JSON.stringify(wes));
dev2.name = "wesley";
console.log(wes, dev2);
//wes: {"name":"Wes","age":100,"social":{"twitter":"@wesbos","facebook":"wesbos.developer"}}
//dev2: {"name":"wesley","age":100,"social":{"twitter":"@wesbos","facebook":"wesbos.developer"}}
```