# 04 - Array Cardio Day 1

- 本章主要是熟悉 Array 的幾個基本方法，包含`filter()`、`map()`、`sort()`、`reduce()`。請打開 HTML 後在 Console 面板中查看輸出結果。

### 使用到的語法 Javascript

- `filter()`: 從指定陣列中篩選出「符合條件」的元素，並回傳陣列。

	```javascript
	const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
	console.table(fifteen);
	```

- `map()`: 遍歷指定陣列中的每個元素，將每個元素分別處理，最後將所有值組成一個新的陣列後回傳。

	```javascript
	const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
	console.log('fullNames:  ' + fullNames);
	```

- `sort()`: sort 的參數可以接受函式 (此函式稱為比較函式 compareFunction)。如果沒有接受參數，陣列元素們就會被轉換為字串並以 Unicode 編碼位置進行比較來排序；如果參數是比較函式，陣列元素們將根據這個函式的回傳值來排序。

	```javascript
	const ordered = inventors.sort((a, b) => a.year > b.year ? 1: -1);
	console.table(ordered);
	```

- `reduce()`: 對陣列中的每一個元素，由左至右傳入指定的函數，最後返回一個累加的值。

	```javascript
	var arr = [1,2,3,4];
	arr.reduce(function(pre,cur){return pre + cur}); // return 10
	```

	```javascript
	const totalYears = inventors.reduce((total, inventor) => {
		return total + (inventor.passed - inventor.year);
	}, 0);
	console.log('totalYears:  ' + totalYears);
	```