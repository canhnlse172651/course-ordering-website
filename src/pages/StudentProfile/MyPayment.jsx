import { useAuthenContext } from "@/components/context/AuthenContext";
import { Empty } from "antd";

function MyPayment() {
  const { paymentInfor } = useAuthenContext();
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {paymentInfor.length === 0 ? (
        <Empty description="No found any history payment" />
      ) : (
        paymentInfor?.map((item, index) => {
          <div className="itemhistory">
            <div className="name">Frontend Newbie</div>
            <div className="payment">Chuyển khoản</div>
            <div className="date">05/01/2022</div>
            <div className="money">4.500.000 VND</div>
          </div>;
        })
      )}
    </div>
  );
}

export default MyPayment;
