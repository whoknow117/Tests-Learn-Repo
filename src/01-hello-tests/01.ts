
export function sum(a:number, b: number) {
    return a + b;
}


export function mult(a:number, b: number) {
    return a * b;
}








export function splitIntoWords(sentense: string) {
    return  sentense.toLowerCase().split(" ")
        .filter( word => word !== "")
        .map( w => w.replace("!", "")
            .replace(".", "")
            .replace(",", ""))
}


