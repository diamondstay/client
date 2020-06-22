// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// function Menu(props) {
//   const [state, setState] = useState({
//     keyword: ''
//   })
//   const hanldChange = value => {
//     setState({
//       ...state,
//       keyword: value
//     })
//   }
//   return (
//     <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
//       <ul className="navbar-nav">
//         <li className="nav-item active">
//           <NavLink className="nav-link" to="/">
//             Home
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/student/add">
//             Thêm mới sinh viên
//           </NavLink>
//         </li>
//       </ul>
//       <div style={{ flexGrow: 1 }}></div>

//       {props.location.pathname.search('add') !== -1 || props.location.pathname.search('add') !== -1 ? (
//         ''
//       ) : (
//         <React.Fragment>
//           <span>Bộ Lọc: </span>
//           <select className="form-control mx-5" id="sel2" name="sellist1" style={{ width: '100px' }}>
//             <option>Tất cả</option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>
//           <select className="form-control" id="sel2" name="sellist2" style={{ width: '100px' }}>
//             <option>Tất cả</option>
//             <option>dev</option>
//             <option>sale</option>
//           </select>
//         </React.Fragment>
//       )}

//       <div style={{ flexGrow: 1 }}></div>
//       <form className="form-inline my-2 my-lg-0" style={{ marginRight: '122px' }}>
//         <input
//           className="form-control mr-sm-2"
//           type="text"
//           placeholder="Search"
//           value={state.keyword}
//           onChange={e => hanldChange(e.target.value)}
//         />
//         <NavLink className="btn btn-success my-2 my-sm-0" type="button" to={`/search?keyword=${state.keyword}`}>
//           Search
//         </NavLink>
//       </form>
//     </nav>
//   )
// }

// export default withRouter(Menu)

import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./Menu.scss";
function Menu() {
  return (
    <div className="header">
      <div className="header__left">
        <NavLink className="logo" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgFF4mIUxFirMIp30t9adIHN-gf5O7ryZyf-I0lUpgTl-q_V51&usqp=CAU"
            alt="ok"
          />
        </NavLink>
        <div className="search-box">
          <input placeholder="Tìm kiếm" />
          <div className="date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            <span>Ngày</span>
          </div>
          <div className="count-custom">
            <i className="fas fa-user-alt"></i>
            <span>Số người</span>
          </div>
          <div className="btn-search-header">
            <span className="wrap-btn">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Menu);
