"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const StepContentCard = ({ step }) => {
  return (
    <div className="flex flex-col items-center w-full px-2 sm:px-4">
      {/* Step Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-emerald-400 text-center">
        {step?.title}
      </h1>

      {/* Step Description */}
      {step?.description && (
        <p className="text-gray-50 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-center max-w-2xl">
          {step?.description}
        </p>
      )}

      {/* Images */}
      <div
        className={`flex flex-col sm:flex-row ${step?.images?.length > 1 ? "gap-2 sm:gap-3" : ""
          } mb-2 sm:mb-5 object-cover`}
      >
        {step?.images?.map((image, idx) => (
          <div
            key={idx}
            className={`${step.images?.length > 1 ? "sm:w-1/2" : "w-full"
              } flex flex-col items-center object-cover`}
          >
            <Image
              src={image}
              alt={`Step ${step.id} Image ${idx + 1}`}
              width={200}
              height={200}
              className="max-w-sm rounded-lg shadow-lg object-contain"
            />
          </div>
        ))}
      </div>

      {/* Videos */}
      <div
        className={`flex flex-col sm:flex-row ${step.videos.length > 1 ? "gap-2 sm:gap-3" : ""
          } mb-2 sm:mb-5 `}
      >
        {step.videos.map((video, idx) => (
          <div
            key={idx}
            className={`${step.videos.length > 1 ? "sm:w-1/2" : "w-full max-w-xs"
              } flex flex-col items-center`}
          >
            <video
              src={video.url}
              autoPlay
              muted
              loop
              playsInline
              className="max-w-xs p-2 rounded-2xl shadow-lg"
            />
            {video.label && (
              <p className="mt-2 text-gray-300 font-semibold text-xs sm:text-sm md:text-base text-center">
                {video.label}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Tables */}
      {step.tables &&
        step.tables.map((table, idx) => (
          <div
            key={idx}
            className="w-full max-w-full sm:max-w-2xl overflow-x-auto mb-1 mx-auto"
          >
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-emerald-400 mb-2 text-center">
              {table.title}
            </h2>

            {table.headers && (
              <Table className="border border-white rounded-lg overflow-hidden w-full">
                {/* Table Head */}
                <TableHeader className="bg-[#2A2F45]">
                  <TableRow>
                    {table.headers.map((header, i) => (
                      <TableHead
                        key={i}
                        className="border border-gray-700 text-gray-200 px-3 py-2 text-xs sm:text-sm md:text-base text-left"
                      >
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody>
                  {table.rows.map((row) => (
                    <TableRow
                      key={row.id}
                      className="hover:bg-gray-800 transition-colors"
                    >
                      {row.cells.map((cell, i) => (
                        <TableCell
                          key={i}
                          className="border border-gray-700 px-3 py-2 text-gray-300 text-xs sm:text-sm md:text-base"
                        >
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        ))}
    </div>
  );
};

export default StepContentCard;
