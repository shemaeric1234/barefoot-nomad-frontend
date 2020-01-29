import homeReducer from '../../src/reducers/homeReducer';
import {GREETING,GOOD_BYE} from '../../src/actions/homeActions';
describe('home reducer test ', () => {
    it('should return greeting', () => {

         const action = { type: GREETING };
         const initialState = {  
              greet: 'welcome',
             };
         expect(homeReducer({} , action)).toEqual(initialState);
    })
    it('should return goodbye', () => {

        const action = { type: GOOD_BYE };
        const initialState = {  
             greet: 'Good Bye',
            };
        expect(homeReducer({} , action)).toEqual(initialState);
   })
   it('should return initial sate', () => {

    const action = { type: 'john' };
    const initialState = {};
    expect(homeReducer({} , action)).toEqual(initialState);
})
})