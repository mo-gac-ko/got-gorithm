//  가운데 글자 가져오기 

function solution(s) {
  let answer = '';
  if(s.length % 2 ===0){
      answer=s.substr(s.length/2-1,2);
  }else{
      answer=s.substr(Math.floor(s.length/2),1);
  }
  return answer;
}