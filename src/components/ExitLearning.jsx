"use client";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerDescription,
    DrawerClose,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const ExitLearning = ({ chapterId }) => {
    const router = useRouter();
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    className="border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                    variant="outline"
                >
                    Exit Learning
                </Button>
            </DrawerTrigger>

            <DrawerContent className="bg-[#1E2235] text-[#D4D4D4] p-4 sm:p-6">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="text-lg font-bold text-amber-400">
                            Are you sure you want to exit the lesson?
                        </DrawerTitle>
                        <DrawerDescription className="text-sm text-gray-400">
                            Any unsaved progress will be lost.
                        </DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter className="flex justify-end gap-4">
                        <Button
                            className="bg-red-500 text-white hover:bg-red-600"
                            onClick={() => router.push(`/dashboard/chapters/${chapterId}`)}
                        >
                            Yes
                        </Button>
                        <DrawerClose asChild>
                            <Button className="bg-gray-700 text-white hover:bg-gray-600">
                                No
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>

    )
}

export default ExitLearning
