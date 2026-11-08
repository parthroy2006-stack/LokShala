# LokShala (लोकशाला)
> **"Where the community becomes the classroom."**

An interactive prototype of a community-powered, offline-first educational ecosystem designed for children in remote mountain villages in Northeast India (e.g., Khonoma cluster, Nagaland).

Built specifically for a **Product Management Case Competition** to visually and experientially demonstrate the product concept, user journey, and social engineering behind shared-device learning.

---

## 🏔️ 1. Context & Village Constraints

In high-altitude Himalayan and Naga mountain villages:
- **Connectivity:** Cellular towers are intermittent and severely impacted by monsoon rain and winter frost.
- **Hardware:** Families cannot afford 1:1 smartphone ownership. The school operates with **one teacher laptop** and **three shared tablets**.
- **Pedagogy:** Classrooms have multi-age, multi-ability children who need differentiated attention.
- **Lost Capital:** Rich indigenous ecological, botanical, and agricultural knowledge held by village elders is overlooked by rigid national textbooks.

**LokShala** connects teachers, students, village elders, and local open-source AI into a cooperative offline learning circle.

---

## 🎨 2. Design System & Palette

Crafted to evoke warmth, natural mountain flora, and community solidarity:
- **Forest Green (`#245B45`)**: Primary brand, authority, lush pine hillsides.
- **Warm Cream (`#F8F7F2`)**: Calm, glare-free background suitable for low-power screens.
- **Light Sage (`#E5EFE7`)**: Soft secondary badges, cards, and accent highlights.
- **Terracotta (`#C87552`)**: Vibrant action color, earthy clay pottery, student buttons.
- **White (`#FFFFFF`)**: High-contrast card surfaces.

---

## 🚀 3. Quick Start (How to Run)

The application is completely self-contained with no external database or paid API keys required.

```bash
# Navigate to the project directory
cd "C:\Users\parth\.gemini\antigravity\scratch\lokshala"

# Install dependencies (already pre-installed in workspace)
npm install

# Start the local development server
npm run dev
```

Open your browser at `http://localhost:3000` (or the port Vite prints out).

---

## 🏗️ 4. Project Structure

```
lokshala/
├── index.html                           # App entry with Plus Jakarta Sans typography
├── package.json                         # React 18, TypeScript, Tailwind CSS, Lucide Icons
├── vite.config.ts                       # Vite configuration (port 3000)
├── tailwind.config.js                   # Custom design system palette (forest, cream, sage, terracotta)
├── postcss.config.js
├── README.md                            # Comprehensive product documentation
└── src/
    ├── main.tsx                         # React root mount
    ├── App.tsx                          # App shell, routing between Teacher, Student, & Landing
    ├── index.css                        # Tailwind base styles and custom scrollbars
    ├── types.ts                         # Domain models: Groups, Roles, Lessons, Community Entries
    ├── data/
    │   └── sampleData.ts                # Realistic Northeast India data (Khonoma elders, Alder agroforestry)
    ├── context/
    │   └── AppContext.tsx               # State management, LocalStorage sync, offline simulator engine
    └── components/
        ├── common/
        │   ├── Header.tsx               # Persistent header, offline mode toggle & status pill
        │   └── OfflineBadge.tsx         # Visual indicator (Offline Ready vs Needs Sync)
        ├── landing/
        │   └── LandingPage.tsx          # Dual entry paths: Teacher Dashboard & Student Learning
        ├── teacher/
        │   ├── TeacherDashboard.tsx     # Desktop-first teacher hub orchestrator
        │   ├── TeacherSidebar.tsx       # 7 core sections: Overview, Students, Resources, etc.
        │   ├── TeacherOverviewTab.tsx   # 4 statistics, weekly activity chart, alerts, quick actions
        │   ├── TeacherStudentsTab.tsx   # Peer groups, role assignments, student support flags
        │   ├── TeacherResourcesTab.tsx  # Curriculum library with subject filters and offline toggles
        │   ├── TeacherCommunityTab.tsx  # Elder knowledge explorer + 1-click "Convert to Lesson"
        │   ├── TeacherAILessonCreatorTab.tsx # Socratic module generator with case study presets
        │   ├── TeacherAssessmentsTab.tsx# Group-based formative evaluation and turn adherence
        │   ├── TeacherSettingsTab.tsx   # Classroom hardware topology (1 laptop + 3 tablets)
        │   ├── AddCommunityKnowledgeModal.tsx # Oral archive recording modal
        │   └── GenerateQuizModal.tsx    # Collaborative quiz creator modal
        └── student/
            ├── GroupSelectionScreen.tsx # "Learning Together", 3 groups, "One device. Learn together. Take turns."
            ├── StudentLearningDashboard.tsx # Student session container & state router
            ├── StudentHomeTab.tsx       # "Learn from Our Village" spotlight + 4 subject cards
            ├── RotatingRolesBar.tsx     # Interactive Reader, Solver, Checker turn cycle
            ├── LessonViewer.tsx         # Multi-step group lesson, checkpoints, formative quiz
            ├── AIAssistantWidget.tsx    # Socratic scaffolding: Hint -> Question -> Local Practice -> Audio
            ├── GroupProgressTab.tsx     # Cooperative badges, stars, and learning streaks
            ├── SavedLessonsTab.tsx      # Tablet storage inspector and offline cached modules
            └── StudentBottomNav.tsx     # Large touch-friendly nav (Home, Progress, Saved, Switch Group)
```

---

## ✨ 5. Key Features Implemented

### A. Dual Experience Architecture
- **Teacher Dashboard (Desktop-First):** Optimized for the single school laptop operated by Teacher Maya Devi. Includes 4 core stats, weekly collaborative chart, students needing support, and quick action modals.
- **Student Learning (Group-Based):** Tailored for 3–5 children huddling around one tablet. Prominent *"One device. Learn together. Take turns."* ethos.

### B. The Social Accountability Engine: Rotating Roles
Children rotate through three distinct, explicit roles with single-click interactive turnover:
1. **Reader:** Reads the story or problem aloud with clear pronunciation.
2. **Solver:** Proposes the solution using the group's collective ideas.
3. **Checker:** Validates the reasoning and ensures everyone agrees before tablet inputs are tapped.

### C. Community Knowledge Hub & Lesson Converter
- Six authentic elder oral knowledge entries from Northeast India (e.g., Himalayan Alder tree agroforestry, bamboo basket geometry, gravity water pipelines).
- Teachers can review elder contributions and **convert them in 1 click** into accredited classroom lessons with defined group roles and questions.

### D. Socratic AI Learning Assistant (Pedagogical Scaffolding)
- Specifically avoids giving direct answers.
- Provides 4-stage layered hints:
  1. *Small Clue* (e.g. noticing seasonal weather shifts).
  2. *Guiding Question* (e.g. why wet-paddy fails in dry winter).
  3. *Local Village Practice* (e.g. why Uncle Viseyie rotates crops).
  4. *Group Discussion Challenge* (e.g. group debate on village food security).
- **"Hear Hint" Audio Synthesis:** Uses the browser's native Web Speech API to read hints aloud through tablet speakers so the entire group can listen together without individual headphones.

### E. Simulated Offline-First Mode
- Instant global toggle in header and settings to simulate mountain weather disconnections.
- Fully persists all user state, created lessons, and progress in `localStorage`.
- Demonstrates graceful fallback: offline-ready lessons remain accessible, while un-synced lessons display clear status indicators.

---

## 🔍 6. Implemented vs. Simulated Features

To maintain credibility during your case presentation, here is the exact breakdown:

| Feature | Implementation Reality | Notes for Presentation Slide |
| :--- | :--- | :--- |
| **Interactive UI & Workflows** | **Fully Implemented** | All buttons, tabs, modal dialogs, and navigation work dynamically. |
| **Rotating Roles Engine** | **Fully Implemented** | Dynamically shifts member assignments between Reader, Solver, and Checker with real-time feedback. |
| **LocalStorage State & Caching**| **Fully Implemented** | Created lessons, added community knowledge, and stars persist across browser refreshes. |
| **Speech Audio ("Hear Hint")** | **Fully Implemented** | Powered by browser's native Web Speech API (zero external network latency). |
| **Offline Simulation** | **Implemented Simulation** | Simulates loss of mesh connectivity while maintaining local edge execution. |
| **AI Generation Engine** | **Simulated Scaffolding** | Uses structured templates demonstrating open-source quantized small language model behavior (e.g., Llama-3-8B / Mistral running on a local village laptop). |
| **Hardware Mesh Wi-Fi** | **Simulated Architecture** | Demonstrates the proposed local hotspot topology without requiring physical hardware routing. |

---

## 📊 7. Slide Pitch Alignment (For the 9–10 Slide Presentation)

1. **Slide 1: Problem:** Mountain terrain isolation, lack of 1:1 devices, intermittent connectivity.
2. **Slide 2: The LokShala Vision:** Community as the classroom, shared-device peer learning.
3. **Slide 3: User Journeys:** Teacher Maya Devi + Group A (Class 5 students).
4. **Slide 4: Product Architecture:** Offline-first edge caching + single-laptop village mesh.
5. **Slide 5: The Rotating Roles Engine:** Overcoming device hoarding through Reader/Solver/Checker turns.
6. **Slide 6: Community Knowledge Integration:** Preserving and formalizing indigenous ecological wisdom.
7. **Slide 7: Socratic AI Scaffolding:** Hints and local analogies, not answer generation.
8. **Slide 8: Unit Economics & Feasibility:** Open-source stack, commodity laptops/tablets, zero recurring API fees.
9. **Slide 9: Impact & Roadmap:** Scalability across Northeast hill clusters and Himalayan districts.
