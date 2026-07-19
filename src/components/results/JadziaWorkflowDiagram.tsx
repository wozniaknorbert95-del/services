'use client';

import { useCallback, useId, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { jadziaCoiInteractiveWorkflow } from '@/content/jadzia-coi-case-study';
import { useMotion } from '@/lib/useMotion';

type PhaseId = (typeof jadziaCoiInteractiveWorkflow.phases)[number]['id'];
type PipelineId = (typeof jadziaCoiInteractiveWorkflow.pipelines)[number]['id'];

export default function JadziaWorkflowDiagram() {
  const motionCfg = useMotion();
  const baseId = useId();
  const { phases, pipelines, honestyLine, defaultPhaseId, defaultPipelineId } =
    jadziaCoiInteractiveWorkflow;

  const [phaseId, setPhaseId] = useState<PhaseId>(defaultPhaseId);
  const [pipelineId, setPipelineId] = useState<PipelineId>(defaultPipelineId);

  const phaseIndex = phases.findIndex((p) => p.id === phaseId);
  const activePhase = phases[phaseIndex] ?? phases[0];
  const activePipeline = pipelines.find((p) => p.id === pipelineId) ?? pipelines[0];

  const focusPhase = useCallback(
    (index: number) => {
      const next = phases[(index + phases.length) % phases.length];
      setPhaseId(next.id);
      document.getElementById(`${baseId}-phase-${next.id}`)?.focus();
    },
    [baseId, phases]
  );

  const onPhaseKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        focusPhase(phaseIndex + 1);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        focusPhase(phaseIndex - 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        focusPhase(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        focusPhase(phases.length - 1);
      }
    },
    [focusPhase, phaseIndex, phases.length]
  );

  return (
    <div className="qf-coi-flow">
      <p className="qf-coi-flow-title">{jadziaCoiInteractiveWorkflow.title}</p>

      <div
        className="qf-coi-flow-phases"
        role="tablist"
        aria-label="COI operating phases"
        onKeyDown={onPhaseKeyDown}
      >
        {phases.map((phase) => {
          const selected = phase.id === activePhase.id;
          return (
            <button
              key={phase.id}
              type="button"
              role="tab"
              id={`${baseId}-phase-${phase.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-phase-panel`}
              tabIndex={selected ? 0 : -1}
              className="qf-coi-flow-phase"
              data-phase={phase.id}
              onClick={() => setPhaseId(phase.id)}
            >
              {phase.phase}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-phase-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-phase-${activePhase.id}`}
        className="qf-coi-flow-panel"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.id}
            initial={motionCfg.prefersReduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={motionCfg.prefersReduced ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: motionCfg.prefersReduced ? 0 : 0.15 }}
          >
            <p className="qf-coi-flow-panel-kicker">{activePhase.phase}</p>
            <h3 className="qf-coi-flow-panel-title">{activePhase.title}</h3>
            <p className="qf-coi-flow-panel-body">{activePhase.detail}</p>
            <p className="qf-coi-flow-panel-surface">Surface: {activePhase.surface}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="qf-coi-flow-pipes"
        role="tablist"
        aria-label="Workflow pipelines"
      >
        {pipelines.map((pipe) => {
          const selected = pipe.id === activePipeline.id;
          return (
            <button
              key={pipe.id}
              type="button"
              role="tab"
              id={`${baseId}-pipe-${pipe.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-pipe-panel`}
              tabIndex={selected ? 0 : -1}
              className="qf-coi-flow-pipe"
              onClick={() => setPipelineId(pipe.id)}
            >
              {pipe.title}
            </button>
          );
        })}
      </div>

      <ol
        id={`${baseId}-pipe-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-pipe-${activePipeline.id}`}
        className="qf-coi-flow-steps"
      >
        {activePipeline.steps.map((step, index) => (
          <li key={step} className="qf-coi-flow-step">
            <span className="qf-coi-flow-step-num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <p className="qf-coi-flow-honesty">{honestyLine}</p>
    </div>
  );
}
