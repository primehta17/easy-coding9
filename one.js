//Valid parenthesis

let s= "{(([]))}";
function validParenthesis(s){
    let stack=[];
    if(s.length==0) console.log("no value")
    for(let i of s){
        if(i=="(") stack.push(')');
        else if(i=="{") stack.push('}');
        else if(i=="[") stack.push(']');
        
        else if(stack.pop() !== i) return false;
       
    }
    return stack.length==0;
}

console.log(validParenthesis(s))