'use client';

import { useState } from 'react';

const projects = [
  {
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
    name: 'Signal to Safeguard',
    longName: 'AI Governance + Cybersecurity',
    status: 'v0.1 working prototype',
    domain: 'AI Governance · Cybersecurity · GRC · Decision Systems',
    statement: 'Turning risk evidence into accountable human decisions.',
    text: 'A governance prototype focused on the space between detecting a concerning signal and making an institutional decision about what should happen next.',
    question: 'Who owns the decision when the evidence is incomplete but the risk is real?',
    links: [{ label: 'Explore the repository', href: 'https://github.com/Iamlegend-Imani/FromSignaltoSafeguard' }],
  },
  {
    name: 'Abundance',
    longName: 'Opportunity Intelligence',
    status: 'Public product prototype',
    domain: 'Opportunity Intelligence · Access · Public Interest Technology · AI',
    statement: 'Make hidden access visible.',
    text: 'A system for discovering, verifying, explaining, and matching people to legitimate funding, support, sponsorship, subsidy, and unused capacity that already exists around them.',
    question: 'What if the resource exists, but the person who needs it cannot see it?',
    links: [
      { label: 'Explore repository', href: 'https://github.com/Iamlegend-Imani/AbundanceApp' },
      { label: 'Launch prototype', href: 'https://theabundanceapp.base44.app' },
    ],
  },
  {
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
    name: 'Alive Athlete OS',
    longName: 'Multifaceted Athletic Intelligence',
    status: 'Private research + product development',
    domain: 'Human Performance · Health · Athletic Intelligence · Research',
    statement: 'Train for range. Not one identity.',
    text: 'A system exploring broad physical capability through strength, aerobic engine, power, mobility, stability, coordination, resilience, recovery, play, and skill.',
    question: 'Can performance systems optimize for range and aliveness rather than a single score?',
    links: [{ label: 'See the architecture', href: '#architecture' }],
  },
  {
    name: 'Context Assurance',
    longName: 'Trusting Human Context in Intelligent Systems',
    status: 'Private research program',
    domain: 'AI · Health · Context · Governance · Human Agency',
    statement: 'Context is not trustworthy simply because it exists.',
    text: 'A socio-technical research framework examining whether task-relevant human context has enough authority, provenance, freshness, relevance, integrity, uncertainty awareness, and contestability to influence consequential decisions.',
    question: 'Can the human context influencing an AI-assisted decision actually be trusted?',
    links: [{ label: 'See the architecture', href: '#architecture' }],
  },
  {
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
    name: 'Visibility Fit Paradox',
    longName: 'Recognition + Institutional Systems',
    status: 'Private research',
    domain: 'Human Systems · Institutional Systems · Recognition · Opportunity',
    statement: 'Capability can exist without being visible to the systems deciding who gets chosen.',
    text: 'Research into how capability is perceived, surfaced, selected, and understood by institutions, professional systems, algorithms, and human decision-makers.',
    question: 'What happens when systems confuse visibility and fit with actual human potential?',
    links: [{ label: 'Explore current questions', href: '#studio' }],
  },
] as const;

export default function ProjectExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <div className="projectExplorer" id="project-explorer">
      <div className="projectTabs" role="tablist" aria-label="Selected systems">
        {projects.map((project, index) => (
          <button
            key={project.name}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="project-panel"
            className={activeIndex === index ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {project.name}
          </button>
        ))}
      </div>

      <article className="projectPanel" id="project-panel" role="tabpanel" aria-live="polite">
        <div className="projectHalo" aria-hidden="true" />
        <div className="projectPanelTop">
          <span className="status">{active.status}</span>
          <span className="domain">{active.domain}</span>
        </div>
        <p className="projectMeta">{active.longName}</p>
        <h3>{active.name}</h3>
        <p className="projectStatement">{active.statement}</p>
        <div className="projectPanelBody">
          <p>{active.text}</p>
          <blockquote>{active.question}</blockquote>
        </div>
        <div className="projectLinks">
          {active.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}
