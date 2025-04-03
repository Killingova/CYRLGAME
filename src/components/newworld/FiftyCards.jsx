// src/components/newworld/FiftyCards.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { groups, finalInfos } from "../../data/newworld/newworldData.js";
import TableGroup from "./TableGroup";
import CardDetail from "./CardDetail";

function FiftyCards() {
  // selectedNr = null => Keine Detailansicht, Tabellen werden angezeigt
  // selectedNr = <Zahl> => Detailansicht der entsprechenden Karte
  const [selectedNr, setSelectedNr] = useState(null);

  const handleSelectCard = (nr) => {
    setSelectedNr(nr);
  };

  const handleCloseDetail = () => {
    setSelectedNr(null);
  };

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

        <AnimatePresence mode="wait">
          {selectedNr ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <CardDetail nr={selectedNr} onClose={handleCloseDetail} />
            </motion.div>
          ) : (
            <motion.div
              key="tables"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {groups.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <TableGroup
                    title={group.title}
                    rows={group.rows}
                    onSelectCard={handleSelectCard}
                  />
                </motion.div>
              ))}

              <motion.h2
                className="text-4xl md:text-5xl font-bold mt-12 mb-6 text-[#BF4A06] drop-shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: groups.length * 0.15 + 0.2,
                }}
              >
                ✨ Zahlenlogik der 50 Karten
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-center max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: groups.length * 0.15 + 0.4,
                }}
              >
                {finalInfos}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default FiftyCards;
