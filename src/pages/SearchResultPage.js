// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { search_full_text_request } from '../actions/index'
// import classNames from 'classnames'
// class SearchResultPage extends Component {
//   componentDidMount() {
//     const { location } = this.props
//     const keyword = location.search.split('=')[1]
//     this.props.searchFullText(keyword)
//   }
//   render() {
//     const { searchResult } = this.props

//     return (
//       <React.Fragment>
//         <h3 style={{ width: '650px', margin: '20px auto' }}>
//           Ket qua tim kiem co tong so sinh vien la : {searchResult.length}
//         </h3>

//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Họ tên</th>
//               <th>Giới tính</th>
//               <th>Số điện thoai liên hệ</th>
//               <th>Quê quán</th>
//               <th>Địa chỉ email</th>
//               <th>Phòng ban</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchResult
//               ? searchResult.map(result => {
//                   return (
//                     <tr key={result.id}>
//                       <td>{result.id}</td>
//                       <td>{result.name}</td>
//                       <td>{result.gender}</td>
//                       <td>{result.phone}</td>
//                       <td>{result.country}</td>
//                       <td>{result.email}</td>
//                       <td
//                         className={classNames('badge mt-3', {
//                           'badge-warning': result.department === 'sale',
//                           'badge-success': result.department === 'dev'
//                         })}
//                         style={{ cursor: 'pointer' }}
//                       >
//                         {result.department === 'sale' ? 'Sale' : 'Dev'}
//                       </td>
//                     </tr>
//                   )
//                 })
//               : ''}
//           </tbody>
//         </table>
//       </React.Fragment>
//     )
//   }
// }
// function mapStateToProps(state) {
//   return {
//     searchResult: state.searchResult
//   }
// }

// function mapDispatchToProps(dispatch, props) {
//   return {
//     searchFullText: keyword => {
//       dispatch(search_full_text_request(keyword))
//     }
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SearchResultPage)
