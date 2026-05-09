"use client";

import { m, AnimatePresence } from "framer-motion";
import { Code2, Globe, FileText, Video, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  techStack?: string[];
  metrics?: { label: string; value: string }[];
  
  // Deep engineering sections
  architecture?: string[];
  preprocessing?: string[];
  infrastructure?: string[];
  evaluation?: string[];
  challenges?: string[];
  futureScope?: string[];

  githubUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  videoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  // Helper to render a deep section
  const renderDeepSection = (title: string, items?: string[]) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-6 last:mb-0">
        <h4 className="text-xs font-semibold text-[#ededed] uppercase tracking-wider mb-3">
          {title}
        </h4>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start text-[#a1a1aa] text-sm leading-relaxed">
              <span className="text-[#3f3f46] mr-2 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <m.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glass-card group relative flex flex-col p-6 cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-[#ededed] tracking-tight group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          {project.category && (
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-medium text-[#71717a] border border-[rgba(255,255,255,0.05)] px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] whitespace-nowrap">
              {project.category}
            </span>
          )}
          <ChevronDown
            size={16}
            className={`text-[#71717a] transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <p className="text-sm text-[#a1a1aa] leading-relaxed flex-1">
        {project.description}
      </p>

      <AnimatePresence>
        {isExpanded && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-4 border-t border-[rgba(255,255,255,0.05)]">
              {project.longDescription && (
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 italic">
                  {project.longDescription}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col">
                  {renderDeepSection("Architecture", project.architecture)}
                  {renderDeepSection("Preprocessing", project.preprocessing)}
                  {renderDeepSection("Infrastructure", project.infrastructure)}
                </div>
                <div className="flex flex-col">
                  {renderDeepSection("Evaluation & Impact", project.evaluation)}
                  {renderDeepSection("Challenges", project.challenges)}
                  {renderDeepSection("Future Scope", project.futureScope)}
                </div>
              </div>

              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mb-6 mt-6 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xs text-[#71717a] mb-1">{m.label}</span>
                      <span className="text-sm font-mono text-[#ededed]">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2 mt-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-[#a1a1aa] bg-[rgba(255,255,255,0.03)] px-2 py-1 rounded border border-[rgba(255,255,255,0.02)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-[rgba(255,255,255,0.05)]" onClick={(e) => e.stopPropagation()}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#a1a1aa] hover:text-[#ededed] transition-colors"
          >
            <Code2 size={14} /> GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#a1a1aa] hover:text-[#ededed] transition-colors"
          >
            <Globe size={14} /> Live Demo
          </a>
        )}
        {project.reportUrl && (
          <a
            href={project.reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#a1a1aa] hover:text-[#ededed] transition-colors"
          >
            <FileText size={14} /> Report
          </a>
        )}
        {project.videoUrl && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#a1a1aa] hover:text-[#ededed] transition-colors"
          >
            <Video size={14} /> Demo Video
          </a>
        )}
      </div>
    </m.div>
  );
}
