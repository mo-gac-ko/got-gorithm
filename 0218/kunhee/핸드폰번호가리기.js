function solution(phone_number) {
    var answer = '';
    
    let arr = phone_number.split("");
    
    for(let i=arr.length; i>=0; i--) {
        if(i< arr.length-4) {
            arr[i] = "*";
        }
    }
    
    answer = ''.concat(...arr);
    
    return answer;
}