import React from "react";

export default function Users() {
  return (
    <main className="main-content">
      <div className="card">
        <div className="card-body">
          <div className="table overflow-auto" tabindex="8">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">عنوان جستجو</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control text-left"
                  dir="rtl"
                />
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead className="thead-light">
                <tr>
                  <th className="text-center align-middle text-primary">
                    ردیف
                  </th>
                  <th className="text-center align-middle text-primary">عکس</th>
                  <th className="text-center align-middle text-primary">
                    نام و نام خانوادگی
                  </th>
                  <th className="text-center align-middle text-primary">
                    ایمیل
                  </th>
                  <th className="text-center align-middle text-primary">
                    موبایل
                  </th>
                  <th className="text-center align-middle text-primary">
                    نقش های کاربر
                  </th>
                  <th className="text-center align-middle text-primary">
                    {" "}
                    وضعیت
                  </th>
                  <th className="text-center align-middle text-primary">
                    ویرایش
                  </th>
                  <th className="text-center align-middle text-primary">
                    تاریخ ایجاد
                  </th>
                </tr>
              </thead>
              <tbody />
              <tr>
                <td className="text-center align-middle"></td>
                <td className="text-center align-middle">
                  <figure className="avatar avatar">
                    <img src="./assets/media/image/avatar.jpg" className="rounded-circle" alt="my" />
                  </figure>
                </td>
                <td className="text-center align-middle"></td>
                <td className="text-center align-middle"></td>
                <td className="text-center align-middle"></td>
                <td className="text-center align-middle">
                  <a className="btn btn-outline-info" href="www.google.com">
                    نقش های کاربر
                  </a>
                </td>
                <td className="text-center align-middle">
                  <span className="cursor-pointer badge badge-success">
                    فعال
                  </span>
                </td>
                <td className="text-center align-middle">
                  <a className="btn btn-outline-info" href="www.google.com">
                    ویرایش
                  </a>
                </td>
                <td className="text-center align-middle"></td>
              </tr>
            </table>
            <div
              style={{margin: '40px !important'}}
              className="pagination pagination-rounded pagination-sm d-flex justify-content-center"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
