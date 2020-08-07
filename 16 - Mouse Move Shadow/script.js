const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px how far should the shadow go

function shadowMove(e) {
  // const width  = hero.offsetWidth
  // const height  = hero.offsetHeight
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  console.log('1  '+width, height);
  console.log('2  '+x, y);
  // this: is the thing that you listen on = hero
  // e.target: is the thing that you trigger on
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
    console.log('3 e.target.offsetLeft  '+e.target.offsetLeft);
    console.log('3 e.target.offsetTop  '+e.target.offsetTop);
    console.log('3  '+x, y);
  }
  // Math.round => 四捨五入
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  /*text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `; */
  text.style.textShadow = `${yWalk * -1}px ${xWalk}px 0 rgba(0,0,0,0.3)`;

}

hero.addEventListener('mousemove', shadowMove);