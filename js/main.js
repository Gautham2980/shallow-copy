let arr=[1,2];

let sum=(...arr)=>{

    let arr2=[...arr];
    arr2[1]=10;
    console.log(arr,arr2);
}
sum(arr);




