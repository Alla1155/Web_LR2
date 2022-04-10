//при выборе вклада будет отображаться selector его срока
function populate(s1,s2){
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTML="";
    if(s1.value=="Пополняемый"){
        var optionArray=["|","6 месяцев|6 месяцев-20%","12 месяцев|12 месяцев-22%", "18 месяцев|18 месяцев-15%", "24 месяца|24 месяца-10%"];
    } else if(s1.value=="Срочный"){
        var optionArray=["|","3 месяца|3 месяца-20%","6 месяцев|6 месяцев-22%", "9 месяцев|9 месяцев-23%", "12 месяцев|12 месяцев-24%", "18 месяцев|18 месяцев-18%", "24 месяца|24 месяца-15%"];
    }
    for (var option in optionArray){
        var pair=optionArray[option].split("|");
        var newOption=document.createElement("option");
        newOption.value=pair[0];
        newOption.innerHTML=pair[1];
        s2.options.add(newOption);
    }
}

 //привяжем событие на кнопку
document.querySelector('.btn').addEventListener('click',()=>{ 
    let dataType=document.querySelector('.slct1').value; //получаем данные о виде вклада
    let dataTerm=document.querySelector('.slct2').value; //получаем данные о сроке вклада
    let dataSum=document.querySelector('.text').value; //получаем данные о сумме
    let per=0, day=0;
    if(dataSum!="" && dataType!="Вид вклада" && dataTerm!="Срок вклада" && dataTerm!=""){ //если все заполнено
    document.querySelector('.result').innerHTML="Вклад «"+dataType+"» на срок «"+dataTerm+"» на сумму "+dataSum+" руб."+'<br>';
    if (dataType=="Пополняемый"){
        switch (dataTerm){
            case "6 месяцев": per=0.2; day=182; break;
            case "12 месяцев": per=0.22; day=365; break;
            case "18 месяцев": per=0.15; day=547; break;
            case "24 месяца": per=0.1; day=730; break;
        }
    }else {
        switch (dataTerm){
            case "3 месяца": per=0.2; day=91; break;
            case "6 месяцев": per=0.22; day=182; break;
            case "9 месяцев": per=0.23; day=273; break;
            case "12 месяцев": per=0.24; day=365; break;
            case "18 месяцев": per=0.18; day=547; break;
            case "24 месяца": per=0.15; day=730; break;
        }
    }
    document.querySelector('.result').innerHTML+='<br>'+"В конце срока вы получите " +Math.round(dataSum*Math.pow(1+per/365, day))+" руб.";
    } else alert("Ошибка! Поля не все заполнены."); //сообщение об ошибке
})