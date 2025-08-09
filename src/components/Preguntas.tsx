import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  i: number;
  title: string;
  content: string;
  expanded: false | number;
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>;
}

//Preguntas individuales
const AccordionItem: React.FC<AccordionItemProps> = ({ i, title, content, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <div className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
      {/* Header */}
      <motion.header
        className="px-4 py-2 bg-blue-600 text-white cursor-pointer select-none"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#2563eb" }} // Azul -> Rosa
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {title}
      </motion.header>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <motion.div
              variants={{ collapsed: { scale: 0.95 }, open: { scale: 1 } }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-gray-50 text-gray-700"
            >
              {content}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};


//Lista de preguntas
export default function AccordionExample() {
  const [expanded, setExpanded] = useState<false | number>(false);

  const items = [
    {
      title: "Inglés",
      content:
        "Evalúa las habilidades de lectura, escritura, comprensión auditiva y expresión oral en inglés.",
    },
    {
      title: "Matemáticas",
      content:
        "Incluye álgebra, geometría, trigonometría, probabilidad y estadística.",
    },
    {
      title: "Ciencias",
      content:
        "Comprende física, química, biología y ciencias de la tierra.",
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-10">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          i={i}
          title={item.title}
          content={item.content}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
}
