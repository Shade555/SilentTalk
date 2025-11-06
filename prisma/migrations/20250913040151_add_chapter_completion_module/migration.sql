-- CreateTable
CREATE TABLE "public"."chapter_completions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "chapter_id" TEXT NOT NULL,
    "completed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chapter_completions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chapter_completions_user_id_chapter_id_key" ON "public"."chapter_completions"("user_id", "chapter_id");

-- AddForeignKey
ALTER TABLE "public"."chapter_completions" ADD CONSTRAINT "chapter_completions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
