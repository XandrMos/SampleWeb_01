//Цей приклад є імітацією завантаження даних
//з сервера, але він дає змогу зрозуміти 
//можливості використання обʼєкту Promise
let h3_RD = document.createElement('h3');
h3_RD.innerText = "Запит на отримання даних ...";
document.body.append(h3_RD);

//Оголосимо обʼєкт Promise
const examplePromise = new Promise(function (resolve, reject){
    setTimeout(() => {
        let h3_PD = document.createElement('h3');
        h3_PD.style = "color:gray;";
        h3_PD.innerText = "Підготовка даних ...";
        document.body.append(h3_PD); 
        const serverData = {
            port: 5050,
            server: 'localhost',
            status: "working"
        }
        resolve(serverData);
    }, 2000);

});

//Створюємо ланцюжок Promise
examplePromise.then(function(data){
    let h3_PR = document.createElement('h3');
        h3_PR.style = "color:green;";
        h3_PR.innerText = "Перший Promise відпрацював коректно. Дані отримано.";
        document.body.append(h3_PR);
    
    let liElems = [];
    for (key in data){
        liElems.push(`<li>${key}: ${data[key]}</li>`);
    }

    let ulData = document.createElement('ul');
        ulData.innerHTML = liElems.join("\n");
        document.body.append(ulData);
//Оголосимо другий обʼєкт Promise і повертаємо його
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            let h3_M = document.createElement('h3');
                h3_M.style = "color:gray;";
                h3_M.innerText = "Дані модифікуються ...";
                document.body.append(h3_M);
//Модифікуємо дані
            data.modified = false;
            if (data.modified){
                //Дані модифіковано успішно
                resolve(data);
            } else{
                //Дані модифіковано з помилкою
                reject(data);
            }
            
        }, 3000);
    }); 
}).then(function(clientData){
    let h3_PR = document.createElement('h3');
        h3_PR.style = "color:green;";
        h3_PR.innerText = "Другий Promise відпрацював коректно. Дані модифіковано.";
        document.body.append(h3_PR);

    let liElems = [];
    for (key in clientData){
        liElems.push(`<li>${key}: ${clientData[key]}</li>`);
    }
    let ulModifyData = document.createElement('ul');
        ulModifyData.innerHTML = liElems.join("\n");
        document.body.append(ulModifyData);
}).catch(function(){
    let h3_PR = document.createElement('h3');
        h3_PR.style = "color:red;";
        h3_PR.innerText = "Другий Promise відпрацював з помилкою. Дані не модифіковано.";
        document.body.append(h3_PR);
});