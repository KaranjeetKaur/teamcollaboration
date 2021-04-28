// import React, { useReducer } from 'react';
// import axios from 'axios';
// import noteContext from './noteContext';
// import noteReducer from './noteReducer';
// import {
 
//   SET_CURRENT,
 
//   UPDATE_NOTE,
 
 
  
// } from '../types';

// const NoteState = props => {
//   const initialState = {
   
//     notes: null,
//     current: null,
//     filtered: null,
//     error: null
//   };

//   const [state, dispatch] = useReducer(noteReducer, initialState);

// //   // Get Contacts
// //   const getContacts = async () => {
// //     debugger
// //     try {
// //       const res = await axios.get('/api/contacts');

// //       dispatch({
// //         type: GET_CONTACTS,
// //         payload: res.data
// //       });
// //     } catch (err) {
// //       dispatch({
// //         type: CONTACT_ERROR,
// //         payload: err.response.msg
// //       });
// //     }
// //   };

// //   // Add Contact
// //   const addContact = async contact => {
// //     const config = {
// //       headers: {
// //         'Content-Type': 'application/json'
// //       }
// //     };

// //     try {
// //       debugger
// //       const res = await axios.post('/api/contacts', contact, config);
// //       console.log(res);
// //       dispatch({
// //         type: ADD_CONTACT,
// //         payload: res.data
// //       });
// //     } catch (err) {
// //       dispatch({
// //         type: CONTACT_ERROR,
// //         payload: err.response.msg
// //       });
// //     }
// //   };

// //   // Delete Contact
// //   const deleteContact = async id => {
// //     try {
// //       await axios.delete(`/api/contacts/${id}`);

// //       dispatch({
// //         type: DELETE_CONTACT,
// //         payload: id
// //       });
// //     } catch (err) {
// //       dispatch({
// //         type: CONTACT_ERROR,
// //         payload: err.response.msg
// //       });
// //     }
// //   };

//   // Update Contact
//   const updateNote = async contact => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };

//     try {
//       const res = await axios.put(
//         `/api/notes/${id}`,
//         notes,
//         config
//       );

//       dispatch({
//         type: UPDATE_NOTE,
//         payload: res.data
//       });
//     } catch (err) {
//       dispatch({
//         type: NOTE_ERROR,
//         payload: err.response.msg
//       });
//     }
//   };

// //   // Clear Contacts
// //   const clearNotes = () => {
// //     dispatch({ type: CLEAR_NOTES });
// //   };

//   // Set Current Contact
//   const setCurrent = note => {
//     dispatch({ type: SET_CURRENT, payload: note });
//   };

//   // Clear Current Contact
//   const clearCurrent = () => {
//     dispatch({ type: CLEAR_CURRENT });
//   };

//   // Filter Contacts
//   const filterNotes = text => {
//     dispatch({ type: FILTER_NOTES, payload: text });
//   };

//   // Clear Filter
//   const clearFilter = () => {
//     dispatch({ type: CLEAR_FILTER });
//   };

//   return (
//     <noteContext.Provider
//       value={{
//         notes: state.notes,
//         current: state.current,
//         filtered: state.filtered,
//         error: state.error,
        
        
      
//         setCurrent,
//         clearCurrent,
//         updateNote,
//         filterNaotes,
//         clearFilter,
       
//       }}
//     >
//       {props.children}
//     </noteContext.Provider>
//   );
// };

// export default NoteState;