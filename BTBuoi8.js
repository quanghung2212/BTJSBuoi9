//5 Viết chương trình tính tổng tù 1 -> n
function total(n){
    let sum = 0;
    for(let i = 1; i<=n; i++)
    {
        sum = sum + i;
    }
    return `Tong la: ${sum}`;
}
console.log(total(5));
//6 Viết chương trình tính tổng bình phương từ 1->n
function totalSquare(n){
    let sum = 0;
    for(let i = 1; i<=n; i++)
    {
        sum = sum + i*i;
    }
    return `Tong binh phuong: ${sum}`;
}
console.log(totalSquare(5));

// //7 Tính tổng số lẻ từ 1 -> n
function totalOddNumber(n){
    let sum = 0;
    for(let i =1; i<=n; i=i+2)
    {
        sum = sum + i;
    }
    return `Tong cac so le: ${sum}`;
}
console.log(totalOddNumber(5));
//8 Kiểm tra n có toàn số lẻ tạo thành kg
function oddNumberForm(n){
    while(n)
    {
        if( (n%10) % 2 == 0) return false;
        break;
        n = n /10;
    }
    return true;
}
console.log(oddNumberForm(54));
//9 Kiểm tra số đối xứng
function symmetricalNumber(n){
    function reverseNum(n){
        n = n.toString();
        return n.split("").reverse().join("");
    }
    if(reverseNum(n) == n) return true;
    return false;
}
console.log(symmetricalNumber(121));