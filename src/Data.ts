
interface FreeWorkItem {
    id: number,
    name : string,
    title : string
    img : string
    creator : string
}


const freeWorkData : FreeWorkItem[] = [
    {id : 1 ,
        name : "supliments",
        title:"سایت مکمل فروشی",
        img :"/Img/Supliments/1.PNG",
        creator : "توسعه داده شده توسط MobinRc"
    },
    {id : 2 ,
        name : "supliments",
        title:"سایت مشابه رستوران رازینه",
        img :"/Img/Restorants/1.PNG",
        creator : "توسعه داده شده توسط MobinRc"
    }
]

export { freeWorkData }