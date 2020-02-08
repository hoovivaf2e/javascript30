# 01 - JavaScript Drum Kit

鍵盤爵士鼓

- 功能
  - 按下鍵盤，出現相對應的聲音
  - 按下鍵盤，畫面上的字母方塊會微放大，且有黃色陰影的效果

## 使用到的語法

### ES6
- const: constants are block-scoped. The value of a constant can't be changed through reassignment, and it can't be redeclared.

- arrow function

- `${expression}`: Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

### Others 

- propertyName: The propertyName property returns the name of the CSS property associated with the transition, when a transitionevent occurs.

* Get the property name associated with the transition:
```javascript
document.getElementById("myDIV").addEventListener("transitionend", myFunction);
function myFunction(event) {
  this.innerHTML = "Property name is: " + event.propertyName;
}
```

- classList: The classList property returns the class name(s) of an element, as a DOMTokenList object. This property has these methods: add, remove, toggle, contains and item.

Add the "mystyle" class to a element:
```javascript
document.getElementById("myDIV").classList.add("mystyle");
```

Get the class name(s) of a element:
```javascript
<div id="myDIV" class="mystyle anotherClass thirdClass">I am a DIV element</div>
var x = document.getElementById("myDIV").classList;
```

Find out how many class names a element has:
```javascript
var x = document.getElementById("myDIV").classList.length;
```

- currentTime: The currentTime property sets or returns the current position (in seconds) of the audio playback. When setting this property, the playback will jump to the specified position.

```javascript
document.getElementById("myAudio").currentTime = 1;
```

- forEach: The forEach() method executes a provided function once for each array element.

```javascript
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
```