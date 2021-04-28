// import {
   
    
//     UPDATE_NOTE,
   
//     FILTER_NOTES
    
    
//   } from '../types';
  
// export default (state, action) => {
//     switch (action.type) {
      
      
//         case UPDATE_NOTE:
//             return {
//               ...state,
//               notes: state.notes.map((note) =>
//                 note._id === action.payload._id ? action.payload : note
//               ),
//               loading: false,
//             };
  
//       default:
//         return state;
//     }
//   }