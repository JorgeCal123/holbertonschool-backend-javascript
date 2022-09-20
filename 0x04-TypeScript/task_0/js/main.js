;
var student1 = {
    firstName: 'fn',
    lastName: 'ln',
    age: 12,
    location: 'lc'
};
var student2 = {
    firstName: 'fn',
    lastName: 'ln',
    age: 12,
    location: 'lc'
};
var studentsList = [student1, student2];
var html = '';
html += "\n<div class=\"item\">\n" + studentsList[0] + "\n</div>\n";
$('#pru').innerHTML = html;
$('#pru').innerHTML = html;

function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
//const table = () => {
//    for (let student in Object.entries(studentsList)) {
//        console.log(student[0] + student[1]);
//    }
//
//}
//table;
