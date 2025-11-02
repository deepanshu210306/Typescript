// const user={
//     name:"deep",
//     email:"abs@gmail.com",
//     isactive:false
// }

// function createUser({ name, ispaid }: { name: string; ispaid: boolean }){}
// createUser({name:"deep",ispaid:false})


type user={
    name:string,
    email:string,
    isactive:boolean
}
function createuser(User:user):user{
    return {
        name:"",email:"",isactive:true
    }
}

createuser({name:"",email:"",isactive:true})




// clubbing different types
type CardNumber={
    cardnumber:string
}
type CardDate={
    carddate:string
}
type CardDetails=CardNumber&CardDate&{
    Cvv:number
}
export{}