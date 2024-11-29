import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '@alexwilk/spacesteps-types';

const initialState: Card[] = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    completed: true,
    description:
      'A memoir by Adam Kay about his experiences as a junior doctor in the NHS, offering a candid and often hilarious insight into the challenges of the profession.',
    author: 'Adam Kay',
    year: 2017,
    purcheseLink:
      'https://www.amazon.com/This-Going-Hurt-Secret-Diaries/dp/1509858636',
    notes:
      'A raw and honest account of life in the medical field with both humor and heartbreak.',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    completed: false,
    description:
      'A collection of nine short stories exploring the lives of Indian and Indian-American characters grappling with love, loss, and cultural identity.',
    author: 'Jhumpa Lahiri',
    year: 1999,
    purcheseLink:
      'https://www.amazon.com/Interpreter-Maladies-Jhumpa-Lahiri/dp/039592720X',
    notes:
      'Pulitzer Prize-winning collection; a beautiful exploration of human relationships.',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    completed: false,
    description:
      'The iconic fantasy series following the life of a young wizard, Harry Potter, and his battle against the dark wizard Voldemort.',
    author: 'J.K. Rowling',
    year: 1997,
    purcheseLink:
      'https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X',
    notes: 'Start of the magical journey; a must-read for fantasy lovers.',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    completed: true,
    description:
      'A science fiction saga set in a galaxy far, far away, revolving around the struggle between the Jedi and the Sith.',
    author: 'George Lucas (Creator)',
    year: 1977,
    purcheseLink: 'https://www.disneyplus.com/series/star-wars/37KNjLCSImax',
    notes: 'An epic space opera that has defined generations of fans.',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    completed: true,
    description:
      'A dark fantasy series following Geralt of Rivia, a monster hunter navigating a world filled with magic, politics, and betrayal.',
    author: 'Andrzej Sapkowski',
    year: 1992,
    purcheseLink:
      'https://www.amazon.com/Last-Wish-Introducing-Witcher-Sapkowski/dp/0316029181',
    notes:
      'Polish fantasy masterpiece that inspired the games and Netflix series.',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    completed: true,
    description:
      'An open-world action RPG where the player takes on the role of the Dragonborn, exploring the province of Skyrim while battling dragons and solving quests.',
    author: 'Bethesda Game Studios (Developer)',
    year: 2011,
    purcheseLink: 'https://elderscrolls.bethesda.net/en/skyrim',
    notes:
      'One of the most influential RPGs of all time with endless exploration.',
  },
  {
    id: 'card-7',
    columnId: 'column-1',
    title: 'Lord of The Rings',
    completed: true,
    description:
      'An epic high-fantasy novel following the journey to destroy the One Ring and the battle between good and evil.',
    author: 'J.R.R. Tolkien',
    year: 1954,
    purcheseLink:
      'https://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0544003411',
    notes: 'A cornerstone of fantasy literature; timeless and rich in lore.',
  },
  {
    id: 'card-8',
    columnId: 'column-1',
    title: 'Nigdziebądź',
    completed: true,
    description:
      'A dark urban fantasy novel about a man who stumbles into the magical and dangerous world of London Below.',
    author: 'Neil Gaiman',
    year: 1996,
    purcheseLink: 'https://www.amazon.com/Neverwhere-Neil-Gaiman/dp/0062476378',
    notes: 'Unique blend of whimsy and darkness.',
  },
  {
    id: 'card-9',
    columnId: 'column-2',
    title: 'Dirty Dancing',
    completed: true,
    description:
      'A classic romantic drama set in the summer of 1963, focusing on the forbidden love between Baby and her dance instructor Johnny.',
    author: 'Eleanor Bergstein (Writer)',
    year: 1987,
    purcheseLink:
      'https://www.amazon.com/Dirty-Dancing-Jennifer-Grey/dp/B0001GF2G4',
    notes: 'Iconic soundtrack and dance scenes; a beloved classic.',
  },
  {
    id: 'card-10',
    columnId: 'column-3',
    title: 'Mass Effect',
    completed: true,
    description:
      'A sci-fi action RPG series where players take on the role of Commander Shepard, making choices that affect the fate of the galaxy.',
    author: 'BioWare (Developer)',
    year: 2007,
    purcheseLink: 'https://www.masseffect.com/',
    notes: 'Renowned for its story, characters, and player choices.',
  },
  {
    id: 'card-11',
    columnId: 'column-3',
    title: 'Hogwarts Legacy',
    completed: false,
    description:
      'An open-world action RPG set in the Harry Potter universe, allowing players to attend Hogwarts and explore its magical world.',
    author: 'Portkey Games (Developer)',
    year: 2023,
    purcheseLink: 'https://www.hogwartslegacy.com/',
    notes: 'Immersive experience for Harry Potter fans.',
  },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Omit<Card, 'id' | 'completed'>>) => {
      state.push({
        id: `card-${Math.random()}`,
        completed: false,
        ...action.payload,
      });
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
