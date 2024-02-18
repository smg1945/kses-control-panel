import StatusDisplayFrame from "./components/StatusDisplayFrame";
import Divcard from "./components/Divcard";
import "./App.css";

const KSESControlPanel = () => {
  return (
    <div className="kses-control-panel">
      <div className="aside">
        <div className="f-r-a-m-e-container">
          <div className="graphic-svgjs-node-wrapper">
            <div className="graphic-svgjs-node">
              <img className="svg-icon" loading="eager" alt="" src="/svg.svg" />
              <div className="kses-control-panel-parent">
                <h3 className="symbol"></h3>
                <b className="kses-control-panel1">KSES Control Panel</b>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="link">
              <h3 className="symbol1"></h3>
              <div className="div">대시보드</div>
            </div>
            <div className="link1">
              <b className="symbol2"></b>
              <div className="div1">분석 보고서</div>
            </div>
            <div className="link2">
              <b className="symbol3"></b>
              <div className="div2">매니저 관리</div>
            </div>
            <div className="link3">
              <b className="symbol4"></b>
              <div className="div3">상품 관리</div>
            </div>
            <div className="link4">
              <b className="symbol5"></b>
              <div className="div4">고객 상담 내역</div>
            </div>
          </div>
        </div>
        <h2 className="a-t-e">A T E Z</h2>
      </div>
      <main className="card-header-u-s-title">
        <section className="campaign-state-frame">
          <StatusDisplayFrame />
          <Divcard />
        </section>
      </main>
    </div>
  );
};

export default KSESControlPanel;
