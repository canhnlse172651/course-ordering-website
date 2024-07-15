
const PAYMENT_DATA = [
  {
    id: "atm",
    icon: "/img/icon-payment-method-atm.svg",
    label: " Thành toán bằng chuyển khoản",
    des: ` Sau khi bấm đăng ký, mã khoá học là thông tin tài khoản ngân hàng
            sẽ được gửi đến email của bạn, bạn vui lòng chuyển khoản với nội
            dung: mã khoá học, họ và tên, số điện thoại, CFD Circle sẽ liên hệ
            bạn để xác nhận và kích hoạt khoá học của bạn sau khi giao dịch
            thành công.`,
  },
  {
    id: "momo",
    icon: "/img/icon-payment-method-mo-mo.svg",
    label: "Thanh toán bằng momo",
    des: `  Sau khi bấm đăng ký, mã khoá học &amp; thông tin tài khoản MoMo sẽ
            được gửi đến email của bạn, bạn vui lòng chuyển khoản với nội dung:
            mã khoá học, họ và tên, số điện thoại, CFD Circle sẽ liên hệ bạn để
            xác nhận và kích hoạt khoá học của bạn sau khi giao dịch thành công.`,
  },
  {
    id: "cash",
    icon: "/img/icon-payment-method-cod.svg",
    label: "Thanh toán bằng tiền mặt",
    des: `  Sau khi bấm đăng ký, thông tin khoá học sẽ được gửi đến email của
            bạn, bạn vui lòng đến văn phòng CFD Circle vào ngày khai giảng để
            đóng học phí tại số 11b, Phan Kế Bính, quận 1, TP Hồ Chí Minh.`,
  },
];
  
function PaymentOrder({ handleChange, selectedPayment, disable }) {

  const _onChange = (e) => {
     handleChange?.(e.target?.value)
  }
  return (
    <div className="itemorder paymentorder">
      <h3 className="title --t3">Hình thức thanh toán</h3>
      <div className="boxorder">
        {PAYMENT_DATA.map((item) => {
          return (
            <div className="boxorder__pay"  key={item.id} >
              <label className="radiocontainer">
                <img src= {item.icon} alt={item.id} />
              {item.label}
                <input type="radio" name="radio" value={item.id} disabled={disable}  onChange={_onChange} />
                <span className="checkmark" />
              </label>
              <div className="boxorder__pay-tooltip"  style={{display:selectedPayment === item.id ? "block" : "none"}}>
              {item.des}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PaymentOrder;
