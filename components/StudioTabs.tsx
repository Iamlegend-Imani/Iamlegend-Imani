'use client';

import { useState } from 'react';

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
  ['AI Strategy', '#governance'],
  ['Product', '#work'],
  ['Data + Analytics', '#context'],
  ['Customer Experience', '#grounding-panel'],
  ['Strategic Operations', '#grounding-panel'],
  ['Transformation', '#grounding-panel'],
  ['Cybersecurity + GRC', '#governance'],
  ['Research', '#questions-panel'],
  ['Systems Design', '#architecture'],
];

const thread = [
  ['Information', 'Meaning', 'Context determines what information means.'],
  ['Meaning', 'Decision', 'Knowing something does not automatically tell an institution what to do next.'],
  ['Decision', 'Accountability', 'Consequential decisions require visible ownership.'],
  ['Technology', 'Human Agency', 'Capability does not remove the need to decide where humans remain responsible.'],
  ['Complexity', 'Legibility', 'Complexity does not always need to be simplified. Sometimes it needs to be made legible.'],
  ['Fragmentation', 'Coherence', 'Many hard problems come from information living in disconnected places.'],
  ['Visibility', 'Access', 'Making hidden systems visible changes what becomes possible.'],
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

const tabs = ['How I build', 'Grounding', 'The thread', 'Questions', 'Philosophy'] as const;
type Tab = (typeof tabs)[number];

export default function StudioTabs() {
  const [active, setActive] = useState<Tab>('How I build');

  return (
    <div className="studioShell">
      <div className="studioTabs" role="tablist" aria-label="Explore the practice">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            className={active === tab ? 'active' : ''}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="studioPanel" role="tabpanel" aria-live="polite">
        {active === 'How I build' ? (
          <div className="principleGrid compactPrinciples">
            {principles.map(([name, description], index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        ) : null}

        {active === 'Grounding' ? (
          <div className="groundingPanel" id="grounding-panel">
            <div>
              <p className="panelEyebrow">Professional grounding</p>
              <h3>Strategy for <em>ambiguous systems.</em></h3>
            </div>
            <div>
              <p>I am an interdisciplinary strategist, systems builder, and researcher with more than a decade of experience across technology, AI, data and analytics, product, customer experience, operations, organizational transformation, and human-centered strategy.</p>
              <p>I am particularly comfortable where the problem is ambiguous, multiple stakeholders see different versions of reality, and an organization needs someone who can connect the pieces, make the system legible, and move from uncertainty to action.</p>
              <div className="capabilityLinks">
                {toolkit.map(([label, href]) => <a key={label} href={href}>{label}<span>↘</span></a>)}
              </div>
            </div>
          </div>
        ) : null}

        {active === 'The thread' ? (
          <div className="threadGrid compactThread">
            {thread.map(([from, to, description]) => (
              <article key={from}>
                <div className="threadEquation"><span>{from}</span><b>→</b><span>{to}</span></div>
                <p>{description}</p>
              </article>
            ))}
          </div>
        ) : null}

        {active === 'Questions' ? (
          <div className="questionList" id="questions-panel">
            {questions.map((question, index) => (
              <article key={question}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{question}</p>
              </article>
            ))}
          </div>
        ) : null}

        {active === 'Philosophy' ? (
          <div className="philosophyPanel">
            <p className="displaySerif">The form should follow the problem.</p>
            <div>
              <p>I do not believe every meaningful idea needs to begin as a startup.</p>
              <p>Some ideas should begin as questions. Others as research, frameworks, experiments, prototypes, essays, decision systems, communities, products, or companies.</p>
              <p>My work moves between strategy, research, product development, technology, philosophy, writing, experimentation, and business building because the problems themselves move across those boundaries.</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
