import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-icon-menu">
        <ul>
          <li data-toggle="tooltip" title="کاربران">
            <a href="#users" title=" کاربران">
              <i className="icon ti-user"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li data-toggle="tooltip" title="ویرایش پروفایل">
            <a href="#" className="go-to-page">
              <i className="icon ti-settings"></i>
            </a>
          </li>
          <li data-toggle="tooltip" title="خروج">
            <a href="login.html" className="go-to-page">
              <i className="icon ti-power-off"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation-menu-body">
        <ul id="users">
          <li>
            <a href="#">کاربران</a>
            <ul>
              <li><Link to={'./create_user'}>ایجاد کاربر</Link></li>
              <li><Link to={'./users'}>لیست کاربران</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
