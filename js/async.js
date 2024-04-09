//Приклад завантаження даних з використанням async/await

const buttonDownload = document.getElementById("downLoadData");
const buttonClear = document.getElementById("clearData");

async function showData(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    debugger;
    let response = await fetch(url);
    let posts = null;
    if (response.status != 404){
        posts = await response.json();
    }
    else{
        alert("Дані за посиланням не знайдені. 404 Not Found");
        buttonDownload.addEventListener("click", loadData);
        return null;
    }
    let title = [];
    for (let i = 0; i < posts.length; i++){
        title.push(`<li>${posts[i]['title']}</li>`);
    } 

    let ul = document.createElement('ul');
        ul.innerHTML = title.join('\n');
        ul.id = "listTitle";
        document.body.append(ul);
    return posts; 
}

function loadData(){
    showData();
    buttonDownload.removeEventListener("click", loadData);
    buttonClear.addEventListener("click", dataClear);
}

function dataClear(){
    document.getElementById("listTitle").remove();
    buttonClear.removeEventListener("click",dataClear);
    buttonDownload.addEventListener("click", loadData);
}

buttonDownload.addEventListener("click", loadData);






