// Generate the number: 2
//       No. of stars(*) in each side - 4  
//     * * * *     
//           *
//           *
//     * * * *  
//     *
//     *  
//     * * * *

let num=4,star="";
for(let i =1;i<=num;i++){
    for(let j=1;j<=num;j++){
         if(i==1 ||j==num || i==num){
            star += "* ";
         }else{
            star += "  ";
         }   
    }
    star += "\n";
}
for(let i =1;i<=num;i++){
    for(let j=1;j<=num;j++){
         if(j==1 || i==num){
            star += "* ";
         }else{
            star += "  ";
         }   
    }
    star += "\n";
}
console.log(star)
