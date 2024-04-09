//Приклад опрацювання асинхронних операцій за допомогою
//callback функцій
function loadScript(src){
    let scriptTag = document.createElement('script');
    scriptTag.src = src;
    document.body.append(scriptTag);
    alert("This alert has worked first");
}

loadScript("../js/loadScript.js");