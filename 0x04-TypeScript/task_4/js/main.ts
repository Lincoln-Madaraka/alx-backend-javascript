/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />
// @ts-ignore


namespace Subjects {
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();
    export const cTeacher: Teacher = { 
        firstName: 'John',
        lastName: 'Doe',
        experienceTeachingC: 10
    };
    console.log('C++');
    cpp.setTeacher(cTeacher);
    console.log(`${cpp.getRequirements()}\n${cpp.getAvailableTeacher()}`);

    console.log('Java');
    java.setTeacher(cTeacher);
    console.log(`${java.getRequirements()}\n${java.getAvailableTeacher()}`);

    console.log('React');
    react.setTeacher(cTeacher);
    console.log(`${react.getRequirements()}\n${react.getAvailableTeacher()}`);

}