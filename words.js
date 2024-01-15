var words = [
'I’m Kathy King. ',
'Are you Peter Smith? ',
'How are you? ',
'Fine, thanks. And you? ',
'I’m fine, too. ',
'She is very well, thank you. ',
'Good night, Jane. ',
'Good-bye, Mike. ',
'See you tomorrow. ',
'See you later. ',
'I have to go now. ',
'May I come in? ',
'Come in, please. ',
'Sit down, please. ',
'It’s time for class. ',
'Open your books and turn to page 20. ',
'I’ll call the roll before class. ',
'Here! ',
'Has everybody got a sheet? ',
'Any different opinion? ',
'Are you with me? ',
'Have I made myself clear? ',
'Could you say it again? ',
'Any questions? ',
'That’s all for today. ',
'Please turn in your paper before leaving. ',
'What’s this? ',
'It’s a pen. ',
'Is this your handbag? ',
'Whose pen is this? ',
'It’s Kate’s. ',
'Is that a car? ',
'No, it isn’t. It’s a bus. ',
'What do you call this in English? ',
'What is the color of your new book? ',
'How big is your house? ',
'How long is the street? ',
'What’s the name of the cat? ',
'Where’s the company? ',
'Which is the right size? ',
'What’s this? ',
'It’s an air-conditioner. ',
'Is this yours? ',
'Yes, it’s mine. ',
'Where are my glasses? ',
'Do you know where I’ve put my glasses? ',
'Over there. ',
'On the desk. ',
'Is this your pen? I found it under the desk. ',
'No. Mine is blue. ',
'Which is your bag? ',
'The bigger one. ',
'The one on your right. ',
'Are these books all yours? ',
'Some of them are mine. ',
'Who are you? ',
'I’m Jim. ',
'Who is the guy over there? ',
'He’s Bob. ',
'Is that girl a student? ',
'No, she isn’t. ',
'What do you do? ',
'I’m a farmer. ',
'What does he do? ',
'He’s a manager. ',
'She must be a model, isn’t she? ',
'I really don’t know. ',
'I have no idea about it. ',
'Can she be a driver? ',
'Yes, I think so. ',
'What’s your name? ',
'May I have your name? ',
'My name is Thomas. ',
'Just call me Tom. ',
'What’s your family name? ',
'My family name is Ayneswonth. ',
'How do you spell it? ',
'Who is the lady in white? ',
'Could you introduce me to her? ',
'Rose, let me introduce my friend to you. ',
'This is Tom. He’s my classmate. ',
'Nice to meet you. ',
'Nice to meet you, too. ',
'Let me introduce myself. ',
'How do you do? ',
'What day is it today? ',
'It’s Monday today. ',
'What’s the date today? ',
'It’s January the 15th, 1999. ',
'What month is this? ',
'It’s December. ',
'What year is this? ',
'It’s the year of 1999. ',
'What will you do during this weekend? ',
'Does the shop open at 9 am on weekdays? ',
'It opens at 8 am on weekdays, but at 9 at weekends. ',
'What will you do the day after next? ',
'What did you do the week before last? ',
'I’ll work for the next 5 days. ',
'It’s been 5 years since I last saw you. ',
'Do you have a computer? ',
'Yes, I do. ',
'He has that book, doesn’t he? ',
'No, he doesn’t. ',
'Do you have any brothers or sisters? ',
'No, I’m a single son. ',
'Does your computer have a modem? ',
'Do you have shampoo here? ',
'What a beautiful garden you have! ',
'Any tickets left? ',
'Do you have glue? I need some here. ',
'I have some left. ',
'If you have more, please give me some. ',
'Do you have my pencil? ',
'Yes, I have your eraser, too. ',
'What time is it now? ',
'It’s two o’clock. ',
'It’s a quarter past five. ',
'It’s ten minutes to four. ',
'It’s half past nine. ',
'It’s one o’clock sharp. ',
'It’s not four o’clock. ',
'My watch says two o’clock. ',
'My watch is two minutes fast. ',
'What’s the time by your watch? ',
'We must arrive there on time. ',
'There are only two minutes left. ',
'Can you finish your work ahead of time? ',
'The flight is delayed. ',
'The meeting is put off. ',
'What day is today? ',
'Today is Monday. ',
'What’s the date today? ',
'Today is May 21st. ',
'When were you born? ',
'I was born on September 1st, 1976. ',
'What time? ',
'You name the time. ',
'I’ll meet you tomorrow. ',
'Do you know the exact date? ',
'Please check the date. ',
'What were you doing this time last year? ',
'How long will the sale last? ',
'Only three days. ',
'I’ll be back in 5 days. ',
'Hello. Can I see Mr. Green? ',
'Do you have an appointment? ',
'Sorry, I don’t. ',
'Yes. At 3 pm. ',
'Sorry, Mr. Green can’t see you now. ',
'He’s on the phone. ',
'Would you wait here for a minute? ',
'Would you like something to drink? ',
'Tea, please. ',
'Mr. Green, Mr. Smith is here. ',
'You may go in now. ',
'Nice to see you, my old friend. ',
'How have you been these years? ',
'You’ve changed little. ',
'Do you still remember that Christmas? ',
'Do you speak English? ',
'Yes, a little. ',
'How long have you studied English? ',
'He speaks English fluently. ',
'Your English is very good. ',
'You speak English pretty well. ',
'Are you a native speaker of English? ',
'My native language is Chinese. ',
'He speaks with a London accent. ',
'He has a strong accent. ',
'I have some difficulty in expressing myself. ',
'I’m always confused with "s" and "th". ',
'Can you write in English? ',
'Your pronunciation is excellent. ',
'How can I improve my spoken English? ',
'What are you doing? ',
'I’m reading a book. ',
'I’m cooking. ',
'Are you watching TV now? ',
'Yes, I’m watching Channel 5. ',
'No, I’m listening to the radio. ',
'Where are you going? ',
'I’m going to work. ',
'Who are you writing to? ',
'I’m writing to an old friend. ',
'What will you do this weekend? ',
'I’ll go to a concert. ',
'I’ll go on an outing with some friends. ',
'Do you like traveling? ',
'Yes, I like it a great deal',
'How old are you? ',
'I’m twenty-two (years old). ',
'Mr. Smith is still in his forties. ',
'I’m two years younger than my sister. ',
'My elder sister is one year older than her husband. ',
'He’s the youngest in the family. ',
'He looks much younger than he is. ',
'I came here when I was 20. ',
'I started school at the age of 6. ',
'My father is over 60 years old. ',
'Most of them are less than 30. ',
'I guess he’s about 30. ',
'She’s going to be 15 next month. ',
'They’ll have a party for their 10th wedding anniversary. ',
'He’s still a boy after all. ',
'When do you get up everyday? ',
'I usually get up at 8 o’clock. ',
'Where do you have your lunch? ',
'I have my lunch in a snack bar nearby. ',
'What did you have for lunch? ',
'I had a hamburger and a fried chicken leg. ',
'What time do you start work? ',
'I start work at 8 o’clock. ',
'What do you do at work? ',
'I answer telephones and do some typing. ',
'What time do you finish your work? ',
'At 6 o’clock sharp',
'What do you do in your spare time? ',
'I like listening to pop music. ',
'I like playing football. ',
'When did you get up yesterday morning? ',
'At about seven. ',
'I heard the alarm clock, but I didn’t get up until 9. ',
'I woke up at seven and got up right away. ',
'I hurried to my office. ',
'I had my breakfast on the way. ',
'I was just on time. ',
'I was 10 minutes late. ',
'I had lunch with a friend of mine. ',
'I finished my work at 6 p.m. ',
'I stayed and did some extra work. ',
'The TV programs were really boring, so I went to bed very early. ',
'I read a magazine in bed. ',
'I didn’t sleep well. ',
'I slept soundly all night. ',
'Hi, Joe, is it really you? ',
'Hi, Ann. Nice to see you again. ',
'It’s been a whole year since I last saw you. ',
'Yes, but you look as pretty now, as you did then. ',
'Oh, thank you. How have you been these days? ',
'Not too bad. ',
'But you sound so sad. ',
'Yes, I lost my pet cat yesterday. ',
'Oh, I’m sorry to hear that. ',
'That’s all right. ',
'Have you seen Kate lately? ',
'No, I have no contact with her. ',
'I heard she got married last week. ',
'Oh, how nice. Sorry, I’ve got to go now. ',
'So do I. See you later. Keep in touch. ',
'I used to take a walk in the early morning. ',
'He used to live in my neighborhood. ',
'Did you use to go fishing with friends? ',
'We have known each other for 6 years. ',
'It has been a long time since I last came here. ',
'Have you seen Mr. Smith recently? ',
'They’ve been working on this project since last year. ',
'I’ve been watching TV all night. ',
'The movie began as soon as we got there. ',
'When I arrived at the station, the train had already left. ',
'The late arrival of the ship had messed up all our plans. ',
'I had thought he knew the time of the meeting. ',
'They had expected me to go with them. ',
'That was the third time that I had visited the place. ',
'After I had finished my paper, I put it in the drawer. ',
'Hi, Jack, where do you live now? ',
'I live at 203 Curzon Street. ',
'Curzon Street? Isn’t Mary living there? ',
'Yes, she lives just across the street. ',
'How long have you stayed there? ',
'Just a few months. ',
'How about Mary? How long has she lived there? ',
'She’s been living there since her birth. ',
'Will you stay there for long? ',
'No, I’ll move to Hollywood next month. ',
'Oh, really? I’m moving there too. ',
'Great. Then we can drink beer together. ',
'Yes, and you may stay there longer. ',
'I hope so. ',
'I’m sure we’ll have a good time. ',
'Where are you going? ',
'Where did you go for dinner yesterday? ',
'When will he come to see you? ',
'When did you buy the car? ',
'Who told you? ',
'Who will accompany you to the airport? ',
'Why don’t you agree? ',
'Why not go out for a walk? ',
'How did you spend your holiday? ',
'How are you doing these days? ',
'What did he say in the letter? ',
'What are you going to do with the books? ',
'What were you doing when I called? ',
'I was about to leave. ',
'Can you guess what I was doing this morning? ',
'What’s the height of the building? ',
'How much does the elephant weigh? ',
'What’s the color of your new dress? ',
'What’s the size of your shoes? ',
'My brother is twice as tall as your sister. ',
'My grandma is 40 years older than me. ',
'This river is one third as long as that river. ',
'What’s the shape of your balloon? ',
'How wide is this bridge? ',
'How thick is the ice here? ',
'This metal is harder than that one. ',
'He can run as fast as Jim. ',
'Kate is smarter than I. ',
'How long do you watch TV every day? ',
'How often do you go swimming? ',
'Would you please open the door for me? ',
'May I ask you a question? ',
'Please give me a hand. ',
'Could you do me a favor? ',
'Would you help me remove the refrigerator? ',
'Get me my coat, please. ',
'Make me a cup of coffee, will you? ',
'Call me tomorrow if you have time. ',
'Could you tell me where I can find these books? ',
'Certainly. ',
'With pleasure. ',
'I’m sorry. I’m busy now. ',
'I’m glad to, but I’m afraid I don’t have the time. ',
'Would you mind closing the window for me? ',
'Not at all. ',
'Excuse me, madam. Could you tell me where the post office is? ',
'It’s just around the corner. ',
'Excuse me, how can I get to the bus station? ',
'You can take the bus and get off at the second stop. ',
'Excuse me. Where is No.5 Street? ',
'Go straight ahead and turn left at the second crossing. ',
'Excuse me. Can you tell me how to get to Mr. Hu’s restaurant? ',
'Go on for about 100 meters. It’s on your left side. You can’t miss it. ',
'Which one is Mr. Jame’s office? ',
'It’s Room 201 on the second floor. ',
'Can I use the lift? ',
'Sorry, it’s broken. You have to use the stairs. ',
'Where are the stairs? ',
'Go along the corridor and it’s on your right side. ',
'Thank you for directions. ',
'Are you married? ',
'I’m single. ',
'You have a younger brother, don’t you? ',
'How is your family? ',
'She’s engaged to John. ',
'How long have you been married? ',
'We’ve been married for 2 years. ',
'My parents got married in 1954. ',
'Mary gave birth to a baby last week. ',
'They’ve been divorced. ',
'His wife died a year ago. Now he lives alone. ',
'My aunt will come to live with me for a few days. ',
'John has his own family now. ',
'Do you live with your parents? ',
'No. I live in my own house. ',
'Do you know Mary? ',
'Sure. We have been friends since primary school. ',
'Really? I was introduced to her just last weekend. ',
'What is she doing now? ',
'She told me she wanted to start a company. ',
'Start a company? But I thought she would be a scholar. ',
'People are always changing, aren’t they? ',
'Yes, you’re right. After all, she is smart enough to go into business. ',
'But she doesn’t have much experience. ',
'You two don’t have much contact',
'No, I only wrote her one letter this year. ',
'And her? ',
'She sent me a Christmas card last year. ',
'Oh, that’s not good. ',
'Yes, we should try to contact more. ',
'What time are you going to leave for the airport tomorrow? ',
'Is he coming to dinner? ',
'I’m going to the bookstore. Will you go with me? ',
'They’re going to discuss it at the meeting next Friday. ',
'I’ll be waiting for you at the restaurant this time tomorrow. ',
'After I get home, I’ll call you. ',
'How will you spend the evening? ',
'I’ll probably stay home and watch TV. ',
'What’s your plan for the summer holiday? ',
'I’m thinking about a visit to Paris. ',
'There’s going to be a pottery exhibition at the art gallery. ',
'You are still thinking about a Ph.D., aren’t you? ',
'What will you do about it? ',
'What do you want to do after graduation? ',
'I’ll further my study. ',
'Have you heard the weather forecast? ',
'No, what does it say? ',
'We’ll have fine weather for the next few days. ',
'But it’s still raining today! ',
'It is said it will clear up tonight. ',
'What will it be after the clear weather? ',
'It says a storm may come next month. ',
'And it may get colder, it’s already November. ',
'Yes, and I hope we can have some snow this winter. ',
'I’m afraid it won’t be cold enough for a snowfall. ',
'But last year we had a big one. ',
'Yes, but you know global warming may raise the temperature. ',
'You are probably right. ',
'I’m going skiing in the Alps next month. ',
'I hope the weather there is cold enough. ',
'How are you feeling today? ',
'I don’t feel very well. ',
'Do you feel better now? ',
'Much better. ',
'I’m sick. ',
'He’s got a bad headache. ',
'My fever is gone. ',
'What’s the matter with you? ',
'I’ve got a pain in my back. ',
'It really hurts. ',
'It hurts right here. ',
'It’s bleeding. You’d better see a doctor about that cut. ',
'Call the doctor! ',
'Take two pills and have a good rest. ',
'I hope you’ll be well soon. ',
'I get up at 8 every morning. ',
'I then take a bath in the bathroom. ',
'I shave, brush my teeth, and comb my hair. ',
'I put on a bit of makeup. ',
'I cooked breakfast for the family. ',
'I go downstairs and have my breakfast. ',
'I read the newspaper over breakfast. ',
'I wake my sister up. ',
'I dress my sister and wash her hands and face. ',
'I get to my office at 10:30. ',
'I leave the office at 7. ',
'I buy some food on my way home. ',
'I pick up my sister from her school. ',
'We go to bed at 10:30. ',
'What do you think about it? ',
'Is that right? ',
'Absolutely right. ',
'I think you’re mistaken about that. ',
'Is that ok? ',
'That’s ok ',
'That’s excellent. ',
'He was absent yesterday. Do you know why? ',
'Do you have any idea? ',
'I suppose he was sick. ',
'Will it rain tomorrow? ',
'No, I don’t think so. ',
'Do you really want to know what I think? ',
'Please give me your advice. ',
'I want to hear your opinion. ',
'What do you plan to do this Friday? ',
'What are you doing next week? ',
'I plan to go to the concert. ',
'I’m thinking of going to my grandma’s. ',
'I’ll go skiing if the weather permits. ',
'I suppose I can finish the project next year. ',
'I have no idea. ',
'It’s up to you. ',
'I’m considering buying a house. ',
'Hi, Jack, what lessons will you take this semester? ',
'Hi, Lucy. I’ll take French and Economics. ',
'I’m taking Chinese and History. ',
'Do you plan to do some odd jobs? ',
'Yes, I’m applying to work at the library. ',
'Good luck! ',
'It’s up to you. ',
'You have the final say. ',
'She insists that it doesn’t matter. ',
'He’s made up his mind to quit his job. ',
'I’ve decided not to sell the house. ',
'I’m determined to leave. ',
'Have you decided? ',
'No, I haven’t decided yet. ',
'I’ve changed my mind. ',
'It’s still undecided. ',
'Don’t hesitate any more. ',
'Give me a definite answer, please. ',
'It’s really hard to make a decision. ',
'I’m always making resolutions, like giving up smoking. ',
'Do you like traveling? ',
'Yes, I’ve just come back from Scotland. ',
'How did you get there? ',
'I got there by plane. ',
'Where did you visit? ',
'I only had time to visit Edinburgh. ',
'How did you like it? ',
'It’s fantastic. ',
'Why did you go there? ',
'I went there on business. ',
'And do you have friends there? ',
'Yes, a lot of friends. ',
'You must have enjoyed yourself. ',
'Yes, and I took many pictures. ',
'Please let me see them. ',
'Will you go shopping with me? ',
'Here’s your change. ',
'I’ll go to pick up some odds and ends at the store. ',
'Excuse me, would you tell me where I can get some butter? ',
'May I have a look at the watch? ',
'May I try it on? ',
'This is too small for me. Do you have a bigger one? ',
'Do you have any more colors? ',
'What’s your size? ',
'It suits you to a T. ',
'It’s too expensive for me. ',
'Can you come down a bit? ',
'I’ll take it. ',
'How much is it? ',
'How much do I owe you? ',
'What would you like to eat? ',
'Are you ready to order? ',
'I’d like some steak and bread. ',
'What would you like for dessert? ',
'I’ll have some ice cream. ',
'Do you want some fruit? ',
'Yes, please. I want an apple. ',
'Anything to drink? ',
'A small glass of whisky, please. ',
'Here is your food. ',
'Bring me the bill please. ',
'Can I pay by check or credit card? ',
'Sorry, we only take cash. ',
'Here you are. ',
'Here is your change. ',
'I’m free tonight. ',
'Shall we go to the cinema? ',
'Do you know what’s on tonight? ',
'May I ask you for a dance? ',
'With pleasure. ',
'Sorry, I’m engaged. ',
'What about another dance? ',
'You’re a good dancer. ',
'What’s on Channel 8 now? ',
'I don’t know. You may look in the TV Guide. ',
'Let’s see what else is on. ',
'Did you see the special last night? ',
'I don’t want to see any more of this TV show. ',
'Can we change the channel? ',
'I want to see the weather. ',
'I’d like to make an appointment with Mrs. Green. ',
'She’s free on Friday and Saturday. ',
'Sorry, can I see her before Friday? ',
'Let me see. She has 30 minutes on Tuesday afternoon. ',
'At what time? ',
'From 4 to 4:30. ',
'All right. ',
'So you’ll come then. Please phone in if you can’t make it. ',
'I have an interview this afternoon. ',
'I can come any time except Sunday. ',
'You can reach me at 6609823. ',
'He phoned to cancel the meeting. ',
'Please call me before you come. ',
'Please make an appointment with my secretary. ',
'I have to change my appointment from Monday to Thursday. 
',
'What’s your trouble? ',
'How long have you had it? ',
'I should say you’ve caught a cold. ',
'You need an injection. ',
'Is it serious? ',
'Do I need to be hospitalized? ',
'Have you seen the doctor? ',
'What did the doctor say? ',
'Jack is up and about now. ',
'The doctor says that I should take quinine. ',
'What sort of medicine do you take? ',
'The doctor says that I should not eat anything oily. ',
'I had a shot of penicillin. ',
'You have to be operated on. ',
'He gave me a chest X-ray and took my blood pressure. ',
'Hello. May I speak to Mr. Green? ',
'Just a moment. ',
'Hold on. ',
'He’s not in. May I take a message for him? ',
'Yes, please. ',
'Would you answer the phone please? ',
'I want to make a long distance call. ',
'This is Mary Speaking. ',
'Would you tell Mr. Green that I called? ',
'I must have dialed a wrong number. ',
'I couldn’t get through. ',
'I have to hang up now. ',
'Would you call back tomorrow? ',
'There’s something wrong with the phone. ',
'I tried to call you, but the line was busy. ',
'I have received a letter from my cousin. ',
'I haven’t heard from him for a long time. ',
'Send a postcard to me when you arrive in Shanghai. ',
'I put some photographs in the envelope. ',
'He hasn’t answered my letter yet. ',
'My mother mailed me a parcel. ',
'We keep in touch with each other by Email since he left China. ',
'Don’t forget to put stamps on your letter. ',
'How long does it take for a letter to get to America from Beijing? ',
'You’ve got an express mail. ',
'To make it fast, you can send a fax. ',
'My mother has sent me a registered letter. I guess she has something important to tell me. ',
'I found my name on the blackboard. I must have got a remittance. ',
'Do you want to airmail it or not? ',
'I dropped the letter into the mailbox in front of the Post Office. ',
'You look radiant tonight. ',
'It was a terrible experience. ',
'I am on top of the world. ',
'The dinner was wonderful. ',
'The Christmas tree is gorgeous. ',
'What a boring movie it is! ',
'How can he give us such a tedious lecture! ',
'How fragrant the flowers are! ',
'The party is making too much noise. ',
'You look elegant in that dress. ',
'The coat doesn’t suit you. ',
'His flattery makes me sick. ',
'We had a good time. ',
'We enjoyed ourselves very much. ',
'I am bored to death. ',
'This house is for rent. ',
'It’s really a bargain. ',
'I want to rent a furnished house. ',
'That house is for sale. It has central heating. ',
'What kind of furniture do you like? ',
'This is a rather old house. It needs painting. ',
'I want an apartment with two bedrooms and a kitchen. ',
'The houses downtown are very expensive. ',
'How much is the rent for a month? ',
'I feel at home living here. The landlady is very kind to me. ',
'We have a few kitchen things and a dining room set. ',
'There’s no gas range in the kitchen, but you can use the electric stove. ',
'There is a shower in the bathroom. ',
'I have a dog, but it’s very quiet. ',
'The room has a big closet. You can put your baggage in it. ',
'What will you wear for the party? ',
'I’ll wear my blue dress. ',
'Don’t you think it’s too formal? ',
'Why? What will you wear? ',
'Just my shirt and jeans. ',
'You should have your suit cleaned and ironed. ',
'You’d better put on your jacket. It’s cold outside. ',
'The blouse no longer fits me. ',
'My son has outgrown these trousers. ',
'The shoes are worn-out. ',
'I don’t like wearing the uniform. ',
'Do you want to change before the banquet? ',
'Your shoe lace is loose. ',
'You forgot to fasten the collar buttons. ',
'Take off your hat. It doesn’t fit. ',
'He is a very creative student. ',
'What you have said about this is very interesting. ',
'I cannot agree with you on this point. ',
'You’ve got the point. ',
'That’s the point. ',
'The whole class is in a heated discussion. ',
'Let’s just run through the arguments for and against. ',
'Please sum up what you said just now. ',
'Has anybody else anything to say on this? ',
'Does anybody share David’s opinion? ',
'Is there any evidence to support what you have said? ',
'Well, it depends. ',
'I don’t think it’s necessary for us to discuss this question any further. ',
'There are always two sides to everything. ',
'Finally, we came to an agreement. ',
'I want to be a journalist after graduation. ',
'If it doesn’t rain tomorrow, we’ll have a picnic. ',
'As soon as he comes, we’ll let him know. ',
'You can stay as long as you pay the rent on time. ',
'When she leaves, he’ll cry for a day. ',
'She will go into business when she wants to. ',
'I’ll leave for London if I finish my work today. ',
'I’ll work for 5 years and then go back to school. ',
'He will become a writer if he goes on doing well in writing. ',
'I hope he will meet me at the airport. ',
'I’m thinking of quitting the job. ',
'I plan to learn photography. ',
'What do you say we have a party this weekend? ',
'She will certainly remain single. ',
'He will probably follow in his father’s footsteps. ',
'I would have had a much better holiday if I had stayed at home. ',
'What have you been doing since I saw you last time? ',
'If I had got enough money yesterday, I would have bought that tape. ',
'Looking back on it, I think I shouldn’t have given up the contest so easily. ',
'Had I taken a taxi, I wouldn’t have been late. ',
'Even if you take the exam again, you won’t pass it. ',
'Even if you had given him much more money, he might not have paid off the debt. ',
'What would you have done if you hadn’t gone out for a picnic yesterday? ',
'I wish I had told him the truth. ',
'I wish you hadn’t cheated me. ',
'If it had been fine, we would have gone to the park. ',
'Would he have seen you if you hadn’t waved to him? ',
'You should have studied much harder. ',
'I had thought about arguing with the teacher about that, but I didn’t have enough courage. ',
'I had thought about living with my grandparents when my parents went abroad last year. ',
'What’s your favorite sport? ',
'I like football best. ',
'Football is my favorite. ',
'Which do you prefer, fishing or mountain-climbing? ',
'Neither. ',
'What do you like best, apples, pears, or bananas? ',
'He’s crazy about Michael Jordan. ',
'She hates boxing. ',
'She is sick of watching boxing. ',
'She has good taste in clothes. ',
'What do you like to do in your spare time? ',
'I like collecting stamps. ',
'I prefer tea to coffee. ',
'What do you dislike most about this movie? ',
'I would rather sleep than watch this movie. ',
'You should take the advice of your teacher. ',
'That’s just what I was looking for. ',
'It might be, I suppose. ',
'Good try, but not quite right. ',
'That’s rather disappointing. ',
'In my opinion, your new coat is not worth so much money. ',
'Would you mind not spitting everywhere? ',
'It’s only a suggestion, you don’t have to take it. ',
'If you really want my advice I don’t think you should quit school. ',
'Thanks for your advice but I have to consider it myself. ',
'He does not pay attention to anybody. You are wasting your time in persuading him. ',
'I am old enough to make up my own mind. ',
'What about your opinion? ',
'In general I agree with you. ',
'Would you open the door for me, please? ',
'With pleasure. ',
'Would you mind opening the window? ',
'Not at all. ',
'I wondered if you could buy me some pencils? ',
'Sure. ',
'Would you be so kind as to lend me some money? ',
'No problem. How much? ',
'I hope I’m not bothering you. ',
'I hope that will not cause you too much trouble. ',
'I really appreciate your help. ',
'I don’t want to put you to any trouble. ',
'Excuse me, would you give me a hand? ',
'I’d be glad to help. ',
'Would you mind mailing this letter for me? ',
'I have so many things to do before I leave. ',
'I have to drop by the bank to get some money. ',
'Traveler’s checks are very convenient for long-distance travel. ',
'Do you have anything to declare? ',
'You have to apply for a passport in advance. ',
'You don’t have to pay any duty on personal belongings. ',
'Make it an hour and a half. We have to get more food. ',
'Shall we ask Betty to join us? ',
'I put myself entirely in your hands. ',
'Can you tell me the phone number of the inquiry office? ',
'Would you prefer to take a local train or an express? ',
'I have bought a ticket for a sleeper. ',
'Have you reserved your ticket? ',
'I would never have thought of it if you hadn’t mentioned it. ',
'I will see you off at the railway station. ',
'Where are you from? ',
'What’s your nationality? ',
'What’s your motherland? ',
'Are you a native Chinese? ',
'What’s the population of China? ',
'How many provinces do you have? ',
'What’s the capital of your country? ',
'I come from Japan. ',
'I was born in China and brought up in the U.S.A. ',
'My country has an area of 500,000 square kilometers. ',
'The capital of my country is Beijing. ',
'We have 50 provinces. ',
'My country is rich in natural resources. ',
'That nation is famous for its tourism. ',
'The biggest festival in my country is the Spring Festival. ',
'Geographically, China is located in the Northern Hemisphere. ',
'In this country, the weather is usually awful. ',
'It is a very beautiful country with many mountains. ',
'This country is famous for its beautiful lakes. ',
'The land in this region is rather dry and parched. ',
'Along the northern coast of this continent, there are many cliffs. ',
'In Brazil, many ancient forests are very well preserved. ',
'Lumbering is very important in some underdeveloped countries. ',
'The scenery is very beautiful in the small islands in the Pacific Oceans. ',
'What kind of climate do you have in this country? ',
'In the west of America, there are many high peaks and deep canyons. ',
'Which one is the longest river in China? ',
'Do you get much rain in summer? ',
'Is the plain along the river good for farming? ',
'It’s cold and foggy in London at this time of year. ',
'Every one must receive 9 years of compulsory education. ',
'Children enter primary school at the age of 7. ',
'Some students quit school due to poverty. ',
'There is fierce competition in the College Entrance Examination. ',
'He majored in Computers. ',
'She is working for her double major in English and Economics. ',
'I graduated from Yale University 5 years ago. ',
'Everybody hopes to apply to a good school. ',
'Mary is in her freshman year. ',
'Lily is a sophomore now. ',
'Mike is already a junior. ',
'As a senior, Peter is writing his thesis. ',
'Mr. Green is a member of the faculty. ',
'In Britain, there are open universities. ',
'There are many training classes and night classes. ',
'What does your father do? ',
'He is a doctor. He has his own practice. ',
'Do you have any plans for your career? ',
'I want to be a pilot if possible. ',
'I hope that I can get a decent job with a good salary. ',
'I have an interview next week. ',
'Tom has opened his own business while his classmates are still slogging away at school. ',
'I like writing, but I wouldn’t take it as my career. ',
'I worked as an intern in that firm last summer. ',
'He’s a very efficient young man though a little proud. ',
'He made a successful career in business. ',
'My cousin has just been promoted to the rank of major. ',
'He is a manager of a famous corporation. ',
'The statesman retired as the mayor of New York. ',
'He was appointed president of the committee recently. ',
'This area is noted for its rich soil. ',
'The place is too stony for farming. ',
'In the flat country, people grow wheat and raise cattle. ',
'He has bought 10 tractors for the village. ',
'What’s the typical farm product in this region? ',
'At this time of the year farmers begin to plow their fields. ',
'Have you milked the cows? ',
'Pile the hay in the corner. ',
'What’s the average yearly output of cars in your factory? ',
'The meat packing industry is developing fast. ',
'Car manufacturers are having a bad time. ',
'State-owned enterprises are getting out of difficulty. ',
'How many workshops are there in your factory? ',
'The computer industry is booming. ',
'The information industry helps boost the global economy. ',
'Do you have any hobbies? ',
'What are you interested in? ',
'What are your interests? ',
'What do you do in your spare time? ',
'How do you spend your evenings? ',
'Lots of people like stamp collecting. ',
'I am a Michael Jordan fan. ',
'Does his film appeal to you? ',
'Do you go on picnics? ',
'I particularly like English literature. ',
'What’s so interesting about football? We girls don’t like it. ',
'She has a particular interest in painting. ',
'I often take my mind off my work by reading an interesting novel. ',
'He plays violin just for enjoyment. ',
'Photography is an expensive hobby. ',
'What’s your favorite sport? ',
'I like football. ',
'What position do you play? ',
'I’m a catcher. ',
'Our team beat their team yesterday. ',
'We are sure to defeat them. ',
'How many years have you been playing pingpong? ',
'My favorite winter sport is skiing. ',
'The basketball championship is exciting. ',
'I was on the track team 10 years ago. ',
'I prefer fishing to swimming. ',
'She is a member of the ski club. ',
'The hardest thing to learn is to be a good loser. ',
'My class went camping last summer. ',
'He’s good at lifting weights. ',
'I subscribed to a lot of periodicals last year. ',
'Tom reads newspapers in the afternoon. ',
'What kind of newspapers do you read? ',
'Newspapers and periodicals keep me updated on current affairs. ',
'What column do you like best? ',
'Which do you like better, the news or the editorial? ',
'Do you read advertisements too? ',
'I recommend to you Time and Newsweek. They are excellent. ',
'Fashion is a very popular magazine in America. ',
'What’s the circulation of this magazine? ',
'Why don’t you put an advertisement in the paper to sell that old car? ',
'I once took a part-time job delivering the Evening Post. ',
'Have you read the article about the rescue of the hostage? ',
'There was a lot of news in the morning paper today. ',
'My friend Tom is a reporter for the New York Times. ',

]
