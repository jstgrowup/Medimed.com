

const initState ={
    price:0,total:0,discount:0
}
export const PaymentState=(state=initState,{type,payload})=>{
 
    switch(type)
    {
case "payment":return {payload}  
default : return state


    }

  
}