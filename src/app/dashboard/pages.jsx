// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import DashboardCard from "@/components/DashboardCard";

// export default async function DashboardPage() {
//   // Get current user session
//   const { userId } = await auth();

//   // If not logged in → redirect to login
//   if (!userId) {
//     return <div>
//       Not Logged In.
//     </div>
//   }


//   const chapters = [
//     { chapterNumber: 1, title: "Hello and welcome", lessonsCompleted: 0, totalLessons: 5 },
//     { chapterNumber: 2, title: "Start a conversation", lessonsCompleted: 0, totalLessons: 6 },
//     { chapterNumber: 3, title: "Introducing yourself", lessonsCompleted: 0, totalLessons: 12 },
//     { chapterNumber: 4, title: "Hello and welcome", lessonsCompleted: 0, totalLessons: 5 },
//     { chapterNumber: 5, title: "Start a conversation", lessonsCompleted: 0, totalLessons: 6 },
//     { chapterNumber: 6, title: "Introducing yourself", lessonsCompleted: 0, totalLessons: 4 },
//     { chapterNumber: 7, title: "Hello and welcome", lessonsCompleted: 0, totalLessons: 5 },
//     { chapterNumber: 8, title: "Start a conversation", lessonsCompleted: 0, totalLessons: 6 },
//     { chapterNumber: 9, title: "Introducing yourself", lessonsCompleted: 0, totalLessons: 4 },
//     // add more chapters here
//   ];

//   const handleChapterClick = (chapter) => {
//     console.log("Navigate to chapter:", chapter.chapterNumber);
//     // Implement router push to /dashboard/chapter/[chapterId]
//   };

//   // Otherwise → show dashboard
//   return (
//     <div className="min-h-screen p-6" style={{ backgroundColor: "#0D1B2A" }}>
//       <h1 className="text-3xl font-bold text-[#E6E6E6] mb-6">
//         Your ASL Learning Dashboard
//       </h1>

//       {chapters.map((chapter) => (
//         <DashboardCard
//           key={chapter.chapterNumber}
//           chapter={chapter}
//         />
//       ))}

//       {/* Optional: Upgrade section */}
//       <div
//         className="mt-8 p-6 rounded-lg text-center font-semibold"
//         style={{ backgroundColor: "#1B263B", color: "#FFD60A" }}
//       >
//         Continue your ASL learning journey and unlock all learning content
//       </div>
//     </div>
//   );
// }


// import Link from "next/link"
// import { chapters } from "@/data/datas.js"

// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen p-6" style={{ backgroundColor: "#0D1B2A" }}>
//       <h1 className="text-3xl font-bold text-[#E6E6E6] mb-6">
//         Your ASL Learning Dashboard
//       </h1>

//       <ul className="space-y-4">
//         {chapters.map((chapter) => {
//           const completed = 0 // later you’ll calculate this from DB
//           const total = chapter.modules.length
//           const progress = (completed / total) * 100

//           return (
//             <li
//               key={chapter.id}
//               className="p-4 rounded-lg shadow"
//               style={{ backgroundColor: "#1B263B", color: "#E6E6E6" }}
//             >
//               <h2 className="text-xl font-semibold mb-2">{chapter.title}</h2>

//               <p className="mb-2 text-sm text-gray-400">
//                 {completed} of {total} lessons completed
//               </p>

//               {/* Progress bar */}
//               <div className="mt-1 w-full bg-[#0D1B2A] rounded-full h-2">
//                 <div
//                   className="h-2 rounded-full transition-all duration-300"
//                   style={{
//                     width: `${progress}%`,
//                     backgroundColor: "#3DDC97",
//                   }}
//                 ></div>
//               </div>

//               <Link
//                 href={`/dashboard/chapters/${chapter.id}`}
//                 className="mt-3 inline-block font-medium"
//                 style={{ color: "#FFD60A" }}
//               >
//                 Go to {chapter.title} →
//               </Link>
//             </li>
//           )
//         })}
//       </ul>

//       {/* Optional: Upgrade / CTA Section */}
//       <div
//         className="mt-8 p-6 rounded-lg text-center font-semibold"
//         style={{ backgroundColor: "#1B263B", color: "#FFD60A" }}
//       >
//         Continue your ASL learning journey and unlock all learning content 🚀
//       </div>
//     </div>
//   )
// }
