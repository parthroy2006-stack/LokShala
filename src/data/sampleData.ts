import { StudentGroup, CommunityKnowledgeItem, Lesson, StudentSupportAlert, ActivityMetric } from '../types';

export const INITIAL_GROUPS: StudentGroup[] = [
  {
    id: 'group-a',
    name: 'Group A',
    grade: 'Class 5',
    leadVillage: 'Khonoma Ridge',
    members: [
      { id: 'm1', name: 'Aren Ao', initials: 'AA', avatarBg: 'bg-[#C87552]', assignedRole: 'Reader' },
      { id: 'm2', name: 'Chubala Longchar', initials: 'CL', avatarBg: 'bg-[#245B45]', assignedRole: 'Solver' },
      { id: 'm3', name: 'Kevise Chase', initials: 'KC', avatarBg: 'bg-[#366E58]', assignedRole: 'Checker' },
      { id: 'm4', name: 'Toshi Jamir', initials: 'TJ', avatarBg: 'bg-[#B06140]', assignedRole: 'Reader' },
    ],
    completedLessonsCount: 8,
    totalActivitiesCount: 26,
    starsEarned: 34,
    streakDays: 4,
    currentRoleCycle: 1,
    activeLessonId: 'lesson-1',
  },
  {
    id: 'group-b',
    name: 'Group B',
    grade: 'Class 6',
    leadVillage: 'Valley Stream',
    members: [
      { id: 'm5', name: 'Bendang Jamir', initials: 'BJ', avatarBg: 'bg-[#245B45]', assignedRole: 'Solver' },
      { id: 'm6', name: 'Imtila Pongen', initials: 'IP', avatarBg: 'bg-[#C87552]', assignedRole: 'Checker' },
      { id: 'm7', name: 'Lungso Angami', initials: 'LA', avatarBg: 'bg-[#366E58]', assignedRole: 'Reader' },
      { id: 'm8', name: 'Sentila Kichu', initials: 'SK', avatarBg: 'bg-[#B06140]', assignedRole: 'Solver' },
    ],
    completedLessonsCount: 11,
    totalActivitiesCount: 38,
    starsEarned: 48,
    streakDays: 6,
    currentRoleCycle: 2,
    activeLessonId: 'lesson-2',
  },
  {
    id: 'group-c',
    name: 'Group C',
    grade: 'Class 7',
    leadVillage: 'Pine Hill',
    members: [
      { id: 'm9', name: 'Alemba Walling', initials: 'AW', avatarBg: 'bg-[#366E58]', assignedRole: 'Checker' },
      { id: 'm10', name: 'Moatila Imchen', initials: 'MI', avatarBg: 'bg-[#245B45]', assignedRole: 'Reader' },
      { id: 'm11', name: 'Neiketou Meyase', initials: 'NM', avatarBg: 'bg-[#C87552]', assignedRole: 'Solver' },
      { id: 'm12', name: 'Temjen Ozukum', initials: 'TO', avatarBg: 'bg-[#B06140]', assignedRole: 'Checker' },
    ],
    completedLessonsCount: 14,
    totalActivitiesCount: 45,
    starsEarned: 56,
    streakDays: 8,
    currentRoleCycle: 1,
    activeLessonId: 'lesson-1',
  },
];

export const COMMUNITY_KNOWLEDGE_ENTRIES: CommunityKnowledgeItem[] = [
  {
    id: 'ck-1',
    title: 'Traditional Mountain Farming & Alder Tree Agroforestry',
    category: 'Traditional Mountain Farming',
    shortDescription: 'How Himalayan Alder trees replenish nitrogen in terrace fields without chemical fertilizers.',
    contributor: 'Elder Viseyie Chase',
    contributorRole: 'Master Terrace Farmer (Khonoma Village)',
    relatedSubject: 'Science',
    seasonalContext: 'Monsoon sowing & post-harvest soil care',
    keyWisdom: [
      'Alder roots host nitrogen-fixing nodules that fertilize mountain soil naturally.',
      'Terraces are stepped to trap monsoon runoff and prevent topsoil erosion.',
      'Crops are rotated between uphill slopes and valley flats depending on rainfall.'
    ],
    fullStory: 'For generations, our village practiced cyclical terrace farming. We pollard Himalayan Alder trees every few years. The fallen leaves enrich the soil with organic nutrients. By timing our planting with mountain cloud movements, we produce abundant rice without buying chemical fertilizers from the plains.',
    isDownloadedOffline: true,
    convertedToLesson: true,
    lessonId: 'lesson-1',
    audioLanguageNote: 'Recorded in Tenyidie & Nagamese (Local Audio Cache)',
  },
  {
    id: 'ck-2',
    title: 'Seasonal Crops & Mountain Weather Forecasting',
    category: 'Seasonal Crops',
    shortDescription: 'Predicting monsoon arrival using cicada calls, pine cones, and hill wind directions.',
    contributor: 'Aunty Neitsolie Chase',
    contributorRole: 'Seed Keeper & Elder Botanist',
    relatedSubject: 'Science',
    seasonalContext: 'Pre-Monsoon & Autumn Transition',
    keyWisdom: [
      'When mountain cicadas sing at sunset, heavy rain follows in 48 hours.',
      'Millets and buckwheat are sown before cold mountain winds sweep down the pass.',
      'Local seed varieties withstand heavy moisture better than imported hybrids.'
    ],
    fullStory: 'Before digital weather forecasts, the mountain slopes gave us all signs. When the pine cones stay tightly shut on dry days, rain is coming. We select hardy highland seeds suited to our steep micro-climates.',
    isDownloadedOffline: true,
    convertedToLesson: false,
    audioLanguageNote: 'Local elder oral recording available offline',
  },
  {
    id: 'ck-3',
    title: 'Local Medicinal Plants of the Ridge Forest',
    category: 'Local Medicinal Plants',
    shortDescription: 'Traditional wild herbs used for cold, fever, stomach aches, and wound dressing.',
    contributor: 'Grandmother Chubasangla',
    contributorRole: 'Village Herbalist & Healer',
    relatedSubject: 'Science',
    seasonalContext: 'Spring budding season',
    keyWisdom: [
      'Wild Centella asiatica (Pennywort) aids memory and cools digestive fever.',
      'Crushed leaves of Mountain Artemisia stop minor cuts from bleeding on terrace paths.',
      'Never harvest more than one-third of any wild plant cluster to preserve regrowth.'
    ],
    fullStory: 'The mountain forest is our living medicine chest. Every child should know the five basic leaves growing near stream banks that cleanse cuts and soothe coughs during winter mist.',
    isDownloadedOffline: true,
    convertedToLesson: false,
    audioLanguageNote: 'Herb identification audio guide cached',
  },
  {
    id: 'ck-4',
    title: 'Folk Stories: The Hornbill and the Mountain Stream',
    category: 'Folk Stories',
    shortDescription: 'Oral folktale teaching stewardship of high-altitude water springs and shared village canals.',
    contributor: 'Grandpa Imlisunep',
    contributorRole: 'Village Storyteller & Elder',
    relatedSubject: 'English',
    seasonalContext: 'Harvest Story Evenings',
    keyWisdom: [
      'Water diverted unfairly to one family dries the stream for everyone below.',
      'Birds are the sentinels of forest health; when birds depart, springs fade.',
      'Oral storytelling builds listening, comprehension, and vocabulary in children.'
    ],
    fullStory: 'In the old days, a great hornbill made its nest above the sacred spring. It warned the villagers whenever landslides blocked the upper brook. The story teaches why our community still cleans water canals collectively every Saturday.',
    isDownloadedOffline: true,
    convertedToLesson: false,
    audioLanguageNote: 'Bilingual audio story (English & Local Dialect)',
  },
  {
    id: 'ck-5',
    title: 'Geometry and Angles in Bamboo Basket Weaving',
    category: 'Traditional Crafts',
    shortDescription: 'Symmetry, hexagonal interlacing, and strength distribution in handcrafted cane baskets.',
    contributor: 'Uncle Kevichüsa',
    contributorRole: 'Master Craftsman & Basket Weaver',
    relatedSubject: 'Mathematics',
    seasonalContext: 'Winter weaving season',
    keyWisdom: [
      'A hexagonal weave spreads heavy carrying loads across six pressure points.',
      'Angles of 60 degrees create the strongest base for grain transport up steep paths.',
      'Counting splits in multiples of 3 and 6 ensures basket balance.'
    ],
    fullStory: 'Weaving a carrying basket (Khodi) is applied mathematics. If your angles deviate from 60 degrees, the basket tilts and hurts the carrier’s back on steep mountain climbs.',
    isDownloadedOffline: true,
    convertedToLesson: true,
    lessonId: 'lesson-3',
    audioLanguageNote: 'Visual diagrams and artisan step-by-step notes',
  },
  {
    id: 'ck-6',
    title: 'Living Root Bridges & Water Spring Ecology',
    category: 'Local Environmental Knowledge',
    shortDescription: 'How village elders guide Ficus elastica aerial roots across mountain torrents.',
    contributor: 'Khonoma Community Forest Council',
    contributorRole: 'Ecology Guardians',
    relatedSubject: 'Our Community',
    seasonalContext: 'Year-round conservation',
    keyWisdom: [
      'Living tree bridges grow stronger with age, unlike concrete bridges in wet climates.',
      'Tree roots anchor steep riverbanks, preventing massive monsoon landslides.',
      'Community stewardship passes maintenance duty down through youth peer groups.'
    ],
    fullStory: 'Patience and biological engineering: our ancestors wove young roots through hollow betel nut trunks across raging monsoon rivers. Over decades, they hardened into living stone-like walkways that withstand flash floods.',
    isDownloadedOffline: false,
    convertedToLesson: false,
    audioLanguageNote: 'Oral archive queued for next sync cycle',
  },
];

export const LESSONS: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Mountain Farming and Seasonal Crops',
    subject: 'Science',
    grade: 'Class 5–6',
    durationMinutes: 25,
    summary: 'Discover how mountain slope terraces, rainfall cycles, and soil nutrients dictate what our village grows throughout the year.',
    isVillageKnowledge: true,
    villageSource: 'Terrace Farming Traditions of Khonoma',
    contributorName: 'Elder Viseyie Chase',
    isDownloadedOffline: true,
    downloadSize: '1.4 MB (Offline Ready)',
    iconName: 'Sprout',
    badgeText: 'Village Wisdom Connected',
    steps: [
      {
        stepNumber: 1,
        stepTitle: 'The Changing Mountain Seasons',
        readingSnippet: 'High in the hills, sunlight and water shift dramatically between seasons. During the monsoon (June–September), torrential rains flood the mountain terraces. In dry winter (November–February), frosty morning mist settles and streams shrink.',
        roleInstructions: {
          reader: 'Read the paragraph aloud with steady pace. Pause at comma and full stops.',
          solver: 'Point out on the tablet picture which months have torrential monsoon rain.',
          checker: 'Verify if the group agrees and confirm both rainy and dry seasons are named.',
        },
        groupQuestion: 'Why do farmers grow different crops in different seasons?',
        aiHints: {
          hint1: 'Look at the weather outside our classroom window. What natural resources change drastically between July and December?',
          guidingQuestion: 'Can a crop like paddy (rice)—which needs standing water—survive on a dry hillside in cold December?',
          localConnection: 'In our village, Uncle Viseyie plants wet-field paddy in June terraces, but rotates to leafy mustard, peas, and millets after harvest. Why?',
          discussionPrompt: 'Discuss in your group: What would happen to our food supply if we only planted one single crop all 12 months?',
        },
      },
      {
        stepNumber: 2,
        stepTitle: 'The Nitrogen Secret of the Alder Tree',
        readingSnippet: 'Our ancestors noticed that terraces directly below Himalayan Alder trees produced bigger ears of grain. Alder tree roots contain tiny nodules filled with friendly bacteria that pull nitrogen straight from mountain air into the soil!',
        roleInstructions: {
          reader: 'Read the sentence about root nodules and friendly bacteria aloud.',
          solver: 'Draw on paper or point to how air nitrogen travels into soil through roots.',
          checker: 'Ensure everyone understands that the tree makes its own natural fertilizer.',
        },
        groupQuestion: 'How does the Alder tree help other crops grow without store-bought chemical packets?',
        aiHints: {
          hint1: 'Plants need nutrients just like we need food. What special gas is in the air that the tree catches?',
          guidingQuestion: 'What do chemical fertilizers cost our village, and why is the Alder tree a sustainable gift?',
          localConnection: 'Elder Viseyie trims the Alder branches every 4 years so sunlight reaches the crops below while roots keep feeding the soil.',
          discussionPrompt: 'Take turns: Reader explains what nitrogen is; Solver explains where it goes; Checker sums up why the village protects these trees.',
        },
      },
      {
        stepNumber: 3,
        stepTitle: 'Terrace Engineering and Soil Conservation',
        readingSnippet: 'If farmers ploughed straight down a steep slope, monsoon downpours would wash the fertile brown topsoil straight into the river valley. By carving flat steps (terraces) with stone retaining walls, the water slows down and sinks in gently.',
        roleInstructions: {
          reader: 'Read how water moves on a flat terrace versus a steep slope.',
          solver: 'Demonstrate with a book or hand how a stepped terrace slows down water.',
          checker: 'Check if the team agrees on why topsoil is precious for future harvests.',
        },
        groupQuestion: 'What would happen to our mountain slope if terraces were not built?',
        aiHints: {
          hint1: 'Think about pouring a bucket of water down a slide versus down a staircase.',
          guidingQuestion: 'Where does the topsoil go during heavy rain if there are no stone terrace walls?',
          localConnection: 'Our village stone masons inspect the retaining walls before every monsoon. Every stone is placed without mortar to let water seep without bursting the wall.',
          discussionPrompt: 'Group challenge: Agree on the three main reasons our village builds stepped terraces.',
        },
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Why do farmers in our mountain village grow paddy (rice) primarily during the monsoon?',
        options: [
          'Because paddy roots need standing water and heavy rainwater fills terrace steps.',
          'Because paddy prefers freezing winter temperatures.',
          'Because pests do not exist during the monsoon.',
          'Because seeds cannot be planted in any other season.'
        ],
        correctIndex: 0,
        explanation: 'Paddy is a water-intensive crop. Mountain farmers harness the abundant monsoon downpours on stepped terraces to provide continuous standing water.',
        villageInsight: 'Elder Viseyie notes: "The monsoon is when the mountain gives water freely; we store it step by step."'
      },
      {
        id: 'q2',
        question: 'What special role does the Himalayan Alder tree play in our village agriculture?',
        options: [
          'It poisons unwanted weeds.',
          'Its root nodules fix nitrogen from the air into the soil naturally.',
          'It blocks all sunlight so nothing can grow.',
          'It produces sweet fruit eaten during winter.'
        ],
        correctIndex: 1,
        explanation: 'Alder trees are natural nitrogen-fixers. Symbiotic root bacteria convert atmospheric nitrogen into soil nutrients, fertilizing terrace fields naturally.',
        villageInsight: 'Community wisdom: Alder agroforestry has kept Khonoma soil fertile for over 300 years.'
      },
      {
        id: 'q3',
        question: 'If a group member is the "Solver" this turn, what is their primary responsibility?',
        options: [
          'Read the story alone while others wait.',
          'Work out the answer or demonstrate the solution with the team’s ideas.',
          'Write down their own answer without talking.',
          'Close the tablet.'
        ],
        correctIndex: 1,
        explanation: 'In LokShala group learning, the Solver leads finding the solution using ideas contributed by the Reader and Checker.',
        villageInsight: 'One device, learn together. Taking turns ensures everyone builds confidence.'
      }
    ]
  },
  {
    id: 'lesson-2',
    title: 'Gravity Water Supply & Mountain Spring Channels',
    subject: 'Science',
    grade: 'Class 6',
    durationMinutes: 20,
    summary: 'How water pressure, elevation differences, and bamboo pipes bring fresh spring water down steep hills without electric pumps.',
    isVillageKnowledge: true,
    villageSource: 'Khonoma Community Water System',
    contributorName: 'Community Stream Committee',
    isDownloadedOffline: true,
    downloadSize: '1.1 MB (Offline Ready)',
    iconName: 'Droplet',
    badgeText: 'Physics in Village Life',
    steps: [
      {
        stepNumber: 1,
        stepTitle: 'Elevation and Potential Energy',
        readingSnippet: 'Water naturally flows from high elevation to low elevation due to Earth’s gravitational pull. In our village, spring catchments sit 300 meters above the school.',
        roleInstructions: {
          reader: 'Read the definition of potential energy and elevation.',
          solver: 'Calculate the height difference between the spring and the school tap.',
          checker: 'Verify whether gravity alone is enough to push water through the pipes.',
        },
        groupQuestion: 'Why does water shoot out faster from a ground-floor tap than a rooftop tank?',
        aiHints: {
          hint1: 'Consider how heavy the column of water pressing down above the tap is.',
          guidingQuestion: 'What creates water pressure in a pipe that travels downhill?',
          localConnection: 'Look at the bamboo pipeline leading from the sacred spring into the communal tap stand.',
          discussionPrompt: 'Group debate: Could this gravity system supply water to a house built HIGHER than the spring?',
        },
      }
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'Why doesn’t our village school need an electric motor to get spring water?',
        options: [
          'Because water is pulled by magical magnets.',
          'Because the spring source is at a higher elevation, so gravity creates natural pressure.',
          'Because water runs uphill naturally in the morning.',
          'Because the pipes are made of copper.'
        ],
        correctIndex: 1,
        explanation: 'The vertical elevation difference creates hydrostatic pressure under gravity, pushing water downward through the pipes automatically.',
        villageInsight: 'Centuries of indigenous engineering use natural mountain slopes to deliver clean water.'
      }
    ]
  },
  {
    id: 'lesson-3',
    title: 'Angles, Triangles & Strength in Cane Baskets',
    subject: 'Mathematics',
    grade: 'Class 5',
    durationMinutes: 20,
    summary: 'Explore 60-degree angles, equilateral triangles, and hexagonal tessellations in traditional basket weaving.',
    isVillageKnowledge: true,
    villageSource: 'Artisan Workshop of Uncle Kevichüsa',
    contributorName: 'Uncle Kevichüsa',
    isDownloadedOffline: true,
    downloadSize: '950 KB (Offline Ready)',
    iconName: 'Compass',
    badgeText: 'Ethnomathematics',
    steps: [
      {
        stepNumber: 1,
        stepTitle: 'Triangles versus Rectangles in Structure',
        readingSnippet: 'When you push against a rectangle, it easily tilts into a slanted parallelogram. But a triangle cannot deform without breaking its sides! That is why weavers cross bamboo splits in triangles.',
        roleInstructions: {
          reader: 'Read how bamboo strips are arranged in triangular patterns.',
          solver: 'Try pushing opposite corners of a square versus a triangle on the screen.',
          checker: 'Check if the team understands why triangular weaving prevents basket collapse.',
        },
        groupQuestion: 'Why do bridge builders and basket weavers both rely on triangles?',
        aiHints: {
          hint1: 'Look at the sides of a triangle. Can the angles change without changing side lengths?',
          guidingQuestion: 'What happens when 50 kilograms of harvest potatoes are placed in a weak basket?',
          localConnection: 'Uncle Kevichüsa uses 6-way hexagonal weaving for grain carrying baskets.',
          discussionPrompt: 'Count how many triangles form one single hexagon on the basket weave diagram.',
        },
      }
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'What geometrical shape is known as the most rigid polygon in structural construction?',
        options: ['Circle', 'Rectangle', 'Triangle', 'Pentagon'],
        correctIndex: 2,
        explanation: 'Triangles have a fixed shape: their internal angles cannot flex or shift without changing the lengths of their sides.',
        villageInsight: 'Indigenous artisans discovered structural triangulation centuries before modern textbook geometry.'
      }
    ]
  },
  {
    id: 'lesson-4',
    title: 'Fractions in the Village Weekly Bazaar',
    subject: 'Mathematics',
    grade: 'Class 5',
    durationMinutes: 18,
    summary: 'Practice fractions, division, and weight sharing using bundles of firewood, pumpkin slices, and smoked chili weights.',
    isVillageKnowledge: false,
    isDownloadedOffline: true,
    downloadSize: '820 KB (Offline Ready)',
    iconName: 'Calculator',
    steps: [
      {
        stepNumber: 1,
        stepTitle: 'Sharing a Giant Winter Squash',
        readingSnippet: 'A farmer brings a 12 kg winter squash to share equally among 3 neighboring families. Each family receives one-third (1/3) of the squash.',
        roleInstructions: {
          reader: 'Read the market problem clearly.',
          solver: 'Calculate 12 divided by 3, and write down the fraction.',
          checker: 'Check the units (kg) and confirm equal portions.',
        },
        groupQuestion: 'If one family only wants half of their share today, what fraction of the whole squash do they take?',
        aiHints: {
          hint1: 'They take 1/2 of 1/3.',
          guidingQuestion: 'What is 1/2 multiplied by 1/3?',
          localConnection: 'At Saturday bazaar, vegetable portions are often divided into quarters and halves.',
          discussionPrompt: 'Take turns: explain how dividing food fairly builds trust in the village community.',
        },
      }
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'What is half of one-third (1/2 × 1/3)?',
        options: ['1/5', '1/6', '2/3', '1/4'],
        correctIndex: 1,
        explanation: 'Multiply numerators (1 × 1 = 1) and denominators (2 × 3 = 6) to get 1/6.',
        villageInsight: 'Sharing food fairly in portions is an everyday mountain village math skill.'
      }
    ]
  },
  {
    id: 'lesson-5',
    title: 'Descriptive Writing: Morning Mist over the Hills',
    subject: 'English',
    grade: 'Class 6',
    durationMinutes: 22,
    summary: 'Learn sensory adjectives, metaphors, and vivid verbs to describe our village landscape at dawn.',
    isVillageKnowledge: false,
    isDownloadedOffline: true,
    downloadSize: '740 KB (Offline Ready)',
    iconName: 'BookOpen',
    steps: [
      {
        stepNumber: 1,
        stepTitle: 'Sensory Words: Sight and Sound',
        readingSnippet: 'The silver mist rolled quietly across the emerald pine ridge. The distant crow of a rooster echoed through the crisp mountain air.',
        roleInstructions: {
          reader: 'Read with expressive voice to set the scene.',
          solver: 'Identify the two adjectives describing color and atmosphere.',
          checker: 'Verify that "silver" and "crisp" were highlighted.',
        },
        groupQuestion: 'Which sensory word in the sentence helps you "feel" the temperature?',
        aiHints: {
          hint1: 'Look for the word describing the mountain air.',
          guidingQuestion: 'Does "crisp" mean warm and muggy or cool and sharp?',
          localConnection: 'How does the morning air feel when you walk to school in November?',
          discussionPrompt: 'Each member gives one local adjective for winter morning in our hills.',
        },
      }
    ],
    quiz: [
      {
        id: 'q5-1',
        question: 'Which word in "The crisp morning air" is a sensory adjective?',
        options: ['The', 'Morning', 'Crisp', 'Air'],
        correctIndex: 2,
        explanation: '"Crisp" describes the fresh, cool, and sharp sensation of mountain air.',
        villageInsight: 'Connecting English vocabulary to real village surroundings accelerates language acquisition.'
      }
    ]
  },
  {
    id: 'lesson-6',
    title: 'Living in Harmony with the Forest Birds',
    subject: 'Our Community',
    grade: 'Class 5–7',
    durationMinutes: 25,
    summary: 'The story of how Khonoma became India’s first green village by banning hunting and protecting the Blyth’s Tragopan.',
    isVillageKnowledge: true,
    villageSource: 'Khonoma Nature Conservation and Tragedy to Triumph Movement',
    contributorName: 'Khonoma Village Council',
    isDownloadedOffline: false,
    downloadSize: '2.2 MB (Needs Sync)',
    iconName: 'ShieldAlert',
    badgeText: 'Village History',
    steps: [],
    quiz: []
  }
];

export const STUDENT_SUPPORT_ALERTS: StudentSupportAlert[] = [
  {
    id: 'supp-1',
    studentName: 'Toshi Jamir',
    groupName: 'Group A (Class 5)',
    grade: 'Class 5',
    concern: 'Hesitation during "Reader" turn with English sentences',
    observation: 'Struggles with multisyllabic words; excels when hearing peer audio or hints first.',
    suggestedAction: 'Pair with peer reader Aren; use "Hear Hint" audio before asking Toshi to read aloud.',
    severity: 'medium',
  },
  {
    id: 'supp-2',
    studentName: 'Chubala Longchar',
    groupName: 'Group A (Class 5)',
    grade: 'Class 5',
    concern: 'Advanced pace; completes "Solver" tasks faster than peers',
    observation: 'Often solves math/science challenges in 30 seconds and waits idly.',
    suggestedAction: 'Assign secondary peer-coaching role: prompt her to explain the "Why" to fellow group members.',
    severity: 'low',
  },
  {
    id: 'supp-3',
    studentName: 'Bendang Jamir',
    groupName: 'Group B (Class 6)',
    grade: 'Class 6',
    concern: 'Missed 2 shared device sessions due to terrace harvest chores',
    observation: 'Catching up on seasonal crop science modules.',
    suggestedAction: 'Offer offline summary card for Group B so he can catch up during morning reading hour.',
    severity: 'medium',
  },
  {
    id: 'supp-4',
    studentName: 'Sentila Kichu',
    groupName: 'Group B (Class 6)',
    grade: 'Class 6',
    concern: 'Shy during group discussions; lets boys dominate the tablet',
    observation: 'Holds back when group turns rotate without explicit reminders.',
    suggestedAction: 'Ensure strict rotation to Checker and Solver roles; encourage the group rule "One device, take turns".',
    severity: 'high',
  },
  {
    id: 'supp-5',
    studentName: 'Alemba Walling',
    groupName: 'Group C (Class 7)',
    grade: 'Class 7',
    concern: 'Excellent conceptual grasp; struggles with written spelling',
    observation: 'Answers verbal questions with high precision.',
    suggestedAction: 'Encourage verbal explanation followed by cooperative group spelling verification.',
    severity: 'low',
  },
];

export const WEEKLY_ACTIVITY_METRICS: ActivityMetric[] = [
  { day: 'Mon', activitiesCount: 22, activeGroups: 3 },
  { day: 'Tue', activitiesCount: 28, activeGroups: 3 },
  { day: 'Wed', activitiesCount: 19, activeGroups: 2 },
  { day: 'Thu', activitiesCount: 31, activeGroups: 3 },
  { day: 'Fri', activitiesCount: 26, activeGroups: 3 },
  { day: 'Sat', activitiesCount: 16, activeGroups: 2 },
];
