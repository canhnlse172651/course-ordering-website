import { useAuthenContext } from "@/components/context/AuthenContext";
import { formartDate } from "@/utils/formartDate";
import { formatCurrency } from "@/utils/formatCurrency";
import { Empty } from "antd";

function MyPayment() {
  const { paymentInfor } = useAuthenContext();
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {paymentInfor?.length === 0 ? (
        <Empty description="No found any history payment" />
      ) : (
        paymentInfor?.map((item, index) => {

          const {name, price } = item.course
        
          return (
            <div className="itemhistory"  key={index + new Date()}>
            <div className="name">{name}</div>
            <div className="payment">{item.paymentMethod}</div>
            <div className="date">{formartDate(item.updatedAt,"DD/MM/YYYY")}</div>
            <div className="money">{formatCurrency(price)}</div>
          </div>
          )
        })
      )}
    </div>
  );
}

export default MyPayment;
