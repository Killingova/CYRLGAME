import React from "react";
import { motion } from "framer-motion";
import TableGroup from "./TableGroup";
import { groups, finalInfos } from "../../data/newworld/newworldData.js";

function FiftyCards() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-[#F2921D] to-[#F2CA50] text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Hauptüberschrift */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-[#1F4C73] drop-shadow-md text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Weisheitslehre für unsere Zeit 
        </motion.h2>

        {/* Tabellen-Gruppen */}
        <div className="space-y-10">
          {groups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <TableGroup title={group.title} rows={group.rows} />
            </motion.div>
          ))}
        </div>

        {/* Abschluss */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mt-12 mb-6 text-[#BF4A06] drop-shadow-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: groups.length * 0.15 + 0.2 }}
        >
          ✨ Zahlenlogik der 50 Karten
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: groups.length * 0.15 + 0.4 }}
        >
          {finalInfos}
        </motion.p>
      </div>
    </section>
  );
}

export default FiftyCards;
