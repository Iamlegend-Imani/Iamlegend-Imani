import ThemeToggle from '@/components/ThemeToggle';

const linkedin = 'https://www.linkedin.com/in/imanikir/';
const github = 'https://github.com/Iamlegend-Imani';

const territories = [
  {
    id: 'context',
    number: '01',
    title: 'Human Intelligence & Context',
    question: 'How can technology understand enough about a person to be useful without reducing, misrepresenting, or taking ownership of that person?',
    links: ['PHIL', 'Context Assurance', 'Hue(wo)man Thesis'],
  },
  {
    id: 'governance',
    number: '02',
    title: 'Trust, Governance & Decision Systems',
    question: 'How do we translate uncertain information into accountable action while preserving provenance, uncertainty, dissent, human judgment, and review?',
    links: ['From Signal to Safeguard', 'Human First, AI Forward'],
  },
  {
    id: 'capacity',
    number: '03',
    title: 'Health, Capacity & Human Performance',
    question: 'How do we design systems around the whole human rather than isolated metrics, symptoms, or performance outputs?',
    links: ['PHIL', 'Alive Athlete OS', 'Alive Code'],
  },
  {
    id: 'access',
    number: '04',
    title: 'Access, Opportunity & Human Agency',
    question: 'How can fragmented systems of funding, resources, knowledge, and institutional capacity become easier for people to discover and navigate?',
    links: ['Abundance', 'Visibility Fit Paradox'],
  },
];

const projects = [
  {
    id: 'phil',
    index: '01',
    name: 'PHIL',
    longName: 'Personal Health Intelligence Layer',
    status: 'Functional concept prototype',
    domain: 'HealthTech · Human Context · AI · Patient Agency',
    statement: 'Your health is not fragmented. Your health data is.',
    text: 'A patient-controlled context layer exploring how fragmented health information and lived experience can become a clear, source-aware picture that supports better conversations between people and practitioners.',
    question: 'What changes when a health system can see the person, not just the data points?',
    links: [{ label: 'Explore PHIL', href: 'https://github.com/Iamlegend-Imani/PHIL' }],
  },
  {
    id: 'signal',
    index: '02',
    name: 'From Signal to Safeguard',
    longName: 'AI Governance + Cybersecurity',
    status: 'v0.1 working prototype',
    domain: 'AI Governance · Cybersecurity · GRC · Decision Systems',
    statement: 'Turning risk evidence into accountable human decisions.',
    text: 'A governance prototype focused on the space between detecting a concerning signal and making an institutional decision about what should happen next.',
    question: 'Who owns the decision when the evidence is incomplete but the risk is real?',
    links: [{ label: 'Explore the repository', href: 'https://github.com/Iamlegend-Imani/FromSignaltoSafeguard' }],
  },
  {
    id: 'abundance',
    index: '03',
    name: 'Abundance',
    longName: 'Opportunity Intelligence',
    status: 'Public product prototype',
    domain: 'Opportunity Intelligence · Access · Public Interest Technology · AI',
    statement: 'Make hidden access visible.',
    text: 'A system for discovering, verifying, explaining, and matching people to legitimate funding, support, sponsorship, subsidy, and unused capacity that already exists around them.',
    question: 'What if the resource exists, but the person who needs it cannot see it?',
    links: [
      { label: 'Explore the repository', href: 'https://github.com/Iamlegend-Imani/AbundanceApp' },
      { label: 'Launch prototype', href: 'https://theabundanceapp.base44.app' },
    ],
  },
  {
    id: 'alive-code',
    index: '04',
    name: 'Alive Code',
    longName: 'Human Operating System',
    status: 'Active development',
    domain: 'Human Systems · Philosophy · Technology · Media · Human Development',
    statement: 'Learn the language of being alive.',
    text: 'A developing philosophy, Human Operating System, media platform, and living library for understanding how humans live, work, create, relate, and become.',
    question: 'What becomes possible when life is treated as an interconnected system instead of a set of disconnected categories?',
    links: [{ label: 'Visit Alive Code', href: 'https://alive-code.imani-kirika116.chatgpt.site' }],
  },
  {
    id: 'athlete',
    index: '05',
    name: 'Alive Athlete OS',
    longName: 'Multifaceted Athletic Intelligence',
    status: 'Private research + product development',
    domain: 'Human Performance · Health · Athletic Intelligence · Research',
    statement: 'Train for range. Not one identity.',
    text: 'A system exploring broad physical capability through strength, aerobic engine, power, mobility, stability, coordination, resilience, recovery, play, and skill.',
    question: 'Can performance systems optimize for range and aliveness rather than a single score?',
    links: [{ label: 'Read the architecture below', href: '#architecture' }],
  },
  {
    id: 'context-assurance',
    index: '06',
    name: 'Context Assurance',
    longName: 'Trusting Human Context in Intelligent Systems',
    status: 'Private research program',
    domain: 'AI · Health · Context · Governance · Human Agency',
    statement: 'Context is not trustworthy simply because it exists.',
    text: 'A socio-technical research framework examining whether task-relevant human context has enough authority, provenance, freshness, relevance, integrity, uncertainty awareness, and contestability to influence consequential decisions.',
    question: 'Can the human context influencing an AI-assisted decision actually be trusted?',
    links: [{ label: 'See the research architecture', href: '#architecture' }],
  },
  {
    id: 'hfaf',
    index: '07',
    name: 'Human First. AI Forward.',
    longName: 'Human Agency in the Age of AI',
    status: 'Public research + framework',
    domain: 'AI · Human Agency · Higher Education · Responsible Technology',
    statement: 'Technology should increase human capacity without decreasing human agency.',
    text: 'A body of work asking what should remain human as AI becomes more capable, and how institutions can use AI without quietly outsourcing judgment, agency, or responsibility.',
    question: 'What should remain human, even when a machine can technically do it?',
    links: [{ label: 'Explore the work', href: 'https://github.com/Iamlegend-Imani/HFAF-Human-First-AI-Forward' }],
  },
  {
    id: 'huewoman',
    index: '08',
    name: 'My Hue(wo)man Thesis',
    longName: 'Human Systems Thesis',
    status: 'Evolving body of thought',
    domain: 'Human Systems · Identity · Technology · Dignity · Intelligence',
    statement: 'A thesis about what it means to remain fully human inside increasingly intelligent systems.',
    text: 'An evolving body of thought connecting humanity, identity, intelligence, technology, dignity, context, agency, and the systems we create around ourselves.',
    question: 'How do we build systems that recognize the whole human without reducing the human to the system?',
    links: [{ label: 'Explore the thesis', href: 'https://github.com/Iamlegend-Imani/My-Huewoman-Thesis' }],
  },
  {
    id: 'visibility',
    index: '09',
    name: 'Visibility Fit Paradox',
    longName: 'Recognition + Institutional Systems',
    status: 'Private research',
    domain: 'Human Systems · Institutional Systems · Recognition · Opportunity',
    statement: 'Capability can exist without being visible to the systems deciding who gets chosen.',
    text: 'Research into how capability is perceived, surfaced, selected, and understood by institutions, professional systems, algorithms, and human decision-makers.',
    question: 'What happens when systems confuse visibility and fit with actual human potential?',
    links: [{ label: 'Read the questions I am exploring', href: '#questions' }],
  },
];

const principles = [
  ['Human-owned', 'Technology should extend human capacity without quietly replacing human agency.'],
  ['Context-aware', 'Meaning changes according to environment, history, goals, constraints, relationships, timing, and lived reality.'],
  ['Explainable', 'People should be able to understand why a system produced a consequential recommendation.'],
  ['Contestable', 'Humans need meaningful ways to challenge, correct, defer, modify, or reject system outputs.'],
  ['Evidence-aware', 'Evidence, interpretation, inference, assumption, correlation, uncertainty, and unknowns should not silently collapse into one another.'],
  ['Interdisciplinary', 'The most consequential problems rarely respect professional boundaries.'],
  ['Alive', 'Systems ultimately exist in service of people, not the other way around.'],
];

const toolkit = [
  ['AI & Governance', '#signal'],
  ['Cybersecurity & GRC', '#signal'],
  ['Product & Prototyping', '#work'],
  ['Data & Analytics', '#grounding'],
  ['Customer Experience', '#grounding'],
  ['Strategic Operations', '#grounding'],
  ['Transformation', '#grounding'],
  ['Human Systems', '#architecture'],
  ['Research', '#questions'],
  ['Systems Design', '#architecture'],
];

const questions = [
  'How much context does an AI system need before personalization becomes useful rather than invasive?',
  'How do we verify the quality of human context before it influences consequential AI-assisted decisions?',
  'How can health technology represent a whole person without pretending complexity can be reduced to one score?',
  'How should organizations move from detecting an AI or cybersecurity risk signal to making an accountable decision?',
  'What happens when opportunity exists but the people who need it cannot see it?',
  'What kinds of institutional systems fail to recognize human capability because visibility and fit are confused with potential?',
  'How do we design technology that improves human capacity without gradually removing human agency?',
  'What does it mean to build technology around aliveness rather than optimization alone?',
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href={linkedin} target="_blank" rel="noreferrer" aria-label="Imani Kirika on LinkedIn">
          Imani<span className="wordmarkMark">↗</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#architecture">Architecture</a>
          <a href="#grounding">Grounding</a>
          <a href="#questions">Now</a>
          <ThemeToggle />
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroRule" aria-hidden="true" />
        <div className="heroTopline">
          <span>Human Systems & Transformation Strategist</span>
          <span>Systems Builder · Researcher · Polymath</span>
        </div>

        <div className="heroComposition">
          <div className="heroMain">
            <p className="hello">Hi, you can call me <a href={linkedin} target="_blank" rel="noreferrer">Imani.</a></p>
            <h1>I make complex systems <em>legible.</em></h1>
            <p className="lede">I dissolve complexity, connect what appears separate, and build new realities around the human beings who have to live inside them.</p>
          </div>

          <aside className="heroAside">
            <p className="asideLabel">The thesis beneath the work</p>
            <p className="asideQuote">Nothing exists in isolation.</p>
            <p>Technology affects behavior. Behavior affects health. Health affects capacity. Capacity affects work. Institutions affect access. Context affects decisions.</p>
            <a href="#thesis">Enter the thesis ↓</a>
          </aside>
        </div>

        <div className="heroIndex" aria-label="Explore areas of work">
          {territories.map((territory) => (
            <a key={territory.id} href={`#${territory.id}`}>
              <span>{territory.number}</span>
              <strong>{territory.title}</strong>
              <span>↘</span>
            </a>
          ))}
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

        <div className="territoryList">
          {territories.map((territory) => (
            <article className="territoryRow" id={territory.id} key={territory.id}>
              <span className="territoryNumber">{territory.number}</span>
              <div>
                <h3>{territory.title}</h3>
                <p>{territory.question}</p>
              </div>
              <div className="territoryLinks">
                {territory.links.map((label) => {
                  const target = projects.find((project) => project.name === label || project.longName === label || (label === 'From Signal to Safeguard' && project.id === 'signal') || (label === 'Human First, AI Forward' && project.id === 'hfaf'));
                  return target ? <a key={label} href={`#${target.id}`}>{label} ↘</a> : <span key={label}>{label}</span>;
                })}
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
          <p>Independent explorations, prototypes, theses, and products. They do not need to become one giant product to belong to the same intellectual ecosystem.</p>
        </div>

        <div className="workAtlas">
          {projects.map((project) => (
            <article className="projectRow" id={project.id} key={project.id}>
              <div className="projectIndex">{project.index}</div>
              <div className="projectIdentity">
                <p className="projectMeta">{project.longName}</p>
                <h3>{project.name}</h3>
                <p className="projectStatement">{project.statement}</p>
              </div>
              <div className="projectStory">
                <p>{project.text}</p>
                <p className="projectQuestion">{project.question}</p>
              </div>
              <div className="projectAction">
                <span className="status">{project.status}</span>
                <span className="domain">{project.domain}</span>
                <div className="projectLinks">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>{link.label} ↗</a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="architectureSection" id="architecture">
        <div className="sectionHeading architectureHeading">
          <div>
            <span className="kicker">04 · THE CONNECTION</span>
            <h2>A research architecture,<br /><em>not a random collection.</em></h2>
          </div>
          <p>The previous orbit was too abstract. This is the actual connective tissue: human systems as the root, with independent branches that meet again around agency and accountable decisions.</p>
        </div>

        <div className="architectureMap" role="img" aria-label="Research architecture connecting Imani's human systems work">
          <div className="archRoot">
            <span>ROOT</span>
            <strong>HUMAN SYSTEMS</strong>
            <p>Nothing exists in isolation.</p>
          </div>
          <div className="archBranchGrid">
            <div className="archBranch">
              <span>PHILOSOPHY</span>
              <strong>Alive Code</strong>
              <p>Human OS · Aliveness · Identity</p>
            </div>
            <div className="archBranch">
              <span>CONTEXT</span>
              <strong>Context Assurance</strong>
              <p>Provenance · Integrity · Human context</p>
            </div>
            <div className="archBranch">
              <span>HEALTH + CAPACITY</span>
              <strong>PHIL + Alive Athlete OS</strong>
              <p>Whole-person intelligence · Performance</p>
            </div>
            <div className="archBranch">
              <span>ACCESS</span>
              <strong>Abundance</strong>
              <p>Opportunity · Visibility · Agency</p>
            </div>
            <div className="archBranch">
              <span>INSTITUTIONS</span>
              <strong>Visibility Fit Paradox</strong>
              <p>Recognition · Selection · Potential</p>
            </div>
            <div className="archBranch">
              <span>AI + GOVERNANCE</span>
              <strong>Signal to Safeguard + HFAF</strong>
              <p>Judgment · Accountability · Human agency</p>
            </div>
          </div>
          <div className="archConvergence">
            <span>CONVERGENCE</span>
            <strong>HUMAN AGENCY + ACCOUNTABLE DECISIONS</strong>
            <p>How do intelligent systems become more capable without making humans smaller?</p>
          </div>
        </div>
      </section>

      <section className="buildSection" id="build">
        <div className="sectionHeading">
          <div>
            <span className="kicker">05 · HOW I BUILD</span>
            <h2>The system can be intelligent.<br /><em>The human still matters.</em></h2>
          </div>
          <p>These are not decorative values. They are design requirements I return to across health, AI, governance, opportunity, product, and organizational systems.</p>
        </div>
        <div className="principleGrid">
          {principles.map(([name, description], index) => (
            <article key={name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="groundingSection" id="grounding">
        <div className="groundingIntro">
          <span className="kicker">06 · PROFESSIONAL GROUNDING</span>
          <h2>Strategy for<br /><em>ambiguous systems.</em></h2>
          <p className="groundingLead">I am an interdisciplinary strategist, systems builder, and researcher with more than a decade of experience across technology, AI, data and analytics, product, customer experience, operations, organizational transformation, and human-centered strategy.</p>
        </div>

        <div className="groundingDetail">
          <p>I am particularly comfortable where the problem is ambiguous, multiple stakeholders see different versions of reality, and an organization needs someone who can connect the pieces, make the system legible, and move from uncertainty to action.</p>
          <div className="capabilityLinks" aria-label="Areas of experience">
            {toolkit.map(([label, href]) => <a key={label} href={href}>{label}<span>↘</span></a>)}
          </div>
        </div>
      </section>

      <section className="threadSection">
        <div className="sectionHeading compactHeading">
          <div>
            <span className="kicker">07 · THE THREAD</span>
            <h2>What keeps showing up.</h2>
          </div>
        </div>
        <div className="threadGrid">
          {[
            ['Information', 'Meaning', 'Context determines what information means.'],
            ['Meaning', 'Decision', 'Knowing something does not automatically tell an institution what to do next.'],
            ['Decision', 'Accountability', 'Consequential decisions require visible ownership.'],
            ['Technology', 'Human Agency', 'Capability does not remove the need to decide where humans remain responsible.'],
            ['Complexity', 'Legibility', 'Complexity does not always need to be simplified. Sometimes it needs to be made legible.'],
            ['Fragmentation', 'Coherence', 'Many hard problems come from information living in disconnected places.'],
            ['Visibility', 'Access', 'Making hidden systems visible changes what becomes possible.'],
          ].map(([from, to, description]) => (
            <article key={from}>
              <div className="threadEquation"><span>{from}</span><b>→</b><span>{to}</span></div>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="questionsSection" id="questions">
        <div className="questionsIntro">
          <span className="kicker">08 · CURRENTLY EXPLORING</span>
          <h2>I am less interested in having one lane than in asking the questions that matter.</h2>
        </div>
        <div className="questionList">
          {questions.map((question, index) => (
            <article key={question}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="builderSection">
        <div className="builderStatement">
          <span className="kicker">09 · BUILDER PHILOSOPHY</span>
          <p className="displaySerif">The form should follow the problem.</p>
        </div>
        <div className="builderCopy">
          <p>I do not believe every meaningful idea needs to begin as a startup.</p>
          <p>Some ideas should begin as questions. Others as research, frameworks, experiments, prototypes, essays, decision systems, communities, products, or companies.</p>
          <p>My work moves between strategy, research, product development, technology, philosophy, writing, experimentation, and business building because the problems themselves move across those boundaries.</p>
        </div>
      </section>

      <section className="connectSection" id="connect">
        <p className="kicker">10 · LET&apos;S CONNECT</p>
        <h2>Bring me the problem that does not fit neatly inside one department.</h2>
        <p>I am open to conversations across AI and emerging technology, health technology, cybersecurity and GRC, AI governance, human systems research, strategic transformation, advisory work, fellowships, research collaborations, product partnerships, and experimental ventures.</p>
        <div className="connectLinks">
          <a className="primaryAction" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          <a href={github} target="_blank" rel="noreferrer">Explore GitHub ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>

      <footer>
        <a href={linkedin} target="_blank" rel="noreferrer">Imani-Faith Kirika ↗</a>
        <span>I build systems that help humans see more clearly, decide more intelligently, and remain unmistakably human while doing it.</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
