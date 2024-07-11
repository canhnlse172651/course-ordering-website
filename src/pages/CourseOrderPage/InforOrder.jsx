

function InforOrder ({
    title,
    startDate,
    duration,
    teacherInfor = [],
    price,
    image
}) {
    return (
        <div className="itemorder infoorder">
        <h3 className="title --t3">Thông tin đơn hàng</h3>
        <div className="boxorder">
          <div className="boxorder__col">
            <label className="label">Tên khóa học</label>
            <div className="boxorder__col-course">
              <div className="img">
                <img
                  src={image}
                  alt
                />
              </div>
              <div className="info">
                <p className="name">
                  <strong>{teacherInfor.name}</strong>
                </p>
                <p>{}</p>
              </div>
            </div>
          </div>
          <div className="boxorder__col">
            <label className="label">Tạm tính</label>
            <p>{price}</p>
          </div>
          <div className="boxorder__col">
            <label className="label">Giảm giá</label>
            <p>0đ</p>
          </div>
          <div className="boxorder__col">
            <label className="label">thành tiền</label>
            <p>
              <strong>{price}</strong>
            </p>
          </div>
        </div>
      </div>
    )
}


export default InforOrder;