"use client";
import React from "react";
import { ProgramsProps } from "@src/components/cale/ProgramGrid";

interface ProgramInfoProps {
  filteredPrograms: ProgramsProps["programsData"];
  resetFilters: () => void; 
}

const ProgramInfo: React.FC<ProgramInfoProps> = ({ filteredPrograms, resetFilters }) => {
  
  return (
    <>
      {filteredPrograms.length === 0 ? (
        <p>No programs match the selected filters.</p>
      ) : (
        <div className="results-container grid grid-cols-1 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="program-item p-4 border rounded-md shadow-lg bg-white">
              <h2 className="text-xl font-bold mb-2">{program.name}</h2>
              <p><strong>País:</strong> {program.country}</p>
              <p><strong>Institución:</strong> {program.institution}</p>
              <p><strong>Majors/Especialización:</strong> {program.specialization || "N/A"}</p>
              <p><strong>Ubicación:</strong> {program.location}</p>
              <p><strong>Fechas de inicio:</strong> {program.startDates || "N/A"}</p>
              <p><strong>Duración:</strong> {program.duration}</p>
              <p><strong>Costo por Año (USD):</strong> {program.costPerYearUSD || "N/A"}</p>
              <p><strong>Moneda:</strong> {program.currency || "N/A"}</p>
              <p><strong>Becas:</strong> {program.scholarships ? "Sí" : "No"}</p>
              <p><strong>Link:</strong> {program.link ? <a href={program.link} target="_blank" rel="noopener noreferrer">Ver programa</a> : "N/A"}</p>
              <p><strong>Notas:</strong> {program.notes || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
      {/* Reset Filters Button */}
      <button onClick={resetFilters} className="reset-button">
        Reset Filters
      </button>

    </>
  );
};

export default ProgramInfo;
