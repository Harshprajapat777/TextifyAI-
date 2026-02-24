const misspellings = {
  teh: ["the"],
  recieve: ["receive"],
  reciept: ["receipt"],
  occured: ["occurred"],
  occurence: ["occurrence"],
  seperate: ["separate"],
  definately: ["definitely"],
  accomodate: ["accommodate"],
  occurr: ["occur"],
  untill: ["until"],
  succesful: ["successful"],
  neccessary: ["necessary"],
  necesary: ["necessary"],
  concious: ["conscious"],
  consciou: ["conscious"],
  enviroment: ["environment"],
  goverment: ["government"],
  independant: ["independent"],
  grammer: ["grammar"],
  calender: ["calendar"],
  wierd: ["weird"],
  acheive: ["achieve"],
  beleive: ["believe"],
  arguement: ["argument"],
  begining: ["beginning"],
  commited: ["committed"],
  committment: ["commitment"],
  comparision: ["comparison"],
  completly: ["completely"],
  concensus: ["consensus"],
  convienient: ["convenient"],
  desparate: ["desperate"],
  diffrent: ["different"],
  dissapear: ["disappear"],
  embarass: ["embarrass"],
  exaggerrate: ["exaggerate"],
  existance: ["existence"],
  experiance: ["experience"],
  foriegn: ["foreign"],
  freind: ["friend"],
  gaurd: ["guard"],
  happend: ["happened"],
  harrass: ["harass"],
  immediatly: ["immediately"],
  intresting: ["interesting"],
  knowlege: ["knowledge"],
  libary: ["library"],
  maintainance: ["maintenance"],
  millenium: ["millennium"],
  mispell: ["misspell"],
  noticable: ["noticeable"],
  ocasionally: ["occasionally"],
  posession: ["possession"],
  prefered: ["preferred"],
  proffesional: ["professional"],
  pronounciation: ["pronunciation"],
  publically: ["publicly"],
  recomend: ["recommend"],
  refrence: ["reference"],
  relevent: ["relevant"],
  rythm: ["rhythm"],
  seize: ["seize"],
  sentance: ["sentence"],
  similer: ["similar"],
  sinceerly: ["sincerely"],
  speach: ["speech"],
  strenght: ["strength"],
  suprise: ["surprise"],
  thier: ["their"],
  tommorow: ["tomorrow"],
  tounge: ["tongue"],
  truely: ["truly"],
  vaccuum: ["vacuum"],
  wether: ["whether"],
  writting: ["writing"],
  adress: ["address"],
  buisness: ["business"],
  carreer: ["career"],
  charachter: ["character"],
  collegue: ["colleague"],
  comittee: ["committee"],
  comunicate: ["communicate"],
  decission: ["decision"],
  develope: ["develop"],
  efficent: ["efficient"],
  excercise: ["exercise"],
  fourty: ["forty"],
  gauruntee: ["guarantee"],
  hygeine: ["hygiene"],
  imediate: ["immediate"],
  judgement: ["judgment", "judgement"],
  lisence: ["license"],
  manuever: ["maneuver"],
  paralell: ["parallel"],
  persistant: ["persistent"],
  playwrite: ["playwright"],
  posible: ["possible"],
  priviledge: ["privilege"],
  questionaire: ["questionnaire"],
  resistence: ["resistance"],
  responsable: ["responsible"],
  scedule: ["schedule"],
  sucess: ["success"],
  threshhold: ["threshold"],
  transfered: ["transferred"],
  wich: ["which"],
  acommodation: ["accommodation"],
  agressive: ["aggressive"],
  apparantly: ["apparently"],
  basicly: ["basically"],
  beatiful: ["beautiful"],
  begginer: ["beginner"],
  bizzare: ["bizarre"],
  categorie: ["category"],
  cemetary: ["cemetery"],
  changable: ["changeable"],
  colum: ["column"],
  curiousity: ["curiosity"],
  defintion: ["definition"],
  deterrant: ["deterrent"],
  dilemna: ["dilemma"],
  dissapoint: ["disappoint"],
  equiptment: ["equipment"],
  excede: ["exceed"],
  familar: ["familiar"],
  fasination: ["fascination"],
  flourescent: ["fluorescent"],
  fulfil: ["fulfill"],
  greatful: ["grateful"],
  humourous: ["humorous"],
  ignorence: ["ignorance"],
  incidently: ["incidentally"],
  jelous: ["jealous"],
  liesure: ["leisure"],
  liason: ["liaison"],
  lightening: ["lightning"],
  lonliness: ["loneliness"],
  medival: ["medieval"],
  momento: ["memento"],
  minature: ["miniature"],
  mischievious: ["mischievous"],
  neice: ["niece"],
  occassion: ["occasion"],
  optimisim: ["optimism"],
  pasttime: ["pastime"],
  perserverance: ["perseverance"],
  personell: ["personnel"],
  peice: ["piece"],
  plagarism: ["plagiarism"],
  preceed: ["precede"],
  principel: ["principal", "principle"],
  reccomend: ["recommend"],
  religous: ["religious"],
  repitition: ["repetition"],
  sargent: ["sergeant"],
  soverign: ["sovereign"],
  speciman: ["specimen"],
  subsidary: ["subsidiary"],
  suficient: ["sufficient"],
  supercede: ["supersede"],
  symetrical: ["symmetrical"],
  temperture: ["temperature"],
  tendancy: ["tendency"],
  therefor: ["therefore"],
  togeather: ["together"],
  tyrany: ["tyranny"],
  unforgetable: ["unforgettable"],
  unneccesary: ["unnecessary"],
  usible: ["usable"],
  vegeterian: ["vegetarian"],
  visious: ["vicious"],
  vulnerible: ["vulnerable"],
  warrent: ["warrant"],
  wendsday: ["Wednesday"],
};

const genericPredictions = {
  "i want to": [
    "I want to write a document",
    "I want to review my notes",
    "I want to draft a summary",
    "I want to edit my text",
    "I want to create a report",
  ],
  "i need to": [
    "I need to finish this draft",
    "I need to proofread my work",
    "I need to organize my notes",
    "I need to write a response",
    "I need to check the details",
  ],
  "can you": [
    "Can you help me write this?",
    "Can you review my document?",
    "Can you suggest improvements?",
    "Can you check the grammar?",
    "Can you summarize this for me?",
  ],
  "how do i": [
    "How do I improve this text?",
    "How do I make this clearer?",
    "How do I structure this better?",
    "How do I start this document?",
    "How do I format this properly?",
  ],
  "please help": [
    "Please help me write this section",
    "Please help me proofread this",
    "Please help me rephrase this",
    "Please help me organize this",
    "Please help me finish this draft",
  ],
  "i am": [
    "I am working on a document",
    "I am writing a report",
    "I am drafting a response",
    "I am preparing a summary",
    "I am reviewing my notes",
  ],
  "the": [
    "The document needs revision",
    "The main point is that",
    "The following section covers",
    "The purpose of this text is",
    "The key takeaway here is",
  ],
  "this is": [
    "This is a draft of my work",
    "This is the revised version",
    "This is what I need help with",
    "This is the final section",
    "This is my first attempt",
  ],
};

const rolePredictions = {
  lawyer: {
    "i want to": [
      "I want to draft a contract",
      "I want to file a motion",
      "I want to review the case law",
      "I want to prepare a legal brief",
      "I want to write a settlement offer",
    ],
    "the client": [
      "The client has agreed to terms",
      "The client requests a continuance",
      "The client denies all allegations",
      "The client seeks damages for",
      "The client wishes to proceed with",
    ],
    "pursuant to": [
      "Pursuant to Section 12 of the Act",
      "Pursuant to the agreement dated",
      "Pursuant to applicable regulations",
      "Pursuant to our prior discussion",
      "Pursuant to the court's ruling",
    ],
  },
  doctor: {
    "i want to": [
      "I want to document the diagnosis",
      "I want to write a referral letter",
      "I want to update patient records",
      "I want to note the treatment plan",
      "I want to prepare discharge notes",
    ],
    "the patient": [
      "The patient presents with symptoms of",
      "The patient reports no prior history",
      "The patient was advised to follow up",
      "The patient is responding well to",
      "The patient requires further testing",
    ],
    "diagnosis": [
      "Diagnosis confirmed via lab results",
      "Diagnosis pending further evaluation",
      "Diagnosis is consistent with findings",
      "Diagnosis requires specialist referral",
      "Diagnosis was made based on imaging",
    ],
  },
  engineer: {
    "i want to": [
      "I want to write technical specs",
      "I want to document the API",
      "I want to outline the architecture",
      "I want to create a design proposal",
      "I want to write test documentation",
    ],
    "the system": [
      "The system should handle edge cases",
      "The system requires load balancing",
      "The system architecture follows MVC",
      "The system integrates via REST API",
      "The system needs error handling for",
    ],
    "we need": [
      "We need to optimize performance",
      "We need to refactor this module",
      "We need to add unit tests for",
      "We need to update the database schema",
      "We need to implement caching for",
    ],
  },
  faculty: {
    "i want to": [
      "I want to create a lesson plan",
      "I want to write exam questions",
      "I want to prepare lecture notes",
      "I want to draft a syllabus",
      "I want to outline a research paper",
    ],
    "the students": [
      "The students will learn about",
      "The students should demonstrate",
      "The students are expected to submit",
      "The students will work in groups on",
      "The students need to understand",
    ],
    "the course": [
      "The course covers fundamentals of",
      "The course objective is to develop",
      "The course includes hands-on projects",
      "The course assessment consists of",
      "The course material is organized by",
    ],
  },
  writer: {
    "i want to": [
      "I want to write a compelling opening",
      "I want to develop this character",
      "I want to describe the setting",
      "I want to write dialogue for",
      "I want to craft a plot twist",
    ],
    "the character": [
      "The character struggled with doubt",
      "The character walked into the room",
      "The character revealed the truth",
      "The character felt a sense of hope",
      "The character decided to leave",
    ],
    "in the": [
      "In the distance, a light appeared",
      "In the silence, memories surfaced",
      "In the morning, everything changed",
      "In the story, the hero discovers",
      "In the final chapter, we learn",
    ],
  },
  student: {
    "i want to": [
      "I want to write an essay about",
      "I want to summarize this chapter",
      "I want to prepare for the exam",
      "I want to take notes on this topic",
      "I want to outline my thesis",
    ],
    "i need help": [
      "I need help understanding this concept",
      "I need help with my bibliography",
      "I need help structuring my essay",
      "I need help with this assignment",
      "I need help studying for finals",
    ],
    "the topic": [
      "The topic of my essay is about",
      "The topic covers key concepts in",
      "The topic is relevant because",
      "The topic was discussed in class",
      "The topic requires further research",
    ],
  },
};

export function getCorrections(word) {
  const lower = word.toLowerCase();
  return misspellings[lower] || null;
}

export function correctFileText(text) {
  const corrections = [];
  const corrected = text.replace(/\b[a-zA-Z'-]+\b/g, (word, offset) => {
    const lower = word.toLowerCase();
    if (misspellings[lower]) {
      const fix = misspellings[lower][0];
      // preserve original casing of first letter
      const result = word[0] === word[0].toUpperCase()
        ? fix.charAt(0).toUpperCase() + fix.slice(1)
        : fix;
      corrections.push({ original: word, corrected: result, offset });
      return result;
    }
    return word;
  });
  return { corrected, corrections, totalWords: text.split(/\s+/).filter(Boolean).length };
}

export function getPredictions(text, role) {
  const trimmed = text.trim().toLowerCase();
  if (trimmed.length < 2) return [];

  // Check role-specific predictions first
  if (role && rolePredictions[role]) {
    for (const [prefix, predictions] of Object.entries(rolePredictions[role])) {
      if (trimmed.endsWith(prefix) || trimmed === prefix) {
        return predictions;
      }
    }
  }

  // Then check generic predictions
  for (const [prefix, predictions] of Object.entries(genericPredictions)) {
    if (trimmed.endsWith(prefix) || trimmed === prefix) {
      return predictions;
    }
  }

  return [];
}
