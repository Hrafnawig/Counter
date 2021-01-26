"use strict";
/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4) 
const n=prompt('Input n');
function sumN(n){
    let res=0;
for(let i=1;i<=n;i++){
   res= res+i;
}
return res;
}
console.log(sumN(n));
console.log(sumN(4));
console.log(sumN(10));
2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте
class Student {
  constructor(name, surname, isMale, contacts,univer) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
    this.univer= univer;
  }
}
class University {
  constructor(facility, cathedra) {
 this.facility=facility;
 this.cathedra=cathedra;
  }
}
const contacts={
    email:'Cockroach@gmail.com',
    phone:'+454563654',
}
const un=new University("Scrapyard","Operations");
const stud=new Student("John","Cockroach", true,contacts,un);
function infoTable(s){
    return s;
}
console.table(infoTable(stud));
3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов*/

function getRandomInt() {
  const min = -1;
  const max = 20;
  return Math.floor(Math.random() * (max - min)) + min;
}
function nums(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = getRandomInt();
  }
  return res;
}
const arr1 = nums(25);
function evenIndex(arr) {
  return arr.filter((_, i) => {
    return i % 2 === 0;
  });
}
function evenElem(arr) {
  return arr.filter((elem, i) => {
    return elem % 2 === 0;
  });
}
function nullElem(arr) {
 const execute= arr.map((elem, i) => {
    return elem === 0 ? arr.push(i) : false;
  });
return execute.filter((elem,i)=>{return elem!=false;})
}
function countNullElem(arr) {
  return arr.forEach(function (elem) {
    let k = 0;
    if (elem === 0) {
      return k++;
    }
  });
}
arr1.push(0);
console.log(nullElem(arr1));
/*4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class Book{
    constructor(author,name,year,publishing){
        this.author = author;
        this.name = name;
        this.year = year;
        this.publishing = publishing;
    }
}
class EBook extends Book{
    constructor(author,name,year,publishing,format,enumber){
        super(author,name,year,publishing);
        this.format = format;
        this.enumber = enumber;
    }
}*/
