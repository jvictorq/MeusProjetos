var actionSelect="";
var valueActual="";
var valuePast="";

function buttonDigiteClick(event) {
    var digite = event.target.value;
    updateScreen(`${valueActual}${digite}`)
   
}
valuePast=valueActual;

function buttonActionClick(event) {
    var action = event.target.value
    runAction(action)

}

function updateScreen(value){
    var screen=document.getElementById('screen'); 
    valueActual=value;
    screen.innerHTML=valueActual;


}

function runAction(action){
    if(action==="="){
        var result;
        if(actionSelect==='+'){

            result=parseInt(valuePast) + parseInt(valueActual)
            updateScreen(result)
        }
        if(actionSelect==='-'){

            result=parseInt(valuePast) - parseInt(valueActual)
            updateScreen(result)
        }
        if(actionSelect==='*'){

            result=parseInt(valuePast) * parseInt(valueActual)
            updateScreen(result)
        }
        if(actionSelect==='/'){

            result=parseInt(valuePast) / parseInt(valueActual)
            updateScreen(result)
        }
        

    }else{
        if(action==='l'){
            actionSelect="";
            valueActual="";
            valuePast="";
        }
        valuePast=valueActual
        updateScreen("")
        actionSelect=action
    }
}

