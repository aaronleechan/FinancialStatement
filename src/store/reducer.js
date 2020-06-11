import * as actions from './actions';
import axios from 'axios'

export const reducer = async (state, action) => {
    switch (action.type) {
      case actions.GET_COMPANY_CODE:
        return {...state, ...await CompanyCode()}
      default:
        return state
    }
}

export const CompanyCode = async () =>{
    console.log("This is Company Code")
//   let products
//   try{
//     products = await axios.get(`${actions.API}product`);
//   }catch(e){
//     console.log(e)
//   }
//   return products
}