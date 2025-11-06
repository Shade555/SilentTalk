import { type } from "os";

export const chapter3 = {
    id: "Chpt3",
    label: "CHAPTER 3",
    title: "Useful Everyday Signs",
    description: "Learn common signs for everyday communication and test your understanding.",
    modulesCount: 4,
    modules: [
        {
            id: "3.1",
            label: "MODULE 1",
            title: "Expressing Understanding and Possession",
            type: "learning",
            description: "Learn how to express understanding, lack of understanding, and possession.",
            steps: [
                {
                    id: "3.1.1",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Understand", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/understand.mp4" }
                    ]
                },
                {
                    id: "3.1.2",
                    title: "Don't Understand - Understand",
                    description: "Use a different facial expression to change the entire meaning of one sign.",
                    videos: [
                        { label: "Don't Understand - Understand", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/dont-understand-understand.mp4" },
                    ],
                    tables: [
                        {
                            title: "Word Order Structure",
                            headers: ["ASL", "English"],
                            rows: [
                                { id: "1", cells: ["don't-UNDERSTAND", "I don't understand."] },
                                { id: "2", cells: ["UNDERSTAND", "I do understand."] }
                            ]
                        }
                    ]
                },
                {
                    id: "3.1.3",
                    title: "Learn a new sign in different manner !",
                    videos: [
                        { label: "Don't Understand", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/dont-understand.mp4" }
                    ],
                    tables: [
                        {
                            title: "Word Order Structure",
                            headers: ["facial expression", "executed sign"],
                            rows: [
                                { id: "1", cells: ["don't-", "UNDERSTAND."] },
                            ]
                        }
                    ]
                },
                {
                    id: "3.1.4",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Have", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/have.mp4" }
                    ]
                },
                {
                    id: "3.1.5",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Don't Have", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/dont-have.mp4" }
                    ]
                }
            ]
        },
        {
            id: "3.2",
            label: "MODULE 2",
            title: "Practice Test 1",
            type: "test",
            description: "Review Some of the Signs you have learned so far in the previous chapter.",
            steps: [
                {
                    // Video Database : chpt1/deaf.mp4
                    id: "3.2.1",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/deaf.mp4",
                    videoLabel: "DEAF",
                    answer: "DEAF"
                },
                {
                    // Video Database : chpt1/You.mp4
                    id: "3.2.2",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/you.mp4",
                    videoLabel: "YOU",
                    answer: "YOU"
                },
                {
                    // Video Database : chpt3/test1/you-deaf.mp4
                    id: "3.2.3",
                    title: "Fill the gap with the right word!",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/test1/you-deaf.mp4",
                    videoLabel: "YOU DEAF",
                    Question: "You ____ ?",
                    options: [{ id: "HEARING", label: "HEARING" }, { id: "DEAF", label: "DEAF" }, { id: "FINE", label: "FINE" }],
                    answer: "DEAF",
                },
                {
                    // Video Database : chpt1/hearing.mp4
                    id: "3.2.4",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/hearing.mp4",
                    videoLabel: "HEARING",
                    answer: "HEARING"
                },
                {
                    // Video Database : chpt1/me.mp4
                    id: "3.2.5",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/me.mp4",
                    videoLabel: "ME",
                    answer: "ME"
                },
                {
                    // Video Database : chpt2/tree.mp4
                    id: "3.2.6",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/tree.mp4",
                    videoLabel: "TREE",
                    answer: "TREE"
                },
                {
                    // Video Database : chpt3/test1/hello-you-deaf.mp4
                    id: "3.2.7",
                    title: "Fill the gap with the right word!",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/test1/hello-you-deaf.mp4",
                    videoLabel: "HELLO YOU DEAF",
                    Question: "_____ You Deaf ?",
                    options: [{ id: "HELLO", label: "HELLO" }, { id: "ME", label: "ME" }, { id: "HEARING", label: "HEARING" }],
                    answer: "HELLO",
                },
                {
                    //  Video Database : chpt1/yes.mp4
                    id: "3.2.8",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/yes.mp4",
                    videoLabel: "YES",
                    answer: "YES"
                },
                {
                    // Video Database : chpt1/no.mp4
                    id: "3.2.9",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/no.mp4",
                    videoLabel: "NO",
                    answer: "NO"
                },
                {
                    // Video Database : chpt1/no.mp4 but in mcq
                    id: "3.2.10",
                    type: "mcq",
                    title: "True or False: I always have to use my left hand for signing.",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/no.mp4",
                    videoLabel: "NO",
                    options: [{ id: "TRUE", label: "TRUE" }, { id: "FALSE", label: "FALSE" }],
                    answer: "FALSE",
                    explanation: "Depending on your preference and comfort, you can use either hand for signing."
                }
            ]
        },
        {
            id: "3.3",
            label: "MODULE 3",
            title: "Politeness and Common Phrases",
            type: "learning",
            description: "Practice polite expressions and frequent conversational signs.",
            steps: [
                {
                    id: "3.3.1",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Please", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/please.mp4" }
                    ]
                },
                {
                    id: "3.3.2",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Welcome Eat Please", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/welcome-eat-please.mp4" }
                    ]
                },
                {
                    id: "3.3.3",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Thanks", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/thanks.mp4" }
                    ]
                },
                {
                    id: "3.3.4",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Excuse", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/excuse.mp4" }
                    ]
                },
                {
                    id: "3.3.5",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Fine Thanks", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/fine-thanks.mp4" }
                    ]
                },
                {
                    id: "3.3.6",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Again", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/again.mp4" }
                    ]
                },
                {
                    id: "3.3.7",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Again Please", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/again-please.mp4" }
                    ]
                },
                {
                    id: "3.3.8",
                    title: "Learn a new sign!",
                    videos: [
                        { label: "Slow", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/slow.mp4" }
                    ]
                }
            ]
        },
        {
            id: "3.4",
            label: "MODULE 4",
            title: "Practice Test 2",
            type: "test",
            description: "Review some previous chapters signs.",
            steps: [
                {
                    //  Video Database : chpt3/test2/hello-you-hearing.mp4
                    id: "3.4.1",
                    title: "Choose a suitable option to fill the gap!",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/test2/hello-you-hearing.mp4",
                    videoLabel: "HELLO YOU HEARING",
                    Question: "HELLO , YOU ______ ? ",
                    options: [{ id: "HEARING", label: "HEARING" }, { id: "DEAF", label: "DEAF" }, { id: "FINE", label: "FINE" }],
                    answer: "HEARING",
                },
                {
                    // Video Database : chpt2/fine.mp4,
                    id: "3.4.2",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/fine.mp4",
                    videoLabel: "FINE",
                    answer: "FINE"
                },
                {
                    // Video Database : chpt3/test2/no-me-deaf.mp4
                    id: "3.4.3",
                    title: "Choose a suitable option to fill the gap!",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/test2/no-me-deaf.mp4",
                    videoLabel: "NO ME DEAF",
                    Question: "NO ME ______  ? ",
                    options: [{ id: "HEARING", label: "HEARING" }, { id: "DEAF", label: "DEAF" }, { id: "FINE", label: "FINE" }],
                    answer: "DEAF",
                },
                {
                    // Video Database : chpt3/test2/hello-how-you.mp4
                    id: "3.4.4",
                    title: "Choose a suitable option to fill the gap!",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/test2/hello-how-you.mp4",
                    videoLabel: "HELLO HOW YOU",
                    Question: "HELLO HOW YOU ______  ? ",
                    options: [{ id: "FINE", label: "FINE" }, { id: "HEARING", label: "HEARING" }, { id: "DEAF", label: "DEAF" }],
                    answer: "FINE",
                    explanation: "Since the person is asking about your well-being, the appropriate response would be 'FINE'."
                },
                {
                    //  Video Database : chpt3/test2/how-you.mp4
                    id: "3.4.5",
                    title: "Choose a suitable option",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/test2/how-you.mp4",
                    videoLabel: "HOW YOU",
                    Question: "Select the Correct Option",
                    options: [{ id: "HOW YOU", label: "HOW YOU" }, { id: "YOU HOW", label: "YOU HOW" }, { id: "YOU DEAF", label: "YOU DEAF" }],
                    answer: "HOW YOU",
                },
                {
                    //  Video Database : chpt3/test2/yes-me-hearing.mp4
                    id: "3.4.5",
                    title: "Choose a suitable option to fill the gap!",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/test2/yes-me-hearing.mp4",
                    videoLabel: "YES ME HEARING",
                    options: [{ id: "DEAF", label: "DEAF" }, { id: "HEARING", label: "HEARING" }, { id: "WELCOME", label: "WELCOME" }],
                    answer: "HEARING",
                },
                {
                    // Video Database : chpt1/welcome.mp4
                    id: "3.4.6",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Welcome.mp4",
                    videoLabel: "WELCOME",
                    answer: "WELCOME"
                },
                {
                    // Video Database : chpt2/person-drinking-champagne.mp4
                    id: "3.4.7",
                    title: "Choose a suitable option",
                    type: "mcq",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/person-drinking-champagne.mp4",
                    videoLabel: "PERSON DRINKING CHAMPAGNE",
                    Question: "Select a correct option",
                    options: [{ id: "PERSON DRINKING CHAMPAGNE", label: "PERSON DRINKING CHAMPAGNE" }, { id: "PERSON EATING", label: "PERSON EATING" }, { id: "PERSON DRINKING NORMAL GLASS", label: "PERSON DRINKING NORMAL GLASS" }],
                    answer: "PERSON DRINKING CHAMPAGNE"
                },
                {
                    //  Video Database : chpt3/understand.mp4
                    id: "3.4.8",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt3/understand.mp4",
                    videoLabel: "UNDERSTAND",
                    answer: "UNDERSTAND"
                },
                {
                    //  Video Database : chpt2/baby.mp4
                    id: "3.4.9",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt2/baby.mp4",
                    videoLabel: "BABY",
                    answer: "BABY"
                },
                {
                    // Video Database : chpt1/bye.mp4
                    id: "3.4.10",
                    title: "Write down the shown sign!",
                    type: "input",
                    videoUrl: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/bye.mp4",
                    videoLabel: "BYE",
                    answer: "BYE"
                },
            ]
        }
    ]
};
