interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};
  
const student1: Student = {
  firstName: 'fn',
  lastName: 'ln',
  age: 12,
  location: 'lc',
};

const student2: Student = {
    firstName: 'fn',
    lastName: 'ln',
    age: 12,
    location: 'lc',
};


let studentsList: Student[] = [student1, student2];

let html = ''
let html = ''

html += `
<div class="item">
${studentsList[0].firstName}
"funciona"
</div>
`;

html2 += `
<div class="item">
${studentsList[0].firstName}
"funciona"
</div>
`;


$('#pru').innerHTML = html;

function $(selector: string): HTMLElement{
    return document.querySelector(selector) as HTMLElement;
}

function $$(selector: string): NodeListOf<HTMLElement>{
    return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
}

//const table = () => {
//    for (let student in Object.entries(studentsList)) {
//        console.log(student[0] + student[1]);
//    }
//
//}
//table;