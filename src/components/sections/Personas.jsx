import PersonaSection from "@/components/sections/PersonaSection";
import { PERSONAS, isValidPersona, validatePersonas } from "@/data/personas";

/** Renders every valid persona in order, separated by dividers. */
export default function Personas() {
  if (!validatePersonas()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading persona content</p>
      </div>
    );
  }

  const personas = Object.entries(PERSONAS).filter(
    ([name, persona]) => name.trim().length > 0 && isValidPersona(persona)
  );

  if (personas.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No persona data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {personas.map(([name, persona], index) => (
        <PersonaSection
          key={name}
          name={name}
          persona={persona}
          showDivider={index < personas.length - 1}
        />
      ))}
    </div>
  );
}
