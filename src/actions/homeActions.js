export const GREETING = 'GREETING';
export const GOOD_BYE = 'GOOD BYE';

export function greeting (){
    return{
        type: GREETING
    }
}
export function goodBye (){
    return{
        type: GOOD_BYE
    }
}