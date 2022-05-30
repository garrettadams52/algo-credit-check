exports.creditCheck = function(str){
    const arr = str.split('')
    let j = 0;
    let sum = 0
    for(let i = arr.length -1; i>=0; i--){
        if(j%2 === 1)
            arr[i]*=2
        j++

        if(arr[i]>=10)
            arr[i]=(arr[i]%10)+((arr[i]-(arr[i]%10))/10)

        sum+=parseInt(arr[i],10)
    }

    if(sum%10===0)
        return("The number is valid!")

    return("The number is invalid!")
}

//console.log(creditCheck('5541808923795240'))


