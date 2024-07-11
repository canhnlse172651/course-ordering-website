import Accordion from "@/components/Accordion";
function FaqSection({ questions, loading }) {


  const commonQuestions = questions.slice(0,6)
  const orderQuestions =  questions.slice(6)
  return (
    <section className="faq --scpadding">
      <div className="container">
        <div className="faq__inner">
          <div className="heading --noline --center">
            <h2 className="heading__title title --t2">
              Câu hỏi <span className="color--primary">thường gặp</span>
            </h2>
          </div>
          <div className="faq__list">
           {!loading && <Accordion data={commonQuestions}  label="Thông tin chung"  />}
           {!loading && <Accordion data={orderQuestions}  label="Đăng ký và thanh toán"  />}
            </div>   
          </div>
        </div>
    </section>
  );
}

export default FaqSection;
