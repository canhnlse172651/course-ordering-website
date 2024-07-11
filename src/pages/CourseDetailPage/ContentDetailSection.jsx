import { formartDate } from "@/utils/formartDate";
import styled from "styled-components";
import Accordion from "@/components/Accordion";
import { Empty } from "antd/es";
const ContentEditor = styled.div`
  h2 {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.7;
  }
`;

function ContentDetail({
  description,
  schedule,
  content,
  required,
  teams,
  loading,
}) {
  return (
    <section className="contentdetail">
      <div className="content">
        <div className="container">
          <div className="contentrow ctintro">
            <h3 className="contentrow__title title --t3">Giới thiệu</h3>
            <ContentEditor
              className="contenteditor"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="videowrap">
              <iframe
                title="YouTube video player"
                src="https://www.youtube.com/embed/C7GoVPoamdM?rel=0"
                width={560}
                height={315}
                frameBorder={0}
                allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
          <div className="contentrow ctschedule">
            <h3 className="contentrow__title title --t3">Lịch học</h3>
            <div className="ctschedule__box">
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Khai giảng</span>
                  <p className="title --t3">
                    {formartDate(schedule?.startDate, "DD/MM/YYYY")}
                  </p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Ngày học</span>
                  <p className="title --t3">{schedule?.days}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Thời gian</span>
                  <p className="title --t3">{schedule?.time}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Địa điểm</span>
                  <p className="title --t3">{schedule?.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contentrow ctlession">
            <h3 className="contentrow__title title --t3">Nội dung khoá học</h3>
            <div className="faq__list">
              {!loading && (
                <Accordion type="content" data={content} label= "..." />
              )}
            </div>
          </div>
          <div className="contentrow ctrequest">
            <h3 className="contentrow__title title --t3">Yêu cầu cần có</h3>
            <div className="ctrequest__content">
              {!loading && required?.length === 0 ? (
                <Empty
                  description="No found any content"
                  style={{ margin: "0 auto" }}
                />
              ) : (
                required?.map((item, index) => {
                  return <p key={index + new Date()}>{item}</p>;
                })
              )}
            </div>
          </div>
          <div className="contentrow ctteacher">
            <h3 className="contentrow__title title --t3">Giảng viên</h3>
            <div className="ctteacher__content">
              {teams?.map((member, index) => {
                return (
                  <div className="itemteacher" key={index + new Date()}>
                    <div className="itemteacher__avatar">
                      <img src={member.image} alt="CFD Circle" />
                    </div>
                    <div className="itemteacher__info">
                      <div className="itemteacher__info-name">
                        <p className="title --t3">{member.name}</p>
                        <span className="label badge --teacher">
                          {member.tags[0]}
                        </span>
                      </div>
                      <h5 className="itemteacher__info-pos label">
                        {member.jobTitle}
                      </h5>
                      <p className="itemteacher__info-des">
                        {member.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentDetail;
