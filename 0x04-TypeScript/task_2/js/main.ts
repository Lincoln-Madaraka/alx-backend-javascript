interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getToWork(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

    getCoffeeBreak(): string {
        return this.getToWork();
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
    if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    } else {
        return employee.workDirectorTasks();
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    return todayClass === 'Math'? 'Teaching Math' : 'Teaching History';
}

module.exports = {isDirector, executeWork, createEmployee};
