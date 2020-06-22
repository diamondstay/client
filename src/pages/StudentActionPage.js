// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import { add_student_request, get_student_by_id_request, update_student_requets } from '../actions/index'
// class StudentActionPage extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       id: '',
//       name: '',
//       gender: '',
//       phone: '',
//       country: '',
//       email: '',
//       department: 'dev'
//     }
//   }
//   componentDidMount() {
//     //step 1 -- Mount vào trang
//     const { match } = this.props
//     if (match) {
//       this.props.getStudentById(match.params.id)
//     }
//   }
//   UNSAFE_componentWillReceiveProps(NextProps) {
//     //step 2 -- Update lại state
//     if (NextProps.studentUpdating) {
//       this.setState({
//         id: NextProps.studentUpdating.id,
//         name: NextProps.studentUpdating.name,
//         gender: NextProps.studentUpdating.gender,
//         phone: NextProps.studentUpdating.phone,
//         country: NextProps.studentUpdating.country,
//         email: NextProps.studentUpdating.email,
//         department: NextProps.studentUpdating.department
//       })
//     }
//   }
//   onInputStudent = e => {
//     const value = e.target.value
//     const name = e.target.name
//     this.setState({
//       [name]: value
//     })
//     console.log(this.state)
//   }
//   onClearForm = () => {
//     this.setState({
//       name: '',
//       gender: '',
//       phone: '',
//       country: '',
//       email: '',
//       department: 'dev'
//     })
//   }
//   onSubmitStudent = e => {
//     e.preventDefault()
//     if (this.state.id) {
//       const studentUpdated = {
//         id: this.state.id,
//         name: this.state.name,
//         gender: this.state.gender,
//         phone: this.state.phone,
//         country: this.state.country,
//         email: this.state.email,
//         department: this.state.department
//       }
//       this.props.updateStudent(studentUpdated)
//       this.props.history.goBack()
//     } else {
//       const newStudent = {
//         name: this.state.name,
//         gender: this.state.gender,
//         phone: this.state.phone,
//         country: this.state.country,
//         email: this.state.email,
//         department: this.state.department
//       }
//       this.props.addStudent(newStudent)
//     }

//     this.onClearForm()
//   }
//   onGoBack = () => {
//     this.props.history.goBack()
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <form style={{ width: '550px', margin: '50px auto' }} onSubmit={this.onSubmitStudent}>
//           <div className="form-group">
//             <label htmlFor="name">Họ tên:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="Nhập name"
//               name="name"
//               onChange={e => this.onInputStudent(e)}
//               value={this.state.name}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="gender">Giới tính:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="gender"
//               placeholder="Nhập giới tính"
//               name="gender"
//               onChange={e => this.onInputStudent(e)}
//               value={this.state.gender}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Số điện thoại:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="phone"
//               placeholder="Nhập số điện thoại"
//               name="phone"
//               onChange={e => this.onInputStudent(e)}
//               value={this.state.phone}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="country">Quê quán:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="country"
//               placeholder="Nhập quê quán"
//               name="country"
//               onChange={e => this.onInputStudent(e)}
//               value={this.state.country}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Địa chỉ Email:</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Nhập email"
//               name="email"
//               onChange={e => this.onInputStudent(e)}
//               value={this.state.email}
//             />
//           </div>
//           <div className="form-check-inline">
//             <label className="form-check-label">
//               <input
//                 onChange={e => this.onInputStudent(e)}
//                 type="radio"
//                 className="form-check-input"
//                 name="department"
//                 value="dev"
//                 checked={this.state.department === 'dev'}
//               />
//               Dev
//             </label>
//           </div>
//           <div className="form-check-inline">
//             <label className="form-check-label">
//               <input
//                 onChange={e => this.onInputStudent(e)}
//                 type="radio"
//                 className="form-check-input"
//                 name="department"
//                 value="sale"
//                 checked={this.state.department === 'sale'}
//               />
//               Sale
//             </label>
//           </div>
//           <br />
//           <button type="submit" className="btn btn-primary mt-4">
//             Submit
//           </button>
//         </form>
//         <button className="btn btn-warning mb-5" style={{ marginLeft: '470px' }} onClick={this.onGoBack}>
//           Trở lại trang quản lý
//         </button>
//       </React.Fragment>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//     studentUpdating: state.studentUpdating
//   }
// }

// function mapDispatchToProps(dispatch, props) {
//   return {
//     addStudent: newStudent => {
//       dispatch(add_student_request(newStudent))
//     },
//     getStudentById: id => {
//       dispatch(get_student_by_id_request(id))
//     },
//     updateStudent: id => {
//       dispatch(update_student_requets(id))
//     }
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(StudentActionPage)
