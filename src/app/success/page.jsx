import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { confirmPayment } from "@/actions/PaymentActions";

export default async function SuccessPage({ searchParams }) {
    const user = await currentUser();
    if (!user) return <p>Please sign in to view payment details.</p>;

    const { session_id } = await searchParams;
    const sessionId = session_id;
    if (!sessionId) return <p>Missing session reference.</p>;

    const { transaction, isConfirmed } = await confirmPayment(sessionId, user.id);

    return (
        <main className="success-bg min-h-screen flex items-center justify-center px-4">
            {/* Animated ambient blobs */}
            <div className="success-blob blob-a" />
            <div className="success-blob blob-b" />
            <div className="success-blob blob-c" />
            <div className="noise-overlay" />
            <section className="glass-panel animate-in fade-in duration-500 relative">
                <div className="gradient-ring" />
                <div className="shine" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-400 bg-clip-text text-transparent drop-shadow mb-4">
                    Payment Successful
                </h1>
                {transaction ? (
                    <div className="space-y-3 text-sm text-gray-100">
                        <p className="tracking-wide">Plan: <span className="font-semibold uppercase text-emerald-300">{transaction.plan}</span></p>
                        <p>Amount: <span className="font-medium text-emerald-200">{transaction.currency} {transaction.amount}</span></p>
                        <p>Status: <span className={isConfirmed ? "text-green-400" : "text-yellow-300"}>{transaction.status}</span></p>
                        <p>Access until: <span className="text-emerald-200">{new Date(transaction.endDate).toLocaleDateString()}</span></p>
                        {!isConfirmed && (
                            <p className="text-xs text-yellow-300/80 pt-1">Confirming… this usually finishes in a few seconds.</p>
                        )}
                    </div>
                ) : (
                    <p className="text-sm text-emerald-100/80 animate-pulse">Finalizing your transaction…</p>
                )}
                <Link
                    href="/dashboard"
                    className="relative group inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 shadow-lg shadow-emerald-900/30 ring-1 ring-emerald-300/30 hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-300/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                    Go to Dashboard
                </Link>
            </section>
        </main>
    );
}
