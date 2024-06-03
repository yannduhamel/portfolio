import { cn } from "@/lib/Utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function WordRotate({
  words = [
    "JavaScript",
    "React",
    "CSS & TailwindCSS",
    "Node.js",
    "Express.js",
    "SQL & MySQL",
    "Figma",
  ],
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2 text-3xl font-bold text-saffron">
      <AnimatePresence mode="wait">
        <motion.p key={words[index]} className={cn(className)} {...framerProps}>
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

WordRotate.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number,
  framerProps: PropTypes.object,
  className: PropTypes.string,
};

export default WordRotate;
