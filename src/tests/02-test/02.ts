export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
    friends: Array<string>
}




let studentGroup = [
    {name: 'alex', age: 23,isMarried: false,scores: 90,friends: []},
    {name: 'dima', age: 23,isMarried: false,scores: 90,friends: []},
    {name: 'mindy', age: 23,isMarried: false,scores: 90,friends: []},
]


export function addFriends (array:StudentsGroupType) {
    let newArr = array.map( st =>  ({...st, friends: array.filter( s => s.name !== st.name).map( n => n.name)}))
    return newArr
}

console.log(addFriends(studentGroup))


export type StudentsGroupType = Array<StudentType>

export function deepCopyStudentGroup(studentGroup: StudentsGroupType):StudentsGroupType {
    const deepCopyGroup = studentGroup.map(st => ({...st,friends: [...st.friends]}))
    return deepCopyGroup;
}

export function fullCopy(student:StudentType): StudentType {
    return {...student,friends:[...student.friends]}
}


export function copyStudent(student: StudentType) {
    return {...student}
}


export function sum(a: number, b: number) {
    return a + b;
}


export function mult(a: number, b: number) {
    return a * b;
}