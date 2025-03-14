const flashcard = document.getElementById('flashcard');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentCardNumber = document.getElementById('current-card-number');
const totalCards = document.getElementById('total-cards');

const flashcardData = [
    {
        patternName: "Prompt Engineering",
        whatItIs: "The art and science of crafting input prompts to guide generative AI models toward producing desired outputs.",
        whyItMatters: "Well-designed prompts can significantly improve the quality, relevance, and specificity of generated content.",
        bestPractices: "Use clear, concise, and specific instructions. Experiment with different prompt structures (e.g., zero-shot, few-shot, or chain-of-thought). Iterate and refine prompts based on model responses.",
        applications: "Text generation, code generation, creative writing, and conversational AI."
    },
    {
        patternName: "Retrieval-Augmented Generation (RAG)",
        whatItIs: "Combining generative models with external retrieval systems to ground responses in specific, up-to-date, or domain-specific knowledge bases.",
        whyItMatters: "Enhances the accuracy and relevance of outputs by incorporating external data sources.",
        bestPractices: "Use a retrieval system (e.g., a vector database) to fetch relevant documents or data. Integrate retrieved information into the generative model's context window. Ensure the retrieval system is optimized for speed and relevance.",
        applications: "Question answering, knowledge-intensive tasks, and domain-specific chatbots."
    },
    {
        patternName: "Chain-of-Thought (CoT) Prompting",
        whatItIs: "Guiding the AI to break down complex problems into intermediate reasoning steps before arriving at a final answer.",
        whyItMatters: "Improves the accuracy and interpretability of outputs, especially for reasoning-heavy tasks.",
        bestPractices: "Explicitly ask the model to 'think step by step.' Provide examples of step-by-step reasoning in few-shot prompts. Use CoT for tasks like math problems, logical reasoning, and decision-making.",
        applications: "Problem-solving, mathematical reasoning, and complex decision-making."
    },
    {
        patternName: "Fine-Tuning",
        whatItIs: "Adapting pre-trained generative models to specific domains, tasks, or datasets by performing additional training.",
        whyItMatters: "Improves model performance and alignment with specific use cases.",
        bestPractices: "Use domain-specific datasets for fine-tuning. Balance fine-tuning to avoid overfitting. Leverage techniques like LoRA (Low-Rank Adaptation) for efficient fine-tuning.",
        applications: "Custom chatbots, domain-specific content generation, and specialized language models."
    },
    {
        patternName: "Human-in-the-Loop (HITL)",
        whatItIs: "Incorporating human feedback and oversight into the generative AI workflow to improve outputs and ensure quality.",
        whyItMatters: "Reduces errors, biases, and hallucinations while improving user trust.",
        bestPractices: "Use human reviewers to validate and refine outputs. Implement feedback loops to continuously improve the model. Combine HITL with active learning to prioritize uncertain or challenging cases.",
        applications: "Content moderation, medical diagnosis, and legal document generation."
    },
    {
        patternName: "Multi-Agent Systems",
        whatItIs: "Using multiple AI agents to collaborate, debate, or critique each other's outputs to improve overall quality.",
        whyItMatters: "Encourages diverse perspectives and reduces errors or biases in generated content.",
        bestPractices: "Design agents with specialized roles (e.g., generator, critic, summarizer). Use debate or voting mechanisms to resolve disagreements. Optimize for efficiency to avoid excessive computational costs.",
        applications: "Creative writing, code review, and complex problem-solving."
    },
    {
        patternName: "Guardrails and Constrained Generation",
        whatItIs: "Implementing rules, filters, or constraints to ensure outputs adhere to specific guidelines (e.g., safety, ethics, or style).",
        whyItMatters: "Prevents harmful, biased, or off-topic outputs.",
        bestPractices: "Use predefined templates or schemas to structure outputs. Implement post-generation filters to detect and remove inappropriate content. Leverage reinforcement learning with human feedback (RLHF) to align outputs with desired behavior.",
        applications: "Safe content generation, compliance with regulations, and brand-aligned messaging."
    },
    {
        patternName: "Few-Shot and Zero-Shot Learning",
        whatItIs: "Leveraging pre-trained models to perform tasks with minimal (few-shot) or no (zero-shot) task-specific training data.",
        whyItMatters: "Reduces the need for large labeled datasets and enables rapid adaptation to new tasks.",
        bestPractices: "Use clear and descriptive prompts for zero-shot tasks. Provide a few high-quality examples for few-shot tasks. Experiment with different prompt formats to optimize performance.",
        applications: "Rapid prototyping, low-resource domains, and general-purpose AI systems."
    },
    {
        patternName: "Synthetic Data Generation",
        whatItIs: "Using generative AI to create artificial datasets for training or testing other models.",
        whyItMatters: "Addresses data scarcity and privacy concerns while improving model robustness.",
        bestPractices: "Ensure synthetic data is representative of real-world scenarios. Validate synthetic data quality through downstream tasks. Use techniques like differential privacy to protect sensitive information.",
        applications: "Data augmentation, privacy-preserving AI, and simulation."
    },
    {
        patternName: "Multi-Modal Generation",
        whatItIs: "Generating outputs across multiple modalities (e.g., text, images, audio) in a coherent and integrated manner.",
        whyItMatters: "Enables richer and more versatile applications.",
        bestPractices: "Use models trained on multi-modal datasets (e.g., CLIP, DALL·E). Align outputs across modalities to ensure consistency. Leverage cross-modal retrieval to enhance generation quality.",
        applications: "Text-to-image generation, video synthesis, and interactive storytelling."
    },
    {
        patternName: "Reinforcement Learning with Human Feedback (RLHF)",
        whatItIs: "Fine-tuning generative models using reinforcement learning, with human feedback as the reward signal.",
        whyItMatters: "Aligns model outputs with human preferences and values.",
        bestPractices: "Collect diverse and representative human feedback. Use reward models to generalize feedback across tasks. Balance exploration and exploitation during training.",
        applications: "Conversational AI, content moderation, and personalized recommendations."
    },
    {
        patternName: "Explainability and Interpretability",
        whatItIs: "Designing generative AI systems to provide explanations or justifications for their outputs.",
        whyItMatters: "Increases user trust and enables debugging of model behavior.",
        bestPractices: "Use attention mechanisms to highlight important input features. Generate step-by-step reasoning (e.g., chain-of-thought). Provide confidence scores or uncertainty estimates.",
        applications: "Medical diagnosis, legal analysis, and educational tools."
    },
    {
        patternName: "Hybrid Models",
        whatItIs: "Combining generative AI with other AI techniques (e.g., rule-based systems, symbolic AI) to improve performance.",
        whyItMatters: "Leverages the strengths of different approaches to address complex tasks.",
        bestPractices: "Use generative models for creative tasks and rule-based systems for structured tasks. Integrate external knowledge graphs or ontologies. Optimize for seamless interaction between components.",
        applications: "Knowledge-intensive tasks, decision support systems, and multi-step reasoning."
    },
    {
        patternName: "Continuous Learning and Adaptation",
        whatItIs: "Enabling generative AI systems to learn and adapt over time based on new data or user feedback.",
        whyItMatters: "Keeps models up-to-date and relevant in dynamic environments.",
        bestPractices: "Implement feedback loops for continuous improvement. Use techniques like online learning or incremental fine-tuning. Monitor model performance and retrain as needed.",
        applications: "Personalized recommendations, dynamic content generation, and real-time systems."
    },
    {
        patternName: "Ethical and Responsible AI",
        whatItIs: "Designing generative AI systems to minimize harm, bias, and misuse.",
        whyItMatters: "Ensures fairness, accountability, and societal acceptance.",
        bestPractices: "Conduct bias audits and fairness testing. Implement safeguards against harmful or misleading outputs. Engage stakeholders in the design and deployment process.",
        applications: "Public-facing AI systems, content moderation, and sensitive domains like healthcare."
    }
];

let currentCardIndex = 0;

function loadCardData(index) {
    const card = flashcardData[index];
    document.querySelector('.pattern-name').textContent = card.patternName;

    // Select the back of the card
    const back = document.querySelector('.back');

    // Clear previous content of back of card
    while (back.firstChild) {
        back.removeChild(back.firstChild);
    }

    // Create and append detail sections
    const whatItIsSection = createDetailSection("What it is", card.whatItIs, "what-it-is");
    back.appendChild(whatItIsSection);

    const whyItMattersSection = createDetailSection("Why it matters", card.whyItMatters, "why-it-matters");
    back.appendChild(whyItMattersSection);

    const bestPracticesSection = createDetailSection("Best Practices", card.bestPractices, "best-practices");
    back.appendChild(bestPracticesSection);

    const applicationsSection = createDetailSection("Applications", card.applications, "applications");
    back.appendChild(applicationsSection);

    currentCardNumber.textContent = index + 1;
}

function createDetailSection(headerText, contentText, headerClass) {
    const section = document.createElement("div");
    section.classList.add("detail-section");

    const header = document.createElement("div");
    header.classList.add("detail-header", headerClass);
    header.textContent = headerText;

    const text = document.createElement("div");
    text.classList.add("detail-text");
    text.textContent = contentText;

    section.appendChild(header);
    section.appendChild(text);

    return section;
}

function flipCard() {
    flashcard.classList.toggle('flipped');
}

function showPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadCardData(currentCardIndex);
    }
}

function showNextCard() {
    if (currentCardIndex < flashcardData.length - 1) {
        currentCardIndex++;
        loadCardData(currentCardIndex);
    }
}

//Initial load
loadCardData(currentCardIndex);
totalCards.textContent = flashcardData.length;

//Event Listeners
flashcard.addEventListener('click', flipCard);
prevBtn.addEventListener('click', showPreviousCard);
nextBtn.addEventListener('click', showNextCard);