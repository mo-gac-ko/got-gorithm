function solution(skill, skill_trees) {
  var answer = 0;

  let splitSkillArr = skill.split("");

  skill_trees.map((item2) => {
    let tmpIndexArr = [];
    splitSkillArr.map((item) => {
      //CBD면 BACDE일때 2,0,3 순으로 푸시함
      tmpIndexArr.push(item2.indexOf(item));
    });

    console.log(tmpIndexArr);

    //-1은 아예 해당 문자가 포함이 안된경우인데
    //-1이 한번 나오면 그뒤는 0이상의 숫자가 나오면 안됨
    let TF = false;
    let tmpTF = "";
    tmpIndexArr.map((item, i) => {
      if (item === -1) {
        TF = true;
      }
      if (TF) {
        if (item !== -1) {
          tmpTF = "불가능";
        }
      }
    });

    console.log(tmpTF);

    //-1을 다뺀다음에 남은 배열에서
    //순서대로 점점 숫자가 커져야지만 답에 해당됨
    let tmp = 0;
    let status = true;
    tmpIndexArr
      .filter((item1) => item1 !== -1)
      .reduce((acc, cur, i) => {
        if (acc > cur) {
          status = false;
        }
        // console.log(status);
        if (
          i === tmpIndexArr.filter((item1) => item1 !== -1).length - 1 &&
          status === true &&
          tmpTF !== "불가능"
        ) {
          console.log("추가했다");

          answer++;
        }
        return cur;
      }, 0);

    //아예 -1밖에 없을때 또는 포함된 문자가 없을때
    if (tmpIndexArr.filter((item1) => item1 !== -1).length === 0) {
      console.log("추가했다");
      answer++;
    }
  });

  return answer;
}
