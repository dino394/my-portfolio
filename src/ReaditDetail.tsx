import "./ReaditDetail.css";

function ReaditDetail() {
  return (
    <main className="detail-page">
      <a className="detail-back" href="/">
        ← 포트폴리오로 돌아가기
      </a>

      <section className="detail-hero">
        <span className="detail-eyebrow">
          FULL-STACK WEB APPLICATION
        </span>

        <h1>Read-it</h1>

        <p className="detail-subtitle">
          흩어진 읽을거리를 모아 나만의 자료실로.
        </p>

        <p className="detail-description">
          Read-it은 웹에서 발견한 다양한 자료를 저장하고,
          정리하고, 다시 읽을 수 있도록 만든 개인 자료실입니다.
          프론트엔드부터 서버, 데이터베이스와 사용자 인증까지
          직접 구현하며 실제로 작동하는 웹 애플리케이션을 만들었습니다.
        </p>

        <div className="detail-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Express</span>
          <span>PostgreSQL</span>
          <span>JWT</span>
        </div>

        <a
          className="detail-primary-link"
          href="https://dino394.github.io/Read-it-Ilkda/"
          target="_blank"
          rel="noreferrer"
        >
          사이트 방문하기 ↗
        </a>
      </section>

      <section className="detail-section">
        <span className="detail-eyebrow">01 / OVERVIEW</span>
        <h2>프로젝트 개요</h2>

        <p>
          웹을 탐색하다 보면 나중에 읽고 싶은 글이나
          참고할 자료가 여러 곳에 흩어집니다.
          Read-it은 이러한 자료를 한곳에 모으고,
          읽기 상태와 즐겨찾기를 관리하며,
          필요한 내용을 다시 찾을 수 있도록 설계했습니다.
        </p>
      </section>

      <section className="detail-section">
        <span className="detail-eyebrow">02 / FEATURES</span>
        <h2>주요 기능</h2>

        <div className="detail-feature-grid">
          <article className="detail-feature">
            <span>01</span>
            <h3>자료 수집</h3>
            <p>
              텍스트와 파일, 웹페이지 주소를 통해
              다양한 자료를 저장합니다.
            </p>
          </article>

          <article className="detail-feature">
            <span>02</span>
            <h3>검색과 분류</h3>
            <p>
              검색, 유형별 필터, 읽음 상태와
              즐겨찾기로 자료를 관리합니다.
            </p>
          </article>

          <article className="detail-feature">
            <span>03</span>
            <h3>읽기 환경</h3>
            <p>
              글자 크기와 읽기 진행 상태를 조절해
              편안하게 글을 읽을 수 있습니다.
            </p>
          </article>

          <article className="detail-feature">
            <span>04</span>
            <h3>계정과 데이터</h3>
            <p>
              회원 인증과 데이터베이스를 연결하고,
              자료를 백업하고 복원할 수 있습니다.
            </p>
          </article>
        </div>
      </section>

      <section className="detail-section">
        <span className="detail-eyebrow">03 / TECH STACK</span>
        <h2>기술 스택</h2>

        <div className="detail-tech-list">
          <p><strong>Frontend</strong> React, TypeScript, Vite</p>
          <p><strong>Backend</strong> Node.js, Express</p>
          <p><strong>Database</strong> PostgreSQL</p>
          <p><strong>Authentication</strong> JWT, bcrypt</p>
        </div>
      </section>
    </main>
  );
}

export default ReaditDetail;
