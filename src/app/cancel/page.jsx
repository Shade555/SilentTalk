import Link from "next/link";

export default function CancelPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl font-bold text-red-600">❌ Payment Cancelled</h1>
            <p>You can try again anytime.</p>
            <Link href="/payment" className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go to Home Page
            </Link>

        </div>
    );
}