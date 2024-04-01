//  let book ={
//     id:1,
//     name:'ali and nino',
//     page:127
//  };
//  console.log(book);


// let book =[
//     {
//         id:1,
//         name:'Şərq eksperisinde ölüm',
//         page:180
//     },
//     {
//         id:2,
//         name:'Eli ve Nino',
//         page:250
//     },
//     {
//         id:3,
//         name:'The secret',
//         page:400
//     },
//     {
//         id:4,
//         name:'Sefiller',
//         page:580
//     },
// ]
// console.log(book);



// let students =[
//     {
//         id:1,
//         ad:"Eliyar",
//         soyad:"Ehmedli",
//         hobby:"idman",
//         qiymet:80
//     },
//     {
//         id:2,
//         ad:"Xeyale",
//         soyad:"Mustafayeva",
//         hobby:"kitab oxumaq",
//         qiymet:100
//     },
//     {
//         id:3,
//         ad:"Arzu",
//         soyad:"Musayeva",
//         hobby:"mahni oxumaq",
//         qiymet:91
//     } ,
//     {
//         id:4,
//         ad:"Eli",
//         soyad:"eliyev",
//         hobby:"idman",
//         qiymet:60
//     }
// ];
// // console.log(students);
// console.log((students[0].qiymet + students[1].qiymet +students[2].qiymet+students[3].qiymet)/4);
// for ( let i = 0 ; i <= students.length; i++){
//       if( students[i].qiymet <= 90){
        // console.log(`${students[i].ad} ${students[i].soyad} ${students[i].qiymet} >>sizin qiymetiniz 90dan asagidir!`);
//       }
// }




let students = [
    {
        id:1,
        ad:"Eliyar",
        soyad:"Ehmedli",
        hobby:"idman",
        group_id:11
    },
    {
        id:2,
        ad:"Xeyale",
        soyad:"Mustafayeva",
        hobby:"kitab oxumaq",
        group_id:22
    },
    {
        id:3,
        ad:"Arzu",
        soyad:"Musayeva",
        hobby:"mahni oxumaq",
        group_id:33
    },
    {
        id:4,
        ad:"Eli",
        soyad:"eliyev",
        hobby:"idman",
        group_id:44
    }
]

let groups = [
    {
         id:11,
        qiymet:80
    },
    {
        id: 22,
        qiymet:60
    },
    {
        id:33,
       qiymet:100
   },
   {
       id: 44,
       qiymet:91
   }
]
console.log((groups[0].qiymet + groups[1].qiymet +groups[2].qiymet+groups[3].qiymet)/4);
// console.log(groups);
// const bal = groups.map((t) =>t.bal );
// let ortalama =0;
// bal .forEach(y => {ortalama +=y})
// console.log(`ortalama+ ${ortalama/ gropus.length}`);

// for ( let i = 0 ; i <= students.length; i++){
//       if( students[i].qiymet <= 90){
//         students.map((st) => {
//             let group = groups.find((t) => t.id === st.group_id);
//             console.log((`${st.ad} ${st.soyad}  -- ${group.qiymet}`))
//         });
//       }
// }
