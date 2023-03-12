import React from "react";

export default function CreateUser() {
  return (
    <main className="main-content">
      <div className="card">
        <div className="card-body">
          <div className="container">
            <h6 className="card-title">ایجاد کاربر</h6>
            <form method="POST">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  نام و نام خانوادگی
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control text-left"
                    placeholder="نام و نام خانوادگی"
                    dir="rtl"
                    name="name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">ایمیل</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control text-left"
                    placeholder="ایمیل"
                    dir="rtl"
                    name="email"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">موبایل</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control text-left"
                    placeholder="موبایل"
                    dir="rtl"
                    name="mobile"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">پسورد</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control text-left"
                    placeholder="پسورد"
                    dir="rtl"
                    name="password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">واتس اپ</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control text-left"
                    dir="rtl"
                    name="whatsapp"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">تلگرام</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control text-left"
                    dir="rtl"
                    name="telegram"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">اینستاگرام</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control text-left"
                    dir="rtl"
                    name="instagram"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" for="file">
                  {" "}
                  آپلود عکس{" "}
                </label>
                <input
                  className="col-sm-10"
                  type="file"
                  class="form-control-file"
                  id="file"
                />
              </div>
              <div className="form-group row">
                <button
                  name="submit"
                  type="button"
                  className="btn btn-success btn-uppercase"
                >
                  <i className="ti-check-box m-r-5"></i> ذخیره
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
