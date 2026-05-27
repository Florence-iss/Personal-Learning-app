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
    },
    {
      id: "beg_3",
      title: "Family & Relationships",
      titleMM: "မိသားစုနှင့် ပတ်သက်မှုများ",
      description: "Learn how to talk about your family members and relationships.",
      descriptionMM: "မိသားစုဝင်များနှင့် ဆွေမျိုးတော်စပ်မှုများအကြောင်း ပြောဆိုပုံကို လေ့လာပါ။",
      vocabulary: [
        { word: "Father", ipa: "/ˈfɑːðər/", mm: "ဖခင် / အဖေ", example: "My father is a doctor.", exampleMM: "ကျွန်တော့်အဖေက ဆရာဝန်တစ်ယောက်ပါ။" },
        { word: "Mother", ipa: "/ˈmʌðər/", mm: "မိခင် / အမေ", example: "Her mother cooks delicious food.", exampleMM: "သူမအမေက အရသာရှိတဲ့ အစားအစာတွေ ချက်ပြုတ်တတ်တယ်။" },
        { word: "Brother", ipa: "/ˈbrʌðər/", mm: "ညီအစ်ကိုမောင်နှမ / မောင်လေး / အစ်ကို", example: "Do you have a brother?", exampleMM: "မင်းမှာ ညီအစ်ကို မောင်နှမ ရှိသလား။" },
        { word: "Sister", ipa: "/ˈsɪstər/", mm: "ညီမလေး / အစ်မ", example: "I have one younger sister.", exampleMM: "ကျွန်တော့်မှာ ညီမလေး တစ်ယောက်ရှိတယ်။" },
        { word: "Parent", ipa: "/ˈperənt/", mm: "မိဘ", example: "I respect my parents.", exampleMM: "ကျွန်တော် ကျွန်တော့်မိဘတွေကို လေးစားပါတယ်။" }
      ],
      listening: [
        { id: "lis_beg3_1", text: "I have one younger sister", audioText: "I have one younger sister", options: ["ကျွန်တော့်မှာ ညီမလေး တစ်ယောက်ရှိတယ်", "ကျွန်တော့်မှာ မောင်လေး တစ်ယောက်ရှိတယ်", "မိဘတွေကို ချစ်ခင်ပါ"], answer: "ကျွန်တော့်မှာ ညီမလေး တစ်ယောက်ရှိတယ်" }
      ],
      speaking: [
        { id: "spe_beg3_1", text: "My family lives in a beautiful town.", instruction: "Read the sentence clearly:", instructionMM: "အောက်ပါ ဝါကျကို ရှင်းလင်းစွာ အသံထွက်ဖတ်ပါ:" }
      ],
      reading: {
        title: "A Family Gathering",
        titleMM: "မိသားစု စုံညီပွဲ",
        content: "Every Sunday, my family has a big dinner together. My father grills chicken in the garden, and my mother bakes delicious pies. My brother and sister set the table. We talk, laugh, and share stories about our week.",
        contentMM: "တနင်္ဂနွေနေ့တိုင်း ကျွန်မတို့မိသားစု စုံစုံလင်လင် ညစာအတူတူ စားကြတယ်။ အဖေက ဥယျာဉ်ထဲမှာ ကြက်သားကင်ပြီး အမေက အရသာရှိတဲ့ ပိုင်မုန့်တွေ ဖုတ်တယ်။ မောင်လေးနဲ့ ညီမလေးက စားပွဲပြင်ကြတယ်။ ငါတို့ စကားပြောကြ၊ ရယ်မောကြပြီး တစ်ပတ်တာအကြောင်း မျှဝေကြပါတယ်။",
        questions: [
          { question: "When does the family gather?", options: ["Every Sunday", "Every Friday", "Only on holidays"], answer: "Every Sunday" },
          { question: "Who grills chicken in the garden?", options: ["The father", "The mother", "The brother"], answer: "The father" }
        ]
      },
      writing: [
        { id: "wri_beg3_1", question: "Rearrange the words: [sister / she / my / is]", correct: "she is my sister", prompt: "Translate: သူမက ကျွန်မရဲ့ ညီမဖြစ်ပါတယ်" }
      ]
    },
    {
      id: "beg_4",
      title: "Food, Shopping & Numbers",
      titleMM: "အစားအသောက်၊ ဈေးဝယ်ခြင်းနှင့် ကိန်းဂဏန်းများ",
      description: "Learn vocabulary for ordering food, going shopping, and counting items.",
      descriptionMM: "အစားအသောက်မှာယူခြင်း၊ ဈေးဝယ်ထွက်ခြင်းနှင့် ပစ္စည်းရေတွက်ခြင်းဆိုင်ရာ ဝေါဟာရများကို လေ့လာပါ။",
      vocabulary: [
        { word: "Delicious", ipa: "/dɪˈlɪʃəs/", mm: "အရသာရှိသော", example: "This noodle soup is delicious.", exampleMM: "ဒီမုန့်ဟင်းခါးက တကယ်အရသာရှိတယ်။" },
        { word: "Market", ipa: "/ˈmɑːrkɪt/", mm: "ဈေး", example: "We buy fresh vegetables at the market.", exampleMM: "ကျွန်တော်တို့ ဈေးမှာ လတ်ဆတ်တဲ့ ဟင်းသီးဟင်းရွက်တွေ ဝယ်ကြတယ်။" },
        { word: "Buy", ipa: "/baɪ/", mm: "ဝယ်ယူသည်", example: "I want to buy a new book.", exampleMM: "ကျွန်တော် စာအုပ်အသစ်တစ်အုပ် ဝယ်ချင်ပါတယ်။" },
        { word: "Price", ipa: "/praɪs/", mm: "စျေးနှုန်း", example: "What is the price of this shirt?", exampleMM: "ဒီရှပ်အင်္ကျီရဲ့ စျေးနှုန်းက ဘယ်လောက်လဲ။" },
        { word: "Hundred", ipa: "/ˈhʌndrəd/", mm: "ရာဂဏန်း / တစ်ရာ", example: "This pen costs two hundred kyats.", exampleMM: "ဒီဘောပင်က ကျပ်နှစ်ရာ ကျသင့်ပါတယ်။" }
      ],
      listening: [
        { id: "lis_beg4_1", text: "This noodle soup is delicious", audioText: "This noodle soup is delicious", options: ["ဒီမုန့်ဟင်းခါးက တကယ်အရသာရှိတယ်", "ဒီဟင်းက အရသာမရှိဘူး", "စျေးနှုန်းက အရမ်းကြီးတယ်"], answer: "ဒီမုန့်ဟင်းခါးက တကယ်အရသာရှိတယ်" }
      ],
      speaking: [
        { id: "spe_beg4_1", text: "How much does this cost?", instruction: "Ask the price clearly:", instructionMM: "အောက်ပါ မေးခွန်းကို အသံထွက်မေးပါ:" }
      ],
      reading: {
        title: "At the Local Market",
        titleMM: "ဒေသတွင်း ဈေးတစ်ခုတွင်",
        content: "Su Su wants to buy fresh fruits. She walks to the local market in Yangon. The market is crowded. She asks the seller, 'How much are these apples?' The seller replies, 'They are five hundred kyats each.' Su Su buys four delicious apples.",
        contentMM: "စုစုက လတ်ဆတ်တဲ့ သစ်သီးတွေ ဝယ်ချင်တယ်။ သူမ ရန်ကုန်က ဒေသတွင်းဈေးကို လမ်းလျှောက်သွားတယ်။ ဈေးထဲမှာ လူစည်ကားနေသည်။ သူမက ရောင်းသူကို 'ဒီပန်းသီးတွေ ဘယ်လောက်လဲ' လို့ မေးတယ်။ ရောင်းသူက 'တစ်လုံးကို ငါးရာကျပ်ပါ' လို့ ပြန်ပြောတယ်။ စုစုက အရသာရှိတဲ့ ပန်းသီး လေးလုံး ဝယ်ခဲ့ပါတယ်။",
        questions: [
          { question: "Where does Su Su go to buy fruits?", options: ["The supermarket", "The local market", "The bakery"], answer: "The local market" },
          { question: "How much is one apple?", options: ["Two hundred kyats", "Five hundred kyats", "One thousand kyats"], answer: "Five hundred kyats" }
        ]
      },
      writing: [
        { id: "wri_beg4_1", question: "Rearrange the words: [delicious / apples / buy / I / four]", correct: "I buy four delicious apples", prompt: "Translate: ကျွန်မ အရသာရှိတဲ့ ပန်းသီး လေးလုံး ဝယ်ပါတယ်" }
      ]
    },
    {
      id: "beg_5",
      title: "Travel, Locations & Directions",
      titleMM: "ခရီးသွားခြင်း၊ နေရာများနှင့် လမ်းညွှန်ချက်များ",
      description: "Learn how to ask for directions and describe key travel locations.",
      descriptionMM: "လမ်းညွှန်ချက်များ တောင်းဆိုပုံနှင့် ခရီးသွားလာရေး နေရာများအကြောင်း ပြောဆိုပုံကို လေ့လာပါ။",
      vocabulary: [
        { word: "Airport", ipa: "/ˈer-pɔːrt/", mm: "လေဆိပ်", example: "The airport is very modern.", exampleMM: "လေဆိပ်က တကယ်ကို ခေတ်မီပါတယ်။" },
        { word: "Station", ipa: "/ˈsteɪʃn/", mm: "ဘူတာရုံ", example: "Where is the train station?", exampleMM: "မီးရထားဘူတာ ဘယ်မှာလဲ။" },
        { word: "Map", ipa: "/mæp/", mm: "မြေပုံ", example: "Please look at the map.", exampleMM: "မြေပုံကို ကြည့်ပေးပါ။" },
        { word: "Left", ipa: "/lɛft/", mm: "ဘယ်ဘက်", example: "Turn left at the next corner.", exampleMM: "နောက်ထောင့်မှာ ဘယ်ဘက်ကို ကွေ့ပါ။" },
        { word: "Right", ipa: "/raɪt/", mm: "ညာဘက်", example: "The library is on the right.", exampleMM: "စာကြည့်တိုက်က ညာဘက်မှာ ရှိပါတယ်။" }
      ],
      listening: [
        { id: "lis_beg5_1", text: "Turn left at the next corner", audioText: "Turn left at the next corner", options: ["နောက်ထောင့်မှာ ညာဘက်ကို ကွေ့ပါ", "နောက်ထောင့်မှာ ဘယ်ဘက်ကို ကွေ့ပါ", "ဖြောင့်ဖြောင့်သွားပါ"], answer: "နောက်ထောင့်မှာ ဘယ်ဘက်ကို ကွေ့ပါ" }
      ],
      speaking: [
        { id: "spe_beg5_1", text: "Excuse me, where is the nearest station?", instruction: "Ask for directions politely:", instructionMM: "အောက်ပါအတိုင်း ယဉ်ကျေးစွာ လမ်းညွှန်ချက် တောင်းဆိုပါ:" }
      ],
      reading: {
        title: "Lost in the City",
        titleMM: "မြို့ထဲတွင် လမ်းပျောက်ခြင်း",
        content: "A tourist wants to visit the Shwedagon Pagoda but gets lost. He opens a map on his phone, but the signal is weak. He asks a local person, 'Excuse me, how do I get to the pagoda?' The local person smiles and says, 'Go straight, then turn left. It is on your right.' The tourist says, 'Thank you so much!'",
        contentMM: "ခရီးသွားတစ်ဦးသည် ရွှေတိဂုံဘုရားဖူးချင်သော်လည်း လမ်းပျောက်သွားသည်။ သူဖုန်းထဲက မြေပုံကို ဖွင့်ကြည့်သော်လည်း လိုင်းမကောင်းပေ။ သူက ဒေသခံတစ်ဦးကို 'တစ်ဆိတ်လောက်ပါ၊ ဘုရားကို ဘယ်လိုသွားရမလဲခင်ဗျာ' လို့ မေးတယ်။ ဒေသခံက ပြုံးပြီး 'တည့်တည့်သွားပြီး ဘယ်ဘက်ကွေ့ပါ။ ခင်ဗျာရဲ့ ညာဘက်မှာ ရှိပါလိမ့်မယ်' လို့ပြောတယ်။ ခရီးသွားက 'ကျေးဇူးအများကြီးတင်ပါတယ်' လို့ ပြောခဲ့ပါတယ်။",
        questions: [
          { question: "Where does the tourist want to visit?", options: ["The Shwedagon Pagoda", "The airport", "The train station"], answer: "The Shwedagon Pagoda" },
          { question: "Which way should the tourist turn first after going straight?", options: ["Left", "Right", "Backwards"], answer: "Left" }
        ]
      },
      writing: [
        { id: "wri_beg5_1", question: "Rearrange the words: [station / train / the / on / left / is / the]", correct: "the train station is on the left", prompt: "Translate: မီးရထားဘူတာရုံက ဘယ်ဘက်မှာ ရှိပါတယ်" }
      ]
    },
    {
      id: "beg_6",
      title: "Asking for Help & Emergencies",
      titleMM: "အကူအညီတောင်းခံခြင်းနှင့် အရေးပေါ်အခြေအနေများ",
      description: "Learn how to ask for help when lost or during emergency situations.",
      descriptionMM: "လမ်းပျောက်သည့်အခါ သို့မဟုတ် အရေးပေါ်အခြေအနေများတွင် အကူအညီတောင်းခံပုံကို လေ့လာပါ။",
      vocabulary: [
        { word: "Help", ipa: "/hɛlp/", mm: "အကူအညီ", example: "Please help me carry this bag.", exampleMM: "ဒီအိတ်သယ်ဖို့ ကျွန်တော့်ကို ကူညီပေးပါ။" },
        { word: "Lost", ipa: "/lɔst/", mm: "လမ်းပျောက်သော", example: "I am lost in this big city.", exampleMM: "ကျွန်တော် ဒီမြို့ကြီးထဲမှာ လမ်းပျောက်နေတယ်။" },
        { word: "Police", ipa: "/pəˈlis/", mm: "ရဲတပ်ဖွဲ့", example: "Call the police immediately.", exampleMM: "ရဲကို ချက်ချင်းဖုန်းခေါ်လိုက်ပါ။" },
        { word: "Doctor", ipa: "/ˈdɑktər/", mm: "ဆရာဝန်", example: "I need to see a doctor today.", exampleMM: "ကျွန်တော် ဒီနေ့ ဆရာဝန်နဲ့ တွေ့ဖို့ လိုအပ်တယ်။" },
        { word: "Emergency", ipa: "/ɪˈmɜrdʒənsi/", mm: "အရေးပေါ်အခြေအနေ", example: "This is an absolute emergency.", exampleMM: "ဒါဟာ တကယ့်အရေးပေါ်အခြေအနေတစ်ခုပါ။" }
      ],
      listening: [
        { id: "lis_beg6_1", text: "Call the police immediately", audioText: "Call the police immediately", options: ["ရဲကို ချက်ချင်းဖုန်းခေါ်လိုက်ပါ", "ဆရာဝန်နဲ့ သွားတွေ့ပါ", "ကျွန်တော့်ကို ကူညီပေးပါ"], answer: "ရဲကို ချက်ချင်းဖုန်းခေါ်လိုက်ပါ" }
      ],
      speaking: [
        { id: "spe_beg6_1", text: "Excuse me, I am lost. Can you help me?", instruction: "Ask for help politely:", instructionMM: "အောက်ပါ အကူအညီတောင်းခံမှုကို ယဉ်ကျေးစွာ ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "Lost Wallet",
        titleMM: "ပိုက်ဆံအိတ် ပျောက်ဆုံးခြင်း",
        content: "A traveler lost his wallet at a Yangon bus stop. He was lost because his ID cards and money were inside. He walked to the nearest police station. The police officers helped him contact his embassy. It was a stressful emergency, but he found help.",
        contentMM: "ခရီးသွားတစ်ဦးသည် ရန်ကုန်ဘတ်စ်ကားဂိတ်တစ်ခုတွင် ပိုက်ဆံအိတ် ပျောက်ဆုံးသွားခဲ့သည်။ ၎င်း၏ သတ်မှတ်ချက်ကတ်များနှင့် ငွေများ ပါသွားသဖြင့် သူ လမ်းပျောက်နေခဲ့သည်။ သူက အနီးဆုံး ရဲစခန်းသို့ လမ်းလျှောက်သွားခဲ့သည်။ ရဲတပ်ဖွဲ့ဝင်များက သူ့သံရုံးသို့ ဆက်သွယ်ရန် ကူညီပေးခဲ့ကြသည်။ ဒါဟာ စိတ်ဖိစီးစရာ အရေးပေါ်အခြေအနေတစ်ခုဖြစ်ပေမယ့် သူ အကူအညီ ရရှိခဲ့ပါတယ်။",
        questions: [
          { question: "Where did the traveler lose his wallet?", options: ["At a bus stop", "At the airport", "In a taxi"], answer: "At a bus stop" },
          { question: "Who helped him contact his embassy?", options: ["His friend", "The police officers", "A doctor"], answer: "The police officers" }
        ]
      },
      writing: [
        { id: "wri_beg6_1", question: "Rearrange the words: [need / a / I / see / doctor / to]", correct: "I need to see a doctor", prompt: "Translate: ကျွန်တော် ဆရာဝန်နဲ့ တွေ့ဖို့ လိုအပ်တယ်" }
      ]
    },
    {
      id: "beg_7",
      title: "Weather & Seasons",
      titleMM: "ရာသီဥတုနှင့် ရာသီဥတုအခြေအနေများ",
      description: "Learn how to describe the weather conditions and seasons.",
      descriptionMM: "ရာသီဥတုအခြေအနေများနှင့် ရာသီဥတုများအကြောင်း ဖော်ပြပြောဆိုပုံကို လေ့လာပါ။",
      vocabulary: [
        { word: "Rainy", ipa: "/ˈreɪni/", mm: "မိုးရွာသော", example: "It is a rainy afternoon.", exampleMM: "ဒါဟာ မိုးရွာနေတဲ့ ညနေခင်းတစ်ခုပါ။" },
        { word: "Sunny", ipa: "/ˈsʌni/", mm: "နေသာသော", example: "I love sunny days at the beach.", exampleMM: "ကျွန်တော် ကမ်းခြေမှာ နေသာတဲ့နေ့တွေကို ကြိုက်တယ်။" },
        { word: "Cold", ipa: "/koʊld/", mm: "အေးသော", example: "It gets very cold in December.", exampleMM: "ဒီဇင်ဘာလမှာ ရာသီဥတု တအားအေးတတ်တယ်။" },
        { word: "Hot", ipa: "/hɑt/", mm: "ပူသော", example: "March is a hot month in Myanmar.", exampleMM: "မတ်လဟာ မြန်မာနိုင်ငံမှာ ပူပြင်းတဲ့လတစ်ခု ဖြစ်ပါတယ်။" },
        { word: "Season", ipa: "/ˈsizn/", mm: "ရာသီ", example: "Monsoon is the rainy season.", exampleMM: "မုတ်သုံရာသီဟာ မိုးရာသီဖြစ်ပါတယ်။" }
      ],
      listening: [
        { id: "lis_beg7_1", text: "It gets very cold in December", audioText: "It gets very cold in December", options: ["ဒီဇင်ဘာလမှာ ရာသီဥတု တအားအေးတတ်တယ်", "မတ်လဟာ ပူပြင်းတဲ့လဖြစ်တယ်", "ကမ်းခြေမှာ နေသာတယ်"], answer: "ဒီဇင်ဘာလမှာ ရာသီဥတု တအားအေးတတ်တယ်" }
      ],
      speaking: [
        { id: "spe_beg7_1", text: "The weather is hot and sunny today.", instruction: "Read the weather forecast:", instructionMM: "အောက်ပါ ရာသီဥတုအခြေအနေကို အသံထွက်ဖတ်ပါ:" }
      ],
      reading: {
        title: "Seasons in Myanmar",
        titleMM: "မြန်မာနိုင်ငံ၏ ရာသီဥတုများ",
        content: "Myanmar has three main seasons: the hot season, the rainy season, and the cold season. The hot season starts in March. The rainy season begins in June, bringing heavy monsoon rains. December marks the start of the cold season, which is sunny but cool in the mornings.",
        contentMM: "မြန်မာနိုင်ငံတွင် အဓိက ရာသီဥတု သုံးခုရှိသည် - နွေရာသီ (ပူပြင်းသောရာသီ)၊ မိုးရာသီနှင့် ဆောင်းရာသီ (အေးသောရာသီ)။ နွေရာသီသည် မတ်လတွင် စတင်သည်။ မိုးရာသီသည် ဇွန်လတွင် စတင်ပြီး ပြင်းထန်သော မုတ်သုံမိုးများကို သယ်ဆောင်လာသည်။ ဒီဇင်ဘာလသည် ဆောင်းရာသီ၏အစဖြစ်ပြီး နေသာသော်လည်း မနက်ခင်းပိုင်းတွင် အေးမြသည်။",
        questions: [
          { question: "When does the hot season start?", options: ["March", "June", "December"], answer: "March" },
          { question: "How many main seasons does Myanmar have?", options: ["Two", "Three", "Four"], answer: "Three" }
        ]
      },
      writing: [
        { id: "wri_beg7_1", question: "Rearrange the words: [rainy / monsoon / is / season / the]", correct: "monsoon is the rainy season", prompt: "Translate: မုတ်သုံရာသီဟာ မိုးရာသီဖြစ်ပါတယ်" }
      ]
    },
    {
      id: "beg_8",
      title: "Visiting the British Council Classroom",
      titleMM: "ဗြိတိသျှကောင်စီ စာသင်ခန်းသို့ သွားရောက်လည်ပတ်ခြင်း",
      description: "Learn basic vocabulary for classroom objects and asking simple questions in a language center.",
      descriptionMM: "ဘာသာစကားသင်တန်းကျောင်းရှိ စာသင်ခန်းသုံးပစ္စည်းများနှင့် ရိုးရှင်းသော မေးခွန်းများမေးဆိုပုံဆိုင်ရာ အခြေခံဝေါဟာရများကို လေ့လာပါ။",
      vocabulary: [
        { word: "Classroom", ipa: "/ˈklæsruːm/", mm: "စာသင်ခန်း", example: "The classroom is bright and clean.", exampleMM: "စာသင်ခန်းက လင်းထိန်ပြီး သန့်ရှင်းပါတယ်။" },
        { word: "Homework", ipa: "/ˈhoʊmwɜːrk/", mm: "အိမ်စာ", example: "We have some English homework tonight.", exampleMM: "ကျွန်တော်တို့ ဒီနေ့ည အင်္ဂလိပ်စာအိမ်စာ အနည်းငယ်ရှိတယ်။" },
        { word: "Dictionary", ipa: "/ˈdɪkʃəneri/", mm: "အဘိဓာန်", example: "Can I borrow your dictionary?", exampleMM: "မင်းရဲ့အဘိဓာန်ကို ခေတ္တငှားလို့ရမလား။" },
        { word: "Question", ipa: "/ˈkwestʃən/", mm: "မေးခွန်း", example: "The student asked a simple question.", exampleMM: "ကျောင်းသားက ရိုးရှင်းတဲ့ မေးခွန်းတစ်ခု မေးခဲ့ပါတယ်။" },
        { word: "Understand", ipa: "/ˌʌndərˈstænd/", mm: "နားလည်သည်", example: "I understand the teacher's lesson.", exampleMM: "ဆရာမရဲ့ သင်ခန်းစာကို ကျွန်မ နားလည်ပါတယ်။" }
      ],
      listening: [
        { id: "lis_beg8_1", text: "I understand the teacher's lesson", audioText: "I understand the teacher's lesson", options: ["ဆရာမရဲ့ သင်ခန်းစာကို ကျွန်မ နားလည်ပါတယ်", "အိမ်စာလုပ်ဖို့ မမေ့ပါနဲ့", "အဘိဓာန်ကို ပြန်ပေးပါ"], answer: "ဆရာမရဲ့ သင်ခန်းစာကို ကျွန်မ နားလည်ပါတယ်" }
      ],
      speaking: [
        { id: "spe_beg8_1", text: "Can you please repeat the question, teacher?", instruction: "Ask the teacher to repeat a question:", instructionMM: "ဆရာမကို မေးခွန်းပြန်မေးပေးရန် ယဉ်ကျေးစွာ ပြောဆိုပါ:" }
      ],
      reading: {
        title: "First Day at the British Council",
        titleMM: "ဗြိတိသျှကောင်စီတွင် ပထမဆုံးနေ့",
        content: "Ko Ko visits the British Council library. He wants to learn English. He sees a modern classroom with many students. The teacher gives them a vocabulary homework. Ko Ko uses a bilingual dictionary to understand the new words. He is very happy to study here.",
        contentMM: "ကိုကိုသည် ဗြိတိသျှကောင်စီ စာကြည့်တိုက်သို့ သွားရောက်လည်ပတ်သည်။ သူသည် အင်္ဂလိပ်စာ သင်ယူချင်သည်။ သူသည် ကျောင်းသားများစွာရှိသော ခေတ်မီစာသင်ခန်းတစ်ခုကို တွေ့ရသည်။ ဆရာမက သူတို့ကို ဝေါဟာရအိမ်စာ ပေးသည်။ ကိုကိုသည် စကားလုံးအသစ်များကို နားလည်ရန် ဘာသာပြန်အဘိဓာန်ကို အသုံးပြုသည်။ သူသည် ဤနေရာတွင် စာလေ့လာရသဖြင့် အလွန်ပျော်ရွှင်နေပါသည်။",
        questions: [
          { question: "Where does Ko Ko visit?", options: ["The British Council", "The local market", "The railway station"], answer: "The British Council" },
          { question: "What does he use to understand new words?", options: ["A map", "A bilingual dictionary", "A newspaper"], answer: "A bilingual dictionary" }
        ]
      },
      writing: [
        { id: "wri_beg8_1", question: "Rearrange the words: [borrow / I / your / dictionary / can]", correct: "can I borrow your dictionary", prompt: "Translate: မင်းရဲ့အဘိဓာန်ကို ကျွန်တော် ငှားလို့ရမလား" }
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
    },
    {
      id: "int_2",
      title: "Travel Planning & Accommodations",
      titleMM: "ခရီးသွားလာမှု စီစဉ်ခြင်းနှင့် တည်းခိုနေထိုင်မှုများ",
      description: "Learn how to make reservations, discuss itineraries, and book hotel rooms.",
      descriptionMM: "ဘွတ်ကင်လုပ်ခြင်း၊ ခရီးစဉ်ဆွေးနွေးခြင်းနှင့် ဟိုတယ်အခန်းကြိုတင်မှာယူခြင်းများကို လေ့လာပါ။",
      vocabulary: [
        { word: "Reservation", ipa: "/ˌrezərˈveɪʃn/", mm: "ကြိုတင်ဘွတ်ကင်လုပ်ခြင်း", example: "I made a hotel reservation.", exampleMM: "ကျွန်တော် ဟိုတယ်ဘွတ်ကင်တစ်ခု လုပ်ခဲ့ပါတယ်။" },
        { word: "Itinerary", ipa: "/aɪˈtɪnərer(i)/", mm: "ခရီးစဉ်အစီအစဉ်", example: "We should plan our itinerary first.", exampleMM: "ငါတို့ ခရီးစဉ်အစီအစဉ်ကို အရင်ဆွဲသင့်တယ်။" },
        { word: "Departure", ipa: "/dɪˈpɑːrtʃər/", mm: "ထွက်ခွာချိန် / ထွက်ခွာခြင်း", example: "The departure time is 9 AM.", exampleMM: "ထွက်ခွာချိန်က မနက် ၉ နာရီဖြစ်ပါတယ်။" },
        { word: "Destination", ipa: "/ˌdestɪˈneɪʃn/", mm: "ဆိုက်ရောက်မည့်နေရာ", example: "Bagan is our final destination.", exampleMM: "ပုဂံက ငါတို့ရဲ့ နောက်ဆုံးပန်းတိုင် ခရီးစဉ်ဖြစ်တယ်။" },
        { word: "Explore", ipa: "/ɪkˈsplɔːr/", mm: "ရှာဖွေစူးစမ်းသည်", example: "We want to explore the local ruins.", exampleMM: "ကျွန်တော်တို့ ဒေသတွင်း ရှေးဟောင်းအပျက်အစီးတွေကို ရှာဖွေစူးစမ်းချင်ပါတယ်။" }
      ],
      listening: [
        { id: "lis_int2_1", text: "Bagan is our final destination", audioText: "Bagan is our final destination", options: ["ပုဂံက ငါတို့ရဲ့ နောက်ဆုံးပန်းတိုင် ခရီးစဉ်ဖြစ်တယ်", "ငါတို့ ပုဂံကို သွားချင်တယ်", "ထွက်ခွာချိန်က မနက် ၉ နာရီဖြစ်တယ်"], answer: "ပုဂံက ငါတို့ရဲ့ နောက်ဆုံးပန်းတိုင် ခရီးစဉ်ဖြစ်တယ်" }
      ],
      speaking: [
        { id: "spe_int2_1", text: "I would like to confirm my room reservation.", instruction: "Speak this room request:", instructionMM: "အောက်ပါ အခန်းကြိုတင်ဘွတ်ကင်အတည်ပြုချက်ကို ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "Planning the Summer Escape",
        titleMM: "နွေရာသီ အပန်းဖြေခရီး စီစဉ်ခြင်း",
        content: "Ko Ko and Nandar are organizing their annual trip. Nandar has already made a reservation at a beachfront resort in Ngapali. They are revising their itinerary to make sure they have enough time to explore nearby fishing villages and local seafood markets.",
        contentMM: "ကိုကိုနှင့် နန္ဒာတို့သည် ၎င်းတို့၏ နှစ်ပတ်လည်ခရီးစဉ်ကို စီစဉ်နေကြသည်။ နန္ဒာက ငပလီရှိ ကမ်းခြေအပန်းဖြေစခန်းတစ်ခုတွင် အခန်းကြိုတင်ဘွတ်ကင်လုပ်ထားပြီးဖြစ်သည်။ ၎င်းတို့သည် အနီးနားရှိ တံငါရွာများနှင့် လတ်ဆတ်သော ပင်လယ်စာစျေးများကို ရှာဖွေစူးစမ်းရန် လုံလောက်သောအချိန်ရရှိစေရန် ၎င်းတို့၏ ခရီးစဉ်အစီအစဉ်ကို ပြန်လည်ပြင်ဆင်နေကြသည်။",
        questions: [
          { question: "Where is the resort located?", options: ["Bagan", "Ngapali", "Yangon"], answer: "Ngapali" },
          { question: "Why are they revising their itinerary?", options: ["To find cheaper flights", "To have time to explore nearby villages", "Because Ko Ko is sick"], answer: "To have time to explore nearby villages" }
        ]
      },
      writing: [
        { id: "wri_int2_1", question: "Rearrange the words: [made / reservation / a / hotel / I]", correct: "I made a hotel reservation", prompt: "Translate: ကျွန်တော် ဟိုတယ်ဘွတ်ကင်တစ်ခု လုပ်ခဲ့ပါတယ်" }
      ]
    },
    {
      id: "int_3",
      title: "Job Interviews & Careers",
      titleMM: "အလုပ်အင်တာဗျူးများနှင့် အသက်မွေးဝမ်းကျောင်းများ",
      description: "Master vocabulary for job hunting, speaking in interviews, and workplace culture.",
      descriptionMM: "အလုပ်ရှာဖွေခြင်း၊ အင်တာဗျူးဖြေဆိုခြင်းနှင့် လုပ်ငန်းခွင်ယဉ်ကျေးမှုဆိုင်ရာ ဝေါဟာရများကို လေ့လာပါ။",
      vocabulary: [
        { word: "Interview", ipa: "/ˈɪntərvjuː/", mm: "လူတွေ့မေးမြန်းခြင်း / အင်တာဗျူး", example: "I have a job interview tomorrow.", exampleMM: "ကျွန်တော့်မှာ မနက်ဖြန် အလုပ်အင်တာဗျူးတစ်ခု ရှိပါတယ်။" },
        { word: "Experience", ipa: "/ɪkˈspɪəriəns/", mm: "အတွေ့အကြုံ", example: "She has five years of experience.", exampleMM: "သူမတွင် အတွေ့အကြုံ ငါးနှစ်ရှိသည်။" },
        { word: "Skill", ipa: "/skɪl/", mm: "ကျွမ်းကျင်မှု / စွမ်းရည်", example: "Communication is an essential skill.", exampleMM: "ပြောဆိုဆက်ဆံရေးသည် မရှိမဖြစ်လိုအပ်သော ကျွမ်းကျင်မှုတစ်ခုဖြစ်သည်။" },
        { word: "Qualification", ipa: "/ˌkwɒlɪfɪˈkeɪʃn/", mm: "အရည်အချင်း / လက်မှတ်", example: "What qualifications do you possess?", exampleMM: "မင်းမှာ ဘယ်လိုအရည်အချင်းတွေ ရှိသလဲ။" },
        { word: "Salary", ipa: "/ˈsæləri/", mm: "လစာ", example: "The job offers a competitive salary.", exampleMM: "ဤအလုပ်သည် ကောင်းမွန်သော လစာကို ပေးဆောင်သည်။" }
      ],
      listening: [
        { id: "lis_int3_1", text: "Communication is an essential skill", audioText: "Communication is an essential skill", options: ["ဆက်သွယ်ပြောဆိုရေးက မရှိမဖြစ်လိုအပ်တဲ့ ကျွမ်းကျင်မှုတစ်ခုဖြစ်တယ်", "သူမမှာ အတွေ့အကြုံ ငါးနှစ်ရှိတယ်", "ကျွန်တော့်မှာ အင်တာဗျူးတစ်ခုရှိတယ်"], answer: "ဆက်သွယ်ပြောဆိုရေးက မရှိမဖြစ်လိုအပ်တဲ့ ကျွမ်းကျင်မှုတစ်ခုဖြစ်တယ်" }
      ],
      speaking: [
        { id: "spe_int3_1", text: "I have extensive experience in software development.", instruction: "Speak with professional confidence:", instructionMM: "အောက်ပါ စာကြောင်းကို လုပ်ငန်းခွင်သုံး ယုံကြည်ချက်ရှိစွာ ဖတ်ပါ:" }
      ],
      reading: {
        title: "Landing the Dream Job",
        titleMM: "အိပ်မက်အလုပ်ကို ရရှိခြင်း",
        content: "Kyaw Kyaw applied for a Project Manager position. During the interview, he detailed his five years of management experience. The interviewers were impressed by his interpersonal skills and technical qualifications. He was offered a package with a competitive starting salary.",
        contentMM: "ကျော်ကျော်သည် ပရောဂျက်မန်နေဂျာ ရာထူးအတွက် လျှောက်ထားခဲ့သည်။ အင်တာဗျူးအတွင်း သူ၏ စီမံခန့်ခွဲမှု အတွေ့အကြုံ ငါးနှစ်အကြောင်းကို အသေးစိတ် ရှင်းပြခဲ့သည်။ အင်တာဗျူးမေးမြန်းသူများသည် သူ၏ လူမှုဆက်ဆံရေးစွမ်းရည်နှင့် နည်းပညာဆိုင်ရာ အရည်အချင်းများကို သဘောကျခဲ့ကြသည်။ သူ့ကို ကောင်းမွန်သော စတင်လစာဖြင့် အလုပ်ကမ်းလှမ်းခဲ့သည်။",
        questions: [
          { question: "What position did Kyaw Kyaw apply for?", options: ["Sales Representative", "Project Manager", "Software Engineer"], answer: "Project Manager" },
          { question: "What impressed the interviewers?", options: ["His dynamic clothing", "His interpersonal skills and qualifications", "His school grades"], answer: "His interpersonal skills and qualifications" }
        ]
      },
      writing: [
        { id: "wri_int3_1", question: "Rearrange the words: [job / interview / tomorrow / have / a / I]", correct: "I have a job interview tomorrow", prompt: "Translate: ကျွန်တော့်မှာ မနက်ဖြန် အလုပ်အင်တာဗျူးတစ်ခု ရှိပါတယ်" }
      ]
    },
    {
      id: "int_4",
      title: "Health, Fitness & Wellness",
      titleMM: "ကျန်းမာရေး၊ ကြံ့ခိုင်ရေးနှင့် နေကောင်းကျန်းမာမှု",
      description: "Discuss healthy habits, diet planning, medical symptoms, and remedies.",
      descriptionMM: "ကျန်းမာသော အလေ့အထများ၊ အစားအသောက်စီမံခြင်း၊ ရောဂါလက္ခဏာများနှင့် ကုသမှုများကို ဆွေးနွေးပါ။",
      vocabulary: [
        { word: "Nutrition", ipa: "/njuˈtrɪʃn/", mm: "အာဟာရ", example: "Good nutrition is key to physical health.", exampleMM: "ကောင်းမွန်သောအာဟာရသည် ခန္ဓာကိုယ်ကျန်းမာရေးအတွက် သော့ချက်ဖြစ်သည်။" },
        { word: "Exercise", ipa: "/ˈeksərsaɪz/", mm: "လေ့ကျင့်ခန်းလုပ်သည်", example: "You should exercise regularly.", exampleMM: "မင်း ပုံမှန် လေ့ကျင့်ခန်းလုပ်သင့်တယ်။" },
        { word: "Symptom", ipa: "/ˈsɪmptəm/", mm: "ရောဂါလက္ခဏာ", example: "A headache is a common symptom.", exampleMM: "ခေါင်းကိုက်ခြင်းသည် အဖြစ်များသော ရောဂါလက္ခဏာတစ်ခုဖြစ်သည်။" },
        { word: "Prescription", ipa: "/prɪˈskrɪpʃn/", mm: "ဆရာဝန်ဆေးညွှန်း", example: "The pharmacist filled my prescription.", exampleMM: "ဆေးဝါးပညာရှင်က ကျွန်တော့်ဆေးညွှန်းအတိုင်း ဆေးထုတ်ပေးခဲ့သည်။" },
        { word: "Recovery", ipa: "/rɪˈkʌvəri/", mm: "ပြန်လည်ကောင်းမွန်လာခြင်း", example: "We wish you a speedy recovery.", exampleMM: "သင့်ကို လျင်မြန်စွာ ပြန်လည်ကောင်းမွန်လာပါစေကြောင်း ဆုတောင်းပေးပါတယ်။" }
      ],
      listening: [
        { id: "lis_int4_1", text: "We wish you a speedy recovery", audioText: "We wish you a speedy recovery", options: ["သင့်ကို လျင်မြန်စွာ ပြန်လည်ကောင်းမွန်လာပါစေကြောင်း ဆုတောင်းပေးပါတယ်", "ပုံမှန် လေ့ကျင့်ခန်းလုပ်ပါ", "အာဟာရပြည့်ဝအောင် စားပါ"], answer: "သင့်ကို လျင်မြန်စွာ ပြန်လည်ကောင်းမွန်လာပါစေကြောင်း ဆုတောင်းပေးပါတယ်" }
      ],
      speaking: [
        { id: "spe_int4_1", text: "Healthy eating and regular exercise reduce stress.", instruction: "Speak this health tip clearly:", instructionMM: "အောက်ပါ ကျန်းမာရေးအကြံပြုချက်ကို ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "A Balanced Lifestyle",
        titleMM: "မျှတသော နေထိုင်မှုပုံစံ",
        content: "Min Htet used to feel sluggish. He consulted a dietitian who advised improving his daily nutrition and taking regular exercise. He began eating more green vegetables and jogging daily. After a month, his energy levels surged, showing the power of physical wellness.",
        contentMM: "မင်းထက်သည် အရင်က လူပန်းနွမ်းနယ်သလို ခံစားရလေ့ရှိသည်။ သူက အာဟာရပညာရှင်တစ်ဦးနှင့် တိုင်ပင်ခဲ့ပြီး နေ့စဉ်အာဟာရကို မြှင့်တင်ရန်နှင့် ပုံမှန်လေ့ကျင့်ခန်းလုပ်ရန် အကြံပြုခဲ့သည်။ သူသည် အစိမ်းရောင်ဟင်းသီးဟင်းရွက်များကို ပိုမိုစားသုံးပြီး နေ့စဉ်ပြေးခဲ့သည်။ တစ်လအခြေအနေတွင် ခန္ဓာကိုယ်ကျန်းမာရေး၏ စွမ်းအားကြောင့် သူ၏ စွမ်းအင်များ သိသိသာသာ တိုးတက်လာခဲ့သည်။",
        questions: [
          { question: "What advice did the dietitian give?", options: ["To sleep longer", "To improve nutrition and exercise", "To take vitamins"], answer: "To improve nutrition and exercise" },
          { question: "How did Min Htet feel after a month?", options: ["Sluggish", "Energetic", "Sick"], answer: "Energetic" }
        ]
      },
      writing: [
        { id: "wri_int4_1", question: "Rearrange the words: [exercise / should / regularly / you]", correct: "you should exercise regularly", prompt: "Translate: မင်း ပုံမှန် လေ့ကျင့်ခန်းလုပ်သင့်တယ်" }
      ]
    },
    {
      id: "int_5",
      title: "Technology & Social Media",
      titleMM: "နည်းပညာနှင့် လူမှုကွန်ရက် မီဒီယာ",
      description: "Discuss how online platforms, gadgets, and networks influence daily lives.",
      descriptionMM: "အွန်လိုင်းပလပ်ဖောင်းများ၊ နည်းပညာပစ္စည်းများနှင့် ကွန်ရက်များက နေ့စဉ်ဘဝအပေါ် မည်သို့လွှမ်းမိုးကြောင်း ဆွေးနွေးပါ။",
      vocabulary: [
        { word: "Device", ipa: "/dɪˈvaɪs/", mm: "စက်ပစ္စည်း / ကိရိယာ", example: "Keep your mobile devices charged.", exampleMM: "သင့်မိုဘိုင်းဖုန်း စက်ပစ္စည်းများကို အားသွင်းထားပါ။" },
        { word: "Application", ipa: "/ˌæplɪˈkeɪʃn/", mm: "အပလီကေးရှင်း / ဆော့ဖ်ဝဲ", example: "Install the language learning application.", exampleMM: "ဘာသာစကားလေ့လာရေး အပလီကေးရှင်းကို ထည့်သွင်းပါ။" },
        { word: "Privacy", ipa: "/ˈprɪvəsi/", mm: "ကိုယ်ရေးကိုယ်တာလုံခြုံမှု", example: "Check your online privacy settings.", exampleMM: "သင့်အွန်လိုင်း ကိုယ်ရေးကိုယ်တာ ဆက်တင်များကို စစ်ဆေးပါ။" },
        { word: "Network", ipa: "/ˈnetwɜːrk/", mm: "ကွန်ရက်", example: "The internet network is very slow today.", exampleMM: "ဒီနေ့ အင်တာနက်ကွန်ရက်က အရမ်းနှေးနေတယ်။" },
        { word: "Trending", ipa: "/ˈtrendɪŋ/", mm: "ရေပန်းစားနေသော / ခေတ်စားသော", example: "What topics are trending on Twitter?", exampleMM: "တွစ်တာပေါ်မှာ ဘယ်အကြောင်းအရာတွေ ရေပန်းစားနေလဲ။" }
      ],
      listening: [
        { id: "lis_int5_1", text: "Check your online privacy settings", audioText: "Check your online privacy settings", options: ["အင်တာနက်ကွန်ရက်ကို စစ်ဆေးပါ", "သင့်အွန်လိုင်း ကိုယ်ရေးကိုယ်တာ ဆက်တင်များကို စစ်ဆေးပါ", "အပလီကေးရှင်းကို ထည့်သွင်းပါ"], answer: "သင့်အွန်လိုင်း ကိုယ်ရေးကိုယ်တာ ဆက်တင်များကို စစ်ဆေးပါ" }
      ],
      speaking: [
        { id: "spe_int5_1", text: "Technology connects people around the globe instantly.", instruction: "Speak this tech fact clearly:", instructionMM: "အောက်ပါ စာကြောင်းကို သဘာဝကျကျ ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "The Digital Era",
        titleMM: "ဒစ်ဂျစ်တယ် ခေတ်သမယ",
        content: "Almost everyone carries a smart device nowadays. Social media applications allow us to stay connected, but they also raise concerns about personal privacy. Keeping security networks strong and managing screen time are crucial habits in this highly connected digital era.",
        contentMM: "ယနေ့ခေတ်တွင် လူတိုင်းနီးပါးသည် စမတ်ကျသည့် စက်ပစ္စည်းတစ်ခုကို ဆောင်ထားကြသည်။ လူမှုကွန်ရက် အပလီကေးရှင်းများသည် ကျွန်ုပ်တို့ကို အဆက်အသွယ်မပြတ်စေရန် ကူညီပေးသော်လည်း ကိုယ်ရေးကိုယ်တာ လုံခြုံမှုဆိုင်ရာ စိုးရိမ်မှုများကိုလည်း မြင့်တက်စေသည်။ လုံခြုံရေးကွန်ရက်များကို ခိုင်မာအောင်ထားရှိခြင်းနှင့် ဖုန်းသုံးချိန်ကို ထိန်းညှိခြင်းသည် ဤဒစ်ဂျစ်တယ်ခေတ်တွင် အလွန်အရေးကြီးသော အလေ့အထများဖြစ်သည်။",
        questions: [
          { question: "What do social media applications raise concerns about?", options: ["Internet costs", "Personal privacy", "Battery life"], answer: "Personal privacy" },
          { question: "What is a crucial habit mentioned in the passage?", options: ["Buying expensive devices", "Managing screen time", "Using many apps"], answer: "Managing screen time" }
        ]
      },
      writing: [
        { id: "wri_int5_1", question: "Rearrange the words: [privacy / online / settings / check / your]", correct: "check your online privacy settings", prompt: "Translate: သင့်အွန်လိုင်း ကိုယ်ရေးကိုယ်တာ ဆက်တင်များကို စစ်ဆေးပါ" }
      ]
    },
    {
      id: "int_6",
      title: "Restaurant & Dining Etiquette",
      titleMM: "စားသောက်ဆိုင်နှင့် စားသောက်မှုပုံစံများ",
      description: "Learn how to order food, interact with servers, and understand dining terms.",
      descriptionMM: "အစားအသောက်မှာယူပုံ၊ ဝန်ဆောင်မှုပေးသူများနှင့် ဆက်သွယ်ပုံနှင့် စားသောက်မှုဆိုင်ရာ စကားလုံးများကို လေ့လာပါ။",
      vocabulary: [
        { word: "Menu", ipa: "/ˈmenjuː/", mm: "မီနူး / စားသောက်ဖွယ်ရာစာရင်း", example: "May I see the menu, please?", exampleMM: "မီနူးစာရင်းလေး ကြည့်လို့ရမလားခင်ဗျာ။" },
        { word: "Order", ipa: "/ˈɔːrdər/", mm: "မှာယူသည်", example: "I would like to order pasta.", exampleMM: "ကျွန်တော် ပါစတာ တစ်ပွဲမှာချင်ပါတယ်။" },
        { word: "Appetizer", ipa: "/ˈæpɪtaɪzər/", mm: "အမြည်းဟင်းလျာ", example: "We ordered soup as an appetizer.", exampleMM: "ကျွန်တော်တို့ စွပ်ပြုတ်ကို အမြည်းဟင်းလျာအနေနဲ့ မှာခဲ့ကြတယ်။" },
        { word: "Entree", ipa: "/ˈɑːntreɪ/", mm: "ပင်မဟင်းလျာ", example: "The steak is my favorite entree.", exampleMM: "စတိတ်ကင်က ကျွန်တော် အကြိုက်ဆုံး ပင်မဟင်းလျာ ဖြစ်ပါတယ်။" },
        { word: "Bill", ipa: "/bɪl/", mm: "ဘေလ်စာရင်း", example: "Could we have the bill, please?", exampleMM: "ဘေလ်လေး ရှင်းပေးလို့ ရမလားခင်ဗျာ။" }
      ],
      listening: [
        { id: "lis_int6_1", text: "May I see the menu, please", audioText: "May I see the menu, please", options: ["မီနူးစာရင်းလေး ကြည့်လို့ရမလားခင်ဗျာ", "ဘေလ် ရှင်းပေးပါ", "ပါစတာ မှာယူပါ"], answer: "မီနူးစာရင်းလေး ကြည့်လို့ရမလားခင်ဗျာ" }
      ],
      speaking: [
        { id: "spe_int6_1", text: "I would like to order the grilled fish, please.", instruction: "Order dinner politely:", instructionMM: "အောက်ပါ စားသောက်ဖွယ်ရာ မှာယူမှုကို ယဉ်ကျေးစွာ ပြောဆိုပါ:" }
      ],
      reading: {
        title: "Dinner for Two",
        titleMM: "နှစ်ယောက်စာ ညစာ",
        content: "Htet Htet and her friend dined at a modern Italian restaurant. The waiter handed them the menu. For the appetizer, they ordered garlic bread. For the main entree, they both selected seafood pasta. Once they finished eating, Htet Htet requested the bill and paid.",
        contentMM: "ထက်ထက်နှင့် သူမသူငယ်ချင်းသည် ခေတ်မီအီတလီ စားသောက်ဆိုင်တစ်ခုတွင် ညစာစားခဲ့ကြသည်။ စားပွဲထိုးက ၎င်းတို့အား မီနူးစာရင်း ပေးခဲ့သည်။ အမြည်းဟင်းလျာအတွက် ၎င်းတို့သည် ကြက်သွန်ဖြူပေါင်မုန့်ကို မှာခဲ့ကြသည်။ ပင်မဟင်းလျာအတွက် ၎င်းတို့နှစ်ဦးစလုံး ပင်လယ်စာပါစတာကို ရွေးချယ်ခဲ့ကြသည်။ စားသောက်ပြီးနောက် ထက်ထက်က ဘေလ်တောင်းပြီး ငွေပေးချေခဲ့သည်။",
        questions: [
          { question: "What did they order for the main entree?", options: ["Garlic bread", "Seafood pasta", "Steak"], answer: "Seafood pasta" },
          { question: "What did Htet Htet request at the end?", options: ["The bill", "More bread", "The chef"], answer: "The bill" }
        ]
      },
      writing: [
        { id: "wri_int6_1", question: "Rearrange the words: [bill / we / please / have / the / could]", correct: "could we have the bill please", prompt: "Translate: ဘေလ်လေး ရှင်းပေးလို့ ရမလားခင်ဗျာ" }
      ]
    },
    {
      id: "int_7",
      title: "Banking, Finance & Saving",
      titleMM: "ဘဏ်လုပ်ငန်း၊ ဘဏ္ဍာရေးနှင့် စုဆောင်းငွေ",
      description: "Learn how to open bank accounts, deposit/withdraw money, and transfer funds.",
      descriptionMM: "ဘဏ်အကောင့်ဖွင့်ခြင်း၊ ငွေသွင်း/ငွေထုတ်ခြင်းနှင့် ငွေလွှဲပြောင်းခြင်းများကို လေ့လာပါ။",
      vocabulary: [
        { word: "Account", ipa: "/əˈkaʊnt/", mm: "ဘဏ်စာရင်း / အကောင့်", example: "I want to open a savings account.", exampleMM: "ကျွန်တော် စုငွေစာရင်းအကောင့်တစ်ခု ဖွင့်ချင်ပါတယ်။" },
        { word: "Deposit", ipa: "/dɪˈpɒzɪt/", mm: "အပ်နှံငွေ / ငွေသွင်းသည်", example: "I need to deposit some cash today.", exampleMM: "ကျွန်တော် ဒီနေ့ ငွေအနည်းငယ် သွင်းဖို့လိုအပ်တယ်။" },
        { word: "Withdraw", ipa: "/wɪðˈdrɔː/", mm: "ငွေထုတ်ယူသည်", example: "She went to the ATM to withdraw money.", exampleMM: "သူမ ငွေထုတ်ဖို့ အေတီအမ်စက်ဆီ သွားခဲ့သည်။" },
        { word: "Interest", ipa: "/ˈɪntrəst/", mm: "အတိုးနှုန်း / အတိုး", example: "The savings account earns high interest.", exampleMM: "ဤစုငွေစာရင်းသည် အတိုးနှုန်း မြင့်မားစွာရရှိသည်။" },
        { word: "Transfer", ipa: "/trænsˈfɜːr/", mm: "လွှဲပြောင်းသည်", example: "Can I transfer money online?", exampleMM: "ကျွန်တော် အွန်လိုင်းကနေ ငွေလွှဲလို့ရမလား။" }
      ],
      listening: [
        { id: "lis_int7_1", text: "Can I transfer money online", audioText: "Can I transfer money online", options: ["ကျွန်တော် အွန်လိုင်းကနေ ငွေလွှဲလို့ရမလား", "အကောင့်တစ်ခု ဖွင့်ချင်ပါတယ်", "ငွေထုတ်ယူပါ"], answer: "ကျွန်တော် အွန်လိုင်းကနေ ငွေလွှဲလို့ရမလား" }
      ],
      speaking: [
        { id: "spe_int7_1", text: "I would like to deposit one hundred thousand kyats into my account.", instruction: "Perform a banking transaction:", instructionMM: "အောက်ပါ ငွေသွင်းခြင်း တောင်းဆိုမှုကို ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "Managing Money",
        titleMM: "ငွေကြေးစီမံခန့်ခွဲမှု",
        content: "Aung Aung visited the bank to manage his savings. He wanted to open a new savings account that offers five percent annual interest. The teller helped him deposit fifty thousand kyats. Later, he used his mobile application to transfer funds to his mother.",
        contentMM: "အောင်အောင်သည် သူ၏စုဆောင်းငွေကို စီမံခန့်ခွဲရန် ဘဏ်သို့သွားခဲ့သည်။ သူသည် နှစ်စဉ်အတိုးနှုန်း ငါးရာခိုင်နှုန်းပေးသည့် စုငွေစာရင်းအသစ်တစ်ခု ဖွင့်လိုခဲ့သည်။ ဘဏ်ဝန်ထမ်းက သူ့အား ငါးသောင်းကျပ် အပ်နှံရန် ကူညီပေးခဲ့သည်။ နောက်ပိုင်းတွင် သူသည် မိခင်ဖြစ်သူထံ ငွေလွှဲရန် မိုဘိုင်းအပလီကေးရှင်းကို အသုံးပြုခဲ့သည်။",
        questions: [
          { question: "What interest rate does the new account offer?", options: ["Two percent", "Five percent", "Ten percent"], answer: "Five percent" },
          { question: "What did Aung Aung do later via his app?", options: ["Withdrew cash", "Transferred funds to his mother", "Bought books"], answer: "Transferred funds to his mother" }
        ]
      },
      writing: [
        { id: "wri_int7_1", question: "Rearrange the words: [savings / open / want / a / account / to / I]", correct: "I want to open a savings account", prompt: "Translate: ကျွန်တော် စုငွေစာရင်းအကောင့်တစ်ခု ဖွင့်ချင်ပါတယ်" }
      ]
    },
    {
      id: "int_8",
      title: "Using Resources at the American Center",
      titleMM: "အမေရိကန်စင်တာရှိ အရင်းအမြစ်များကို အသုံးပြုခြင်း",
      description: "Learn how to talk about library membership, workshops, and speaking clubs at educational centers.",
      descriptionMM: "ပညာရေးစင်တာများရှိ စာကြည့်တိုက်အသင်းဝင်ခြင်း၊ အလုပ်ရုံဆွေးနွေးပွဲများနှင့် စကားပြောကလပ်များအကြောင်း ပြောဆိုပုံကို လေ့လာပါ။",
      vocabulary: [
        { word: "Membership", ipa: "/ˈmembərʃɪp/", mm: "အသင်းဝင်ဖြစ်ခြင်း", example: "The annual library membership fee is very reasonable.", exampleMM: "နှစ်စဉ် စာကြည့်တိုက် အသင်းဝင်ကြေးက တကယ်ကို သင့်တင့်ပါတယ်။" },
        { word: "Borrow", ipa: "/ˈbɑːroʊ/", mm: "ငှားရမ်းသည်", example: "You can borrow up to four books at a time.", exampleMM: "တစ်ကြိမ်လျှင် စာအုပ် လေးအုပ်အထိ ငှားရမ်းနိုင်ပါသည်။" },
        { word: "Discussion", ipa: "/dɪˈskʌʃn/", mm: "ဆွေးနွေးညှိနှိုင်းခြင်း", example: "We had an active discussion in the English Club.", exampleMM: "ကျွန်တော်တို့ အင်္ဂလိပ်စာကလပ်မှာ တက်ကြွတဲ့ ဆွေးနွေးမှုတစ်ခု ပြုလုပ်ခဲ့ကြတယ်။" },
        { word: "Resource", ipa: "/ˈriːsɔːrs/", mm: "အရင်းအမြစ် / ကိုးကားစရာ", example: "The library offers excellent online learning resources.", exampleMM: "စာကြည့်တိုက်က ကောင်းမွန်တဲ့ အွန်လိုင်းသင်ယူမှု အရင်းအမြစ်တွေကို ပံ့ပိုးပေးပါတယ်။" },
        { word: "Workshop", ipa: "/ˈwɜːrkʃɑːp/", mm: "အလုပ်ရုံဆွေးနွေးပွဲ", example: "I attended a creative writing workshop yesterday.", exampleMM: "ကျွန်တော် မနေ့က ဖန်တီးမှုရှိသော စာရေးခြင်းဆိုင်ရာ အလုပ်ရုံဆွေးနွေးပွဲတစ်ခု တက်ရောက်ခဲ့သည်။" },
        { word: "Access", ipa: "/ˈækses/", mm: "အသုံးပြုခွင့် ရယူသည်", example: "Members can access digital research databases.", exampleMM: "အသင်းဝင်များသည် ဒစ်ဂျစ်တယ် သုတေသန ဒေတာဘေ့စ်များကို အသုံးပြုခွင့် ရရှိနိုင်ကြသည်။" }
      ],
      listening: [
        { id: "lis_int8_1", text: "Members can access digital research databases", audioText: "Members can access digital research databases", options: ["အသင်းဝင်များသည် ဒစ်ဂျစ်တယ် သုတေသန ဒေတာဘေ့စ်များကို အသုံးပြုခွင့် ရရှိနိုင်ကြသည်", "စာအုပ်များကို အချိန်မီ ပြန်ပေးပါ", "အလုပ်ရုံဆွေးနွေးပွဲကို တက်ရောက်ပါ"], answer: "အသင်းဝင်များသည် ဒစ်ဂျစ်တယ် သုတေသန ဒေတာဘေ့စ်များကို အသုံးပြုခွင့် ရရှိနိုင်ကြသည်" }
      ],
      speaking: [
        { id: "spe_int8_1", text: "I joined the American Center to access English speaking clubs.", instruction: "Explain your reasons for joining:", instructionMM: "အသင်းဝင်ရခြင်း အကြောင်းရင်းကို ပြောပြပါ:" }
      ],
      reading: {
        title: "A Productive Day at the American Center",
        titleMM: "အမေရိကန်စင်တာတွင် အကျိုးရှိသောနေ့တစ်နေ့",
        content: "Min Min recently renewed his library membership at the American Center in Yangon. He loves the peaceful environment, which is perfect for studying. In the morning, he borrows two TOEFL preparation books. In the afternoon, he attends a workshop about public speaking. Finally, he joins the English Discussion Club, where he meets native speakers and improves his conversation skills.",
        contentMM: "မင်းမင်းသည် မကြာသေးမီက ရန်ကုန်ရှိ အမေရိကန်စင်တာတွင် စာကြည့်တိုက်အသင်းဝင်သက်တမ်းကို တိုးမြှင့်ခဲ့သည်။ သူသည် စာလေ့လာရန် အလွန်ကောင်းမွန်သော ဆိတ်ငြိမ်အေးချမ်းသည့် ပတ်ဝန်းကျင်ကို နှစ်သက်သည်။ မနက်ပိုင်းတွင် သူသည် TOEFL ပြင်ဆင်မှု စာအုပ်နှစ်အုပ်ကို ငှားရမ်းသည်။ မွန်းလွဲပိုင်းတွင် လူထုရှေ့စကားပြောခြင်းဆိုင်ရာ အလုပ်ရုံဆွေးနွေးပွဲတစ်ခုသို့ တက်ရောက်သည်။ နောက်ဆုံးတွင် သူသည် အင်္ဂလိပ်စာဆွေးနွေးပွဲကလပ်သို့ ဝင်ရောက်ကာ မိခင်ဘာသာစကားပြောဆိုသူများနှင့် တွေ့ဆုံပြီး ၎င်း၏ စကားပြောစွမ်းရည်ကို မြှင့်တင်ခဲ့သည်။",
        questions: [
          { question: "Why does Min Min like the American Center?", options: ["Because of the peaceful study environment", "Because of the cheap food", "Because it is close to the market"], answer: "Because of the peaceful study environment" },
          { question: "What club does Min Min join in the afternoon?", options: ["The English Discussion Club", "The Soccer Club", "The Chess Club"], answer: "The English Discussion Club" }
        ]
      },
      writing: [
        { id: "wri_int8_1", question: "Rearrange the words: [borrow / how / books / many / can / I]", correct: "how many books can I borrow", prompt: "Translate: ကျွန်တော် စာအုပ်ဘယ်နှအုပ် ငှားလို့ရမလဲ" }
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
        contentMM: "သန့်ရှင်းသောစွမ်းအင်သို့ ကူးပြောင်းခြင်းသည် အနာგတ်ကာလ၏ မျှော်မှန်းချက်သက်သက် မဟုတ်တော့ဘဲ လက်ငင်းလုပ်ဆောင်ရမည့် သဘာဝပတ်ဝန်းကျင်ဆိုင်ရာ လိုအပ်ချက်တစ်ခု ဖြစ်သည်။ ဖန်လုံအိမ်ဓာတ်ငွေ့များ စဉ်ဆက်မပြတ် မြင့်တက်လာခြင်းကြောင့် ကမ္ဘာတစ်ဝန်းရှိ အစိုးရများသည် ပြန်လည်ပြည့်ဖြိုးမြဲ စွမ်းအင်အဆောက်အအုံများတွင် ရင်းနှီးမြှုပ်နှံရန် တွန်းအားပေးခြင်း ခံနေရသည်။ သို့သော် နည်းပညာပိုင်းဆိုင်ရာ အကောင်အထည်ဖော်မှု တစ်ခုတည်းဖြင့် မလုံလောက်ပါ။ စစ်မှန်သော အပြောင်းအလဲသည် စားသုံးသူများ၏ အလေ့အထစနစ်များ ပြောင်းလဲခြင်းနှင့် ကာဗွန်ထုတ်လွှတ်သူများကို ငွေကြေးအရ တာဝန်ခံစေမည့် စည်းမျဉ်းစည်းကမ်း မူဘောင်များ လိုအပ်သည်။",
        questions: [
          { question: "What is clean energy described as in the passage?", options: ["An immediate ecological necessity", "A cheap alternative", "A futuristic luxury"], answer: "An immediate ecological necessity" },
          { question: "What is required alongside technological implementation?", options: ["Tax cuts for corporations", "Systemic shifts in consumer behavior", "More fossil fuels"], answer: "Systemic shifts in consumer behavior" }
        ]
      },
      writing: [
        { id: "wri_adv1_1", question: "Rearrange the words: [mitigate / steps / to / emissions / taken / carbon / must / be]", correct: "steps must be taken to mitigate carbon emissions", prompt: "Translate: ကာဗွန်ထုတ်လွှတ်မှုကို လျှော့ချသက်သာစေရန် ခြေလှမ်းများ လုပ်ဆောင်ရမည်" }
      ]
    },
    {
      id: "adv_2",
      title: "Business Leadership & Strategy",
      titleMM: "စီးပွားရေးဆိုင်ရာ ခေါင်းဆောင်မှုနှင့် မဟာဗျူဟာ",
      description: "Discuss mergers, acquisitions, leadership traits, and corporate financial leverage.",
      descriptionMM: "ကုမ္ပဏီများပူးပေါင်းခြင်း၊ ခေါင်းဆောင်မှုပုံစံများနှင့် ကော်ပိုရိတ်ဘဏ္ဍာရေး မဟာဗျူဟာများကို ဆွေးနွေးပါ။",
      vocabulary: [
        { word: "Acquisition", ipa: "/ˌækwɪˈzɪʃn/", mm: "ဝယ်ယူပိုင်ဆိုင်ခြင်း / ပေါင်းစည်းခြင်း", example: "The company announced its latest tech acquisition.", exampleMM: "ကုမ္ပဏီက ၎င်းတို့၏ နောက်ဆုံး နည်းပညာကုမ္ပဏီ ဝယ်ယူပိုင်ဆိုင်မှုကို ကြေညာခဲ့သည်။" },
        { word: "Consensus", ipa: "/kənˈsensəs/", mm: "ဘုံသဘောတူညီချက်", example: "The board members reached a consensus on the plan.", exampleMM: "ဒါရိုက်တာဘုတ်အဖွဲ့ဝင်များသည် အစီအစဉ်အပေါ် ဘုံသဘောတူညီချက် ရရှိခဲ့ကြသည်။" },
        { word: "Leverage", ipa: "/ˈliːvərɪdʒ/", mm: "အခွင့်ကောင်းယူအသုံးချသည် / အရှိန်မြှင့်တင်သည်", example: "We must leverage our existing client relationships.", exampleMM: "ကျွန်ုပ်တို့သည် လက်ရှိဖောက်သည်များနှင့် ရင်းနှီးမှုကို အခွင့်ကောင်းယူ အသုံးချရမည်။" },
        { word: "Revenue", ipa: "/ˈrevənjuː/", mm: "ဝင်ငွေ / ဘဏ္ဍာငွေ", example: "Annual revenue grew by fifteen percent.", exampleMM: "နှစ်စဉ်ဝင်ငွေသည် တစ်ဆယ့်ငါးရာခိုင်နှုန်း တိုးတက်လာခဲ့သည်။" },
        { word: "Synergy", ipa: "/ˈsɪnөрдʒi/", mm: "ပူးပေါင်းဆောင်ရွက်မှု အကျိုးသက်ရောက်မှု", example: "The merger created strong operational synergy.", exampleMM: "ကုမ္ပဏီနှစ်ခု ပေါင်းစည်းခြင်းကြောင့် အလွန်ကောင်းမွန်သော ပူးပေါင်းလုပ်ဆောင်မှု အကျိုးသက်ရောက်မှုကို ရရှိစေခဲ့သည်။" }
      ],
      listening: [
        { id: "lis_adv2_1", text: "The board members reached a consensus on the plan", audioText: "The board members reached a consensus on the plan", options: ["ဘုတ်အဖွဲ့ဝင်များသည် အစီအစဉ်အပေါ် ဘုံသဘောတူညီချက် ရရှိခဲ့ကြသည်", "နှစ်စဉ်ဝင်ငွေသည် ဆယ့်ငါးရာခိုင်နှုန်း တိုးတက်လာသည်", "ကုမ္ပဏီနှစ်ခု ပေါင်းစည်းခဲ့သည်"], answer: "ဘုတ်အဖွဲ့ဝင်များသည် အစီအစဉ်အပေါ် ဘုံသဘောတူညီချက် ရရှိခဲ့ကြသည်" }
      ],
      speaking: [
        { id: "spe_adv2_1", text: "Effective leaders delegate authority and foster collaborative synergies.", instruction: "Speak with authoritative corporate emphasis:", instructionMM: "အောက်ပါ စီးပွားရေးဆိုင်ရာ စာကြောင်းကို လေးနက်စွာ ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "The Logic of Mergers",
        titleMM: "ကုမ္ပဏီများ ပူးပေါင်းခြင်း၏ ကျိုးကြောင်းဆီလျော်မှု",
        content: "Corporate expansion often relies on strategic acquisitions rather than organic growth. When two major tech giants merge, executives look for operational synergy to streamline costs and maximize revenue. However, without a consensus among stakeholders regarding corporate culture, such ventures risk high friction and potential failure despite strong financial leverage.",
        contentMM: "ကော်ပိုရိတ် တိုးချဲ့မှုများသည် ပုံမှန်တိုးတက်မှုထက် မဟာဗျူဟာမြောက် ဝယ်ယူပေါင်းစည်းမှုများအပေါ် မကြာခဏ အမှီပြုလေ့ရှိသည်။ နည်းပညာဘီလူးကြီးနှစ်ခု ပူးပေါင်းသောအခါ စရိတ်စကများ လျှော့ချရန်နှင့် ဝင်ငွေအမြင့်ဆုံးဖြစ်စေရန် လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှု အကျိုးသက်ရောက်မှုကို ရှာဖွေကြသည်။ သို့သော် ကော်ပိုရိတ်ယဉ်ကျေးမှုနှင့် ပတ်သက်၍ သက်ဆိုင်သူများအကြား ဘုံသဘောတူညီချက်မရှိပါက ကောင်းမွန်သော ဘဏ္ဍာရေးအရှိန်အဟုန်များ ရှိနေသော်လည်း လုပ်ငန်းများတွင် ပဋိပက္ခများနှင့် ကျရှုံးမှုများ ဖြစ်ပေါ်လာနိုင်သည်။",
        questions: [
          { question: "What do executives look for when tech giants merge?", options: ["Lower stock prices", "Operational synergy", "Employee layoffs"], answer: "Operational synergy" },
          { question: "What happens if there is no consensus on corporate culture?", options: ["Revenue doubles", "The venture risks high friction and potential failure", "Stockholders get tax cuts"], answer: "The venture risks high friction and potential failure" }
        ]
      },
      writing: [
        { id: "wri_adv2_1", question: "Rearrange the words: [reached / a / board / consensus / the / members]", correct: "the board members reached a consensus", prompt: "Translate: ဒါရိုက်တာဘုတ်အဖွဲ့ဝင်များသည် ဘုံသဘောတူညီချက် ရရှိခဲ့ကြသည်" }
      ]
    },
    {
      id: "adv_3",
      title: "Art, Philosophy & Critical Thinking",
      titleMM: "အနုပညာ၊ ဒေသနိကဗေဒနှင့် ဝေဖန်ပိုင်းခြားတွေးခေါ်မှု",
      description: "Examine existential philosophy, aesthetic values in art, and cognitive biases.",
      descriptionMM: "ဖြစ်တည်မှုဆိုင်ရာ ဒဿနိကဗေဒ၊ အနုပညာ၏ အလှအပတန်ဖိုးများနှင့် သိမြင်မှုဆိုင်ရာ ဘက်လိုက်မှုများကို ဆန်းစစ်ပါ။",
      vocabulary: [
        { word: "Aesthetic", ipa: "/esˈθetɪk/", mm: "အလှအပနှင့် သုခုမပညာဆိုင်ရာ", example: "The building has a modern aesthetic value.", exampleMM: "ဤအဆောက်အအုံသည် ခေတ်မီသောအလှအပ တန်ဖိုးရှိသည်။" },
        { word: "Existential", ipa: "/ˌeɡzɪˈstenʃl/", mm: "ဖြစ်တည်မှုဆိုင်ရာ / ဘဝဖြစ်တည်မှုဆိုင်ရာ", example: "Existential questions help us find meaning in life.", exampleMM: "ဖြစ်တည်မှုဆိုင်ရာ မေးခွန်းများသည် ဘဝ၏ အဓိပ္ပာယ်ကို ရှာဖွေရန် အထောက်အကူပြုသည်။" },
        { word: "Perspective", ipa: "/pəˈspektɪv/", mm: "ရှုထောင့် / အမြင်", example: "Try to understand the problem from his perspective.", exampleMM: "ပြဿနာကို သူ၏ရှုထောင့်မှ နားလည်ရန် ကြိုးစားပါ။" },
        { word: "Interpret", ipa: "/ɪnˈtɜːrprɪt/", mm: "အနက်ဖွင့်ဆိုသည် / ဘာသာပြန်ဆိုသည်", example: "Art critics interpret the meaning of paintings.", exampleMM: "အနုပညာဝေဖန်ရေးသမားများသည် ပန်းချီကားများ၏ အဓိပ္ပာယ်ကို အနက်ဖွင့်ဆိုကြသည်။" },
        { word: "Cognitive", ipa: "/ˈkɒɡnətɪv/", mm: "သိမြင်မှုဆိုင်ရာ / ဦးနှောက်၏လုပ်ဆောင်မှုဆိုင်ရာ", example: "Cognitive development is fast in early childhood.", exampleMM: "အစောပိုင်း ကလေးဘဝတွင် သိမြင်မှုဆိုင်ရာ ဖွံ့ဖြိုးမှုသည် မြန်ဆန်သည်။" }
      ],
      listening: [
        { id: "lis_adv3_1", text: "Try to understand the problem from his perspective", audioText: "Try to understand the problem from his perspective", options: ["ပြဿနာကို သူ၏ရှုထောင့်မှ နားလည်ရန် ကြိုးစားပါ", "ပန်းချီကားများ၏ အဓိပ္ပာယ်ကို အနက်ဖွင့်ဆိုပါ", "အစောပိုင်း ကလေးဘဝတွင် ဖွံ့ဖြိုးမှု မြန်ဆန်သည်"], answer: "ပြဿနာကို သူ၏ရှုထောင့်မှ နားလည်ရန် ကြိုးစားပါ" }
      ],
      speaking: [
        { id: "spe_adv3_1", text: "Aesthetics and existential analysis define contemporary philosophy.", instruction: "Speak with intellectual cadence:", instructionMM: "အောက်ပါ စာကြောင်းကို ဒဿနိကဗေဒဆိုင်ရာ အသံထွက်ဟန်ဖြင့် ဖတ်ပါ:" }
      ],
      reading: {
        title: "The Interpretation of Modern Art",
        titleMM: "ခေတ်ပြိုင်အနုပညာကို အနက်ဖွင့်ဆိုခြင်း",
        content: "Viewing modern art requires a shift in perspective. Instead of seeking realistic representations, observers must examine the underlying aesthetic. Each painting triggers existential questions, encouraging viewers to interpret the visual symbols. However, cognitive biases can distort our initial reaction, highlighting the importance of critical thinking in art appreciation.",
        contentMM: "ခေတ်ပြိုင်အနုပညာကို ကြည့်ရှုခြင်းသည် ရှုထောင့်ကို ပြောင်းလဲရန် လိုအပ်သည်။ အမြင်အာရုံအတိုင်း လက်တွေ့ပုံဖော်ချက်များကို ရှာဖွေမည့်အစား ကြည့်ရှုသူများသည် အရင်းခံအလှအပကို ဆန်းစစ်ရမည်ဖြစ်သည်။ ပန်းချီကားတစ်ချပ်စီသည် ဖြစ်တည်မှုဆိုင်ရာ မေးခွန်းများကို လှုံ့ဆော်ပေးပြီး မြင်ကွင်းဆိုင်ရာ သင်္ကေတများကို အနက်ဖွင့်ဆိုရန် တွန်းအားပေးသည်။ သို့သော် သိမြင်မှုဆိုင်ရာ ဘက်လိုက်မှုများက ကျွန်ုပ်တို့၏ ကနဦးတုံ့ပြန်မှုကို လွဲချော်စေနိုင်သဖြင့် အနုပညာကို တန်ဖိုးထားတတ်စေရန် ဝေဖန်ပိုင်းခြားတွေးခေါ်မှုက အရေးကြီးကြောင်း ဖော်ပြနေသည်။",
        questions: [
          { question: "What does viewing modern art require?", options: ["Expensive entry tickets", "A shift in perspective", "Academic degrees"], answer: "A shift in perspective" },
          { question: "What can distort our initial reaction to art?", options: ["Cognitive biases", "Lighting conditions", "Other people's opinions"], answer: "Cognitive biases" }
        ]
      },
      writing: [
        { id: "wri_adv3_1", question: "Rearrange the words: [understand / from / perspective / his / the / problem]", correct: "understand the problem from his perspective", prompt: "Translate: ပြဿနာကို သူ၏ရှုထောင့်မှ နားလည်ပါ" }
      ]
    },
    {
      id: "adv_4",
      title: "Global Economics & Finance",
      titleMM: "ကမ္ဘာလုံးဆိုင်ရာ စီးပွားရေးနှင့် ဘဏ္ဍာရေး",
      description: "Discuss macroeconomic indices, inflation, recession, and asset allocation.",
      descriptionMM: "မက်ခရိုစီးပွားရေး ညွှန်းကိန်းများ၊ ငွေဖောင်းပွမှု၊ စီးပွားရေးကျဆင်းမှုနှင့် ပိုင်ဆိုင်မှုခွဲဝေမှုများကို ဆွေးနွေးပါ။",
      vocabulary: [
        { word: "Inflation", ipa: "/ɪnˈfleɪʃn/", mm: "ငွေဖောင်းပွမှု", example: "Inflation reduces the purchasing power of money.", exampleMM: "ငွေဖောင်းပွမှုသည် ငွေကြေး၏ ဝယ်ယူနိုင်စွမ်းအားကို လျော့နည်းစေသည်။" },
        { word: "Recession", ipa: "/rɪˈseʃn/", mm: "စီးပွားရေးကျဆင်းမှု / စီးပွားပျက်ကပ်", example: "The country is struggling to recover from a mild recession.", exampleMM: "ထိုနိုင်ငံသည် အပျော့စား စီးပွားပျက်ကပ်မှ နာလန်ထူရန် ရုန်းကန်နေရသည်။" },
        { word: "Asset", ipa: "/ˈæset/", mm: "ပိုင်ဆိုင်မှု / အက်ဆက်", example: "Real estate is a solid long-term asset.", exampleMM: "အိမ်ခြံမြေသည် ခိုင်မာသော ရေရှည်ပိုင်ဆိုင်မှု ဖြစ်သည်။" },
        { word: "Liability", ipa: "/ˌlaɪəˈbɪləti/", mm: "ပေးရန်တာဝန် / ကြွေးမြီ", example: "Loan debt is a significant financial liability.", exampleMM: "ချေးငွေကြွေးမြီသည် ကြီးမားသော ဘဏ္ဍာရေးဆိုင်ရာ ပေးရန်တာဝန်ဖြစ်သည်။" },
        { word: "Capital", ipa: "/ˈkæpɪtl/", mm: "အရင်းအနှီး / မတည်ငွေ", example: "We need more venture capital to scale our startup.", exampleMM: "ကျွန်ုပ်တို့၏ လုပ်ငန်းသစ်ကို ချဲ့ထွင်ရန် အရင်းအနှီး ပိုမိုလိုအပ်သည်။" }
      ],
      listening: [
        { id: "lis_adv4_1", text: "Inflation reduces the purchasing power of money", audioText: "Inflation reduces the purchasing power of money", options: ["ငွေဖောင်းပွမှုက ငွေကြေးရဲ့ ဝယ်ယူနိုင်စွမ်းကို လျှော့ချပေးတယ်", "အိမ်ခြံမြေက ရေရှည်ပိုင်ဆိုင်မှု ဖြစ်တယ်", "ချေးငွေကြွေးမြီက ပေးရန်တာဝန် ဖြစ်တယ်"], answer: "ငွေဖောင်းပွမှုက ငွေကြေးရဲ့ ဝယ်ယူနိုင်စွမ်းကို လျှော့ချပေးတယ်" }
      ],
      speaking: [
        { id: "spe_adv4_1", text: "During a recession, central banks lower interest rates to stimulate capital markets.", instruction: "Speak with economist cadence:", instructionMM: "အောက်ပါ စီးပွားရေးဝါကျကို အသံထွက်ဖတ်ပါ:" }
      ],
      reading: {
        title: "Navigating the Market Cycle",
        titleMM: "စျေးကွက်သံသရာကို ဖြတ်သန်းခြင်း",
        content: "Understanding macroeconomics requires balancing assets and liabilities. When inflation escalates, the purchasing power of currency declines, prompting central banks to raise rates. If the economy cools too quickly, it enters a recession, during which companies struggle to raise capital. Diversifying assets remains the key strategy to weather these fluctuations.",
        contentMM: "မက်ခရိုစီးပွားရေးကို နားလည်ရန်မှာ ပိုင်ဆိုင်မှုများနှင့် ကြွေးမြီတာဝန်များကို မျှတအောင် ထိန်းညှိခြင်း လိုအပ်သည်။ ငွေဖောင်းပွမှု မြင့်တက်လာသောအခါ ငွေကြေး၏ ဝယ်ယူနိုင်စွမ်းအား ကျဆင်းသွားပြီး ဗဟိုဘဏ်များက အတိုးနှုန်းမြှင့်ရန် တွန်းအားပေးသည်။ စီးပွားရေးသည် လျင်မြန်စွာ အေးခဲသွားပါက စီးပွားပျက်ကပ်သို့ ရောက်ရှိကာ ကုမ္ပဏီများမှာ မတည်ရင်းနှီးငွေ ရှာဖွေရန် ရုန်းကန်ရသည်။ ပိုင်ဆိုင်မှုများကို ပုံစံမျိုးစုံ ခွဲဝေထားခြင်းက ဤစျေးကွက်လှုပ်ခတ်မှုများကို ရင်ဆိုင်ကျော်ဖြတ်ရန် အဓိက မဟာဗျူဟာဖြစ်သည်။",
        questions: [
          { question: "What happens when inflation escalates?", options: ["Purchasing power of currency declines", "Interest rates go down to zero", "Recession ends instantly"], answer: "Purchasing power of currency declines" },
          { question: "What is the key strategy to weather market fluctuations?", options: ["Taking more bank loans", "Diversifying assets", "Holding only cash"], answer: "Diversifying assets" }
        ]
      },
      writing: [
        { id: "wri_adv4_1", question: "Rearrange the words: [purchasing / power / currency / declines / of / the]", correct: "the purchasing power of currency declines", prompt: "Translate: ငွေကြေး၏ ဝယ်ယူနိုင်စွမ်းအား ကျဆင်းသွားသည်" }
      ]
    },
    {
      id: "adv_5",
      title: "Science, Space & Innovation",
      titleMM: "သိပ္ပံပညာ၊ အာကာသနှင့် ဆန်းသစ်တီထွင်မှု",
      description: "Discuss space exploration, astrophysics, and technological breakthroughs.",
      descriptionMM: "အာကာသစူးစမ်းလေ့လာရေး၊ ရူပဗေဒနှင့် နည်းပညာဆိုင်ရာ အောင်မြင်မှုများကို ဆွေးနွေးပါ။",
      vocabulary: [
        { word: "Cosmology", ipa: "/kɒzˈmɒlədʒi/", mm: "စကြာဝဠာဗေဒ", example: "Cosmology studies the origin and evolution of the universe.", exampleMM: "စကြာဝဠာဗေဒသည် စကြာဝဠာ၏ မူလအစနှင့် ဖွံ့ဖြိုးတိုးတက်မှုကို လေ့လာသည်။" },
        { word: "Hypothesis", ipa: "/haɪˈpɒθəsɪs/", mm: "အယူအဆ / အဆိုပြုချက်", example: "Scientists formulated a new hypothesis.", exampleMM: "သိပ္ပံပညာရှင်များသည် အယူအဆအသစ်တစ်ခုကို ဖော်ထုတ်ခဲ့ကြသည်။" },
        { word: "Quantum", ipa: "/ˈkwɒntəm/", mm: "ကွမ်တမ် / အက်တမ်အောက်အမှုန်ဆိုင်ရာ", example: "Quantum computers solve calculations instantly.", exampleMM: "ကွမ်တမ်ကွန်ပျူတာများသည် တွက်ချက်မှုများကို ချက်ချင်းဖြေရှင်းပေးနိုင်သည်။" },
        { word: "Revolutionize", ipa: "/ˌrevəˈluːʃənaɪz/", mm: "တော်လှန်ပြောင်းလဲစေသည်", example: "AI will revolutionize multiple industries.", exampleMM: "အေအိုင်သည် လုပ်ငန်းအများအပြားကို တော်လှန်ပြောင်းလဲစေလိမ့်မည်။" },
        { word: "Expedition", ipa: "/ˌekspəˈdɪʃn/", mm: "ရှာဖွေရေးခရီးစဉ်", example: "The Arctic expedition gathered climate data.", exampleMM: "အာတိတ် ရှာဖွေရေးခရီးစဉ်က ရာသီဥတုဆိုင်ရာ အချက်အလက်များကို စုဆောင်းခဲ့သည်။" }
      ],
      listening: [
        { id: "lis_adv5_1", text: "AI will revolutionize multiple industries", audioText: "AI will revolutionize multiple industries", options: ["အေအိုင်က လုပ်ငန်းအများစုကို တော်လှန်ပြောင်းလဲစေလိမ့်မည်", "စကြာဝဠာဗေဒက စကြာဝဠာကို လေ့လာသည်", "သိပ္ပံပညာရှင်များက အယူအဆအသစ်ကို ရေးဆွဲသည်"], answer: "အေအိုင်က လုပ်ငန်းအများစုကို တော်လှန်ပြောင်းလဲစေလိမ့်မည်" }
      ],
      speaking: [
        { id: "spe_adv5_1", text: "Astronauts embarking on deep-space expeditions test the limits of technology.", instruction: "Speak with clear scientific cadence:", instructionMM: "အောက်ပါ သိပ္ပံဆိုင်ရာ စာကြောင်းကို အသံထွက်ဖတ်ပါ:" }
      ],
      reading: {
        title: "The Next Frontier",
        titleMM: "နောက်ထပ် နယ်မြေအသစ်",
        content: "Space exploration has transitioned from a government project to a global innovation hub. While early cosmology focused on observations, modern expeditions aim to colonize planets. Testing quantum hypotheses and building advanced rocket propulsion will revolutionize how humans perceive our place in the universe.",
        contentMM: "အာကာသစူးစမ်းလေ့လာရေးသည် အစိုးရပရောဂျက်တစ်ခုအဖြစ်မှ ကမ္ဘာလုံးဆိုင်ရာ ဆန်းသစ်တီထွင်မှုဗဟိုချက်အဖြစ်သို့ ကူးပြောင်းလာခဲ့သည်။ ရှေးဦးစကြာဝဠာဗေဒသည် စောင့်ကြည့်လေ့လာမှုများအပေါ် အာရုံစိုက်ခဲ့သော်လည်း ခေတ်သစ်ရှာဖွေရေးခရီးစဉ်များသည် ဂြိုဟ်များပေါ်တွင် အခြေချနေထိုင်ရန် ရည်ရွယ်သည်။ ကွမ်တမ်အယူအဆများကို စမ်းသပ်ခြင်းနှင့် အဆင့်မြင့်ဒုံးပျံတွန်းကန်အားများ တည်ဆောက်ခြင်းသည် လူသားတို့၏ စကြာဝဠာအတွင်း နေရာယူမှုကို တော်လှန်ပြောင်းလဲစေလိမ့်မည်။",
        questions: [
          { question: "What is the aim of modern space expeditions?", options: ["To study Earth only", "To colonize planets", "To build space telescopes"], answer: "To colonize planets" },
          { question: "What will quantum testing and rocket propulsion revolutionize?", options: ["Standard cell phones", "How humans perceive our place in the universe", "Global shipping speeds"], answer: "How humans perceive our place in the universe" }
        ]
      },
      writing: [
        { id: "wri_adv5_1", question: "Rearrange the words: [industries / revolutionize / AI / will / multiple]", correct: "AI will revolutionize multiple industries", prompt: "Translate: အေအိုင်သည် လုပ်ငန်းအများအပြားကို တော်လှန်ပြောင်းလဲစေလိမ့်မည်" }
      ]
    },
    {
      id: "adv_6",
      title: "Law, Politics & Governance",
      titleMM: "ဥပဒေ၊ နိုင်ငံရေးနှင့် အုပ်ချုပ်မှုစနစ်",
      description: "Discuss constitutional frameworks, legislative bills, and democratic systems.",
      descriptionMM: "ဖွဲ့စည်းပုံအခြေခံဥပဒေ မူဘောင်များ၊ ဥပဒေကြမ်းများနှင့် ဒီမိုကရေစီစနစ်များအကြောင်း ဆွေးနွေးပါ။",
      vocabulary: [
        { word: "Constitution", ipa: "/ˌkɒnstɪˈtjuːʃn/", mm: "ဖွဲ့စည်းပုံအခြေခံဥပဒေ", example: "The constitution protects citizens' basic rights.", exampleMM: "ဖွဲ့စည်းပုံအခြေခံဥပဒေက နိုင်ငံသားတွေရဲ့ အခြေခံအခွင့်အရေးတွေကို ကာကွယ်ပေးတယ်။" },
        { word: "Legislation", ipa: "/ˌledʒɪsˈleɪʃn/", mm: "ဥပဒေပြုရေး / ပြဋ္ဌာန်းဥပဒေ", example: "The new legislation will take effect next month.", exampleMM: "ဥပဒေအသစ်သည် နောက်လတွင် စတင်အာဏာသက်ရောက်မည်။" },
        { word: "Jurisdiction", ipa: "/ˌdʒʊərɪsˈdɪkʃn/", mm: "တရားစီရင်ပိုင်ခွင့်", example: "This case falls under federal jurisdiction.", exampleMM: "ဤအမှုသည် ပြည်ထောင်စု၏ တရားစီရင်ပိုင်ခွင့်အောက်တွင် ကျရောက်သည်။" },
        { word: "Democracy", ipa: "/dɪˈmɒkrəsi/", mm: "ဒီမိုကရေစီစနစ်", example: "Voting is a vital component of a democracy.", exampleMM: "မဲပေးခြင်းသည် ဒီမိုကရေစီစနစ်၏ အရေးကြီးသော အစိတ်အပိုင်းတစ်ခုဖြစ်သည်။" },
        { word: "Sovereignty", ipa: "/ˈsɒvrənti/", mm: "အချုပ်အခြာအာဏာ", example: "The nation defended its state sovereignty.", exampleMM: "ထိုနိုင်ငံသည် မိမိ၏ အချုပ်အခြာအာဏာကို ကာကွယ်ခဲ့သည်။" }
      ],
      listening: [
        { id: "lis_adv6_1", text: "Voting is a vital component of a democracy", audioText: "Voting is a vital component of a democracy", options: ["မဲပေးခြင်းသည် ဒီမိုကရေစီစနစ်၏ အရေးကြီးသော အစိတ်အပိုင်းတစ်ခုဖြစ်သည်", "ဖွဲ့စည်းပုံအခြေခံဥပဒေက အခွင့်အရေးကို ကာကွယ်ပေးသည်", "ဥပဒေအသစ်သည် နောက်လတွင် စတင်အာဏာသက်ရောက်မည်"], answer: "မဲပေးခြင်းသည် ဒီမိုကရေစီစနစ်၏ အရေးကြီးသော အစိတ်အပိုင်းတစ်ခုဖြစ်သည်" }
      ],
      speaking: [
        { id: "spe_adv6_1", text: "A constitution establishes the legal framework for democratic governance.", instruction: "Speak with formal political articulation:", instructionMM: "အောက်ပါ စာကြောင်းကို တရားဝင် နိုင်ငံရေးအသံထွက်ဟန်ဖြင့် ဖတ်ပါ:" }
      ],
      reading: {
        title: "The Pillars of Governance",
        titleMM: "အုပ်ချုပ်ရေး၏ မဏ္ဍိုင်များ",
        content: "Democratic governance requires solid legal legislation to protect state sovereignty. Under the constitution, various branches of government possess specific legal jurisdiction. This division ensures that no single entity can override the civil liberties of citizens, forming the foundation of a modern democracy.",
        contentMM: "ဒီမိုကရေစီ အုပ်ချုပ်မှုစနစ်သည် နိုင်ငံတော်အချုပ်အခြာအာဏာကို ကာကွယ်ရန် ခိုင်မာသော ဥပဒေပြုရေးစနစ် လိုအပ်သည်။ ဖွဲ့စည်းပုံအခြေခံဥပဒေအရ အစိုးရ၏ မတူညီသော ကဏ္ဍများသည် သတ်မှတ်ထားသော တရားစီရင်ပိုင်ခွင့် အာဏာများ ရှိကြသည်။ ဤသို့ ခွဲဝေထားခြင်းက မည်သည့်အဖွဲ့အစည်းတစ်ခုမျှ နိုင်ငံသားများ၏ လွတ်လပ်ခွင့်ကို လွှမ်းမိုးခြင်းမပြုနိုင်ရန် အာမခံချက်ပေးပြီး ခေတ်သစ်ဒီမိုကရေစီ၏ အခြေခံအုတ်မြစ် ဖြစ်လာသည်။",
        questions: [
          { question: "What does democratic governance require to protect sovereignty?", options: ["Heavy taxation", "Solid legal legislation", "A large army"], answer: "Solid legal legislation" },
          { question: "What ensures that no single entity can override civil liberties?", options: ["Division of legal jurisdiction", "The absolute power of one ruler", "Online public voting"], answer: "Division of legal jurisdiction" }
        ]
      },
      writing: [
        { id: "wri_adv6_1", question: "Rearrange the words: [protects / constitution / basic / the / rights]", correct: "the constitution protects basic rights", prompt: "Translate: ဖွဲ့စည်းပုံအခြေခံဥပဒေက အခြေခံအခွင့်အရေးများကို ကာကွယ်ပေးသည်" }
      ]
    },
    {
      id: "adv_7",
      title: "Psychology & Human Behavior",
      titleMM: "စိတ်ပညာနှင့် လူ့အမူအကျင့်",
      description: "Examine behavioral motivation, cognitive perception, and subconscious triggers.",
      descriptionMM: "လူတို့၏ အမူအကျင့်လှုံ့ဆော်မှု၊ သိမြင်မှုခံယူချက်နှင့် မသိစိတ်၏ လွှမ်းမိုးမှုများကို ဆန်းစစ်ပါ။",
      vocabulary: [
        { word: "Subconscious", ipa: "/ˌsʌbˈkɒnʃəs/", mm: "မသိစိတ် / စိတ်အောက်ခြေ", example: "Dreams reflect our subconscious fears.", exampleMM: "အိပ်မက်များသည် ကျွန်ုပ်တို့၏ မသိစိတ်ထဲက ကြောက်ရွံ့မှုများကို ထင်ဟပ်စေသည်။" },
        { word: "Cognition", ipa: "/kɒɡˈnɪʃn/", mm: "သိမြင်မှုစွမ်းရည် / ဦးနှောက်၏ မှတ်သားတွေးခေါ်မှု", example: "Cognition processes help us solve complex problems.", exampleMM: "သိမြင်မှုဖြစ်စဉ်များသည် ရှုပ်ထွေးသောပြဿနာများကို ဖြေရှင်းရန် အထောက်အကူပြုသည်။" },
        { word: "Empathy", ipa: "/ˈempəθi/", mm: "ကိုယ်ချင်းစာစိတ် / စာနာစိတ်", example: "Empathy is essential for human connection.", exampleMM: "ကိုယ်ချင်းစာစိတ်သည် လူမှုဆက်ဆံရေးအတွက် မရှိမဖြစ်လိုအပ်သည်။" },
        { word: "Perception", ipa: "/pəˈsepʃn/", mm: "ခံယူချက် / အမြင် / သိရှိနားလည်မှု", example: "Her perception of the event was different.", exampleMM: "ထိုအဖြစ်အပျက်အပေါ် သူမ၏အမြင်က ကွဲပြားခြားနားခဲ့သည်။" },
        { word: "Motivation", ipa: "/ˌmoʊtɪˈveɪʃn/", mm: "လှုံ့ဆော်မှု / စိတ်အားထက်သန်မှု", example: "Success is a powerful motivation.", exampleMM: "အောင်မြင်မှုသည် အားကောင်းသော စိတ်ဓာတ်လှုံ့ဆော်မှုတစ်ခု ဖြစ်သည်။" }
      ],
      listening: [
        { id: "lis_adv7_1", text: "Success is a powerful motivation", audioText: "Success is a powerful motivation", options: ["အောင်မြင်မှုသည် အားကောင်းသော လှုံ့ဆော်မှုဖြစ်သည်", "ကိုယ်ချင်းစာစိတ်က အရေးကြီးသည်", "အိပ်မက်များက မသိစိတ်ကို ဖော်ပြသည်"], answer: "အောင်မြင်မှုသည် အားကောင်းသော လှုံ့ဆော်မှုဖြစ်သည်" }
      ],
      speaking: [
        { id: "spe_adv7_1", text: "Empathy bridges the gap between different social perceptions.", instruction: "Speak with academic clarity:", instructionMM: "အောက်ပါ စိတ်ပညာစာကြောင်းကို ရှင်းလင်းစွာ ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "The Workings of the Mind",
        titleMM: "စိတ်၏ လည်ပတ်ပုံများ",
        content: "Human behavior is guided by a mix of conscious cognition and subconscious drives. Emotional intelligence highlights empathy as the core skill to build social bonds. Additionally, our initial perception of others is heavily influenced by past memories, forming the primary motivation for daily interpersonal interactions.",
        contentMM: "လူ့အမူအကျင့်များသည် သတိရှိသော သိမြင်မှုနှင့် မသိစိတ်၏ တွန်းအားများ ပေါင်းစပ်မှုဖြင့် လမ်းညွှန်ခြင်းခံရသည်။ စိတ်ခံစားမှုဆိုင်ရာ ဉာဏ်ရည်က လူမှုစည်းနှောင်မှုများ တည်ဆောက်ရန် ကိုယ်ချင်းစာစိတ်ကို အဓိကကျွမ်းကျင်မှုအဖြစ် ဖော်ပြသည်။ ထို့အပြင် အခြားသူများအပေါ် ကျွန်ုပ်တို့၏ ကနဦးခံယူချက်သည် အတိတ်က အမှတ်ရစရာများ၏ လွှမ်းမိုးမှုကို များစွာခံရပြီး နေ့စဉ်လူမှုဆက်ဆံရေးအတွက် အဓိက လှုံ့ဆော်မှုဖြစ်စေသည်။",
        questions: [
          { question: "What is highlighted as the core skill to build social bonds?", options: ["High IQ", "Empathy", "Financial status"], answer: "Empathy" },
          { question: "What is human behavior guided by?", options: ["Only conscious logic", "Conscious cognition and subconscious drives", "Pure animal instincts"], answer: "Conscious cognition and subconscious drives" }
        ]
      },
      writing: [
        { id: "wri_adv7_1", question: "Rearrange the words: [reflect / dreams / subconscious / fears / our]", correct: "dreams reflect our subconscious fears", prompt: "Translate: အိပ်မက်များသည် ကျွန်ုပ်တို့၏ မသိစိတ်ထဲက ကြောက်ရွံ့မှုများကို ဖော်ပြသည်" }
      ]
    },
    {
      id: "adv_8",
      title: "Mastering Exams at the British Council",
      titleMM: "ဗြိတိသျှကောင်စီတွင် စာမေးပွဲများကို ထူးချွန်စွာ အောင်မြင်ခြင်း",
      description: "Understand IELTS and TOEFL testing procedures, academic speaking criteria, and advanced learning methodologies.",
      descriptionMM: "IELTS နှင့် TOEFL စာမေးပွဲ ဖြေဆိုမှု လုပ်ငန်းစဉ်များ၊ ပညာရပ်ဆိုင်ရာ စကားပြောအကဲဖြတ်မှု စံနှုန်းများနှင့် အဆင့်မြင့် သင်ယူမှု နည်းစနစ်များကို နားလည်သဘောပေါက်စေရန်။",
      vocabulary: [
        { word: "Assessor", ipa: "/əˈsesər/", mm: "အကဲဖြတ်သူ / စစ်ဆေးသူ", example: "The IELTS assessor evaluates coherence and grammatical range.", exampleMM: "IELTS အကဲဖြတ်သူသည် ဆက်စပ်ဆီလျော်မှုနှင့် သဒ္ဒါကျယ်ပြန့်မှုကို အကဲဖြတ်သည်။" },
        { word: "Band score", ipa: "/bænd skɔːr/", mm: "ရမှတ်အဆင့်", example: "She achieved an overall band score of 8.0 on her test.", exampleMM: "သူမသည် စာမေးပွဲတွင် စုစုပေါင်း ရမှတ်အဆင့် ၈.၀ ရရှိခဲ့သည်။" },
        { word: "Fluency", ipa: "/ˈfluːənsi/", mm: "ချောမွေ့စွာ ပြောနိုင်စွမ်း", example: "Fluency and pronunciation are critical for the speaking exam.", exampleMM: "စကားပြောစာမေးပွဲအတွက် ချောမွေ့စွာပြောနိုင်စွမ်းနှင့် အသံထွက်က အလွန်အရေးကြီးသည်။" },
        { word: "Criterion", ipa: "/kraɪˈtɪriən/", mm: "သတ်မှတ်ချက် / စံနှုန်း", example: "Lexical resource is one key grading criterion.", exampleMM: "ဝေါဟာရကြွယ်ဝမှုသည် အမှတ်ပေးသည့် အဓိကစံနှုန်းတစ်ခုဖြစ်သည်။" },
        { word: "Proficiency", ipa: "/prəˈfɪʃnsi/", mm: "ကျွမ်းကျင်ပိုင်နိုင်မှု", example: "The course is designed to elevate your linguistic proficiency.", exampleMM: "သင်တန်းကို သင်၏ ဘာသာစကားကျွမ်းကျင်ပိုင်နိုင်မှုကို မြှင့်တင်ရန် ဒီဇိုင်းထုတ်ထားသည်။" },
        { word: "Preparation", ipa: "/ˌprepəˈreɪʃn/", mm: "ပြင်ဆင်ခြင်း", example: "Intensive preparation is necessary for academic modules.", exampleMM: "ပညာရပ်ဆိုင်ရာ မော်ဂျူးများအတွက် အပြင်းအထန် ပြင်ဆင်ရန် လိုအပ်သည်။" }
      ],
      listening: [
        { id: "lis_adv8_1", text: "Fluency and pronunciation are critical for the speaking exam", audioText: "Fluency and pronunciation are critical for the speaking exam", options: ["စကားပြောစာမေးပွဲအတွက် ချောမွေ့စွာပြောနိုင်စွမ်းနှင့် အသံထွက်က အလွန်အရေးကြီးသည်", "အကဲဖြတ်သူသည် သဒ္ဒါကျယ်ပြန့်မှုကို အမှတ်ပေးသည်", "ပညာရပ်ဆိုင်ရာ ပြင်ဆင်မှုသည် လိုအပ်သည်"], answer: "စကားပြောစာမေးပွဲအတွက် ချောမွေ့စွာပြောနိုင်စွမ်းနှင့် အသံထွက်က အလွန်အရေးကြီးသည်" }
      ],
      speaking: [
        { id: "spe_adv8_1", text: "Achieving a high band score requires consistent practice and extensive vocabulary.", instruction: "Deliver this test advisory clearly:", instructionMM: "အောက်ပါ စာမေးပွဲ အကြံပြုချက်ကို အသံထွက်ဖတ်ကြားပါ:" }
      ],
      reading: {
        title: "Preparing for the IELTS Exam at the British Council",
        titleMM: "ဗြိတိသျှကောင်စီတွင် IELTS စာမေးပွဲအတွက် ပြင်ဆင်ခြင်း",
        content: "Thida wants to pursue a master's degree in London, so she registers for the IELTS exam at the British Council in Yangon. To prepare, she registers for their official prep course. The instructor explains the four scoring criteria: fluency, lexical resource, grammatical range, and pronunciation. Thida spends hours practicing academic writing and taking mock exams. On test day, she feels confident and manages to impress the assessor, achieving her target band score.",
        contentMM: "သီတာသည် လန်ဒန်တွင် မာစတာဘွဲ့ ဆက်လက်သင်ယူလိုသဖြင့် ရန်ကုန်ရှိ ဗြိတိသျှကောင်စီတွင် IELTS စာမေးပွဲ ဖြေဆိုရန် စာရင်းသွင်းခဲ့သည်။ ပြင်ဆင်ရန်အတွက် သူမသည် ၎င်းတို့၏ တရားဝင်ပြင်ဆင်မှုသင်တန်းကို တက်ရောက်ခဲ့သည်။ ဆရာက အမှတ်ပေးစံနှုန်း လေးခုကို ရှင်းပြသည် - ချောမွေ့စွာ ပြောဆိုနိုင်မှု၊ ဝေါဟာရကြွယ်ဝမှု၊ သဒ္ဒါအသုံးပြုမှု ကျယ်ပြန့်မှုနှင့် အသံထွက်တို့ဖြစ်သည်။ သီတာသည် ပညာရပ်ဆိုင်ရာ စာရေးခြင်းကို လေ့ကျင့်ပြီး အစမ်းစာမေးပွဲများ ဖြေဆိုရန် နာရီပေါင်းများစွာ အသုံးပြုခဲ့သည်။ စာမေးပွဲဖြေဆိုသည့်နေ့တွင် သူမသည် ယုံကြည်မှုအပြည့်ရှိပြီး အကဲဖြတ်စစ်ဆေးသူအား စိတ်ကျေနပ်မှုပေးနိုင်ခဲ့ကာ သူမ၏ ရည်မှန်းထားသော ရမှတ်အဆင့်ကို ရရှိခဲ့သည်။",
        questions: [
          { question: "Why did Thida register for the IELTS exam?", options: ["To pursue a master's degree in London", "To work as a police officer", "To travel as a tourist"], answer: "To pursue a master's degree in London" },
          { question: "What did the instructor explain to the students?", options: ["The four scoring criteria", "How to use a map", "The weather forecast in Yangon"], answer: "The four scoring criteria" }
        ]
      },
      writing: [
        { id: "wri_adv8_1", question: "Rearrange the words: [requires / score / practice / high / consistent / achieving / a]", correct: "achieving a high score requires consistent practice", prompt: "Translate: မြင့်မားသောရမှတ်ရရှိရန် အမြဲမပြတ်လေ့ကျင့်မှု လိုအပ်သည်" }
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
