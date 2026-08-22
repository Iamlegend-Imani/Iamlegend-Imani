import ThemeToggle from '@/components/ThemeToggle';

const territories = [
  ['Human Intelligence & Context', 'Designing systems that understand people without flattening their complexity or taking away agency.'],
  ['Trust, Governance & Decision Systems', 'Turning uncertain signals into accountable decisions with visible ownership, safeguards, and review.'],
  ['Health, Capacity & Human Performance', 'Building around the whole human rather than isolated metrics, symptoms, or performance outputs.'],
  ['Access, Opportunity & Human Agency', 'Making fragmented resources, opportunity, and institutional capacity easier to discover and navigate.'],
];

const projects = [
  { name: 'PHIL', label: 'Personal Health Intelligence Layer', text: 'A patient-controlled context layer for making fragmented health information and lived experience legible.', href: 'https://github.com/Iamlegend-Imani/PHIL' },
  { name: 'Signal to Safeguard', label: 'AI Governance + Cybersecurity', text: 'A governance prototype for moving from technical risk evidence to accountable human decisions.', href: 'https://github.com/Iamlegend-Imani/FromSignaltoSafeguard' },
  { name: 'Abundance', label: 'Opportunity Intelligence', text: 'A system for discovering and making legitimate hidden access, funding, support, and capacity visible.', href: 'https://github.com/Iamlegend-Imani/AbundanceApp' },
  { name: 'Alive Code', label: 'Human Operating System', text: 'A living philosophy and framework library for how humans live, work, create, relate, and become.', href: 'https://github.com/Iamlegend-Imani/AliveCode' },
  { name: 'Visibility Fit Paradox', label: 'Recognition + Institutional Systems', text: 'Research into how capability is perceived, surfaced, selected, and understood by institutions and algorithms.', href: 'https://github.com/Iamlegend-Imani/Visibility-Fit-Paradox' },
  { name: 'Hue(wo)man Thesis', label: 'Human Systems Thesis', text: 'An evolving body of thought about humanity, intelligence, technology, identity, dignity, and the systems we create.', href: 'https://github.com/Iamlegend-Imani/My-Huewoman-Thesis' },
];

const principles = [
  'Nothing exists in isolation.',
  'Context changes meaning.',
  'Human accountability cannot be automated away.',
  'A metric is not a human being.',
  'Complexity does not always need to be simplified. Sometimes it needs to be made legible.',
  'Technology should increase human capacity without decreasing human agency.',
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top">IK<span>●</span></a>
        <nav>
          <a href="#work">Work</a>
          <a href="#thesis">Thesis</a>
          <a href="#about">About</a>
          <ThemeToggle />
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">IMANI KIRIKA · HUMAN SYSTEMS · STRATEGY · RESEARCH</div>
        <h1>I build systems for the parts of life that refuse to stay in separate boxes.</h1>
        <div className="heroGrid">
          <p className="lede">I dissolve complexity, make systems legible, and build new realities around the human beings who have to live inside them.</p>
          <p className="heroNote">Technology. Health. AI. Governance. Human capacity. Opportunity. They look like different fields until you study the systems connecting them.</p>
        </div>
        <div className="heroActions">
          <a className="primary" href="#work">Explore the work</a>
          <a className="secondary" href="https://github.com/Iamlegend-Imani" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
      </section>

      <section className="statement" id="thesis">
        <span className="sectionNumber">01 / THESIS</span>
        <p className="giantQuote">Nothing exists in isolation.</p>
        <div className="statementBody">
          <p>Technology affects behavior. Behavior affects health. Health affects capacity. Capacity affects work. Institutions affect access. Context affects decisions.</p>
          <p>I work at those intersections. The domain changes. The underlying systems problem often does not.</p>
        </div>
      </section>

      <section className="territories">
        <div className="sectionIntro">
          <span className="sectionNumber">02 / TERRITORIES</span>
          <h2>One practice.<br />Different problems.</h2>
        </div>
        <div className="territoryGrid">
          {territories.map(([title, text], index) => (
            <article className="territoryCard" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="sectionIntro workIntro">
          <span className="sectionNumber">03 / SELECTED SYSTEMS</span>
          <h2>An ecosystem of independent work connected by one systems philosophy.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <a className="projectCard" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
              <div className="projectTop"><span>{String(index + 1).padStart(2, '0')}</span><span>↗</span></div>
              <div>
                <p className="projectLabel">{project.label}</p>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="systemsMap">
        <span className="sectionNumber">04 / THE CONNECTION</span>
        <div className="mapCenter">HUMAN<br />SYSTEMS</div>
        <div className="mapRing ringOne"><span>CONTEXT</span><span>AGENCY</span><span>CAPACITY</span><span>TRUST</span></div>
        <div className="mapRing ringTwo"><span>HEALTH</span><span>AI</span><span>ACCESS</span><span>GOVERNANCE</span></div>
        <p className="mapCaption">Different expressions. Shared questions: What is missing? What changes the meaning? Who owns the decision? What happens when reality changes?</p>
      </section>

      <section className="principles">
        <span className="sectionNumber">05 / PRINCIPLES</span>
        <div className="principleList">
          {principles.map((principle, index) => <p key={principle}><span>0{index + 1}</span>{principle}</p>)}
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <span className="sectionNumber">06 / PROFESSIONAL GROUNDING</span>
          <h2>Strategy for ambiguous systems.</h2>
        </div>
        <div className="aboutCopy">
          <p>I am an interdisciplinary strategist, systems builder, and researcher with more than a decade of experience across technology, AI, data and analytics, product, customer experience, operations, organizational transformation, and human-centered strategy.</p>
          <p>I am most useful where multiple stakeholders see different versions of reality and the organization needs someone who can connect the pieces, make the system legible, and move from ambiguity to action.</p>
          <div className="capabilities">
            {['AI Strategy', 'Product', 'Data + Analytics', 'Customer Experience', 'Strategic Operations', 'Transformation', 'Cybersecurity + GRC', 'Research', 'Systems Design'].map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="closingKicker">THE QUESTION BENEATH THE WORK</p>
        <h2>How do we build increasingly intelligent systems without losing the complexity, dignity, agency, and aliveness of the humans inside them?</h2>
        <div className="closingLinks">
          <a href="https://github.com/Iamlegend-Imani" target="_blank" rel="noreferrer">Explore all work ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>

      <footer><span>IMANI KIRIKA</span><span>Human systems. Made legible.</span></footer>
    </main>
  );
}
