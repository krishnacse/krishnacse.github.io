const quotes = ["The secret of life is to fall seven times and to get up eight times. — Paulo Coelho",
"It is impossible to live without failing at something unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default. ― J.K. Rowling",
"When you take risks, you learn that there will be times when you succeed, and there will be times when you fail, and both are equally important. ― Ellen DeGeneres",
"Failure is another stepping stone to greatness. ― Oprah Winfrey",
"I can accept failure. Everyone fails at something. But I can't accept not trying. ― Michael Jordan",
"Failure is a part of the process. You just learn to pick yourself back up. ― Michelle Obama",
"Our greatest glory is not in never failing, but in rising every time we fail. ― Confucius",
"Children have a lesson adults should learn, to not be ashamed of failing, but to get up and try again. Most of us adults are so afraid, so cautious, so 'safe,' and therefore so shrinking and rigid and afraid that it is why so many humans fail. Most middle-aged adults have resigned themselves to failure. ― Malcolm X",
"We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes – understanding that failure is not the opposite of success, it's part of success. ― Arianna Huffington",
"When we give ourselves permission to fail, we, at the same time, give ourselves permission to excel. ― Eloise Ristad",
"Many of life's failures are people who did not realize how close they were to success when they gave up. ― Thomas Edison",
"It's only when you risk failure that you discover things. When you play it safe, you're not expressing the utmost of your human experience. ― Lupita Nyong'o",
"It's fine to celebrate success but it is more important to heed the lessons of failure. ― Bill Gates",
"Those who dare to fail miserably can achieve greatly. ― John F. Kennedy",
"The greatest glory in living lies not in never falling, but in rising every time we fall. ― Ralph Waldo Emerson",
"There is no innovation and creativity without failure. Period. ― Brene Brown",
"There are no failures - just experiences and your reactions to them. ― Tom Krause",
"It's fine to celebrate success but it is more important to heed the lessons of failure. ― Bill Gates",
"Don't fear failure — not failure, but low aim is the crime. In great attempts, it is glorious even to fail. ― Bruce Lee",
"The one who falls and gets up is stronger than the one who never tried. Do not fear failure but rather fear not trying. ― Roy T. Bennett",
"Do not fear mistakes. You will know failure. Continue to reach out. — Benjamin Franklin",
"Only those who dare to fail greatly can ever achieve greatly. — Robert F. Kennedy",
"One who fears failure limits his activities. — Henry Ford",
"Let the fear of failure be the background noise of your success. — Giovanni Dienstmann",
"A fear of weakness only strengthens weakness. — Criss Jami",
"The greatest mistake you can make in life is to be continually fearing you will make one. — Elbert Hubbard",
"Don't fear failure — not failure, but low aim is the crime. In great attempts, it is glorious even to fail. ― Bruce Lee",
"The one who falls and gets up is stronger than the one who never tried. Do not fear failure but rather fear not trying. ― Roy T. Bennett",
"Do not fear mistakes. You will know failure. Continue to reach out. ― Benjamin Franklin",
"Only those who dare to fail greatly can ever achieve greatly. ― Robert F. Kennedy",
"One who fears failure limits his activities. ― Henry Ford",
"Let the fear of failure be the background noise of your success. ― Giovanni Dienstmann",
"A fear of weakness only strengthens weakness. ― Criss Jami",
"The greatest mistake you can make in life is to be continually fearing you will make one. ― Elbert Hubbard",
"Giving up is the only sure way to fail. ― Gena Showalter",
"The difference between average people and achieving people is their perception of and response to failure. ― John C. Maxwell",
"I have not failed. I have found 10,000 ways that don't work. ― Thomas Edison",
"Try again. Fail again. Fail better. ― Samuel Beckett",
"The master has failed more times than the beginner has tried. ― Stephen McCranie",
"You may be disappointed if you fail, but you are doomed if you don't try. ― Beverly Sills",
"Fear kills more dreams than failure ever will. ― Suzy Kassem",
"Failure is delay, not defeat. It is a temporary detour, not a dead end. ― Denis Waitley",
"You have to be able to accept failure to get better. ― Lebron James",
"You build on failure. You use it as a stepping stone. ― Johnny Cash",
"Failure after long perseverance is much grander than never to have a striving good enough to be called a failure. ― George Eliot",
"You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it. ― Maya Angelou",
"Success is most often achieved by those who don't know that failure is inevitable. ― Coco Chanel",
"We're born with success. It is only others who point out our failures, and what they attribute to us as failure.  ― Whoopi Goldberg",
"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. ― Dale Carnegie",
"Do not judge me by my successes; judge me by how many times I fell down and got back up again.  ― Nelson Mandela",
"My grandmother once told me, 'Don't let failure go to your heart and don't let success go to your head.  ― Will Smith",
"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.  ― Michael Jordan",
"Failure is success in progress.  ― Albert Einstein",
"Every failure brings with it the seed of an equivalent success.  ― Napoleon Hill",
"Failure happens all the time. It happens every day in practice. What makes you better is how you react to it.  ― Mia Hamm",
"Failure is only the opportunity more intelligently to begin again. ― Henry Ford","Courage allows the successful woman to fail and learn powerful lessons from the failure. So that in the end, she didn't fail at all. ― Maya Angelou",
"You can't let your failures define you. You have to let your failures teach you.",
"The past can hurt. But the way I see it, you can either run from it, or learn from it.",
"It is the true nature of mankind to learn from mistakes, not from example.",
"Making mistakes simply means you are learning faster. ",
"A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.",
"A man of genius makes no mistakes. His errors are volitional and are the portals of discovery."
]

let random_quote = Math.floor(Math.random()*quotes.length);
let quote = quotes[random_quote];

let text = document.getElementById("quote");
text.textContent = quote;












