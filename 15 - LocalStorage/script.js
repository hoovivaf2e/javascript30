const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault(); // stop the page form reloading. <form> is reload the page and send the data to external source, generally is your server side.
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text, // = text: text
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('item', JSON.stringify(items));
  this.reset(); //insist it run second. this = <form> element. <form> has an attribute - reset() 
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        <span class='delbtn' data-index=${i}>delete<span> 
      </li>
    `;
  }).join('');
}


function toggleDone(e) {
  // 初始化一個存檔狀態
  let save = false;
  // 取得觸發元素的data-index值
  const el = e.target;
  const index = el.dataset.index;
  // 判斷觸發元素，如果是input則為checkbox的狀態切換
  if(e.target.matches('input')){
    items[index].done = !items[index].done;
    save = true;
  }
  // 如果是span則是透過splice刪除該物件
  if(e.target.matches('span')){
    items.splice(index, 1);
    save = true;
  }
  // 判斷上方有做事才存擋
  if(save){
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);  
  }
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
