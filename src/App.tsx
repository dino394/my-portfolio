
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Read-it",
    category: "풀스택 웹 애플리케이션",
    description:
      "웹에서 발견한 다양한 자료를 저장하고 정리하며, 한곳에서 읽을 수 있도록 만든 개인 자료실입니다.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "JWT"],
    className: "project-readit",
    symbol: "↗",
    url: " https://dino394.github.io/Read-it-Ilkda-/",
  },
  {
    number: "02",
    name: "문장사이",
    category: "UI/UX · 독서 경험",
    description:
      "긴 글을 편안하게 읽고 필요한 내용을 쉽게 찾아볼 수 있도록 설계한 웹 기반 독서 공간입니다.",
    tags: ["React", "TypeScript", "Vite", "반응형 UI"],
    className: "project-munjangsai",
    symbol: "✳",
    url: "https://dino394.github.io/munjangsai/",
  },
  {
    number: "03",
    name: "Moodboard Generator",
    category: "프론트엔드 · 크리에이티브 도구",
    description:
      "색상과 폰트를 조합하고 이미지를 활용해 빠르게 무드보드를 만들 수 있는 디자인 도구입니다.",
    tags: ["React", "UI Design", "이미지 업로드", "PNG Export"],
    className: "project-moodboard",
    symbol: "✿",
    url: "https://design-resource-generator.netlify.app",
  },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Home">
          portfolio<span>®</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact ↗</a>
        </nav>

        <span className="availability">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </span>
      </header>

      <section className="hero" id="home">
        <div className="hero-topline">
          <span>DESIGN × ENGINEERING</span>
          <span>INDEPENDENT PORTFOLIO · 2026</span>
        </div>

        <h1>
          I design things
          <br />
          <span className="headline-second">
            <span className="headline-serif">that</span> work<span className="blue-period">.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            I connect thoughtful UI/UX design with
            <br className="desktop-break" />
            full-stack development to build useful
            <br className="desktop-break" />
            and human-centered digital products.
          </p>

          <a className="round-link" href="#work" aria-label="Explore projects">
            <span>↓</span>
          </a>

          <div className="hero-index">
            <span>BASED IN</span>
            <strong>SEOUL, KR</strong>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <span className="decoration-circle">D</span>
          <span className="decoration-cross">+</span>
          <span className="decoration-square" />
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>Things I've made<span>.</span></h2>
          </div>
          <span className="project-count">02 PROJECTS</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className={`project-card ${project.className}`}
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-visual">
                <span className="visual-number">{project.number}</span>
                <span className="visual-symbol" aria-hidden="true">
                  {project.symbol}
                </span>
                <span className="visual-label">
                  {project.name}
                </span>
              </div>

              <div className="project-meta">
                <div>
                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      
<section className="about-section" id="about">
  <span className="eyebrow">02 / ABOUT ME</span>

  <h2>
    Design-minded
    <br />
    <span className="headline-serif">developer.</span>
  </h2>

  <div className="about-intro">
    <p className="about-lead">
      디자인과 기술 사이를 연결합니다.
    </p>

    <p className="about-description">
      유한대학교 시각디자인과를 졸업하고,
      한국방송통신대학교 컴퓨터과학과에서
      컴퓨터과학을 공부했습니다.
      시각적인 완성도와 기술적인 구현을 함께 고민하며,
      사용하기 편하고 목적이 분명한 디지털 제품을 만드는 데
      관심이 있습니다.
    </p>
  </div>

  <div className="profile-grid">
    <article className="profile-card">
      <span className="capability-number">01 / EDUCATION</span>
      <h3>Education</h3>

      <div className="profile-item">
        <span className="profile-icon">✳</span>
        <div>
          <h4>유한대학교</h4>
          <p>시각디자인과 졸업</p>
        </div>
      </div>

      <div className="profile-item">
        <span className="profile-icon">⌘</span>
        <div>
          <h4>한국방송통신대학교</h4>
          <p>컴퓨터과학과 졸업</p>
        </div>
      </div>
    </article>

    <article className="profile-card">
      <span className="capability-number">02 / CERTIFICATIONS</span>
      <h3>Certifications</h3>

      <ul className="certificate-list">
        <li>컴퓨터그래픽스운용기능사</li>
        <li>웹디자인기능사</li>
        <li>GTQ 포토샵 1급</li>
      </ul>
    </article>
  </div>

  <div className="capability-grid">
    <article>
      <span className="capability-number">03 / DESIGN</span>
      <h3>UI/UX & Visual Design</h3>
      <p>
        정보 구조와 사용자 흐름을 고민하고,
        일관성 있고 이해하기 쉬운 인터페이스를 설계합니다.
      </p>
    </article>

    <article>
      <span className="capability-number">04 / DEVELOPMENT</span>
      <h3>Frontend & Backend</h3>
      <p>
        React와 TypeScript로 화면을 구현하고,
        API와 데이터베이스를 연결해 실제로 작동하는
        웹 애플리케이션을 만듭니다.
      </p>
    </article>
  </div>
</section>


      <footer className="site-footer" id="contact">
        <span className="eyebrow">03 / LET'S CONNECT</span>
        <h2 className="white">Have something<br />good in mind<span>?</span></h2>
        <a
          className="footer-link"
          href="https://github.com/dino394"
          target="_blank"
          rel="noreferrer"
        >
          Explore my GitHub <span>↗</span>
        </a>
        <div className="footer-bottom">
          <span>DESIGNED & BUILT WITH INTENTION.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
