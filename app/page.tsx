import ThemeToggle from '@/components/ThemeToggle';
import ProjectExplorer from '@/components/ProjectExplorer';
import StudioTabs from '@/components/StudioTabs';

const linkedin = 'https://www.linkedin.com/in/imanikir/';
const github = 'https://github.com/Iamlegend-Imani';
const contact = 'mailto:imani.kirika.me@gmail.com?subject=Let%27s%20connect';

const territories = [
  {
    id: 'context',
    number: '01',
    title: 'Human Intelligence & Context',
    question: 'How can technology understand enough about a person to be useful without reducing, misrepresenting, or taking ownership of that person?',
    links: [['PHIL', '#work'], ['Context Assurance', '#work'], ['Hue(wo)man Thesis', '#work']],
  },
  {
    id: 'governance',
    number: '02',
    title: 'Trust, Governance & Decision Systems',
    question: 'How do we translate uncertain information into accountable action while preserving provenance, uncertainty, dissent, human judgment, and review?',
    links: [['Signal to Safeguard', '#work'], ['Human First. AI Forward.', '#work']],
  },
  {
    id: 'capacity',
    number: '03',
    title: 'Health, Capacity & Human Performance',
    question: 'How do we design systems around the whole human rather than isolated metrics, symptoms, or performance outputs?',
    links: [['PHIL', '#work'], ['Alive Athlete OS', '#work'], ['Alive Code', '#work']],
  },
  {
    id: 'access',
    number: '04',
    title: 'Access, Opportunity & Human Agency',
    question: 'How can fragmented systems of funding, resources, knowledge, and institutional capacity become easier for people to discover and navigate?',
    links: [['Abundance', '#work'], ['Visibility Fit Paradox', '#work']],
  },
] as const;

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href={linkedin} target="_blank" rel="noreferrer" aria-label="Imani on LinkedIn">
          Imani<span className="wordmarkMark">↗</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#thesis">Thesis</a>
          <a href="#work">Work</a>
          <a href="#architecture">Architecture</a>
          <a href="#studio">Studio</a>
          <a className="contactNav" href={contact}>Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroBloom bloomOne" aria-hidden="true" />
        <div className="heroBloom bloomTwo" aria-hidden="true" />
        <div className="heroArc" aria-hidden="true" />

        <div className="heroTopline">
          <span>Human Systems & Transformation Strategist</span>
          <span>Systems Builder · Researcher · Polymath</span>
        </div>

        <div className="heroComposition">
          <div className="heroMain">
            <p className="hello">Hi, you can call me <a href={linkedin} target="_blank" rel="noreferrer">Imani.</a></p>
            <h1>I make complex systems <em>legible.</em></h1>
            <p className="lede">I dissolve complexity, connect what appears separate, and build new realities around the human beings who have to live inside them.</p>
            <div className="heroActions">
              <a className="primaryAction" href="#work">Explore the work ↓</a>
              <a href={contact}>Contact Imani ↗</a>
            </div>
          </div>

          <aside className="heroAside">
            <p className="asideLabel">The thesis beneath the work</p>
            <p className="asideQuote">Nothing exists in isolation.</p>
            <p>Technology affects behavior. Behavior affects health. Health affects capacity. Capacity affects work. Institutions affect access. Context affects decisions.</p>
            <a href="#thesis">Enter the thesis ↓</a>
          </aside>
        </div>

        <div className="energyRibbon" aria-label="Design energies">
          <span><b>Structure</b> · grounded</span>
          <span><b>Futurism</b> · expansive</span>
          <span><b>Radiance</b> · alive</span>
        </div>
      </section>

      <section className="thesis" id="thesis">
        <div className="sectionRail">
          <span>01</span>
          <span>THESIS</span>
        </div>
        <div className="thesisBody">
          <p className="displaySerif">I build at the intersections.</p>
          <div className="thesisColumns">
            <p>Rather than treating technology, health, identity, organizations, risk, performance, and human experience as separate problems, I explore the systems connecting them.</p>
            <p>I build frameworks, products, research programs, and decision architectures that make those relationships visible without flattening the complexity that gives them meaning.</p>
          </div>
          <blockquote>I build the bridge rather than become the bridge.</blockquote>
        </div>
      </section>

      <section className="territoriesSection" aria-labelledby="territories-heading">
        <div className="sectionHeading">
          <div>
            <span className="kicker">02 · THE TERRITORIES</span>
            <h2 id="territories-heading">One practice.<br /><em>Different problems.</em></h2>
          </div>
          <p>Each territory is a doorway into the same design discipline: context, agency, evidence, accountability, capacity, access, and the human consequences of systems.</p>
        </div>

        <div className="territoryPetals">
          {territories.map((territory, index) => (
            <article className={`territoryPetal petal${index + 1}`} id={territory.id} key={territory.id}>
              <span className="territoryNumber">{territory.number}</span>
              <h3>{territory.title}</h3>
              <p>{territory.question}</p>
              <div className="territoryLinks">
                {territory.links.map(([label, href]) => <a key={label} href={href}>{label} ↘</a>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workSection" id="work">
        <div className="sectionHeading">
          <div>
            <span className="kicker">03 · SELECTED SYSTEMS</span>
            <h2>Not a project grid.<br /><em>A body of work.</em></h2>
          </div>
          <p>Choose a system. The page stays still while the work changes in place. Same depth, less dragging yourself through nine separate project sections.</p>
        </div>
        <ProjectExplorer />
      </section>

      <section className="architectureSection" id="architecture">
        <div className="sectionHeading architectureHeading">
          <div>
            <span className="kicker">04 · THE CONNECTION</span>
            <h2>A research architecture,<br /><em>not a random collection.</em></h2>
          </div>
          <p>The projects are independent, but they keep meeting around the same questions: context, visibility, agency, evidence, capacity, accountability, and what we choose not to automate away.</p>
        </div>

        <div className="architectureMap" role="img" aria-label="Research architecture connecting Imani's human systems work">
          <div className="archRoot">
            <span>ROOT</span>
            <strong>HUMAN SYSTEMS</strong>
            <p>Nothing exists in isolation.</p>
          </div>
          <div className="archStem" aria-hidden="true" />
          <div className="archBranchGrid">
            <div className="archBranch"><span>PHILOSOPHY</span><strong>Alive Code</strong><p>Human OS · Aliveness · Identity</p></div>
            <div className="archBranch"><span>CONTEXT</span><strong>Context Assurance</strong><p>Provenance · Integrity · Human context</p></div>
            <div className="archBranch"><span>HEALTH + CAPACITY</span><strong>PHIL + Alive Athlete OS</strong><p>Whole-person intelligence · Performance</p></div>
            <div className="archBranch"><span>ACCESS</span><strong>Abundance</strong><p>Opportunity · Visibility · Agency</p></div>
            <div className="archBranch"><span>INSTITUTIONS</span><strong>Visibility Fit Paradox</strong><p>Recognition · Selection · Potential</p></div>
            <div className="archBranch"><span>AI + GOVERNANCE</span><strong>Signal to Safeguard + HFAF</strong><p>Judgment · Accountability · Human agency</p></div>
          </div>
          <div className="archConvergence">
            <span>CONVERGENCE</span>
            <strong>HUMAN AGENCY + ACCOUNTABLE DECISIONS</strong>
            <p>How do intelligent systems become more capable without making humans smaller?</p>
          </div>
        </div>
      </section>

      <section className="studioSection" id="studio">
        <div className="sectionHeading">
          <div>
            <span className="kicker">05 · INSIDE THE PRACTICE</span>
            <h2>Explore the thinking<br /><em>without the endless scroll.</em></h2>
          </div>
          <p>How I build, professional grounding, the recurring thread, current research questions, and builder philosophy now live in one navigable studio.</p>
        </div>
        <StudioTabs />
      </section>

      <section className="connectSection" id="connect">
        <div className="connectBloom" aria-hidden="true" />
        <p className="kicker">06 · LET&apos;S CONNECT</p>
        <h2>Bring me the problem that does not fit neatly inside one department.</h2>
        <p>I am open to conversations across AI and emerging technology, health technology, cybersecurity and GRC, AI governance, human systems research, strategic transformation, advisory work, fellowships, research collaborations, product partnerships, and experimental ventures.</p>
        <div className="connectLinks">
          <a className="primaryAction" href={contact}>Contact Imani ↗</a>
          <a href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          <a href={github} target="_blank" rel="noreferrer">Explore GitHub ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>

      <footer>
        <a href={linkedin} target="_blank" rel="noreferrer">Imani ↗</a>
        <span>I build systems that help humans see more clearly, decide more intelligently, and remain unmistakably human while doing it.</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
