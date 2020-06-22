// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetch_students_request, delete_student_request } from '../actions/index'
// import { NavLink } from 'react-router-dom'
// import classNames from 'classnames'

// class HomePage extends Component {
//   componentDidMount() {
//     this.props.fetchStudents()
//   }
//   onDeleteStudent = id => {
//     this.props.deleteStudent(id)
//   }

//   render() {
//     const { students } = this.props
//     return (
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>STT</th>
//             <th>Họ tên</th>
//             <th>Giới tính</th>
//             <th>Số điện thoai liên hệ</th>
//             <th>Quê quán</th>
//             <th>Địa chỉ email</th>
//             <th>Phòng Ban</th>
//             <th>Chức năng</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students ? (
//             students.map((student, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{student.id}</td>
//                   <td>{student.name}</td>
//                   <td>{student.gender}</td>
//                   <td>{student.phone}</td>
//                   <td>{student.country}</td>
//                   <td>{student.email}</td>
//                   <td
//                     className={classNames('badge mt-3', {
//                       'badge-warning': student.department === 'sale',
//                       'badge-success': student.department === 'dev'
//                     })}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {student.department}
//                   </td>
//                   <td>
//                     <NavLink type="button" className="btn btn-primary mr-1" to={`/student/${student.id}/edit`}>
//                       EDIT
//                     </NavLink>
//                     <button type="button" className="btn btn-danger" onClick={() => this.onDeleteStudent(student.id)}>
//                       DELETE
//                     </button>
//                   </td>
//                 </tr>
//               )
//             })
//           ) : (
//             <h4 style={{ width: '800px', margin: '100px auto', color: 'red' }}>
//               {' '}
//               Không có thông tin nào của sinh viên
//             </h4>
//           )}
//         </tbody>
//       </table>
//     )
//   }
// }
// function mapStateToProps(state) {
//   return {
//     students: state.students
//   }
// }
// const mapDispathToProps = (dispatch, props) => {
//   return {
//     fetchStudents: () => {
//       dispatch(fetch_students_request())
//     },
//     deleteStudent: id => {
//       dispatch(delete_student_request(id))
//     }
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispathToProps
// )(HomePage)

import React from "react";

export default function HomePage() {
  return <div>ok home</div>;
}
