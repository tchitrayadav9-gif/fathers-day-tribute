export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  memory: string;
  imageUrl: string;
  objectPosition?: string;
}

export interface ScrapbookPage {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date?: string;
  tag?: string;
  objectPosition?: string;
}

export interface FamilyMember {
  name: string;
  relationship: string;
  imageUrl: string;
  quote: string;
  memory: string;
}

export interface Teaching {
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
}

export interface StickyNote {
  id: string;
  message: string;
  author: string;
  emoji: string;
  color: string;
}

export interface Achievement {
  title: string;
  desc: string;
  icon: string;
}

export const familyData = {
  father: {
    name: "T Chinna Kullayappa",
    imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781954205/WhatsApp_Image_2026-06-20_at_16.46.18_rmjzxv.jpg",
    roles: ["My Role Model", "My Strength", "My Hero", "My Best Friend", "My Inspiration"]
  },
  mother: {
    name: "Radhamma",
    imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781954650/WhatsApp_Image_2026-06-20_at_16.53.50_vgp9db.jpg"
  },
  parents: {
    anniversary: "17 June",
    loveStoryText: "A love built on trust, compromise, and joint dreams. Through every storm and every sunny day, your bond has grown stronger, teaching us what true partnership means. You built our family with endless love and care."
  },
  members: [
    {
      name: "T Chinna Kullayappa",
      relationship: "Father (Our Pillar)",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781954205/WhatsApp_Image_2026-06-20_at_16.46.18_rmjzxv.jpg",
      quote: "Work hard with honesty, and the rest will fall into place.",
      memory: "Always putting the family first and working day and night to provide us with the best education and a beautiful life."
    },
    {
      name: "Radhamma",
      relationship: "Mother (Our Heart)",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781954650/WhatsApp_Image_2026-06-20_at_16.53.50_vgp9db.jpg",
      quote: "Love is not about what you get, but what you give.",
      memory: "Supporting dad in every step and building a warm, loving home filled with the smell of delicious traditional foods."
    },
    {
      name: "T Chitra",
      relationship: "First Daughter",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781953524/IMG_20260515_091504_986_mmvxct.webp",
      quote: "Dad, your guidance taught me how to stand tall in this world.",
      memory: "Remembering how you used to carry me on your shoulders and buy me little treats on our way back from school."
    },
    {
      name: "T Bhavya",
      relationship: "Second Daughter",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781953971/WhatsApp_Image_2026-06-20_at_16.42.28_dsrah3.jpg",
      quote: "No matter how old I get, I'll always be your little girl.",
      memory: "Those late-night conversations about life, dreams, and values. Your trust in me has been my greatest strength."
    },
    {
      name: "T Hani",
      relationship: "Third Daughter",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781954024/WhatsApp_Image_2026-06-20_at_16.41.34_r4e86v.jpg",
      quote: "Your smile is my daily source of happiness.",
      memory: "How you always know when I'm sad without me saying a word, and how you do everything to bring a smile back to my face."
    },
    {
      name: "T Manikanta",
      relationship: "Son",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781952645/Snapchat-75514410_llz9z1.jpg",
      quote: "I aspire to be even half the man you are, Dad.",
      memory: "Learning how to ride a bicycle and solve problems. You've taught me what responsibility and true strength look like."
    }
  ] as FamilyMember[],
  timeline: [
    {
      id: "tl-1",
      year: "Anniversary - 17 June",
      title: "The Golden Union",
      memory: "Dad & Mom tied the knot, beginning a beautiful journey of shared dreams, sacrifices, and boundless love.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781954556/WhatsApp_Image_2026-06-20_at_16.52.08_egw4tr.jpg",
      objectPosition: "center 10%"
    },
    {
      id: "tl-2",
      year: "Early Years",
      title: "My Childhood Wonders",
      memory: "Our early steps, guided by Dad's strong, protective hands. He made sure our home was always filled with warmth and safety.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781955522/WhatsApp_Image_2026-06-20_at_17.06.11_1_gzcf0n.jpg"
    },
    {
      id: "tl-3",
      year: "School Days",
      title: "The First Lessons",
      memory: "Dad walking us to school, packing our bags, teaching us math, and checking our homework. He always prioritized our education above all.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781952164/WhatsApp_Image_2025-07-11_at_9.56.26_AM_s554qk.jpg",
      objectPosition: "center 10%"
    },
    {
      id: "tl-4",
      year: "Family Trips",
      title: "Exploring the World Together",
      memory: "Memorable train journeys, packing homemade snacks, taking group photos, and looking at the window together. Pure joy of togetherness.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781955398/WhatsApp_Image_2026-06-20_at_17.06.10_wjrqbi.jpg"
    },
    {
      id: "tl-5",
      year: "Festivals",
      title: "Laughter & Lights",
      memory: "Dressing in new clothes, bursting crackers, eating delicious sweets made by Mom, and receiving Dad's special blessings.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781955455/WhatsApp_Image_2026-06-20_at_17.06.11_lj3mkq.jpg"
    },
    {
      id: "tl-6",
      year: "Today",
      title: "A Tribute of Endless Love",
      memory: "Celebrating Father's Day by acknowledging the lifelong journey, dedication, and affection of our hero, T Chinna Kullayappa.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781952164/WhatsApp_Image_2025-07-11_at_9.56.26_AM_s554qk.jpg",
      objectPosition: "center 10%"
    }
  ] as TimelineEvent[],
  scrapbook: [
    {
      id: "sb-1",
      title: "Our Strong Foundation",
      content: "No matter how tough times were, Dad always smiled. He absorbed all life's pressures and only passed down love, peace, and security to us.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781952164/WhatsApp_Image_2025-07-11_at_9.56.26_AM_s554qk.jpg",
      date: "Family Blessings",
      tag: "Love",
      objectPosition: "center 10%"
    },
    {
      id: "sb-2",
      title: "Mom & Dad's Sweet Moments",
      content: "Seeing you both support each other through thick and thin is our definition of true love. You are the perfect team.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781954556/WhatsApp_Image_2026-06-20_at_16.52.08_egw4tr.jpg",
      date: "Anniversary Memories",
      tag: "Parents",
      objectPosition: "center 10%"
    },
    {
      id: "sb-3",
      title: "Daughters' Pride",
      content: "Your three daughters are blessed to have you as their first hero. You taught us to be independent, kind, and strong.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781953524/IMG_20260515_091504_986_mmvxct.webp",
      date: "Daughters' Bond",
      tag: "Children",
      objectPosition: "center 15%"
    },
    {
      id: "sb-4",
      title: "Generations of Values",
      content: "You didn't just tell us how to live; you lived and let us watch you do it. The honesty, faith, and patience you exhibit inspire us every single day.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781952645/Snapchat-75514410_llz9z1.jpg",
      date: "Life Lessons",
      tag: "Wisdom"
    },
    {
      id: "sb-5",
      title: "Lifetime of Love & Partnership",
      content: "Thank you for building our family with boundless patience, support, and care. You both represent the true definition of a golden companionship.",
      imageUrl: "https://res.cloudinary.com/dcjeymqss/image/upload/v1781952284/Screenshot_20260527_103520_dglezx.jpg",
      date: "Anniversary Celebrations",
      tag: "Parents"
    }
  ] as ScrapbookPage[],
  teachings: [
    {
      title: "Respect Everyone",
      shortDesc: "Value every human being, regardless of their background.",
      longDesc: "Dad always said that respect is a mirror; what you give is what you get. He taught us to speak to everyone with the same level of kindness, from helpers to top executives.",
      iconName: "Users"
    },
    {
      title: "Work Hard",
      shortDesc: "Effort never goes in vain. Dedicate yourself fully.",
      longDesc: "Watching Dad wake up early and work tirelessly showed us the value of discipline and work ethic. Success isn't a shortcut; it is built stone by stone.",
      iconName: "Briefcase"
    },
    {
      title: "Never Give Up",
      shortDesc: "Failures are just steps on the staircase to success.",
      longDesc: "When problems arrived, Dad stood tall like a mountain. He taught us to look challenges in the eye, smile, and find a way forward rather than retreating.",
      iconName: "ShieldAlert"
    },
    {
      title: "Always Help Others",
      shortDesc: "The hands that help are holier than the lips that pray.",
      longDesc: "Dad never hesitated to assist neighbors, relatives, or strangers, even when he had limited resources. Generosity, he taught us, is measured by the heart, not the wallet.",
      iconName: "HeartHandshake"
    },
    {
      title: "Be Honest",
      shortDesc: "A clean conscience is the softest pillow.",
      longDesc: "Telling the truth might be hard initially, but it keeps your head high. Dad's entire life is a testament to integrity and transparent principles.",
      iconName: "Fingerprint"
    },
    {
      title: "Family Comes First",
      shortDesc: "In the end, family is your ultimate sanctuary.",
      longDesc: "No matter how busy he was, Dad was always there for our milestones. He showed us that jobs, money, and status come and go, but the family is the anchor that holds you steady.",
      iconName: "Heart"
    }
  ] as Teaching[],
  achievements: [
    {
      title: "Hard Worker",
      desc: "Worked tirelessly with single-minded focus to support our dreams and ensure we never lacked anything.",
      icon: "Award"
    },
    {
      title: "Family Protector",
      desc: "Stood as a shield against every difficulty, keeping our home safe, peaceful, and warm.",
      icon: "Shield"
    },
    {
      title: "Patient Guide",
      desc: "Taught us life lessons with infinite patience, using stories and real examples rather than anger.",
      icon: "Map"
    },
    {
      title: "Loving Father & Husband",
      desc: "Created a lifelong love story with Mom and showered all four children with equal care, encouragement, and love.",
      icon: "Heart"
    }
  ] as Achievement[],
  stickyNotes: [
    { id: "note-1", message: "You are the absolute best, Dad! Thank you for the endless support.", author: "T Chitra", emoji: "❤️", color: "from-blue-900/60 to-indigo-900/60" },
    { id: "note-2", message: "Anniversary wishes! 17 June is the day our beautiful world began.", author: "T Bhavya", emoji: "✨", color: "from-amber-900/60 to-yellow-900/60" },
    { id: "note-3", message: "Your laugh makes our house feel like heaven. Keep smiling, Dad!", author: "T Hani", emoji: "😊", color: "from-emerald-900/60 to-teal-900/60" },
    { id: "note-4", message: "I hope to make you proud every single day of my life. Love you, Dad.", author: "T Manikanta", emoji: "💪", color: "from-rose-900/60 to-pink-900/60" },
    { id: "note-5", message: "Thank you for being my partner in this beautiful lifetime journey.", author: "Mom (Radhamma)", emoji: "💍", color: "from-purple-900/60 to-fuchsia-900/60" },
    { id: "note-6", message: "Happy Father's Day to the king of our family! We love you to the moon and back.", author: "All of Us", emoji: "👑", color: "from-cyan-900/60 to-blue-900/60" }
  ] as StickyNote[],
  reasons: [
    "Because you never gave up on us.",
    "Because you always believed in my wild dreams.",
    "Because your smile makes our home brighter.",
    "Because your sacrifices built our future.",
    "Because you hold my hand when I need it most.",
    "Because you stay up late waiting for us to come home safely.",
    "Because you taught us the value of honesty.",
    "Because you worked overtime so we could have the best books and toys.",
    "Because you never complain about your own struggles.",
    "Because you show us what unconditional love really means.",
    "Because you protect us from every storm of life.",
    "Because you respect Mom and show us how a family should cooperate.",
    "Because you make the world feel safe and secure.",
    "Because you always save the best piece of dessert for us.",
    "Because you have the warmest and most reassuring hugs.",
    "Because your guidance is our North Star.",
    "Because you listen to our endless stories with absolute patience.",
    "Because you taught us to be humble and respect everyone.",
    "Because you celebrated our smallest victories like they were major achievements.",
    "Because you stood by us when we failed and helped us stand back up.",
    "Because you are the funniest storyteller during dinner.",
    "Because you showed us that true strength lies in kindness.",
    "Because you taught us how to ride our first bicycle.",
    "Because you support our education and career choices unconditionally.",
    "Because you made our childhood memories magical and joyful.",
    "Because you are the quiet hero who does everything behind the scenes.",
    "Because you have a heart of gold that forgives all our mistakes.",
    "Because you taught us how to face challenges with a brave smile.",
    "Because you never let us feel the weight of financial pressures.",
    "Because you are our strongest pillar of support in every phase.",
    "Because you take care of us when we are sick with so much tenderness.",
    "Because your voice on the phone instantly takes away our stress.",
    "Because you taught us to be responsible and disciplined citizens.",
    "Because you appreciate and love Mom's cooking with so much joy.",
    "Because you make every festival feel double-blessed.",
    "Because you gave us our wings to fly and our roots to stay grounded.",
    "Because you are our role model for a perfect human being.",
    "Because you buy us gifts even when you need things for yourself.",
    "Because you taught us how to handle life's disappointments with grace.",
    "Because you have a gentle soul that loves birds, plants, and animals.",
    "Because you love taking family pictures, capturing beautiful memories.",
    "Because you helped us build our self-confidence.",
    "Because your handshake gives us immediate strength.",
    "Because you taught us to speak up for what is right.",
    "Because you always call to check if we ate our meals.",
    "Because you keep our family united, no matter the distance.",
    "Because you are the best teacher we could have ever asked for.",
    "Because your eyes sparkle with pride when you see us succeed.",
    "Because you are extremely patient even when we test your limits.",
    "Because you taught us to find happiness in simple things.",
    "Because you always pray for our safety and happiness before yours.",
    "Because you made our home a sanctuary of laughter.",
    "Because you taught us how to manage money and plan ahead.",
    "Because you never let outside negativity enter our home.",
    "Because you are a man of your word, teaching us integrity.",
    "Because you carried us when we were too tired to walk.",
    "Because you taught us the beauty of sharing with the needy.",
    "Because you let us make mistakes and helped us learn from them.",
    "Because you are our favorite travel companion.",
    "Because you make the most delicious morning tea/coffee when we are busy.",
    "Because you taught us to keep our promises.",
    "Because you always put our comforts before yours.",
    "Because you are a peaceful man who avoids unnecessary conflicts.",
    "Because you taught us that hard work always pays off in the long run.",
    "Because you make our birthdays feel like royal celebrations.",
    "Because you are the foundation on which our lives are built.",
    "Because you taught us to appreciate nature and the simple outdoors.",
    "Because you always look for the positive side of every person.",
    "Because your presence brings an immediate sense of peace.",
    "Because you taught us to never look down on anyone.",
    "Because you helped us overcome our fears of the dark and failures.",
    "Because you are an incredible husband, showing us how to love.",
    "Because you gave us the freedom to express ourselves.",
    "Because you taught us to take care of our health.",
    "Because you always welcome our friends with a warm heart.",
    "Because you built a reputation of honor and dignity that we inherit.",
    "Because you celebrate Mother's Day and Father's Day in the true family spirit.",
    "Because you taught us to be resilient like a palm tree.",
    "Because you spent hours answering our curious childhood questions.",
    "Because you are our ultimate confidant.",
    "Because you taught us to stay calm in difficult situations.",
    "Because you appreciate art, music, and the beautiful aspects of culture.",
    "Because you never show your exhaustion, always showing energy for us.",
    "Because you taught us the power of forgiveness.",
    "Because you have a soft spot for children and make them laugh.",
    "Because you taught us to be proud of our roots and culture.",
    "Because you always stand by the truth, no matter how difficult.",
    "Because you are our biggest cheerleader at every competition or stage.",
    "Because you taught us to keep our heart clean and free of grudges.",
    "Because you make the best jokes at the perfect moment.",
    "Because your wisdom solves our most complicated dilemmas.",
    "Because you taught us to appreciate the efforts of others.",
    "Because you always look forward to family gatherings with excitement.",
    "Because you are our safe harbor in a chaotic world.",
    "Because you taught us that honesty is the ultimate wealth.",
    "Because you always encourage us to keep learning and growing.",
    "Because you gave us the best childhood memories we will cherish forever.",
    "Because you are our father, our hero, and our forever inspiration.",
    "Because you love us just the way we are, without any conditions.",
    "Because you are T Chinna Kullayappa – the best Dad in the whole universe! ❤️"
  ] as string[]
};
