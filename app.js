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



let students =[
    {
        id:1,
        ad:"Eliyar",
        soyad:"Ehmedli",
        hobby:"idman",
        qiymet:80
    },
    {
        id:2,
        ad:"Xeyale",
        soyad:"Mustafayeva",
        hobby:"kitab oxumaq",
        qiymet:100
    },
    {
        id:3,
        ad:"Arzu",
        soyad:"Musayeva",
        hobby:"mahni oxumaq",
        qiymet:91
    } ,
    {
        id:4,
        ad:"Eli",
        soyad:"eliyev",
        hobby:"idman",
        qiymet:60
    }
];
// console.log(students);

let cem=0;
students.map(student =>cem+= student.qiymet);
let average = cem/students.length;
console.log(average);


let st = [];
students
  .filter((student) => student.qiymet < 90)
  .map((a) => {
    st.push(`${a.ad} ${a.soyad}`);
  });