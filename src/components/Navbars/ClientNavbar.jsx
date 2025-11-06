// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { MdDashboard, MdSettings } from "react-icons/md";
// import { SiDictionarydotcom } from "react-icons/si";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { toast } from "sonner";
// import { useState, useEffect } from "react";
// import { ResetProgress } from "@/actions/resetActions.js"
// import { getUserIdByClerkId } from "@/actions/UserActions";


// const ClientNavbar = () => {
//     const pathname = usePathname();
//     const { user, isLoaded } = useUser();
//     const [loading, setLoading] = useState(false);
//     const [ready, setReady] = useState(false);

//     useEffect(() => {
//         if (isLoaded) setReady(true);
//     }, [isLoaded]);

//     if (!ready) {
//         // Render a minimal placeholder nav to match server output
//         return (
//             <nav className="h-16 bg-[#1E2235] border-b border-[#374151]"></nav>
//         );
//     }

//     const handleResetProgress = async () => {
//         if (!confirm("Are you sure you want to reset your progress?")) return;

//         try {
//             setLoading(true);
//             const clerkId = user?.id;
//             if (!clerkId) throw new Error("User not signed in");

//             const userId = await getUserIdByClerkId(clerkId);
//             if (!userId) throw new Error("User ID not found");

//             // Reset Progress
//             await ResetProgress(userId);
//             toast.success("Progress has been reset successfully!");
//         } catch (error) {
//             toast.error("Failed to reset progress.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             {/* Mobile Navbar */}
//             <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-[#1E2235]/90 backdrop-blur-md border-t border-gray-700 z-50">
//                 <ul className="flex justify-around items-center h-16 text-sm text-white">
//                     <SignedIn>
//                         <li>
//                             <Link href="/dashboard">
//                                 <div className={`flex flex-col items-center ${pathname === "/dashboard" ? "text-cyan-400 font-bold" : "text-white/60"}`}>
//                                     <MdDashboard size={24} />
//                                     <span className="font-serif font-semibold">Dashboard</span>
//                                 </div>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/dictionary">
//                                 <div className={`flex flex-col items-center ${pathname === "/dictionary" ? "text-cyan-400 font-bold" : "text-white/60"}`}>
//                                     <SiDictionarydotcom size={24} />
//                                     <span className="font-serif font-semibold">Dictionary</span>
//                                 </div>
//                             </Link>
//                         </li>
//                         <li>
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button size="sm" variant="asl" className="flex flex-col items-center">
//                                         <MdSettings size={24} />
//                                         <span className="text-xs">Settings</span>
//                                     </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent>
//                                     <DropdownMenuItem onClick={handleResetProgress} disabled={loading}>
//                                         Reset Progress
//                                     </DropdownMenuItem>
//                                 </DropdownMenuContent>
//                             </DropdownMenu>
//                         </li>
//                         <li>
//                             <UserButton />
//                         </li>
//                     </SignedIn>

//                     <SignedOut>
//                         <li>
//                             <SignInButton>
//                                 <Button size="sm" variant="default" asChild>Sign In</Button>
//                             </SignInButton>
//                         </li>
//                         <li>
//                             <SignUpButton>
//                                 <Button size="sm" variant="secondary" asChild>Sign Up</Button>
//                             </SignUpButton>
//                         </li>
//                     </SignedOut>
//                 </ul>
//             </div>

//             {/* Desktop Navbar */}
//             <div className="hidden sm:flex fixed top-0 left-0 right-0 h-16 bg-[#1E2235] border-b border-[#374151] z-50 justify-between items-center px-6">
//                 {/* Logo */}
//                 <div className="text-cyan-400 font-bold text-xl">SilentTalk</div>

//                 {/* Links */}

//                 <ul className="flex gap-7 items-center text-white">
//                     <SignedIn>
//                         <li>
//                             <Link href="/dashboard" className={`text-sm flex items-center gap-1 ${pathname === "/dashboard" ? "text-cyan-400 font-semibold" : "text-white/60"}`}>
//                                 <MdDashboard size={20} />
//                                 <span className="font-semibold">Dashboard</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/dictionary" className={`text-sm flex items-center gap-1 ${pathname === "/dictionary" ? "text-cyan-400 font-semibold" : "text-white/60"}`}>
//                                 <SiDictionarydotcom size={20} />
//                                 <span className="font-semibold">Dictionary</span>
//                             </Link>
//                         </li>

//                         <li>
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button size="sm" variant="asl" className="flex items-center gap-1">
//                                         <MdSettings size={20} />
//                                         Settings
//                                     </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent>
//                                     <DropdownMenuItem onClick={handleResetProgress} disabled={loading}>
//                                         Reset Progress
//                                     </DropdownMenuItem>
//                                 </DropdownMenuContent>
//                             </DropdownMenu>
//                         </li>
//                         <li>
//                             <UserButton />
//                         </li>
//                     </SignedIn>

//                     <SignedOut>
//                         <li>
//                             <SignInButton>
//                                 <Button size="sm" variant="default" asChild>Sign In</Button>
//                             </SignInButton>
//                         </li>
//                         <li>
//                             <SignUpButton>
//                                 <Button size="sm" variant="secondary" asChild>Sign Up</Button>
//                             </SignUpButton>
//                         </li>
//                     </SignedOut>
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default ClientNavbar;


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdSettings } from "react-icons/md";
import { SiDictionarydotcom } from "react-icons/si";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { ResetProgress } from "@/actions/resetActions.js";
import { getUserIdByClerkId } from "@/actions/UserActions";

const ClientNavbar = () => {
    const pathname = usePathname();
    const { user, isLoaded } = useUser();
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (isLoaded) setReady(true);
    }, [isLoaded]);

    if (!ready) {
        // Minimal placeholder to avoid SSR/CSR mismatch
        return <nav className="h-16 bg-[#1E2235] border-b border-[#374151]" />;
    }

    const handleResetProgress = async () => {
        if (!confirm("Are you sure you want to reset your progress?")) return;
        try {
            setLoading(true);
            const clerkId = user?.id;
            if (!clerkId) throw new Error("User not signed in");
            const userId = await getUserIdByClerkId(clerkId);
            if (!userId) throw new Error("User ID not found");
            await ResetProgress(userId);
            toast.success("Progress has been reset successfully!");
        } catch (error) {
            toast.error("Failed to reset progress.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-[#1E2235]/90 backdrop-blur-md border-t border-gray-700 z-50 px-10">
                <ul className="flex justify-around items-center h-16 text-sm text-white">
                    <SignedIn>
                        <li>
                            <Link href="/dashboard">
                                <div
                                    className={`text-xs flex flex-col items-center ${pathname === "/dashboard"
                                        ? "text-cyan-400 font-bold"
                                        : "text-white/60"
                                        }`}
                                >
                                    <MdDashboard size={24} />
                                    <span className="font-serif font-semibold">Dashboard</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dictionary">
                                <div
                                    className={`text-xs flex flex-col items-center ${pathname === "/dictionary"
                                        ? "text-cyan-400 font-bold"
                                        : "text-white/60"
                                        }`}
                                >
                                    <SiDictionarydotcom size={24} />
                                    <span className="font-serif font-semibold">Dictionary</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="sm" variant="asl" className="flex flex-col items-center">
                                        <MdSettings size={26} />
                                        <span className="text-xs">Settings</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={handleResetProgress} disabled={loading}>
                                        Reset Progress
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <div className="text-xs flex flex-col items-center">
                                <UserButton />
                                <span>Profile</span>
                            </div>
                        </li>
                    </SignedIn>
                </ul>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="fixed top-0 left-0 right-0 sm:hidden bg-[#1E2235]/90 backdrop-blur-md border-t border-gray-700 z-50 flex justify-evenly items-center h-16">
                {/* Logo */}
                <div className="text-cyan-400 font-bold text-xl">SilentTalk</div>

                <ul className="flex justify-around items-center h-16 text-sm text-white">
                    <SignedOut>
                        <li>
                            <SignInButton mode="modal">
                                <Button size="sm" variant="default">Sign In</Button>
                            </SignInButton>
                        </li>
                        <li>
                            <SignUpButton mode="modal">
                                <Button size="sm" variant="secondary">Sign Up</Button>
                            </SignUpButton>
                        </li>
                    </SignedOut>
                </ul>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden sm:flex fixed top-0 left-0 right-0 h-16 bg-[#1E2235] border-b border-[#374151] z-50 justify-between items-center px-6">
                {/* Logo */}
                <div className="text-cyan-400 font-bold text-xl">SilentTalk</div>

                {/* Links */}
                <ul className="flex gap-8 items-center text-white px-1">
                    <SignedIn>
                        <li>
                            <Link
                                href="/dashboard"
                                className={`text-sm flex items-center gap-1 ${pathname === "/dashboard"
                                    ? "text-cyan-400 font-semibold"
                                    : "text-white/60"
                                    }`}
                            >
                                <MdDashboard size={20} />
                                <span className="font-semibold">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dictionary"
                                className={`text-sm flex items-center gap-1 ${pathname === "/dictionary"
                                    ? "text-cyan-400 font-semibold"
                                    : "text-white/60"
                                    }`}
                            >
                                <SiDictionarydotcom size={20} />
                                <span className="font-semibold">Dictionary</span>
                            </Link>
                        </li>

                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="sm" variant="asl" className="flex items-center gap-1">
                                        <MdSettings size={20} />
                                        Settings
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={handleResetProgress} disabled={loading}>
                                        Reset Progress
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <div className="text-sm font-semibold flex items-center gap-1">
                                <UserButton />
                                <span>Profile</span>
                            </div>
                        </li>
                    </SignedIn>

                    <SignedOut>
                        <li>
                            <SignInButton mode="modal">
                                <Button size="sm" variant="default"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-white
                                      bg-cyan-600 shadow-sm transition
                                        hover:bg-cyan-700
                                        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
                                        disabled:opacity-50 disabled:pointer-events-none
                                        dark:focus:ring-offset-0">
                                    Sign In
                                </Button>
                            </SignInButton>
                        </li>
                        <li>
                            <SignUpButton mode="modal">
                                <Button size="sm" variant="secondary"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-white
                                    bg-indigo-600 shadow-sm transition
                                    hover:bg-indigo-700
                                    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
                                    disabled:opacity-50 disabled:pointer-events-none
                                    dark:focus:ring-offset-0">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </li>
                    </SignedOut>
                </ul>
            </div>
        </>
    );
};

export default ClientNavbar;

