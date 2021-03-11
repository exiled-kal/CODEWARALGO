function firstNotRepeatingCharacter(s) {
    
    var arr = s.split("");
    
    for(var i = 0; i < arr.length; i++){
        var chr = arr[i];
        if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            return arr[i]
        }
        
    }
    
    return "_"
}
