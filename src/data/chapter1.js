export const chapter1 = {
    id: "Chpt1",
    label: "CHAPTER 1",
    title: "Introduction to ASL",
    description: "Learn the basics of American Sign Language.",
    modulesCount: 5,
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
                        { label: "Hello Welcome, Come On , Let's Sign together", url: "https://tdelnfxrafeikhjqwnif.supabase.co/storage/v1/object/public/asl_videos/chpt1/Hello_Welcome_ComeOnSign.mp4" }
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
                },
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
}