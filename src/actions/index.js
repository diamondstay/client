// import callApi from "../utils/apiCaller";

// //SHOW ALL STUDENT

// // request len server
// export const fetch_students_request = () => {
//   return (dispatch) => {
//     return callApi("students", "get", null).then((res) => {
//       dispatch(fetch_students(res.data));
//     });
//   };
// };
// // khi request dk ket thuc , co data thi nos moi dispath action len reducer
// export const fetch_students = (students) => {
//   return {
//     type: "FETCH_STUDENTS",
//     students: students,
//   };
// };

// //ADD ONE STUDENT
// export const add_student_request = (student) => {
//   debugger;

//   return (dispatch) => {
//     return callApi("students", "post", student).then((res) => {
//       console.log(res);
//       dispatch(add_student(res.data));
//     });
//   };
// };

// export const add_student = (student) => {
//   return {
//     type: "ADD_STUDENT",
//     new_student: student,
//   };
// };

// //DELETE ONE STUDENT
// export const delete_student_request = (id) => {
//   return (dispatch) => {
//     return callApi(`students/${id}`, "delete", id).then((res) => {
//       dispatch(delete_student(id));
//     });
//   };
// };

// export const delete_student = (id) => {
//   return {
//     type: "DELETE_STUDENT",
//     id: id,
//   };
// };

// // EDIT ONE STUDENT ============

// // STEP 1:
// export const get_student_by_id_request = (id) => {
//   return (dispatch) => {
//     debugger;

//     return callApi(`students/${id}`, "get", null).then((res) => {
//       console.log(res);
//       dispatch(get_student_by_id(res.data));
//     });
//   };
// };
// export const get_student_by_id = (student) => {
//   return {
//     type: "GET_STUDENT_BY_ID",
//     student: student,
//   };
// };

// //STEP 2:
// export const update_student_requets = (student) => {
//   return (dispatch) => {
//     return callApi(`students/${student.id}`, "put", student).then((res) => {
//       dispatch(update_student(res.data));
//     });
//   };
// };

// export const update_student = (student) => {
//   return {
//     type: "UPDATE_STUDENT",
//     student: student,
//   };
// };

// //SEARCH FULL TEXT
// export const search_full_text_request = (keyword) => {
//   return (dispatch) => {
//     return callApi(`students/?q=${keyword}`, "get", null).then((res) => {
//       dispatch(search_full_text_by_keyword(res.data));
//     });
//   };
// };
// export const search_full_text_by_keyword = (keyword) => {
//   return {
//     type: "SEARCH_FULL_TEXT",
//     keyword: keyword,
//   };
// };
