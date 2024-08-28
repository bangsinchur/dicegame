import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

const DICE_IMAGES = {
    blue:[diceBlue01,diceBlue02,diceBlue03,diceBlue04,diceBlue05,diceBlue06],
    red:[diceRed01,diceRed02,diceRed03,diceRed04,diceRed05,diceRed06],
};

// function Dice({color = "blue",num = 1} /*props*/){
//     // const diceImg = props.color === 'red' ? diceRed01 : diceBlue01;
//     // return <img src={diceBlue01} alt='주사위'/>; 밑의 내용으로 바뀜
// const src = DICE_IMAGES[color][num - 1];
// /* 여기 값을 간단하게 표현 [props.color][props.num - 1]<-인덱스 값인가?아, 배열*/ 
// const alt = `${color} ${num}`;
// /*`${props.color} ${props.num}`;*/
// return <img src={src} alt={alt} />; 
// }//src={'./assets/dice-blue-1.svg'} 링크를 걸면 작동안함. 변수 자체를 걸어야함.


// export default Dice;

function Dice({ color = 'blue', num = 1 }) {
    const src = DICE_IMAGES[color][num - 1];
    const alt = `${color} ${num}`;
    return <img src={src} alt={alt} />;
  }
  
  export default Dice;
  