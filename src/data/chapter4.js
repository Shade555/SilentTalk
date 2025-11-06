export const chapter4 = {
    id: "Chpt4",
    label: "CHAPTER 4",
    title: "Start Conversation",
    description: "Learn how to perform conversation in ASL",
    modulesCount: 3,
    modules: [
        {
            id: "4.1",
            label: "MODULE 1",
            title: "Practice a Dialogue - 1",
            type: "dialogue",
            steps: [
                {
                    id: "conversation1",
                    videos: [
                        {
                            type: "sender",
                            label: "Hello Welcome",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/hello-welcome.mp4"
                        },
                        {
                            type: "receiver",
                            label: "Hello How You ? ",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/hello-how-you.mp4"
                        }
                    ],
                    testing: {
                        type: "mcq",
                        title: "Select the correct option",
                        Question: "_____ How You ? ",
                        options: [{ id: "Hello", label: "Hello" }, { id: "Welcome", label: "Welcome" }, { id: "Deaf", label: "Deaf" }],
                        answer: "Hello",
                        explanation: "Correct answer is HELLO HOW YOU ?"
                    }

                },
                {
                    id: "conversation2",
                    videos: [
                        {
                            type: "sender",
                            label: "Fine You ? ",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/fine-you.mp4"
                        },
                        {
                            type: "receiver",
                            label: "Fine, You Deaf ? ",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/fine-you-deaf.mp4"
                        },
                        {
                            type: "sender",
                            label: "No Me Hearing, You Deaf ? ",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/no-me-hearing-you-deaf.mp4"
                        }
                    ],
                    testing: {
                        type: "mcq",
                        title: "Select the correct option and fill the gap",
                        Question: "No Me Hearing, You ____ ? ",
                        options: [{ id: "Deaf", label: "Deaf" }, { id: "Hearing", label: "Hearing" }, { id: "Fine", label: "Fine" }],
                        answer: "Deaf",
                        explanation: "Correct answer is NO ME HEARING, YOU DEAF ?"
                    }
                },
                {
                    id: "conversation3",
                    videos: [
                        {
                            type: "reciever",
                            label: "Yes Me Deaf",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/yes-me-deaf.mp4"
                        },
                        {
                            type: "sender",
                            label: "Ok. Bye",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/ok-bye.mp4"
                        },
                        {
                            type: "receiver",
                            label: "Bye",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue1/bye.mp4"
                        }
                    ],
                    testing: {
                        type: "mcq",
                        title: "Select the correct option",
                        Question: "What's the last sign ?  ",
                        options: [{ id: "Ok", label: "Ok" }, { id: "Bye", label: "Bye" }, { id: "Fine", label: "Fine" }, { id: "Welcome", label: "Welcome" }],
                        answer: "Bye",
                        explanation: "Correct answer is BYE"
                    }
                }
            ]
        },
        {
            id: "4.2",
            label: "MODULE 2",
            title: "Practice a Dialogue - 2",
            type: "dialogue",
            steps: [
                {
                    id: "conversation1",
                    videos: [
                        {
                            type: "sender",
                            label: "Hello",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue2/hello-hello.mp4"
                        },
                        {
                            type: "receiver",
                            label: "don't UNDERSTAND",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue2/hello-dont-understand.mp4"
                        }
                    ],
                    testing: {
                        type: "mcq",
                        title: "Select correct option",
                        Question: "Did she understood ? ",
                        options: [{ id: "Yes", label: "Yes" }, { id: "No", label: "No" }],
                        answer: "No",
                        explanation: "No , she didn't understand"
                    }
                },
                {
                    id: "conversation2",
                    videos: [
                        {
                            type: "sender",
                            label: "dont- Understand Hello",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue2/dont-understand-hello.mp4"
                        },
                    ],
                    testing: {
                        type: "mcq",
                        title: "Select the correct option",
                        Question: "Don't Understand _____ ?",
                        options: [{ id: "Hello", label: "Hello" }, { id: "Happy", label: "Happy" }, { id: "Please", label: "Please" }],
                        answer: "Hello",
                        explanation: "Correct answer is DON'T UNDERSTAND HELLO ?"
                    }
                },
                {
                    id: "conversation3",
                    videos: [
                        {
                            type: "reciever",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue2/no-understand.mp4"
                        },
                        {
                            type: "sender",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue2/slow-hello.mp4"
                        },
                        {
                            type: "receiver",
                            url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt4/dialogue2/yes-understood.mp4"
                        }
                    ],
                    suggestions: {
                        type: "suggestions",
                        messages: [
                            "Change your facial expression to switch from don't-understand to understand.",
                            "Practice the dialogue a few times to get comfortable with the signs and the flow of the conversation."
                        ]
                    }
                }
            ]
        },
        {
            id: "4.3",
            label: "MODULE 3",
            title: "Practice Test - 3",
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
                    // Video Database : chpt1/You deaf.mp4
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
        }
        
    ]

}