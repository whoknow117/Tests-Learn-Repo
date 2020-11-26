import {addFriends,sum, mult, copyStudent, StudentType, fullCopy, deepCopyStudentGroup, StudentsGroupType} from "./02";



let a: number;
let b: number;
let c: number;
let student: StudentType;
let studentGroup: StudentsGroupType

beforeEach(() => {
    a = 3;
    b = 3;
    c = 5;
    student = {
        name:"alex",
        age: 23,
        isMarried: false,
        scores: 90,
        friends: [ ]
    }
    studentGroup = [
        {name: 'alex', age: 23,isMarried: false,scores: 90,friends: []},
        {name: 'dima', age: 23,isMarried: false,scores: 90,friends: []},
        {name: 'mindy', age: 23,isMarried: false,scores: 90,friends: []},
    ]
})

test("addFriends should be correct", () => {
    const addFriendz = addFriends(studentGroup)


})

test('deepCopyStudentGroup should be correct', () => {

    let newGroup = deepCopyStudentGroup(studentGroup);
    expect(newGroup[0] === studentGroup[0]).toBe(false)
    expect(newGroup[0].name === studentGroup[0].name).toBe(true)




})
test('fullCopy should be correct', () => {

    let newStudent = fullCopy(student);
    expect(newStudent.name === student.name).toBe(true)
    expect(newStudent === student).toBe(false)
    expect(newStudent.friends === student.friends   ).toBe(false)
    expect(newStudent.friends[0] === student.friends[0]).toBe(true)


})
test('copyStudent should be correct', () => {

    let newStudent = copyStudent(student);
    expect(newStudent.name === student.name).toBe(true)
    expect(newStudent === student).toBe(false)
    expect(newStudent.friends === student.friends).toBe(true)



})
test("sum should be correct", () => {


    const result1 = sum(a,b)
    const result2 = sum(b,c)

    expect(result1).toBe(6)
    expect(result2).toBe(8)
})
test("mult should be correct", () => {


    const result1 =  mult(a,b)
    const result2 =  mult(b,c)

    expect(result1).toBe(9)
    expect(result2).toBe(15)
})