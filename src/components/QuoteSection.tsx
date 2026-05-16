import { quotes } from "@/data/quote";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuoteSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = quotes[index];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:ital@0;1&display=swap');`}</style>
      {/* Separator */}
      <div className="flex items-center justify-center gap-3 px-10">
        <span className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground text-base leading-none translate-y-">
          &#9672;
        </span>
        <span className="flex-1 h-px bg-border" />
      </div>

      <section className="flex pt-16 pb-10 items-center justify-center px-6">
        {/* Fixed height container prevents layout shift between quotes of different lengths */}
        <div className="w-full max-w-xl min-h-[7rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full pb-6"
            >
              <p
                className="text-muted-foreground italic text-base md:text-lg text-center"
                style={{ fontFamily: "'Lora', serif" }}
              >
                "{current.text}"
              </p>
              {current.author && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-0 right-0 text-muted-foreground italic text-base"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  — {current.author}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;
