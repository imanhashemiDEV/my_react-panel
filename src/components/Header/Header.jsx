import React from 'react'

export default function Header() {
  return (
    <div className="header">

		<div className="header-logo">
        <a href="index.html">
          <img className="large-logo" src="assets/media/image/logo.png" alt="image"/>
          <img className="small-logo" src="assets/media/image/logo-sm.png" alt="image"/>
          <img className="dark-logo" src="assets/media/image/logo-dark.png" alt="image"/>
        </a>
		</div>

		<div className="header-body">
			<div className="header-body-left">
				<h3 className="page-title">داشبورد</h3>

				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="#">داشبورد</a></li>
						<li className="breadcrumb-item active" aria-current="page"> لیست  </li>
					</ol>
				</nav>

			</div>
			<div className="header-body-right">

				<ul className="navbar-nav">
					<li className="nav-item dropdown">
						<a href="#" className="nav-link" data-toggle="dropdown">
							<i className="ti-plus"></i>
						</a>
						<div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
							<div className="p-3">
								<h6 className="font-size-13 m-b-15">دسترسی سریع</h6>
								<div className="row">
									<div className="col-6">
										<a href="#">
											<div className="d-flex flex-column font-size-13 bg-danger-bright bg-hover pt-3 pb-3 border-radius-1 text-danger text-center mb-3">
												<i className="fa fa-sitemap mb-2 font-size-20"></i>
												دسته‌بندی ها
											</div>
										</a>
									</div>
									<div className="col-6">
										<a href="#">
											<div className="d-flex flex-column font-size-13 bg-info-bright bg-hover pt-3 pb-3 border-radius-1 text-info text-center mb-3">
												<i className="ti-game mb-2 font-size-20"></i>
												محصولات
											</div>
										</a>
									</div>
									<div className="col-6">
										<a href="#">
											<div className="d-flex flex-column font-size-13 bg-warning-bright bg-hover pt-3 pb-3 border-radius-1 text-warning text-center">
												<i className="ti-bar-chart-alt mb-2 font-size-20"></i>
												گزارشات
											</div>
										</a>
									</div>
									<div className="col-6">
										<a href="#">
											<div className="d-flex flex-column font-size-13 bg-secondary-bright bg-hover pt-3 pb-3 border-radius-1 text-secondary text-center">
												<i className="fa fa-share mb-2 font-size-20"></i>
												سایر
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a href="#" className="nav-link nav-link-notify" data-toggle="dropdown">
							<i className="ti-comment"></i>
						</a>
						<div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
							<div className="p-4 text-center" data-backround-image="assets/media/image/profile-bg.png">
								<h6 className="m-b-0">پیام ها</h6>
								<small className="font-size-13 opacity-7 d-inline-block m-t-5">1 پیام خوانده نشده</small>
							</div>
							<div>
								<ul className="list-group list-group-flush">
									<li>
										<a href="#" className="p-3 list-group-item d-flex align-items-center link-1 hide-show-toggler">
											<div>
												<figure className="avatar avatar-sm m-r-15">
													<span className="avatar-title bg-success rounded-circle">آ</span>
												</figure>
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-1 d-flex justify-content-between primary-font">
													کاربر 1
													<i title="علامت خوانده نشده" data-toggle="tooltip" className="hide-show-toggler-item fa fa-check font-size-13"></i>
												</h6>
												<span className="text-muted m-r-10 small">08:50 ب.ظ</span>
												<span className="text-muted small line-height-24">لورم ایپسوم متن ساختگی</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>

				<div className="d-flex align-items-center">

					<div className="d-xl-none d-lg-none d-sm-block navigation-toggler">
						<a href="#">
							<i className="ti-menu"></i>
						</a>
					</div>

					<div className="d-xl-none d-lg-none d-sm-block navbar-toggler">
						<a href="#">
							<i className="ti-arrow-down"></i>
						</a>
					</div>
			
				</div>
			</div>

		</div>
	

	</div>
  )
}
