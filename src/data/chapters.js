// 

export const chapters = [
  {
    id: "Chpt1",
    label: "CHAPTER 1",
    title: "Introduction to ASL",
    description: "Learn the basics of American Sign Language.",
    modules: [
      {
        id: "1.1",
        label: "MODULE 1",
        title: "Basic Greetings",
        type: "learning",
        description: "Discover New Vocabulary",
        steps: [
          {
            id: "1.1.1",
            title: "Let's Start Signing ASL",
            description: "Are you ready to start your ASL journey?",
            videos: [
              { label: "Hello Welcome, Come On Sign", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Hello_Welcome_ComeOnSign.mp4" }
            ]
            // https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Hello_Welcome_ComeOnSign.mp4
          },
          {
            id: "1.1.2",
            title: "Learn a new sign!",
            videos: [{ label: "Hello", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Hello.mp4" }]
          },
          {
            id: "1.1.3",
            title: "Learn a new sign!",
            videos: [{ label: "Welcome", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Welcome.mp4" }]
          },
          {
            id: "1.1.4",
            title: "Left or Right hand?",
            description: "Which hand do you prefer to use for signing? Just stick to one side",
            videos: [
              { label: "Left Hand", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/welcome_left_hand.mp4" },
              { label: "Right Hand", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/welcome_right_hand.mp4" }
            ]
          }
        ]
      },
      {
        id: "1.2",
        label: "MODULE 2",
        title: "Basic Pronouns",
        type: "learning",
        description: "Learn to introduce yourself",
        steps: [
          {
            id: "1.2.1",
            title: "Learn a new sign!",
            videos: [{ label: "Me", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/me.mp4" }]
          },
          {
            id: "1.2.2",
            title: "Learn a new sign!",
            videos: [{ label: "You", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/you.mp4" }]
          }
        ]
      },
      {
        id: "1.3",
        label: "MODULE 3",
        title: "Basic Questions and Simple Responses",
        type: "learning",
        description: "Learn to ask and answer simple questions.",
        steps: [
          {
            id: "1.3.1",
            title: "Learn a new sign!",
            videos: [{ label: "How", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/how.mp4" }]
          },
          {
            id: "1.3.2",
            title: "How  to form a question",
            description: "You can try this too, as ASL has sign variations",
            videos: [{ label: "How", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/how_eyebrows.mp4" }]
          },
          {
            id: "1.3.3",
            title: "Let's compare both signs. Stick to one way but always remember the variations",
            description: "You can try this too, as ASL has sign variations",
            videos: [{ label: "How - No Use of Eyebrows", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/how.mp4" }, { label: "Lower your Eyebrows to indicate a question.", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/how_eyebrows.mp4" }]
          },
          {
            id: "1.3.4",
            title: "Learn a new sign!",
            videos: [{ label: "Fine", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/fine.mp4" }]
          },
          {
            id: "1.3.5",
            title: "Learn a new sign!",
            videos: [{ label: "Super High Five", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/super_high_five.mp4" }]
          }
        ]
      },
      {
        id: "1.4",
        label: "MODULE 4",
        title: "Discover New Signs",
        type: "learning",
        description: "Expand your vocabulary with new signs.",
        steps: [
          {
            id: "1.4.1",
            title: "Learn a new sign!",
            videos: [{ label: "Deaf", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/deaf.mp4" }]
          },
          {
            id: "1.4.2",
            title: "Learn a new sign!",
            videos: [{ label: "Hearing", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/hearing.mp4" }]
          },
          {
            id: "1.4.3",
            title: "Word Order",
            description: "Look at the difference in the word order structure.",
            videos: [
              { label: "Word Order", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/word_order.mp4" }
            ],
            tables: [
              {
                title: "Word Order Structure",
                headers: ["ASL", "English"],
                rows: [
                  { id: "1", cells: ["ME DEAF", "I am Deaf"] },
                  { id: "2", cells: ["ME HEARING ", "I am Hearing"] }
                ]
              }
            ]
          },
        ]
      },
      {
        id: "1.5",
        label: "MODULE 5",
        title: "Decision Signs",
        type: "learning",
        description: "Learn essential signs for making decisions.",
        steps: [
          {
            id: "1.5.1",
            title: "Learn a new sign!",
            videos: [{ label: "Yes", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/yes.mp4" }]
          },
          {
            id: "1.5.2",
            title: "Learn a new sign!",
            videos: [{ label: "No", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/no.mp4" }]
          },
          {
            id: "1.5.3",
            title: "Learn a new sign!",
            videos: [{ label: "Bye", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/bye.mp4" }]
            // https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/bye.mp4
            //https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/cheer.mp4
          },
          {
            id: "1.5.4",
            title: "Learn a new sign!",
            videos: [{ label: "Cheer", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/cheer.mp4" }]
          },
          {
            id: "1.5.5",
            title: "Congratulations You have completed learning of many new Signs !",
            videos: [{ label: "See you in next Module to Learn more new Signs", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/congratulations-newsigns.mp4" }]
          }
        ]
      }
    ]
  },
  {
    id: "Chpt2",
    label: "CHAPTER 2",
    title: "Iconic Signs",
    description: "Learn iconic ASL signs that are visually representative of their meaning.",
    modules: [
      {
        id: "2.1",
        label: "MODULE 1",
        title: "Nature and Living Beings",
        type: "learning",
        description: "Explore iconic signs related to people, animals, and nature.",
        steps: [
          {
            id: "2.1.1",
            title: "Learn a new sign!",
            videos: [{ label: "Swim", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/swim.mp4" }]
          },
          {
            id: "2.1.2",
            title: "Learn a new sign!",
            videos: [{ label: "Monkey", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/monkey.mp4" }]
          },
          {
            id: "2.1.3",
            title: "Learn a new sign!",
            videos: [{ label: "Tree", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/tree.mp4" }]
          },
          {
            id: "2.1.4",
            title: "Learn a new sign!",
            videos: [{ label: "Baby", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/baby.mp4" }]
          },
          {
            id: "2.1.5",
            title: "Learn a new sign!",
            videos: [{ label: "House", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/house.mp4" }]
          }
        ]
      },
      {
        id: "2.2",
        label: "MODULE 2",
        title: "Objects and Things",
        type: "learning",
        description: "Learn ASL signs for common objects.",
        steps: [
          {
            id: "2.2.1",
            title: "Learn a new sign!",
            videos: [{ label: "Car", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/car.mp4" }]
          },
          {
            id: "2.2.2",
            title: "Learn a new sign!",
            videos: [{ label: "Book", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/book1.mp4" }]
          },
          {
            id: "2.2.3",
            title: "Learn a new sign (Variant)!",
            description: "Books can be signed in different ways. Watch both variations.",
            videos: [
              { label: "Books - Variant 1", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/book1.mp4" },
              { label: "Books - Variant 2", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/book2.mp4" }
            ]
          },
          {
            id: "2.2.4",
            title: "Learn a new sign!",
            videos: [{ label: "Football", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/football.mp4" }]
          }
        ]
      },
      {
        id: "2.3",
        label: "MODULE 3",
        title: "Daily Actions",
        type: "learning",
        description: "Learn ASL signs for everyday activities.",
        steps: [
          {
            id: "2.3.1",
            title: "Learn a new sign!",
            videos: [{ label: "Eating Food", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/food.mp4" }]
          },
          {
            id: "2.3.2",
            title: "Learn a new sign!",
            videos: [{ label: "Balloon", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/balloon.mp4" }]
          },
          {
            id: "2.3.3",
            title: "Learn a new sign!",
            videos: [{ label: "Drinking from a Glass", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drinkwater.mp4" }]
          },
          {
            id: "2.3.4",
            title: "Learn a new sign!",
            images: ["https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/person-drinking-champagne.jpg"],
            videos: [{ label: "Drinking from a Champagne Glass", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/person-drinking-champagne.mp4" }]
          },
          {
            id: "2.3.5",
            title: "Comparison: Different Glass Types",
            description: "See how the sign changes based on the type of glass.",
            images: ["https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drinkwater.jpg", "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/person-drinking-champagne.jpg"],
            videos: [
              { label: "Normally Drinking Water", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drinkwater.mp4" },
              { label: "Champagne Glass", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/person-drinking-champagne.mp4" }
            ]
          },
          {
            id: "2.3.6",
            title: "Congratulations! 🎉. Keep on Learning ! ",
            description: "You have completed learning many new iconic signs!",
            videos: [
              { label: "Cheer - You learned new iconic signs!", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/super-new-signs-cheer.mp4" }
            ]
          }
        ]
      },
      {
        id: "2.4",
        label: "MODULE 4",
        title: "Iconic Signs in Daily Life",
        type: "learning",
        description: "Learn how to sign everyday objects and actions with comfort and clarity.",
        steps: [
          {
            id: "2.4.1",
            title: "Sign Comfortably",
            description: "Keep your signs close to your body, in a natural and balanced way.",
            videos: [
              { label: "Drive Car", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drive-car.mp4" }
            ]
          },
          {
            id: "2.4.2",
            title: "Showing Houses",
            description: "Understand the difference between small and big houses.",
            images: ["https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/small-house.jpg" , "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/big-house.jpg"],
            videos: [
              { label: "Small House", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/small-house.mp4" },
              { label: "Big House", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/big-house.mp4" }
            ]
          },
          {
            id: "2.4.3",
            title: "Signing Big",
            description: "Learn different ways to show size, heaviness, or importance.",
            videos: [{ label: "Big House", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/big-house.mp4" }],
            tables: [
              {
                title: "Ways to Show Big/Heavy",
                headers: ["Method"],
                rows: [
                  { id: "1", cells: ["Sign big"] },
                  { id: "2", cells: ["Use more signing space"] },
                  { id: "3", cells: ["Form the word 'cha' without voice"] }
                ]
              }
            ]
          },
          {
            id: "2.4.4",
            title: "Tree Trunks",
            description: "Practice showing differences in tree trunk sizes.",
            images: ["https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/big-tree.jpg"],
            videos: [
              { label: "Big Tree Trunk", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/big-tree.mp4" },
              { label: "Small Tree Trunk", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/small-tree.mp4" }
            ]
          },
          {
            id: "2.4.5",
            title: "Signing Thickness",
            description: "To show thickness, puff your cheeks while signing.",
            videos: [
              { label: "Small Tree Trunk", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/small-tree.mp4" }
            ]
          },
          {
            id: "2.4.6",
            title: "Signing Small",
            description: "Use compact movements for small, thin, or light objects.",
            videos: [
              { label: "Small Tree Trunk", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/small-tree-trunk.mp4" }
            ]
          }
        ]
      },
      {
        id: "2.5",
        label: "MODULE 5",
        title: "Expressing Movements",
        type: "learning",
        description: "Master how to sign different types of movements, from driving to other actions.",
        steps: [
          {
            id: "2.5.1",
            title: "Driving Skills Forward",
            description: "Show forward driving with confidence.",
            videos: [
              { label: "Drive Forward", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drive-forward.mp4" }
            ]
          },
          {
            id: "2.5.2",
            title: "Driving Skills Backward",
            description: "Show backward driving with accuracy.",
            videos: [
              { label: "Drive Backward", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drive-backward.mp4" }
            ]
          },
          {
            id: "2.5.3",
            title: "Driving Forward & Backward",
            description: "Compare and practice both forward and backward driving signs.",
            videos: [
              { label: "Drive Forward", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drive-forward.mp4" },
              { label: "Drive Backward", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/drive-backward.mp4" }
            ]
          },
          {
            id: "2.5.4",
            title: "More Movements",
            description: "Explore more ways to show different types of movement.",
            videos: [
              { label: "Other Movements", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/signing-more-movements.mp4" }
            ]
          },
          {
            id: "2.5.5",
            title: "Keep on Learning!",
            description: "Congratulations! You’ve learned new iconic signs for movements.",
            videos: [
              { label: "CHEER!", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/cheer-learn-more-new-sign.mp4" }
            ]
          }
        ]
      }
    ]
  }
];

// {
//   id: "Chpt3",
//     label: "CHAPTER 3",
//       title: "Everyday Conversations",
//         modules: [
//           {
//             id: "3.1",
//             title: "Common Phrases",
//             steps: [
//               { id: "3.1.1", title: "How are you?", videoUrl: "https://.../how-are-you.mp4" },
//               { id: "3.1.2", title: "Thank you", videoUrl: "https://.../thank-you.mp4" }
//             ]
//           }
//         ]
// },
// {
//   id: "Chpt4",
//     label: "CHAPTER 4",
//       title: "Family & Relationships",
//         modules: [
//           {
//             id: "4.1",
//             title: "Family Members",
//             steps: [
//               { id: "4.1.1", title: "Mother", videoUrl: "https://.../mother.mp4" },
//               { id: "4.1.2", title: "Father", videoUrl: "https://.../father.mp4" }
//             ]
//           }
//         ]
// }
// ];



export const chapters1 = [
  {
    id: "Chpt1",
    title: "Introduction to ASL",
    modules: [
      {
        id: "1.1",
        title: "Basic Greetings",
        steps: [
          { id: "1.1.1", title: "Hello", videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/HELLO.mp4" },
          { id: "1.1.2", title: "Welcome", videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Welcome.mp4" },
          { id: "1.1.3", title: "Hello Welcome , Come On Sign", videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Hello Welcome. Come-On Sign.mp4" }
        ]
      },
      {
        id: "1.2",
        title: "Daily Phrases",
        steps: [
          { id: "1.2.1", title: "How are you?", videoUrl: "https://.../how-are-you.mp4" }
        ]
      }
    ]
  },
  {
    id: "Chpt2",
    title: "Numbers & Counting",
    modules: [
      {
        id: "2.1",
        title: "Numbers 1-10",
        steps: [
          { id: "2.1.1", title: "Numbers 1-5", videoUrl: "https://.../numbers-1-5.mp4" },
          { id: "2.1.2", title: "Numbers 6-10", videoUrl: "https://.../numbers-6-10.mp4" }
        ]
      }
    ]
  }
]
