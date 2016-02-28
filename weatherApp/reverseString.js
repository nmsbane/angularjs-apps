function pattern(n){
 var output="";
   // Happy Coding ^_^
    if(n < 1){
        output = output + '';
    }
    if(n == 1){
        output += 1;
    }
    else{
        for(var i = 1; i <= n; i++){
            for(var j = n; j >=i; j--){
                output += j;
            }
            output += '/n';
        }
    }
 return output;
}