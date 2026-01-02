const ALL_STORIES = [
  {
    id: 'pigs',
    difficulty: 'Easy',
    title: 'The Three Little Pigs',
    content: `Once upon a time, three little pigs set out to build their own houses. The first pig built a house of straw. The second pig built a house of sticks. The third pig, who was very hard-working, built a house of bricks.
    Suddenly, a big bad wolf came to the straw house. "I'll huff and I'll puff and I'll blow your house down!" he shouted. He blew it down! The first pig ran to the stick house.
    The wolf went to the stick house and blew that down too! Both pigs ran to the brick house.
    The wolf huffed and puffed at the brick house, but he could not blow it down. The three little pigs were safe and happy inside their strong brick home.`,
    questions: [
      { id: 1, text: "What did the first pig use to build his house?", options: ["Straw", "Bricks", "Sticks", "Mud"], correctAnswer: "Straw" },
      { id: 2, text: "What did the second pig use?", options: ["Straw", "Bricks", "Sticks", "Glass"], correctAnswer: "Sticks" },
      { id: 3, text: "What did the third pig use?", options: ["Straw", "Bricks", "Sticks", "Paper"], correctAnswer: "Bricks" },
      { id: 4, text: "Who was hard-working?", options: ["The wolf", "The third pig", "The first pig", "No one"], correctAnswer: "The third pig" },
      { id: 5, text: "Who tried to blow the houses down?", options: ["A lion", "A bear", "A wolf", "A fox"], correctAnswer: "A wolf" },
      { id: 6, text: "What did the wolf say?", options: ["Hello!", "I'll blow your house down!", "I am hungry!", "Let me in!"], correctAnswer: "I'll blow your house down!" },
      { id: 7, text: "Which house did not blow down?", options: ["Straw", "Sticks", "Bricks", "None"], correctAnswer: "Bricks" },
      { id: 8, text: "Where did the pigs go for safety?", options: ["The garden", "The brick house", "The woods", "The river"], correctAnswer: "The brick house" },
      { id: 9, text: "How did the pigs feel at the end?", options: ["Sad", "Happy and safe", "Scared", "Angry"], correctAnswer: "Happy and safe" },
      { id: 10, text: "What is the lesson?", options: ["Build fast", "Hard work pays off", "Straw is good", "Run away"], correctAnswer: "Hard work pays off" }
    ]
  },
  {
    id: 'lion_mouse',
    difficulty: 'Easy',
    title: 'The Lion and the Mouse',
    content: `A mighty lion was sleeping when a tiny mouse started running over him. The lion woke up and caught the mouse. "Please let me go!" cried the mouse. "Maybe I can help you one day." The lion laughed but let him go.
    Later, the lion was caught in a hunter's net. He roared loudly. The tiny mouse heard him and ran to help.
    The mouse chewed through the ropes with his sharp teeth. Soon, the lion was free! 
    "Thank you," said the lion. He learned that even a tiny friend can be a big help.`,
    questions: [
      { id: 1, text: "Who was sleeping first?", options: ["The mouse", "The lion", "The hunter", "The bird"], correctAnswer: "The lion" },
      { id: 2, text: "Who ran over the lion?", options: ["A bunny", "A tiny mouse", "A cat", "An ant"], correctAnswer: "A tiny mouse" },
      { id: 3, text: "Did the lion let the mouse go?", options: ["No", "Yes", "Maybe", "He ate him"], correctAnswer: "Yes" },
      { id: 4, text: "What happened to the lion later?", options: ["He fell asleep", "He got lost", "He was caught in a net", "He found food"], correctAnswer: "He was caught in a net" },
      { id: 5, text: "Who heard the lion roar?", options: ["The hunter", "The mouse", "An elephant", "A monkey"], correctAnswer: "The mouse" },
      { id: 6, text: "How did the mouse help?", options: ["He pulled the net", "He chewed the ropes", "He called for help", "He hid"], correctAnswer: "He chewed the ropes" },
      { id: 7, text: "What did the mouse use to chew?", options: ["His paws", "His sharp teeth", "A rock", "A stick"], correctAnswer: "His sharp teeth" },
      { id: 8, text: "What did the lion learn?", options: ["Mice are tasty", "Roaring is good", "Tiny friends can help", "Don't sleep"], correctAnswer: "Tiny friends can help" },
      { id: 9, text: "Was the lion free at the end?", options: ["No", "Yes", "Almost", "He stayed caught"], correctAnswer: "Yes" },
      { id: 10, text: "What is the moral?", options: ["Be mean", "No act of kindness is wasted", "Lion is king", "Stay away"], correctAnswer: "No act of kindness is wasted" }
    ]
  },
  {
    id: 'shell',
    difficulty: 'Easy',
    title: 'The Shell',
    content: `Maya found a beautiful pink shell on the beach. When she held it to her ear, she heard a soft "Whoosh!" 
    "It's the ocean singing!" she told her brother. They decided to put the shell back near the water.
    "Wait," said her brother. "If we leave it, the ocean can keep its song."
    They watched as a small wave came and took the shell back home. Maya smiled, knowing the shell was happy.`,
    questions: [
      { id: 1, text: "What did Maya find?", options: ["A fish", "A pink shell", "A rock", "A crab"], correctAnswer: "A pink shell" },
      { id: 2, text: "Where was Maya?", options: ["In the park", "On the beach", "At school", "At home"], correctAnswer: "On the beach" },
      { id: 3, text: "What color was the shell?", options: ["Blue", "Pink", "Yellow", "Green"], correctAnswer: "Pink" },
      { id: 4, text: "What did Maya do with the shell?", options: ["Threw it", "Held it to her ear", "Broke it", "Hid it"], correctAnswer: "Held it to her ear" },
      { id: 5, text: "What sound did she hear?", options: ["A beep", "A soft whoosh", "A bang", "A whistle"], correctAnswer: "A soft whoosh" },
      { id: 6, text: "What did she think the sound was?", options: ["Wind", "The ocean singing", "A bird", "A radio"], correctAnswer: "The ocean singing" },
      { id: 7, text: "Who was with Maya?", options: ["Her sister", "Her brother", "Her mom", "Her friend"], correctAnswer: "Her brother" },
      { id: 8, text: "What did they decide to do?", options: ["Keep it", "Put it back", "Sell it", "Loss it"], correctAnswer: "Put it back" },
      { id: 9, text: "What took the shell away?", options: ["A bird", "A small wave", "A dog", "Maya"], correctAnswer: "A small wave" },
      { id: 10, text: "How did Maya feel at the end?", options: ["Sad", "Angry", "Happy", "Tired"], correctAnswer: "Happy" }
    ]
  },
  {
    id: 'tortoise_hare',
    difficulty: 'Easy',
    title: 'The Tortoise and the Hare',
    content: `A speedy hare always teased a slow tortoise for being slow. "Let's have a race!" said the tortoise. The hare laughed but agreed.
    The race started, and the hare ran far ahead. He was so sure he would win that he took a nap under a tree.
    The tortoise kept walking slowly but steadily. He never stopped.
    When the hare woke up, he saw the tortoise near the finish line! He ran as fast as he could, but it was too late. The tortoise won the race!`,
    questions: [
      { id: 1, text: "Who was very fast?", options: ["The tortoise", "The hare", "The lion", "The bird"], correctAnswer: "The hare" },
      { id: 2, text: "Who was slow and steady?", options: ["The hare", "The tortoise", "The snail", "The dog"], correctAnswer: "The tortoise" },
      { id: 3, text: "What did they decide to do?", options: ["Eat lunch", "Have a race", "Go swimming", "Play a game"], correctAnswer: "Have a race" },
      { id: 4, text: "Why did the hare take a nap?", options: ["He was sick", "He was sure he would win", "He was lazy", "The tree was pretty"], correctAnswer: "He was sure he would win" },
      { id: 5, text: "Where did the hare nap?", options: ["In a house", "Under a tree", "In the grass", "By the river"], correctAnswer: "Under a tree" },
      { id: 6, text: "Did the tortoise stop?", options: ["Yes, once", "Never", "Many times", "He went home"], correctAnswer: "Never" },
      { id: 7, text: "Who won the race?", options: ["The hare", "The tortoise", "No one", "Both"], correctAnswer: "The tortoise" },
      { id: 8, text: "When did the hare wake up?", options: ["In the morning", "When it was too late", "At noon", "He didn't"], correctAnswer: "When it was too late" },
      { id: 9, text: "How did the tortoise walk?", options: ["Fast", "Slowly but steadily", "Runny", "Jumping"], correctAnswer: "Slowly but steadily" },
      { id: 10, text: "What is the lesson?", options: ["Sleep more", "Slow and steady wins the race", "Fast is best", "Don't race"], correctAnswer: "Slow and steady wins the race" }
    ]
  },
  {
    id: 'cinderella',
    difficulty: 'Medium',
    title: 'Cinderella',
    content: `Cinderella was a kind girl who worked hard all day. Her fairy godmother helped her go to the royal ball. 
    "You must return by midnight!" warned the godmother. Cinderella danced with the prince and was very happy.
    But when the clock struck twelve, she ran away, losing one glass slipper. 
    The prince searched everywhere. Finally, he found Cinderella. The slipper fit perfectly, and they lived happily ever after.`,
    questions: [
      { id: 1, text: "What kind of girl was Cinderella?", options: ["Mean", "Kind", "Lazy", "Angry"], correctAnswer: "Kind" },
      { id: 2, text: "Who helped Cinderella?", options: ["Her sisters", "Her fairy godmother", "A dog", "A cat"], correctAnswer: "Her fairy godmother" },
      { id: 3, text: "Where did she go?", options: ["To the market", "To the royal ball", "To the park", "To the beach"], correctAnswer: "To the royal ball" },
      { id: 4, text: "When did she have to return?", options: ["By 10 PM", "By midnight", "By morning", "By lunch"], correctAnswer: "By midnight" },
      { id: 5, text: "Who did she dance with?", options: ["A king", "A prince", "A guard", "A baker"], correctAnswer: "A prince" },
      { id: 6, text: "What did she lose while running?", options: ["A ring", "A glass slipper", "A hat", "A glove"], correctAnswer: "A glass slipper" },
      { id: 7, text: "What material was the slipper made of?", options: ["Gold", "Silver", "Glass", "Wood"], correctAnswer: "Glass" },
      { id: 8, text: "What happened when the prince found her?", options: ["She hid", "The slipper fit", "She ran away", "He didn't know her"], correctAnswer: "The slipper fit" },
      { id: 9, text: "How does the story end?", options: ["She remained sad", "They lived happily ever after", "The slipper broke", "She went home"], correctAnswer: "They lived happily ever after" },
      { id: 10, text: "What struck twelve?", options: ["A bell", "The clock", "The drum", "The door"], correctAnswer: "The clock" }
    ]
  },
  {
    id: 'wolf_boy',
    difficulty: 'Medium',
    title: 'The Boy Who Cried Wolf',
    content: `A young shepherd boy felt bored while watching his sheep. To have some fun, he shouted, "Wolf! Wolf!" 
    The villagers ran to help, but there was no wolf. The boy laughed. He did it again another day, and again the villagers were tricked.
    One evening, a real wolf actually came! The boy shouted for help, but no one came. They thought he was lying again.
    The wolf chased the sheep away. The boy learned that no one believes a liar, even when they tell the truth.`,
    questions: [
      { id: 1, text: "What was the boy's job?", options: ["Baker", "Shepherd", "Fisherman", "Farmer"], correctAnswer: "Shepherd" },
      { id: 2, text: "Why did he shout 'Wolf!' at first?", options: ["He saw a wolf", "He was bored/wanted fun", "He was scared", "He was practicing"], correctAnswer: "He was bored/wanted fun" },
      { id: 3, text: "Who came to help him?", options: ["The sheep", "The villagers", "His friends", "No one"], correctAnswer: "The villagers" },
      { id: 4, text: "How did the boy feel when they came?", options: ["Guilty", "He laughed", "Sad", "Tired"], correctAnswer: "He laughed" },
      { id: 5, text: "Did he do it more than once?", options: ["No", "Yes", "Maybe", "I don't know"], correctAnswer: "Yes" },
      { id: 6, text: "When did the real wolf come?", options: ["In the morning", "One evening", "At noon", "At night"], correctAnswer: "One evening" },
      { id: 7, text: "Why didn't anyone help the last time?", options: ["They were busy", "They thought he was lying", "They didn't hear him", "They were sleeping"], correctAnswer: "They were thought he was lying" },
      { id: 8, text: "What happened to the sheep?", options: ["They stayed safe", "The wolf chased them away", "They ran home", "They ate the wolf"], correctAnswer: "The wolf chased them away" },
      { id: 9, text: "What did the boy learn?", options: ["Wolves are scary", "Don't cry", "No one believes a liar", "Sheep are fast"], correctAnswer: "No one believes a liar" },
      { id: 10, text: "Is it good to trick people?", options: ["Yes", "No", "Sometimes", "Always"], correctAnswer: "No" }
    ]
  },
  {
    id: 'robosanta',
    difficulty: 'Medium',
    title: 'Robosanta',
    content: `In the year 3000, Santa had a helper named Robosanta. Robosanta was made of shiny metal and had rocket boots.
    One Christmas Eve, the sleigh's engine stopped working. Robosanta used his rocket boots to pull the sleigh across the sky!
    He delivered all the presents in record time. "Ho ho! Good job, Robosanta!" said Santa.
    Even though he was a robot, his heart was full of Christmas cheer.`,
    questions: [
      { id: 1, text: "What year does the story take place?", options: ["2000", "3000", "2024", "4000"], correctAnswer: "3000" },
      { id: 2, text: "What is Robosanta made of?", options: ["Plastic", "Shiny metal", "Wood", "Glass"], correctAnswer: "Shiny metal" },
      { id: 3, text: "What special boots does he have?", options: ["Rubber boots", "Rocket boots", "Magic boots", "Gold boots"], correctAnswer: "Rocket boots" },
      { id: 4, text: "What happened to the sleigh?", options: ["It got lost", "The engine stopped", "It broke down", "It flew too high"], correctAnswer: "The engine stopped" },
      { id: 5, text: "How did Robosanta help?", options: ["He fixed the engine", "He pulled the sleigh", "He walked", "He called help"], correctAnswer: "He pulled the sleigh" },
      { id: 6, text: "When did this happen?", options: ["New Year", "Christmas Eve", "Birthday", "Morning"], correctAnswer: "Christmas Eve" },
      { id: 7, text: "Were the presents delivered?", options: ["No", "Yes", "Some of them", "Maybe"], correctAnswer: "Yes" },
      { id: 8, text: "What did Santa say?", options: ["Stop!", "Good job!", "Hurry up!", "Go away!"], correctAnswer: "Good job!" },
      { id: 9, text: "What was full of cheer?", options: ["The sleigh", "His heart", "The bag", "The metal"], correctAnswer: "His heart" },
      { id: 10, text: "Can a robot have cheer?", options: ["Never", "In this story, yes", "No", "I don't know"], correctAnswer: "In this story, yes" }
    ]
  },
  {
    id: 'golden_goose',
    difficulty: 'Medium',
    title: 'The Golden Goose',
    content: `A poor man found a magical goose that laid one solid gold egg every single day. He became very rich!
    But soon, he became greedy. "I want all the gold eggs at once!" he thought. He believed there must be a giant treasure inside the goose.
    He killed the goose to find the gold, but inside, it was just like any other goose. There was no gold inside at all.
    Because of his greed, he lost the wonderful goose and the golden eggs forever.`,
    questions: [
      { id: 1, text: "What kind of goose did the man find?", options: ["Normal", "Magical", "White", "Wild"], correctAnswer: "Magical" },
      { id: 2, text: "What did the goose lay?", options: ["Silver eggs", "Gold eggs", "Large eggs", "Blue eggs"], correctAnswer: "Gold eggs" },
      { id: 3, text: "How many eggs did it lay each day?", options: ["One", "Ten", "Two", "None"], correctAnswer: "One" },
      { id: 4, text: "What happened to the man?", options: ["He stayed poor", "He became rich", "He was sad", "He ran away"], correctAnswer: "He became rich" },
      { id: 5, text: "What feeling made him want more?", options: ["Love", "Greed", "Hunger", "Tiredness"], correctAnswer: "Greed" },
      { id: 6, text: "What did he think was inside the goose?", options: ["A giant treasure", "Water", "Feathers", "A nest"], correctAnswer: "A giant treasure" },
      { id: 7, text: "What did he do to the goose?", options: ["Fed it", "Killed it", "Sold it", "Let it go"], correctAnswer: "Killed it" },
      { id: 8, text: "Was there any gold inside?", options: ["Yes, lots", "No", "Only a little", "Maybe"], correctAnswer: "No" },
      { id: 9, text: "What did he lose?", options: ["His house", "The goose and eggs", "His money", "His friends"], correctAnswer: "The goose and eggs" },
      { id: 10, text: "What is the moral?", options: ["Gold is good", "Don't be greedy", "Kill animals", "Be rich"], correctAnswer: "Don't be greedy" }
    ]
  },
  {
    id: 'alice',
    difficulty: 'Hard',
    title: 'Alice’s Magical Journey in Wonderland',
    content: `Alice followed a white rabbit down a hole and entered a world called Wonderland. 
    Everything was curious! She drank a potion that made her small and ate a cake that made her tall.
    She met a cat with a floating smile and had tea with a hatter who told riddles.
    "Nothing is impossible here," Alice realized. She learned to use her imagination to solve problems and eventually found her way back home, never forgetting her magical journey.`,
    questions: [
      { id: 1, text: "Who did Alice follow?", options: ["A dog", "A white rabbit", "A cat", "A bird"], correctAnswer: "A white rabbit" },
      { id: 2, text: "Where did she enter?", options: ["A cave", "A hole to Wonderland", "A door", "A forest"], correctAnswer: "A hole to Wonderland" },
      { id: 3, text: "What made her small?", options: ["A cake", "A potion", "A juice", "A fruit"], correctAnswer: "A potion" },
      { id: 4, text: "What made her tall?", options: ["A cookie", "A cake", "A carrot", "Water"], correctAnswer: "A cake" },
      { id: 5, text: "Who had a floating smile?", options: ["The rabbit", "The cat", "The hatter", "Alice"], correctAnswer: "The cat" },
      { id: 6, text: "What did the hatter tell?", options: ["Stories", "Riddles", "Jokes", "Secrets"], correctAnswer: "Riddles" },
      { id: 7, text: "What did Alice realize about Wonderland?", options: ["It was scary", "Nothing is impossible", "It was real", "She hated it"], correctAnswer: "Nothing is impossible" },
      { id: 8, text: "What did she use to solve problems?", options: ["A map", "Her imagination", "A sword", "A key"], correctAnswer: "Her imagination" },
      { id: 9, text: "Did she find her way home?", options: ["No", "Yes", "Maybe", "She stayed"], correctAnswer: "Yes" },
      { id: 10, text: "How was the journey described?", options: ["Boring", "Magical", "Long", "Short"], correctAnswer: "Magical" }
    ]
  },
  {
    id: 'beauty_beast',
    difficulty: 'Hard',
    title: 'Beauty IS a Beast',
    content: `Belle was a brave girl who went to stay in a castle with a beast. At first, she was afraid, but she saw that the beast had a kind heart.
    She taught him how to read, and they spent many happy days together.
    But one day, Belle realized that "Beauty" isn't about how you look, but how you act.
    The beast transformed not into a prince, but into his best self because of Belle's kindness. They showed everyone that true beauty comes from within.`,
    questions: [
      { id: 1, text: "What was the girl's name?", options: ["Belle", "Alice", "Cindy", "Rose"], correctAnswer: "Belle" },
      { id: 2, text: "Where did she go to stay?", options: ["A house", "A castle", "A cave", "A hotel"], correctAnswer: "A castle" },
      { id: 3, text: "How did she feel at first?", options: ["Exited", "Afraid", "Angry", "Happy"], correctAnswer: "Afraid" },
      { id: 4, text: "What did the beast have?", options: ["A treasure", "A kind heart", "A garden", "A secret"], correctAnswer: "A kind heart" },
      { id: 5, text: "What did Belle teach the beast?", options: ["To dance", "To read", "To cook", "To sing"], correctAnswer: "To read" },
      { id: 6, text: "What did Belle realize about beauty?", options: ["It's about clothes", "It's about how you act", "It's about money", "It doesn't matter"], correctAnswer: "It's about how you act" },
      { id: 7, text: "What did the beast transform into?", options: ["A prince", "His best self", "A bird", "A star"], correctAnswer: "His best self" },
      { id: 8, text: "What caused the transformation?", options: ["Magic potion", "Belle's kindness", "A spell", "A kiss"], correctAnswer: "Belle's kindness" },
      { id: 9, text: "Where does true beauty come from?", options: ["The mirror", "Within", "The hair", "The gold"], correctAnswer: "Within" },
      { id: 10, text: "Were they happy together?", options: ["No", "Yes", "Only for a day", "Maybe"], correctAnswer: "Yes" }
    ]
  },
  {
    id: 'space_explorer',
    difficulty: 'Hard',
    title: 'The Space Explorer’s Discovery',
    content: `Captain Leo was exploring the Andromeda Galaxy when his radar detected a strange signal from Planet Zog.
    He landed his silver spaceship and found a forest of glowing purple trees. In the center was a crystal library that held the history of a thousand worlds.
    An ancient robot greeted him. "We have been waiting for someone with a curious heart," the robot said. 
    Leo didn't find gold or gems, but he found something better: knowledge. He returned to Earth not as a conqueror, but as a teacher.`,
    questions: [
      { id: 1, text: "What was the explorer's name?", options: ["Leo", "Max", "Sam", "Tom"], correctAnswer: "Leo" },
      { id: 2, text: "Which galaxy was he exploring?", options: ["Milky Way", "Andromeda", "Orion", "Star"], correctAnswer: "Andromeda" },
      { id: 3, text: "What was the name of the planet?", options: ["Mars", "Zog", "Xenon", "Earth"], correctAnswer: "Zog" },
      { id: 4, text: "What color were the trees?", options: ["Green", "Glowing purple", "Blue", "Red"], correctAnswer: "Glowing purple" },
      { id: 5, text: "What was found in the center of the forest?", options: ["A cave", "A crystal library", "A city", "A lake"], correctAnswer: "A crystal library" },
      { id: 6, text: "Who greeted Captain Leo?", options: ["An alien", "An ancient robot", "A king", "A ghost"], correctAnswer: "An ancient robot" },
      { id: 7, text: "What was the library waiting for?", options: ["A warrior", "A curious heart", "A rich man", "A pilot"], correctAnswer: "A curious heart" },
      { id: 8, text: "What did Leo find that was better than gold?", options: ["Magic", "Knowledge", "Food", "Water"], correctAnswer: "Knowledge" },
      { id: 9, text: "How did he return to Earth?", options: ["As a king", "As a teacher", "As a solider", "He didn't"], correctAnswer: "As a teacher" },
      { id: 10, text: "What was his spaceship made of?", options: ["Gold", "Silver", "Plastic", "Iron"], correctAnswer: "Silver" }
    ]
  }
];

export const STORIES = {
  easy: ALL_STORIES.filter(s => s.difficulty === 'Easy'),
  medium: ALL_STORIES.filter(s => s.difficulty === 'Medium'),
  hard: ALL_STORIES.filter(s => s.difficulty === 'Hard')
};

export const FLAT_STORIES = ALL_STORIES;
