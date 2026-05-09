"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { ProjectCard, Project } from "@/components/ui/ProjectCard";

const PROJECTS: Project[] = [
  {
    id: "crawler",
    title: "Anonymous Web Crawler",
    description: "Scalable asynchronous AI-powered crawling infrastructure for extracting structured information across multiple platforms. Engineered to bypass sophisticated anti-bot protections and run seamlessly on cloud infrastructure.",
    category: "AI Systems / Automation",
    techStack: ["Python", "Playwright", "Crawl4AI", "FastAPI", "Asyncio", "Google Cloud VM", "VLMs"],
    architecture: [
      "Modular asynchronous crawling infrastructure",
      "Distributed extraction pipelines",
      "Scalable platform-specific routing (Instagram, Reddit, X, Quora, YouTube)",
      "VLM-assisted structured extraction workflows",
      "Dynamic rendering & Shadow DOM parsing",
    ],
    infrastructure: [
      "Deployed on Google Cloud VMs",
      "Optimized RAM usage for continuous headless execution",
      "Resilient async execution with auto-restart mechanisms",
    ],
    preprocessing: [
      "Stealth browsing with headless optimization",
      "Randomized delays and human-like scrolling patterns",
      "CAPTCHA handling and session preservation",
      "Advanced anti-detection workflows",
    ],
    evaluation: [
      "Extracted 3076+ structured links from highly-protected platforms",
      "Achieved 10–17 hour continuous crawling sessions without detection",
      "Minimized session drops and out-of-memory crashes",
    ],
    metrics: [
      { label: "Links Extracted", value: "3,076+" },
      { label: "Max Session Uptime", value: "17+ hrs" },
    ],
    githubUrl: "https://github.com/Ishupawar081/insta_crawler",
    reportUrl: "https://drive.google.com/file/d/1qO8Gpy9nIDQeO9LwQIeb0U-Uz9ca-J9g/view",
  },
  {
    id: "medical",
    title: "Multimodal Disease Diagnosis System",
    description: "End-to-end multimodal healthcare AI pipeline built from noisy real-world medical datasets. Leveraged weak supervision to generate semantic labels and performed pseudo-label refinement for text-image fusion.",
    category: "Healthcare AI / Multimodal AI",
    techStack: ["PyTorch", "DistilBERT", "ResNet-18", "Sentence-BERT", "Transformers", "MiniLM-L6-v2"],
    preprocessing: [
      "Flattened and aggregated nested JSON-like clinical datasets",
      "Integrated heterogeneous text and image data (61,437 samples, 26,184 images)",
      "Designed clinical taxonomy inspired by ICD, MeSH, and Harrison's Principles",
    ],
    architecture: [
      "DistilBERT multi-task architecture with shared encoder and dual classification heads",
      "Multimodal fusion pipeline concatenating DistilBERT embeddings with ImageNet-pretrained ResNet-18 features",
      "Weak supervision pipeline using all-MiniLM-L6-v2 cosine similarity label assignment",
      "Confidence-based pseudo-label correction and bootstrapping workflows",
    ],
    evaluation: [
      "Corrected 4,320 system labels and 1,972 type labels via strong label refinement",
      "Text Model: System weighted F1 (0.9402), Type weighted F1 (0.8893)",
      "Multimodal Model: System F1 (0.8202), Type F1 (0.8601)",
    ],
    challenges: [
      "Handling severe pseudo-label noise from weak supervision",
      "Managing incomplete multimodal coverage (only 42.6% overlap)",
      "Addressing severe class imbalance across 30 distinct medical features",
    ],
    metrics: [
      { label: "Total Samples", value: "61K+" },
      { label: "Text System F1", value: "0.940" },
      { label: "Multimodal Type F1", value: "0.860" },
    ],
    githubUrl: "https://github.com/Ishupawar081/multimodal-medical-daignosis",
    demoUrl: "https://multimodal-medical-daignosis-azaewnb8bof3evhnkgfxq7.streamlit.app/",
    reportUrl: "https://drive.google.com/file/d/1a1waKd0ciF0dVMrpt7SpTZSEcJURqGGj/view",
  },
  {
    id: "app-builder",
    title: "AI App Builder (Lovable Clone)",
    description: "AI-powered autonomous application generation and self-healing frontend engineering system. Capable of generating, validating, repairing, and iteratively modifying React applications.",
    category: "Generative AI / Full Stack AI",
    techStack: ["React", "Gemini 2.5 Flash API", "Vite", "JavaScript", "JSON", "Node.js"],
    architecture: [
      "Planner-based generation architecture with Gemini 2.5 Flash reasoning workflows",
      "Modular generation pipelines with Vite-based scalable frontend synthesis",
      "Conversational app editing workflows and dynamic project regeneration",
      "Iterative prompt-to-app code generation with structured JSON workflows",
    ],
    infrastructure: [
      "Local React/Vite execution environments",
      "Automated build testing and runtime app regeneration",
      "Scalable generation architecture for dynamic app updating",
    ],
    preprocessing: [
      "Natural language prompt ingestion and structured JSON extraction",
      "Automatic npm dependency installation and smart dependency detection",
    ],
    evaluation: [
      "Autonomous component generation with self-healing build pipelines",
      "JSX validation workflows and automated code repair using LLMs",
      "Build failure detection with retry + backoff pipelines and malformed JSON correction",
    ],
    githubUrl: "https://github.com/Ishupawar081/ai-app-builder",
    videoUrl: "https://drive.google.com/file/d/1w47kXxFJsuvWZRvSD831kGt9joMI6B2n/view",
  },
  {
    id: "rag",
    title: "Multimodal Retrieval-Augmented QA",
    description: "Scalable multimodal retrieval and reasoning system capable of semantic understanding across heterogeneous research documents including text, tables, figures, and formulas.",
    category: "RAG / NLP",
    techStack: ["LangChain", "ChromaDB", "MiniLM", "DistilBERT", "FLAN-T5"],
    architecture: [
      "Modular pipeline: ingestion → embedding → indexing → retrieval → reasoning → generation",
      "Embedding-based semantic retrieval using MiniLM embedding pipelines",
      "Vector database indexing with ChromaDB for scalable semantic indexing",
      "DistilBERT-based QA workflows with FLAN-T5 response generation",
    ],
    preprocessing: [
      "Multimodal document ingestion and PDF parsing pipelines",
      "Structured text, table, and figure extraction",
      "Heterogeneous document processing and research paper indexing",
    ],
    evaluation: [
      "Context-aware retrieval workflows with similarity-based ranking",
      "Factual reasoning handling numerical queries and multimodal contextual reasoning",
      "Retrieval-conditioned generation for accurate research-document intelligence",
    ],
    githubUrl: "https://github.com/Ishupawar081/Multimodal-rag",
  },
  {
    id: "heart2bot",
    title: "Heart2Bot Emotional Support Chatbot",
    description: "Research-grade interpretable emotional reasoning and persona-aware conversational AI system built using LLaMA-2 and chain-of-thought emotional support generation.",
    category: "LLMs / NLP",
    techStack: ["LLaMA-2 7B", "PEFT", "Transformers", "NLP", "PyTorch"],
    architecture: [
      "Fine-tuned LLaMA-2 7B with PEFT optimization for single-GPU training",
      "Chain-of-thought emotional reasoning and interpretable response pipelines",
      "Conversational memory systems for multi-turn contextual support",
    ],
    preprocessing: [
      "Persona extraction pipelines with key-point summarization",
      "User memory management, trait/interest extraction, and emotional context tracking",
      "Integrated datasets: ESConv, PESConv, ESCoT, ExTES (11K+ dialogue samples)",
    ],
    evaluation: [
      "Emotion identification, appraisal generation, and strategy planning",
      "Semantic similarity evaluation improved from 0.28 to 0.392",
      "BLEU score analysis improved from 0.001 to 0.006",
      "Ablation studies validating persona vs non-persona comparison",
    ],
    metrics: [
      { label: "Dialogue Samples", value: "11K+" },
      { label: "Combined Score", value: "0.282" },
      { label: "Similarity", value: "0.392" },
    ],
    githubUrl: "https://github.com/himanshikh/heart2bot",
  },
  {
    id: "podcast",
    title: "Blog-to-Podcast System",
    description: "End-to-end AI-powered content transformation pipeline converting web articles into downloadable podcast-style audio using local LLM inference.",
    category: "Generative AI / Audio AI",
    techStack: ["Python", "Streamlit", "Ollama", "Mistral", "gTTS", "BeautifulSoup"],
    preprocessing: [
      "Blog URL ingestion and requests-based webpage retrieval",
      "HTML parsing and structured paragraph extraction via BeautifulSoup",
      "Content preprocessing for LLM prompt ingestion",
    ],
    architecture: [
      "Subprocess-based local LLM execution using Ollama and Mistral",
      "Dynamic prompt-engineering workflows for conversational summarization",
      "gTTS audio synthesis and UUID-based dynamic file generation",
    ],
    infrastructure: [
      "Local open-source LLM inference bypassing external API dependencies",
      "Asynchronous-like processing workflow for real-time podcast generation",
      "Streamlit interactive UI for lightweight deployment architecture",
    ],
    demoUrl: "https://blog-to-podcast-479czzwtu6vywzazpmhfif.streamlit.app/",
  },
  {
    id: "forecasting",
    title: "End-to-End Time Series Forecasting",
    description: "Production-oriented forecasting and analytics platform combining statistical modeling, machine learning, backend APIs, and interactive visualization systems for large-scale sales forecasting.",
    category: "Forecasting / ML Systems",
    techStack: ["Python", "FastAPI", "Streamlit", "Prophet", "XGBoost", "TensorFlow", "LSTM", "SARIMA"],
    architecture: [
      "Scalable forecasting platform integrating model benchmarking and automated model selection",
      "FastAPI backend system with state-wise prediction endpoints and scalable inference workflows",
      "Streamlit frontend integration for interactive temporal trend graphs and model comparison",
    ],
    preprocessing: [
      "Chronological validation workflows preventing temporal leakage",
      "Mixed-format date parsing, missing-value handling, and temporal consistency checks",
      "Lag feature generation, rolling mean/std statistics, and temporal pattern encoding",
    ],
    evaluation: [
      "Benchmarked multiple paradigms: Prophet (RMSE: 34.4M), XGBoost (34.9M), SARIMA (40.0M), LSTM (47.3M)",
      "Prophet achieved strongest overall forecasting performance",
      "XGBoost captured nonlinear temporal behavior effectively",
    ],
    metrics: [
      { label: "Prophet RMSE", value: "34.4M" },
      { label: "XGBoost RMSE", value: "34.9M" },
      { label: "LSTM RMSE", value: "47.3M" },
    ],
    githubUrl: "https://github.com/Ishupawar081/forecasting",
  },
  {
    id: "eval",
    title: "LLM Response Evaluation Framework",
    description: "Scalable deterministic LLM evaluation and hallucination analysis framework engineered for production conversational systems. Measures relevance, grounding, hallucination risk, and efficiency without external LLM API dependencies.",
    category: "LLM Evaluation",
    techStack: ["Python", "NLP", "Regex Parsing", "Cosine Similarity", "Rule-Based Evaluation"],
    architecture: [
      "Stateless O(n) evaluation complexity architecture supporting horizontally scalable deployment",
      "Modular pipeline: Input Layer → Parsing Layer → Turn Extraction → Metric Engine → Output Layer",
      "Linear-time deterministic evaluation improving explainability and debugging",
    ],
    preprocessing: [
      "Strict JSON parsing with regex-based extraction fallback for malformed real-world logs",
      "Retrieval context ingestion and user query/AI response extraction",
    ],
    evaluation: [
      "Cosine-similarity based relevance scoring and keyword-coverage completeness analysis",
      "Hallucination grounding verification and entity/numeric consistency checking",
      "Sample Metrics: Relevance (0.1971), Completeness (0.6667), Hallucination Risk (0.32), Cost ($0.0002)",
    ],
    metrics: [
      { label: "Completeness", value: "0.666" },
      { label: "Hallucination Risk", value: "0.320" },
      { label: "Relevance", value: "0.197" },
    ],
    githubUrl: "https://github.com/Ishupawar081/llm-evaluation",
  },
  {
    id: "vqa",
    title: "Visual QA on Accident Videos",
    description: "Transformer-based multimodal video reasoning system for contextual accident-scene understanding and visual question answering.",
    category: "Computer Vision / Multimodal AI",
    techStack: ["Qwen", "Transformers", "Computer Vision", "Video Understanding", "Multimodal AI"],
    architecture: [
      "Qwen multimodal transformer architecture for visual-language reasoning",
      "Multimodal attention pipelines combining embeddings with frame-aware inference workflows",
      "Question-conditioned reasoning generating concise one-word contextual responses",
    ],
    preprocessing: [
      "Accident video ingestion and sequential frame extraction",
      "Visual context understanding and multimodal transformer feature alignment",
    ],
    evaluation: [
      "Successfully handles contextual accident understanding through multimodal attention",
      "Generates accurate, concise one-word answer predictions from complex video sequences",
    ],
  },
  {
    id: "sunspot",
    title: "Sunspot and Solar Irradiance Analysis",
    description: "Interactive scientific analytics and visualization platform studying long-term relationships between sunspot activity, solar irradiance, solar cycles, and climate patterns.",
    category: "Scientific Visualization",
    techStack: ["Python", "Streamlit", "Data Visualization"],
    architecture: [
      "Interactive scientific storytelling and responsive astronomy dashboards",
      "Historical dataset visualization architecture with scalable UI/UX workflows",
    ],
    preprocessing: [
      "Analysis of long-term temporal patterns and cyclical solar behavior",
      "Historical solar event analysis including Maunder and Dalton Minimums",
      "Correlation studies between solar cycles and Total Solar Irradiance (TSI)",
    ],
    evaluation: [
      "Identified strong positive correlations between sunspots and irradiance",
      "Interpreted temperature impacts, auroral intensity, and climate trends",
      "Visualized 11-year cycle patterns and Modern Maximum behaviors",
    ],
    demoUrl: "https://solar-taupe-three.vercel.app/",
  },
  {
    id: "pv",
    title: "Solar PV Analytics and Forecasting System",
    description: "Large-scale solar energy analytics and photovoltaic forecasting platform built using Global Solar Atlas datasets and scientific preprocessing pipelines.",
    category: "Energy Analytics / Data Science",
    techStack: ["Python", "Pandas", "Scikit-learn", "Geospatial Analysis"],
    preprocessing: [
      "Automated Excel parsing of multi-sheet scientific Global Solar Atlas datasets",
      "Extraction and temporal normalization of monthly averages and hourly PV profiles",
      "Missing value handling, categorical ordering, and numeric conversion pipelines",
    ],
    architecture: [
      "Scalable scientific preprocessing and analytical visualization workflows",
      "Direct Normal Irradiance (DNI) and photovoltaic output analysis systems",
      "Geospatial solar analytics mapping across 100+ Indian cities",
    ],
    evaluation: [
      "Identified March–May as peak PV output months and 10AM–1PM as peak hours",
      "Visualized temporal solar forecasting insights and seasonal energy patterns",
      "Deployed solar intensity dashboards, DNI trend plots, and hourly heatmaps",
    ],
  },
  {
    id: "adversarial-robustness",
    title: "Adversarial Robustness Evaluation & VAE-Based Defense",
    description: "Research-oriented adversarial machine learning pipeline evaluating robustness vulnerabilities of large-scale ImageNet classifiers (MobileNetV2, VGG19) under targeted PGD attacks and VAE-based defense mechanisms.",
    category: "Adversarial ML / Research",
    techStack: ["PyTorch", "TorchVision", "CUDA", "Computer Vision", "VAE", "Adversarial ML"],
    architecture: [
      "Targeted Projected Gradient Descent (PGD) attack with L∞ bounded optimizations",
      "MagNet-inspired adversarial purification system using Variational Autoencoders (VAE)",
      "Encoder-decoder architecture for latent-space reconstruction and adversarial denoising",
    ],
    preprocessing: [
      "ImageNet preprocessing pipelines with normalization/inverse-normalization workflows",
      "Adversarial batch generation and constrained perturbation optimization",
      "KL-divergence regularization for reconstruction-loss optimization",
    ],
    evaluation: [
      "MobileNetV2 clean accuracy: 84.6%, Targeted PGD ASR: 98.8%",
      "VGG19 targeted PGD ASR: 91.7%",
      "Accuracy after PGD attack reduced to near-zero levels using visually imperceptible perturbations",
    ],
    challenges: [
      "Modern ImageNet classifiers remain highly vulnerable to targeted adversarial attacks",
      "VAE-based purification partially reconstructs clean representations but robustness challenges remain",
      "Small, imperceptible perturbations can drastically alter predictions and generalize effectively",
    ],
    githubUrl: "https://github.com/Ishupawar081/adversial_attacks",
  },
  {
    id: "cod",
    title: "Universal Adversarial Attack on COD Models",
    description: "Research-grade universal adversarial perturbation framework targeting transformer-based camouflaged object detection (COD) architectures for segmentation robustness evaluation.",
    category: "Adversarial ML / Research",
    techStack: ["PyTorch", "Transformers", "Computer Vision", "Adversarial ML", "Segmentation Models"],
    architecture: [
      "Transformer-based COD architecture (PNet) multi-scale segmentation pipelines",
      "Universal adversarial perturbation generation with gradient-based optimization",
      "Target-mask suppression attacks forcing segmentation toward near-zero activation",
    ],
    preprocessing: [
      "Image-agnostic perturbation learning and constrained adversarial noise generation",
      "Integration of CAMO_COD_generate_99% datasets with fine-grained edge annotations",
      "Generalized cross-image attacks targeting final inference segmentation networks",
    ],
    evaluation: [
      "MAE degraded from 0.000000 → 0.125276",
      "F-measure collapsed from 0.990632 → 0.077077",
      "E-measure collapsed from 0.999969 → 0.093043",
      "S-measure degraded from 1.000000 → 0.874724",
    ],
    challenges: [
      "COD systems rely heavily on fragile feature representations",
      "Transformer-based segmentation systems remain vulnerable to adversarial perturbations",
      "Universal perturbations generalize successfully across multiple images causing mask collapse",
    ],
    githubUrl: "https://github.com/jiyaa25/Universal-Adversarial-Attack-on-Camouflaged-ObjectDetection-Models",
    reportUrl: "https://drive.google.com/file/d/1XtGjKx2ycLo8WVjk70V-GRfpv5qV_f5K/view?usp=sharing",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding border-t border-[rgba(255,255,255,0.05)]">
      <div className="container-custom">
        <m.div
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            variants={staggerItem}
            className="text-2xl font-semibold text-[#ededed] tracking-tight"
          >
            Engineering Projects
          </m.h2>
        </m.div>

        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
