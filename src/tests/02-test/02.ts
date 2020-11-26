export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
    friends: Array<string>
}

export function addFriends(gr: StudentsGroupType) {

    return gr.map(st => ({...st, friends: gr.filter( s => s.name !== st.name).map( n => n.name)}))
}



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