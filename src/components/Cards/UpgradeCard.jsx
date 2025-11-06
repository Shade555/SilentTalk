// components/Cards/UpgradeCard.jsx
import { Button } from "../ui/button";
import Link from "next/link";

export default function UpgradeCard() {
    return (
        <div className="relative w-full md:w-xl border border-yellow-400 bg-[#2E2E3E] rounded-lg p-6 text-center shadow-lg">
            <h2 className="text-lg font-bold text-yellow-300">Upgrade Required 🚀</h2>
            <p className="text-sm text-gray-400 mt-2">
                Unlock more chapters by upgrading your subscription.
            </p>
            <Link href="/payment">
                <Button className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 cursor-pointer">
                    Upgrade Now
                </Button>
            </Link>
        </div>
    );
}
