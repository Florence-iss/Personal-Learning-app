export const LESSONS = {
  beginner: [
    {
      id: "beg_1",
      title: "Self Introductions & Greetings",
      titleMM: "မိမိကိုယ်ကို မိတ်ဆက်ခြင်းနှင့် နှုတ်ခွန်းဆက်ခြင်း",
      description: "Learn how to greet people and introduce yourself in English.",
      descriptionMM: "အင်္ဂလိပ်လို နှုတ်ဆက်ခြင်းနှင့် မိမိကိုယ်ကို မိတ်ဆက်နည်းကို လေ့လာပါ။",
      vocabulary: [
        { word: "Hello", ipa: "/həˈloʊ/", mm: "မင်္ဂလာပါ", example: "Hello! My name is Min Min.", exampleMM: "မင်္ဂလာပါ! ကျွန်တော့်နာမည် မင်းမင်းပါ။" },
        { word: "Name", ipa: "/neɪm/", mm: "နာမည်", example: "What is your name?", exampleMM: "သင့်နာမည် ဘယ်လိုခေါ်သလဲ။" },
        { word: "Friend", ipa: "/frɛnd/", mm: "သူငယ်ချင်း", example: "She is my friend.", exampleMM: "သူမက ကျွန်မရဲ့ သူငယ်ချင်းပါ။" },
        { word: "Teacher", ipa: "/ˈtitʃər/", mm: "ဆရာ / ဆရာမ", example: "He is a good English teacher.", exampleMM: "သူက တော်တဲ့ အင်္ဂလိပ်စာဆရာတစ်ယောက် ဖြစ်ပါတယ်။" },
        { word: "Nice to meet you", ipa: "/naɪs tu mit ju/", mm: "တွေ့ရတာ ဝမ်းသာပါတယ်", example: "Nice to meet you, Thida.", exampleMM: "တွေ့ရတာ ဝမ်းသာပါတယ် သီတာ။" },
        { word: "Student", ipa: "/ˈstudnt/", mm: "ကျောင်းသား / ကျောင်းသူ", example: "I am an English student.", exampleMM: "ကျွန်တော်က အင်္ဂလိပ်စာ ကျောင်းသားတစ်ယောက်ပါ။" },
        { word: "School", ipa: "/skul/", mm: "ကျောင်း", example: "We go to school together.", exampleMM: "ကျွန်တော်တို့ အတူတူ ကျောင်းသွားကြတယ်။" },
        { word: "Learn", ipa: "/lɜrn/", mm: "သင်ယူသည်", example: "I want to learn English.", exampleMM: "ကျွန်တော် အင်္ဂလိပ်စာ သင်ယူချင်ပါတယ်။" }
      ],
      listening: [
        { id: "lis_beg1_1", text: "Nice to meet you", audioText: "Nice to meet you", options: ["တွေ့ရတာ ဝမ်းသာပါတယ်", "နှုတ်ဆက်ပါတယ်", "နေကောင်းလား"], answer: "တွေ့ရတာ ဝမ်းသာပါတယ်" },
        { id: "lis_beg1_2", text: "He is a good English teacher", audioText: "He is a good English teacher", options: ["သူမက ကျောင်းသူဖြစ်တယ်", "သူက တော်တဲ့ အင်္ဂလိပ်စာဆရာတစ်ယောက် ဖြစ်ပါတယ်", "သူငယ်ချင်းနဲ့ တွေ့ဆုံပါ"], answer: "သူက တော်တဲ့ အင်္ဂလိပ်စာဆရာတစ်ယောက် ဖြစ်ပါတယ်" }
      ],
      speaking: [
        { id: "spe_beg1_1", text: "Hello, my name is John.", instruction: "Read the greeting aloud clearly:", instructionMM: "အောက်ပါ နှုတ်ဆက်စကားကို အသံထွက်ဖတ်ပါ:" },
        { id: "spe_beg1_2", text: "How are you doing today?", instruction: "Read the question aloud:", instructionMM: "အောက်ပါ မေးခွန်းကို အသံထွက်မေးပါ:" }
      ],
      reading: {
        title: "Meeting a New Classmate",
        titleMM: "အတန်းဖော်အသစ်နှင့် တွေ့ဆုံခြင်း",
        content: "Aung: Hello! My name is Aung. What is your name?\nSophia: Hi Aung! I am Sophia. Nice to meet you.\nAung: Nice to meet you too. Are you a new student here?\nSophia: Yes, today is my first day. I want to be your friend.\nAung: Sure! Let's find our English classroom together.",
        contentMM: "အောင်: မင်္ဂလာပါ! ကျွန်တော့်နာမည် အောင်လို့ ခေါ်ပါတယ်။ မင်းနာမည် ဘယ်သူလဲ။\nဆိုဖီယာ: ဟိုင်း အောင်! ကျွန်မနာမည် ဆိုဖီယာပါ။ တွေ့ရတာ ဝမ်းသာပါတယ်။\nအောင်: တွေ့ရတာ ဝမ်းသာပါတယ် တူတူပါပဲ။ မင်းက ဒီမှာ ကျောင်းသူအသစ်လား။\nဆိုဖီယာ: ဟုတ်ကဲ့၊ ဒီနေ့ ကျွန်မရဲ့ ပထမဆုံးနေ့ပါ။ ကျွန်မ မင်းနဲ့ သူငယ်ချင်း ဖြစ်ချင်ပါတယ်။\nအောင်: ဖြစ်တာပေါ့! ငါတို့ အင်္ဂလိပ်စာ အတန်းကို အတူတူ သွားရှာရအောင်။",
        questions: [
          { question: "Who is the new student?", options: ["Aung", "Sophia", "The teacher"], answer: "Sophia" },
          { question: "Where are they going together?", options: ["The English classroom", "The market", "The library"], answer: "The English classroom" }
        ]
      },
      writing: [
        { id: "wri_beg1_1", question: "Rearrange the words: [name / is / my / Aung]", correct: "my name is Aung", prompt: "Translate: ကျွန်တော့်နာမည် အောင်ဖြစ်ပါတယ်" },
        { id: "wri_beg1_2", question: "Rearrange the words: [meet / you / nice / to]", correct: "nice to meet you", prompt: "Translate: တွေ့ရတာ ဝမ်းသာပါတယ်" }
      ]
    },
    {
      id: "beg_2",
      title: "Daily Activities & Time",
      titleMM: "နေ့စဉ်လုပ်ငန်းဆောင်တာများနှင့် အချိန်",
      description: "Learn how to talk about your daily routines and tell the time.",
      descriptionMM: "နေ့စဉ် လုပ်ဆောင်ချက်များနှင့် အချိန်ပြောဆိုပုံကို လေ့လာပါ။",
      vocabulary: [
        { word: "Wake up", ipa: "/weɪk ʌp/", mm: "နိုးထသည်", example: "I wake up at 6 AM.", exampleMM: "ကျွန်တော် မနက် ၆ နာရီမှာ အိပ်ရာထပါတယ်။" },
        { word: "Breakfast", ipa: "/ˈbrɛkfəst/", mm: "မနက်စာ", example: "She eats bread for breakfast.", exampleMM: "သူမ မနက်စာအတွက် ပေါင်မုန့်စားသည်။" },
        { word: "Work", ipa: "/wɜrk/", mm: "အလုပ်", example: "I go to work by bus.", exampleMM: "ကျွန်တော် အလုပ်ကို ဘတ်စ်ကားနဲ့ သွားပါတယ်။" },
        { word: "Watch", ipa: "/wɑtʃ/", mm: "နာရီ / ကြည့်ရှုသည်", example: "I watch TV in the evening.", exampleMM: "ကျွန်တော် ညနေပိုင်းမှာ တီဗီကြည့်ပါတယ်။" },
        { word: "Sleep", ipa: "/slip/", mm: "အိပ်စက်သည်", example: "They sleep at 10 PM.", exampleMM: "သူတို့ ည ၁၀ နာရီမှာ အိပ်ကြတယ်။" },
        { word: "Lunch", ipa: "/lʌntʃ/", mm: "နေ့လယ်စာ", example: "I eat lunch at 1 PM.", exampleMM: "ကျွန်တော် မွန်းလွဲ ၁ နာရီမှာ နေ့လယ်စာစားပါတယ်။" },
        { word: "Dinner", ipa: "/ˈdɪnər/", mm: "ညစာ", example: "We have dinner at home.", exampleMM: "ကျွန်တော်တို့ အိမ်မှာ ညစာစားကြတယ်။" },
        { word: "Family", ipa: "/ˈfæməli/", mm: "မိသားစု", example: "I love my family.", exampleMM: "ကျွန်တော် ကျွန်တော့်မိသားစုကို ချစ်ပါတယ်။" }
      ],
      listening: [
        { id: "lis_beg2_1", text: "I wake up at 6 AM", audioText: "I wake up at 6 AM", options: ["ကျွန်တော် မနက် ၆ နာရီမှာ အိပ်ရာထပါတယ်", "ကျွန်တော် ည ၆ နာရီမှာ စားပါတယ်", "ကျွန်တော် အလုပ်သွားပါတယ်"], answer: "ကျွန်တော် မနက် ၆ နာရီမှာ အိပ်ရာထပါတယ်" }
      ],
      speaking: [
        { id: "spe_beg2_1", text: "I eat breakfast every morning.", instruction: "Read the routine aloud:", instructionMM: "အောက်ပါ လုပ်ရိုးလုပ်စဉ်ကို အသံထွက်ဖတ်ပါ:" }
      ],
      reading: {
        title: "Min Min's Routine",
        titleMM: "မင်းမင်း၏ နေ့စဉ်လုပ်ငန်းစဉ်",
        content: "Min Min gets up early at 6 o'clock. He washes his face and eats breakfast with his family. At 8 AM, he goes to school. In the afternoon, he plays soccer with his friends. He goes to bed early.",
        contentMM: "မင်းမင်းက မနက် ၆ နာရီမှာ စောစောထပါတယ်။ သူက မျက်နှာသစ်ပြီး မိသားစုနဲ့အတူ မနက်စာစားတယ်။ မနက် ၈ နာရီမှာ ကျောင်းသွားတယ်။ ညနေပိုင်းမှာ သူငယ်ချင်းတွေနဲ့ ဘောလုံးကစားတယ်။ သူ အိပ်ရာစောစော ဝင်ပါတယ်။",
        questions: [
          { question: "What time does Min Min get up?", options: ["6 o'clock", "8 o'clock", "10 o'clock"], answer: "6 o'clock" },
          { question: "What does he play in the afternoon?", options: ["Soccer", "Tennis", "Basketball"], answer: "Soccer" }
        ]
      },
      writing: [
        { id: "wri_beg2_1", question: "Rearrange the words: [breakfast / I / eat / morning / every]", correct: "I eat breakfast every morning", prompt: "Translate: ကျွန်တော် နေ့တိုင်း မနက်စာ စားပါတယ်" }
      ]
    }
  ],
  intermediate: [
    {
      id: "int_1",
      title: "Sharing Hobbies & Leisure Time",
      titleMM: "ဝါသနာများနှင့် အားလပ်ချိန်များအကြောင်း မျှဝေခြင်း",
      description: "Express your interests, hobbies, and how you spend your free time.",
      descriptionMM: "စိတ်ဝင်စားမှု၊ ဝါသနာနှင့် အားလပ်ချိန်ကို ဘယ်လိုကုန်လွန်စေကြောင်း ဖော်ပြပါ။",
      vocabulary: [
        { word: "Leisure", ipa: "/ˈliʒər/", mm: "အားလပ်ချိန်", example: "I read novels in my leisure time.", exampleMM: "ကျွန်မ အားလပ်ချိန်မှာ ဝတ္ထုဖတ်ပါတယ်။" },
        { word: "Photography", ipa: "/fəˈtɑɡrəfi/", mm: "ဓာတ်ပုံပညာ", example: "Photography is a creative hobby.", exampleMM: "ဓာတ်ပုံရိုက်ခြင်းသည် ဖန်တီးမှုရှိသော ဝါသနာတစ်ခုဖြစ်သည်။" },
        { word: "Exhausted", ipa: "/ɪɡˈzɔstəd/", mm: "အလွန်ပင်ပန်းသော", example: "I was exhausted after the hike.", exampleMM: "တောင်တက်ပြီးနောက် ကျွန်တော် အရမ်းပင်ပန်းသွားတယ်။" },
        { word: "Prefer", ipa: "/prɪˈfɜr/", mm: "ပိုမိုကြိုက်နှစ်သက်သည်", example: "I prefer tea over coffee.", exampleMM: "ကျွန်တော် ကော်ဖီထက် လက်ဖက်ရည်ကို ပိုကြိုက်တယ်။" },
        { word: "Relax", ipa: "/rɪˈlæks/", mm: "အပန်းဖြေသည် / စိတ်လျှော့သည်", example: "Music helps me relax.", exampleMM: "ဂီတက ကျွန်မကို စိတ်အပန်းပြေစေတယ်။" },
        { word: "Hobby", ipa: "/ˈhɑbi/", mm: "ဝါသနာ", example: "What is your favorite hobby?", exampleMM: "မင်းအကြိုက်ဆုံး ဝါသနာက ဘာလဲ။" },
        { word: "Creative", ipa: "/kriˈeɪtɪv/", mm: "ဖန်တီးမှုရှိသော / ဉာဏ်ကွန့်မြူးသော", example: "Baking cake is a creative activity.", exampleMM: "ကိတ်မုန့်ဖုတ်ခြင်းသည် ဖန်တီးမှုရှိသော လုပ်ဆောင်ချက်တစ်ခုဖြစ်သည်။" }
      ],
      listening: [
        { id: "lis_int1_1", text: "I prefer tea over coffee", audioText: "I prefer tea over coffee", options: ["ကျွန်တော် ကော်ဖီကို ပိုကြိုက်တယ်", "ကျွန်တော် လက်ဖက်ရည်ထက် ကော်ဖီကို ပိုကြိုက်တယ်", "ကျွန်တော် ကော်ဖီထက် လက်ဖက်ရည်ကို ပိုကြိုက်တယ်"], answer: "ကျွန်တော် ကော်ဖီထက် လက်ဖက်ရည်ကို ပိုကြိုက်တယ်" }
      ],
      speaking: [
        { id: "spe_int1_1", text: "Playing guitar helps me wind down after work.", instruction: "Speak this statement cleanly:", instructionMM: "အောက်ပါ စကားစုကို သဘာဝကျကျ အသံထွက်ဖတ်ပါ:" }
      ],
      reading: {
        title: "A Cozy Weekend",
        titleMM: "သာယာသော ပိတ်ရက်တစ်ရက်",
        content: "Su Su and Hla Hla are discussing their plans. Su Su enjoys outdoor activities like hiking and cycling because they make her feel alive. In contrast, Hla Hla prefers indoor relaxation. She loves baking cakes and watching historical documentaries during her leisure time.",
        contentMM: "စုစုနှင့် လှလှတို့သည် ၎င်းတို့၏ အစီအစဉ်များကို ဆွေးနွေးနေကြသည်။ စုစုသည် တောင်တက်ခြင်း၊ စက်ဘီးစီးခြင်းကဲ့သို့ ပြင်ပလှုပ်ရှားမှုများကို ကြိုက်နှစ်သက်ပြီး ၎င်းတို့က သူမကို လန်းဆန်းစေသည်။ ဆန့်ကျင်ဘက်အနေနှင့် လှလှက အိမ်တွင်းအပန်းဖြေမှုကို ပိုကြိုက်သည်။ သူမသည် အားလပ်ချိန်တွင် ကိတ်မုန့်ဖုတ်ခြင်းနှင့် သမိုင်းဝင် မှတ်တမ်းတင်ရုပ်ရှင်များ ကြည့်ရှုခြင်းကို ဝါသနာပါသည်‌။",
        questions: [
          { question: "Why does Su Su like cycling and hiking?", options: ["They make her feel alive", "They are cheap", "Her friends force her"], answer: "They make her feel alive" },
          { question: "What is Hla Hla's favorite indoor activity?", options: ["Baking cakes", "Playing games", "Painting"], answer: "Baking cakes" }
        ]
      },
      writing: [
        { id: "wri_int1_1", question: "Rearrange the words: [prefer / tea / coffee / over / I]", correct: "I prefer tea over coffee", prompt: "Translate: ကျွန်တော် ကော်ဖီထက် လက်ဖက်ရည်ကို ပိုကြိုက်တယ်" }
      ]
    }
  ],
  advanced: [
    {
      id: "adv_1",
      title: "Environmental Advocacy & Sustainability",
      titleMM: "ပတ်ဝန်းကျင်ထိန်းသိမ်းရေးဆိုင်ရာ တိုက်တွန်းနှိုးဆော်မှုနှင့် ရေရှည်တည်တံ့ခိုင်မြဲမှု",
      description: "Engage in critical discussions surrounding climate change and conservation strategies.",
      descriptionMM: "ရာသီဥတုပြောင်းလဲမှုနှင့် သဘာဝပတ်ဝန်းကျင် ထိန်းသိမ်းရေး မဟာဗျူဟာများဆိုင်ရာ အဆင့်မြင့် ဆွေးနွေးပြောဆိုချက်များကို လေ့လာပါ။",
      vocabulary: [
        { word: "Sustainability", ipa: "/səˌsteɪnəˈbɪlɪti/", mm: "ရေရှည်တည်တံ့ခိုင်မြဲမှု", example: "We must adopt policies that encourage sustainability.", exampleMM: "ကျွန်ုပ်တို့သည် ရေရှည်တည်တံ့မှုကို အားပေးသော မူဝါဒများကို ချမှတ်ရပါမည်။" },
        { word: "Biodiversity", ipa: "/ˌbaɪoʊdɪˈvɜrsəti/", mm: "ဇီဝမျိုးစုံမျိုးကွဲများ", example: "Deforestation threatens global biodiversity.", exampleMM: "သစ်တောပြုန်းတီးမှုသည် ကမ္ဘာလုံးဆိုင်ရာ ဇီဝမျိုးစုံမျိုးကွဲများကို ခြိမ်းခြောက်နေသည်။" },
        { word: "Eco-friendly", ipa: "/ˈikoʊˌfrɛndli/", mm: "ပတ်ဝန်းကျင်နှင့် လိုက်လျောညီထွေရှိသော", example: "Electric vehicles are a more eco-friendly choice.", exampleMM: "လျှပ်စစ်မော်တော်ကားများသည် ပတ်ဝန်းကျင်နှင့် ပိုမိုလိုက်လျောညီထွေရှိသော ရွေးချယ်မှုဖြစ်သည်။" },
        { word: "Mitigate", ipa: "/ˈmɪtɪˌɡeɪt/", mm: "လျော့ပါးသက်သာစေသည်", example: "Steps must be taken to mitigate carbon emissions.", exampleMM: "ကာဗွန်ထုတ်လွှတ်မှုကို လျော့ပါးသက်သာစေရန် ခြေလှမ်းများ လုပ်ဆောင်ရမည်။" },
        { word: "Renewable", ipa: "/rɪˈnuːəbl/", mm: "ပြန်လည်ပြည့်ဖြိုးမြဲဖြစ်သော", example: "Solar power is a clean, renewable resource.", exampleMM: "နေရောင်ခြည်စွမ်းအင်သည် သန့်ရှင်းပြီး ပြန်လည်ပြည့်ဖြိုးမြဲစွမ်းအင်ဖြစ်သည်။" },
        { word: "Ecological", ipa: "/ˌiːkəˈlɑːdʒɪkl/", mm: "ဂေဟစနစ်ဆိုင်ရာ / ပတ်ဝန်းကျင်ဆိုင်ရာ", example: "The region is facing an ecological crisis.", exampleMM: "ထိုဒေသသည် ဂေဟစနစ်ဆိုင်ရာ အကျပ်အတည်းတစ်ခုနှင့် ရင်ဆိုင်နေရသည်။" },
        { word: "Accountable", ipa: "/əˈkaʊntəbl/", mm: "တာဝန်ခံမှုရှိသော / တာဝန်ရှိသော", example: "Carbon emitters must be held financially accountable.", exampleMM: "ကာဗွန်ထုတ်လွှတ်သူများကို ငွေကြေးအရ တာဝန်ခံစေရမည်။" }
      ],
      listening: [
        { id: "lis_adv1_1", text: "Deforestation threatens global biodiversity", audioText: "Deforestation threatens global biodiversity", options: ["သစ်တောစိုက်ပျိုးခြင်းက ပတ်ဝန်းကျင်ကို ကာကွယ်ပေးတယ်", "သစ်တောပြုန်းတီးမှုသည် ကမ္ဘာလုံးဆိုင်ရာ ဇီဝမျိုးစုံမျိုးကွဲများကို ခြိမ်းခြောက်နေသည်", "ကာဗွန်ထုတ်လွှတ်မှုကို လျှော့ချရန် လိုအပ်သည်"], answer: "သစ်တောပြုန်းတီးမှုသည် ကမ္ဘာလုံးဆိုင်ရာ ဇီဝမျိုးစုံမျိုးကွဲများကို ခြိမ်းခြောက်နေသည်" }
      ],
      speaking: [
        { id: "spe_adv1_1", text: "Urgent global action is required to mitigate the devastating effects of industrial pollution.", instruction: "Speak with appropriate professional emphasis:", instructionMM: "အောက်ပါ စကားရပ်ကို ကျွမ်းကျင်ပိုင်နိုင်စွာ အလေးအနက်ပြု၍ ဖတ်ပါ:" }
      ],
      reading: {
        title: "The Imperative of Green Technology",
        titleMM: "စိမ်းလန်းသောနည်းပညာ၏ အရေးပါမှု",
        content: "Transitioning to clean energy is no longer a futuristic aspiration; it is an immediate ecological necessity. The escalating concentration of greenhouse gases has forced governments worldwide to invest in renewable infrastructures. However, technological implementation alone is insufficient. True change requires systemic shifts in consumer behavior and regulatory frameworks that hold carbon emitters financially accountable.",
        contentMM: "သန့်ရှင်းသောစွမ်းအင်သို့ ကူးပြောင်းခြင်းသည် အနာဂတ်ကာလ၏ မျှော်မှန်းချက်သက်သက် မဟုတ်တော့ဘဲ လက်ငင်းလုပ်ဆောင်ရမည့် သဘာဝပတ်ဝန်းကျင်ဆိုင်ရာ လိုအပ်ချက်တစ်ခု ဖြစ်သည်။ ဖန်လုံအိမ်ဓာတ်ငွေ့များ စဉ်ဆက်မပြတ် မြင့်တက်လာခြင်းကြောင့် ကမ္ဘာတစ်ဝန်းရှိ အစိုးရများသည် ပြန်လည်ပြည့်ဖြိုးမြဲ စွမ်းအင်အဆောက်အအုံများတွင် ရင်းနှီးမြှုပ်နှံရန် တွန်းအားပေးခြင်း ခံနေရသည်။ သို့သော် နည်းပညာပိုင်းဆိုင်ရာ အကောင်အထည်ဖော်မှု တစ်ခုတည်းဖြင့် မလုံလောက်ပါ။ စစ်မှန်သော အပြောင်းအလဲသည် စားသုံးသူများ၏ အလေ့အထစနစ်များ ပြောင်းလဲခြင်းနှင့် ကာဗွန်ထုတ်လွှတ်သူများကို ငွေကြေးအရ တာဝန်ခံစေမည့် စည်းမျဉ်းစည်းကမ်း မူဘောင်များ လိုအပ်သည်။",
        questions: [
          { question: "What is clean energy described as in the passage?", options: ["An immediate ecological necessity", "A cheap alternative", "A futuristic luxury"], answer: "An immediate ecological necessity" },
          { question: "What is required alongside technological implementation?", options: ["Tax cuts for corporations", "Systemic shifts in consumer behavior", "More fossil fuels"], answer: "Systemic shifts in consumer behavior" }
        ]
      },
      writing: [
        { id: "wri_adv1_1", question: "Rearrange the words: [mitigate / steps / to / emissions / taken / carbon / must / be]", correct: "steps must be taken to mitigate carbon emissions", prompt: "Translate: ကာဗွန်ထုတ်လွှတ်မှုကို လျှော့ချသက်သာစေရန် ခြေလှမ်းများ လုပ်ဆောင်ရမည်" }
      ]
    }
  ]
};

export const UI_TRANSLATIONS = {
  en: {
    title: "SpeakEasy English",
    subtitle: "Learn English from Beginner to Advanced with Burmese Support",
    selectLevel: "Select Level",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    progress: "Your Progress",
    skills: "Practice Skills",
    listening: "Listening",
    listeningDesc: "Hear English sentences and identify meanings.",
    speaking: "Speaking",
    speakingDesc: "Practice pronunciation with voice feedback.",
    reading: "Reading",
    readingDesc: "Read stories with parallel translations.",
    writing: "Writing",
    writingDesc: "Arrange sentences and translate text.",
    vocabulary: "Vocabulary Helpers",
    listenBtn: "Listen",
    speakBtn: "Record Voice",
    stopBtn: "Stop Recording",
    checkBtn: "Submit Answer",
    nextBtn: "Next Exercise",
    correct: "Correct!",
    incorrect: "Incorrect. Try again!",
    score: "Score",
    levelUnlocked: "Level Unlocked",
    ipaLabel: "IPA Pronunciation",
    myanmarTrans: "Burmese Meaning",
    pronunciationScore: "Pronunciation Match Score",
    startRecordingTip: "Click Record Voice and read the target sentence aloud.",
    listeningTip: "Listen carefully to the audio and select the matching Burmese translation.",
    writingTip: "Enter the correct English sentence using the word prompt below.",
    successBadge: "Great Job!",
    backToDashboard: "Back to Dashboard",
    toggleLang: "မြန်မာဘာသာသို့ ပြောင်းရန်",
    langMode: "English Mode Active",
    completed: "Completed"
  },
  mm: {
    title: "SpeakEasy အင်္ဂလိပ်စာ",
    subtitle: "အခြေခံမှ အဆင့်မြင့်အထိ မြန်မာဘာသာပံ့ပိုးမှုဖြင့် အင်္ဂလိပ်စာလေ့လာပါ",
    selectLevel: "အဆင့်ရွေးချယ်ပါ",
    beginner: "အခြေခံအဆင့် (Beginner)",
    intermediate: "အလယ်အလတ်အဆင့် (Intermediate)",
    advanced: "အဆင့်မြင့်အဆင့် (Advanced)",
    progress: "သင်ယူမှုတိုးတက်မှု",
    skills: "စွမ်းရည်လေ့ကျင့်ခန်းများ",
    listening: "နားထောင်ခြင်း (Listening)",
    listeningDesc: "အင်္ဂလိပ်လိုနားထောင်ပြီး မှန်ကန်သော မြန်မာဘာသာပြန်ကို ရွေးချယ်ပါ။",
    speaking: "ပြောဆိုခြင်း (Speaking)",
    speakingDesc: "အသံဖမ်းစနစ်ဖြင့် အသံထွက်မှန်ကန်မှုကို လေ့ကျင့်ပါ။",
    reading: "ဖတ်ရှုခြင်း (Reading)",
    readingDesc: "မြန်မာ-အင်္ဂလိပ် ယှဉ်တွဲလျက် စာပိုဒ်များကို ဖတ်ရှုပါ။",
    writing: "ရေးသားခြင်း (Writing)",
    writingDesc: "ဝါကျများကို စနစ်တကျစီပြီး ဘာသာပြန်ပါ။",
    vocabulary: "ဝေါဟာရ အထောက်အကူပြုချက်များ",
    listenBtn: "အသံနားထောင်မည်",
    speakBtn: "အသံဖမ်းယူမည်",
    stopBtn: "အသံဖမ်းယူမှုရပ်မည်",
    checkBtn: "အဖြေစစ်ဆေးမည်",
    nextBtn: "နောက်တစ်ဆင့်သွားမည်",
    correct: "မှန်ကန်ပါတယ်!",
    incorrect: "မှားယွင်းနေပါတယ်။ ပြန်ကြိုးစားပါ!",
    score: "ရမှတ်",
    levelUnlocked: "အဆင့်တစ်ခု ပြီးမြောက်ပါပြီ",
    ipaLabel: "အသံထွက် သင်္ကေတ (IPA)",
    myanmarTrans: "မြန်မာအဓိပ္ပာယ်",
    pronunciationScore: "အသံထွက် ကိုက်ညီမှု ရမှတ်",
    startRecordingTip: "ခလုတ်ကိုနှိပ်ပြီး ပစ်မှတ်ဝါကျကို အင်္ဂလိပ်လို အသံကျယ်ကျယ်ဖတ်ပါ။",
    listeningTip: "အသံကို သေချာနားထောင်ပြီး ကိုက်ညီသည့် မြန်မာဘာသာပြန်ကို ရွေးချယ်ပါ။",
    writingTip: "အောက်ပါ မြန်မာဘာသာပြန်ကို ကြည့်ပြီး အင်္ဂလိပ်ဝါကျကို အစီအစဉ်တကျ ပြန်ရေးပါ။",
    successBadge: "ထူးချွန်စွာ လုပ်ဆောင်နိုင်ခဲ့သည်!",
    backToDashboard: "ပင်မစာမျက်နှာသို့",
    toggleLang: "Switch to English",
    langMode: "မြန်မာဘာသာဖြင့် သုံးစွဲနေသည်",
    completed: "ပြီးမြောက်မှု"
  }
};
