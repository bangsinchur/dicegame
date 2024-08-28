
import Dice from './Dice';


function Board({ name, color, num, sum, gameHistory }) {
    return (
      <div>
        <h1>{name}</h1>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(', ')}</p>
      
  {/* joina메소드는 아규먼트로 전달한 이값을 
      배열의 각 요소들 사이사이에 넣어서 결과적으로는 
      하나의 문자열로 만들어주는 메소드 */}
      </div>
   
  );
}

export default Board;
