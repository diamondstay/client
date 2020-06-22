// const initState = []

// const students = (state = initState, action) => {
//   switch (action.type) {
//     case 'FETCH_STUDENTS':
//       state = action.students
//       return [...state]
//     case 'ADD_STUDENT':
//       const newStudent = {
//         name: action.new_student.name,
//         gender: action.new_student.gender,
//         phone: action.new_student.phone,
//         country: action.new_student.country,
//         email: action.new_student.email,
//         department: action.new_student.department
//       }
//       state.push(newStudent)
//       return [...state]
//     case 'DELETE_STUDENT':
//       const listStudents = state.filter(student => {
//         return action.id != student.id
//       })
//       return listStudents
//     case 'UPDATE_STUDENT':
//       var indexStudentUpdated = state.findIndex(student => {
//         return student.id == action.student.id
//       })
//       if (indexStudentUpdated != -1) {
//         state[indexStudentUpdated] = action.student
//       }
//       return [...state]
//     default:
//       return [...state]
//   }
// }
// export default students
