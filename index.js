
let runAll = document.getElementById('run');
let runAllVisible = document.getElementById('runTwoVisible');
let secondBlock = document.querySelector('.infoTwo');
secondBlock.style.visibility='hidden'
runAllVisible.addEventListener('click', ()=>{
    runAllTwo.style.visibility='visible'
    secondBlock.style.visibility='visible'
})
let runAllTwo= document.getElementById('runTwo');
runAll.addEventListener('click',run);
runAllTwo.addEventListener('click',runTwo);




function run() {
//загальна кількість 
let allLeads = document.getElementById('allLead').value;
//Взяли телефон, Не фейки
let secondLeads = document.getElementById('secondStage').value;
//Другий Дзвінок
let secondCalls = document.getElementById('secondCall').value;
//обробка заперечень
let objectionStage = document.getElementById('objections').value;
//в роздумах
let reflectionStage = document.getElementById('reflections').value;
//в роздумах про оплату 
let reflectionsToMoneyStage = document.getElementById('reflectionsToMoney').value;
//bought - купили
let boughtStage = document.getElementById('bought').value;

//allLeadResult - загальна кількість
let allLeadsResult = document.getElementById('allLeadResult');
// - Взяли телефон, Не фейки
let secondLeadsResult = document.getElementById('secondStageResult');
//secondCallResult - Другий Дзвінок
let secondCallsResult = document.getElementById('secondCallResult');
//objectionsResult - обробка заперечень
let objectionStageResult = document.getElementById('objectionsResult');
//reflectionsResult - в роздумах
let reflectionStageResult = document.getElementById('reflectionsResult');
//reflectionsToMoneyResult - в роздумах про оплату 
let reflectionsToMoneyStageResult = document.getElementById('reflectionsToMoneyResult');
//boughtResult - купили
let boughtStageResult = document.getElementById('boughtResult');



if (allLeads){
allLeadsResult.innerHTML = `100%`;
secondLeadsResult.innerHTML = `${Math.floor((secondLeads/allLeads)*100)}%`;
secondCallsResult.innerHTML = `${Math.floor((secondCalls/secondLeads)*100)}%`
objectionStageResult.innerHTML = `${Math.floor((objectionStage/secondCalls)*100)}%`
reflectionStageResult.innerHTML = `${Math.floor((reflectionStage/objectionStage)*100)}%`
objectionStageResult.innerHTML = `${Math.floor((reflectionsToMoneyStage/reflectionStage)*100)}%`
reflectionsToMoneyStageResult.innerHTML = `${Math.floor((reflectionsToMoneyStage/reflectionStage)*100)}%`
boughtStageResult.innerHTML = `${Math.floor((boughtStage/reflectionsToMoneyStage)*100)}%`
}


}


function runTwo() {
    //загальна кількість 
    let allLeadsTwo = document.getElementById('allLeadTwo').value;
    //Взяли телефон, Не фейки
    let secondLeadsTwo = document.getElementById('secondStageTwo').value;
    //Другий Дзвінок
    let secondCallsTwo = document.getElementById('secondCallTwo').value;
    //обробка заперечень
    let objectionStageTwo = document.getElementById('objectionsTwo').value;
    //в роздумах
    let reflectionStageTwo = document.getElementById('reflectionsTwo').value;
    //в роздумах про оплату 
    let reflectionsToMoneyStageTwo = document.getElementById('reflectionsToMoneyTwo').value;
    //bought - купили
    let boughtStageTwo = document.getElementById('boughtTwo').value;
    
    //allLeadResult - загальна кількість
    let allLeadsResultTwo = document.getElementById('allLeadResultTwo');
    // - Взяли телефон, Не фейки
    let secondLeadsResultTwo = document.getElementById('secondStageResultTwo');
    //secondCallResult - Другий Дзвінок
    let secondCallsResultTwo = document.getElementById('secondCallResultTwo');
    //objectionsResult - обробка заперечень
    let objectionStageResultTwo = document.getElementById('objectionsResultTwo');
    //reflectionsResult - в роздумах
    let reflectionStageResultTwo = document.getElementById('reflectionsResultTwo');
    //reflectionsToMoneyResult - в роздумах про оплату 
    let reflectionsToMoneyStageResultTwo = document.getElementById('reflectionsToMoneyResultTwo');
    //boughtResult - купили
    let boughtStageResultTwo = document.getElementById('boughtResultTwo');
    
    
    
    if (allLeadsTwo){
    allLeadsResultTwo.innerHTML = `100%`;
    secondLeadsResultTwo.innerHTML = `${Math.floor((secondLeadsTwo/allLeadsTwo)*100)}%`;
    secondCallsResultTwo.innerHTML = `${Math.floor((secondCallsTwo/secondLeadsTwo)*100)}%`
    objectionStageResultTwo.innerHTML = `${Math.floor((objectionStageTwo/secondCallsTwo)*100)}%`
    reflectionStageResultTwo.innerHTML = `${Math.floor((reflectionStageTwo/objectionStageTwo)*100)}%`
    reflectionsToMoneyStageResultTwo.innerHTML = `${Math.floor((reflectionsToMoneyStageTwo/reflectionStageTwo)*100)}%`
    boughtStageResultTwo.innerHTML = `${Math.floor((boughtStageTwo/reflectionsToMoneyStageTwo)*100)}%`
    }

    
    }
 

