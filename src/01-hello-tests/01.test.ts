import {sum, mult, splitIntoWords} from "./01";

let a: number
let b: number
let c: number
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    // start data


    const result1 = sum(a, b)
    const result2 = sum(a, c)


    //expect result

    expect(result1).toBe(3);
    expect(result2).toBe(4);


})

test('multiply should be correct', () => {


    const result1 = mult(a, b)
    const result2 = mult(a, c)


    expect(result1).toBe(2);
    expect(result2).toBe(3);
})


test('splitIntoWords should be correct', () => {


    const sent1 = "Hello my friend!";
    const sent2 = "Tupo odihaem react izuchaem!";

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('tupo');
    expect(result2[1]).toBe('odihaem');
    expect(result2[2]).toBe('react');
    expect(result2[3]).toBe('izuchaem');


})