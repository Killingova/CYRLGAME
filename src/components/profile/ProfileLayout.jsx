import React from "react";

export default function ProfileLayout({ title, children }) {
  return (
    <section className="max-w-lg mx-auto mt-12 p-6 bg-[#DCDEF2] rounded-xl shadow-lg border border-[#A67C7C]">
      <h2 className="text-2xl font-bold text-[#260101] mb-6 text-center">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
