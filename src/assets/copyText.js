const copyText = {
  general: {
    headline: 'Renato-do list',
  },
  landingView: {
    imageAlt: 'landing-view',
    ctaLabel: 'Inizia',
  },
  introView1: {
    imageAlt: 'intro-view-1',
    subheadline: 'Come funziona?',
    arrayOfParagraphs: ['paragraph #1', 'paragraph #2', 'paragraph #3'],
    ctaLabel: 'Ho capito',
  },
  modal: {
    label: 'Ma siamo sicuri?',
    deleteButton: 'Rimuovi',
    goBackButton: 'Annulla',
  },
  toastLabel: 'Hai rimosso una task',
  speed: {
    headline: {
      headlineLabel: 'Quanto dura?',
    },
    name: 'speed option',
    options: [
      {
        id: 1,
        label: 'poco',
      },
      {
        id: 2,
        label: 'medio',
      },
      {
        id: 3,
        label: 'tanto',
      },
    ],
  },
  urgency: {
    headline: {
      headlineLabel: "Quanto e' importante?",
    },
    name: 'urgency option',
    options: [
      {
        id: 1,
        label: 'non urgente',
      },
      {
        id: 3,
        label: 'urgente',
      },
    ],
  },
  fun: {
    headline: {
      headlineLabel: "Quanto e' divertente?",
    },
    name: 'fun option',
    options: [
      {
        id: 1,
        label: 'tanto',
      },
      {
        id: 3,
        label: 'poco',
      },
    ],
  },
  tasks: {
    tasksTodoHeadline: 'Ancora da fare',
    tasksDoneHeadline: 'Taaaaaaaaaaac! Finito!',
  },
  addEditTask: {
    buttonGoBack: 'Lista',
    buttonDone: 'fatto',
    addTaskHeadline: 'Aggiungi una task',
    modifyTaskHeadline: 'Modifica la task',
    placeHolder: 'Cosa devi fare? Scrivilo qui.',
  },
};

export default copyText;
