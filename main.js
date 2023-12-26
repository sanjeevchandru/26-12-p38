document.write("48. returns false if every number is not prime. Otherwise, return true."+"<br>");
    function test48(arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i]>2 && arr[i]%2==0){
                return false;
            }
        }
        return true;
    }
    document.write("In the said array check every numbers are prime or not! "+test48([2, 3, 5, 7])+"<br>");