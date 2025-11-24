const Calculator={
    Display_Value:'0',
    First_Operand:null,
    Wait_Second_operand:false,
    operator:null,

};

function Input_Digit(digit){
    const {Display_Value,Wait_Second_operand}=Calculator;
    if(Wait_Second_operand===true){
        Calculator.Display_Value=digit;
        Calculator.Wait_Second_operand=false;
    }
    else{
        Calculator.Display_Value = Display_Value==='0' ? digit : Display_Value + digit;

    }
}


function Input_Decimal(dot){
    if(Calculator.Wait_Second_operand===true)return;
    if(!Calculator.Display_Value.includes(dot)){
        Calculator.Display_Value+=dot;
    }
}

    function Handle_Operator(Next_Operator){
        const{First_Opearand,Display_Value,operator}=Calculator;
        const Value_of_Input=parseFloat(Display_Value);


        if(operator && Calculator.Wait_Second_operand){
            Calculator.operator=Next_Operator;
            return;
        }
        if(First_Opearand==null){
            Calculator.First_Opearand=Value_of_Input;

        }else if(operator){
            const value_now=First_Opearand||0;

            let result=Perform_Calculation[operator](value_now,Value_of_Input);
            result=Number(result).toFixed(9);
            result=(result*1).toString();
            Calculator.Display_Value=result;
            Calculator.First_Opearand=result;
        }
        Calculator.Wait_Second_operand=true;
        Calculator.operator=Next_Operator;
    }

    const Perform_Calculation={
        '/': (First_Opearand,Second_operand)=>First_Opearand / Second_operand,
        '*': (First_Opearand,Second_operand)=>First_Opearand * Second_operand,
        '+': (First_Opearand,Second_operand)=>First_Opearand + Second_operand,
        '-': (First_Opearand,Second_operand)=>First_Opearand -Second_operand,
        '=': (First_Opearand,Second_operand)=>Second_operand  
    };
    

    function Calculator_reset(){
        Calculator.Display_Value='0';
        Calculator.First_Opearand=null;
        Calculator.Wait_Second_operand=false;
        Calculator.operator=null;

    }


    function Update_Display(){
        const display=document.querySelector('.calculator-screen');
        display.value=Calculator.Display_Value;

    }

    const keys=document.querySelector('.calculator-keys');
    keys.addEventListener('click',(event)=>{
        const {target}=event;
        if(!target.matches('button')){
            return;
        }
        if(target.classList.contains('operator')){
            Handle_Operator(target.value);
            Update_Display();
            return;

        }
        if(target.classList.contains('decimal')){
            Input_Decimal(target.value);
            Update_Display();
            return;
            
        }
        if(target.classList.contains('all-clear')){
            Calculator_reset();
            Update_Display();
            return;
            
        }
        Input_Digit(target.value);
        Update_Display();
    })