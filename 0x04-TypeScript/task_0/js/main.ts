interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {firstName: 'john', lastName: 'Doe', age: 34, location: 'N/A'};
const student2: Student = {firstName: 'john2', lastName: 'Doe2', age: 35, location: 'N/A'};

const studentsList: Student[] = [ student1, student2 ];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const tHeadRow: HTMLTableRowElement = document.createElement('tr');
const tFirstName: HTMLTableCellElement = document.createElement('th');
tFirstName.innerHTML = 'First name';
const tLocation: HTMLTableCellElement = document.createElement('th');
tLocation.innerHTML = 'Location';

tHeadRow.appendChild(tFirstName);
tHeadRow.appendChild(tLocation);
thead.appendChild(tHeadRow);

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const firstName: HTMLTableCellElement = row.insertCell();
    const location: HTMLTableCellElement = row.insertCell();
    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
});

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);