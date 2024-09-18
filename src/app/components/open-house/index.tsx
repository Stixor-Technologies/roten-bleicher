"use client";
import React, { useState, useEffect } from "react";
import CustomModal from "../modal";
import Image from "next/image";
import Close from "../../../../public/images/icons/cross-white.svg";

const OpenHouse = () => {
  const [showModal, setShowModal] = useState(false);
  const [feedbucketData, setFeedbucketData] = useState<{
    onboarded?: boolean;
  } | null>(null);

  useEffect(() => {
    const feedbucketDataString =
      localStorage.getItem("feedbucket-data") ?? "{}";
    const data = JSON.parse(feedbucketDataString);

    setFeedbucketData(data);

    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    if (feedbucketData?.onboarded) {
      setShowModal(false);
      localStorage.setItem("hasSeenModal", "true");
    }
    const updatedData = JSON.parse(
      localStorage.getItem("feedbucket-data") || "{}",
    );
    setFeedbucketData(updatedData);
  };

  return (
    <CustomModal
      isVisible={showModal}
      setIsVisible={handleCloseModal}
      styles="max-w-[28.75rem]"
    >
      <div className="bg-light-purple p-3">
        <div className="flex flex-col items-center text-center justify-center border-2 border-white p-4 py-9 gap-4 text-red ">
          <h2 className="text-5xl font-area-extrabold uppercase mt-4">
            Open House
          </h2>
          <span className="font-area-semibold">
            22.September 2024 | 12 bis 15 UHR
          </span>
          <button onClick={handleCloseModal} className="bg-red p-1">
            <Image src={Close} width={22} alt="close-popup" />
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default OpenHouse;
