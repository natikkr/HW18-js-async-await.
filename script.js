function delay(data,ms) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(data);
        },ms);
    })
}
delay({name: "user"}, 1000).then((data) => console.log("Hello!", data))

async function getResult(){
    let userInfo = getUserInfo();
    let result1 = await getUserInfo();
    let result2 = await getUserAvatar(result1);
    let result3 = await getUserAdditionalInfo(result2);
    console.log(result1, result2, result3, userInfo)
}
async function getUserInfo() {
    return await delay({name:'Vic', age:21, id:1},1000)
    
}
console.log (getUserInfo())

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return await delay(userInfo,1000)
}
async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return await delay(userInfo,1000)
}

getResult();

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    try {
    let user = await getUser();
    console.log(user)
    throw new Error('error')
    }
    catch{
        console.log('error')
    }
    // throw new Error('error');
}
 
getInfo();

  


// function getUserInfo(){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>resolve({name:'Vic', age:21, id:1}),1000);
//     })
// .then(
//     function getUserAvatar(userInfo) {
//         return new Promise(function(resolve,reject){
//             userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
//             setTimeout(() => resolve(userInfo), 1000);
//         });
//     })
// .then(
//     function getUserAdditionalInfo(userInfo) {
//         return new Promise(function(resolve, reject) {
//             userInfo.interests = ['sport', 'books'];
//             setTimeout(() => resolve(userInfo), 1000);
//         });
//     })      
// }
// console.log(getUserInfo().then().then().then())  



// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
//     })
// .then( 
//     function(userInfo) {
//         return new Promise(function(resolve, reject) {
//             setTimeout(() => reject(new Error('wrong data') ), 1000);
//     })
// .catch(
//     function(error) {
//         console.log(error)
//     })
// })
