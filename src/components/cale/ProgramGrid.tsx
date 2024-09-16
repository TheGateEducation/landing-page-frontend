"use client"
import React, { useState } from "react";
//truly this can be done better, but I'm not sure how to do it

interface ProgramsProps {
  programsData: {
    id: number;
    area: string;
    name: string;
    specialization: string;
    country: string;
    institution: string;
    location: string;
    startDates: string;
    duration: string;
    costPerYearUSD: string;
    costPerYearCurrency: string;
    currency: string;
    scholarships: string;
    link: string;
    notes: string;
    images: {
      area: string;
      country: string;
      institution: string;
    };
  }[];
}

const ProgramFilter: React.FC<ProgramsProps> = ({ programsData }) => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");

  const groupProgramsByarea = (programs: ProgramsProps['programsData']) => {
    const grouped: Record<string, ProgramsProps['programsData']> = {};

    programs.forEach(program => {
      if (!grouped[program.area]) {
        grouped[program.area] = [];
      }
      grouped[program.area].push(program);
    });

    return grouped;
  };

  const groupedPrograms = groupProgramsByarea(programsData);

  const filteredPrograms = Object.values(groupedPrograms).flat().filter(program =>
    (!selectedProgram || program.area === selectedProgram) &&
    (!selectedSpecialization || program.specialization === selectedSpecialization) &&
    (!selectedCountry || program.country === selectedCountry) &&
    (!selectedInstitution || program.institution === selectedInstitution)
  );

  // Obtener especializaciones basadas en argumentos seleccionados
  const specializations = Array.from(new Set(filteredPrograms.map(program => program.specialization)));

  // Obtener países basados en el programa y especialización seleccionados
  const countries = Array.from(new Set(filteredPrograms.map(program => program.country)));

  // Obtener instituciones basadas en el programa, especialización y país seleccionados
  const institutions = Array.from(new Set(filteredPrograms.map(program => program.institution)));

  //function to reset filters and do a new research
  const resetFilters = () => {
    setSelectedProgram("");
    setSelectedSpecialization("");
    setSelectedCountry("");
    setSelectedInstitution("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 p-20">
        {/* Program */}
        {!selectedProgram && !selectedSpecialization && !selectedCountry && !selectedInstitution && (
          <>
            {Object.keys(groupedPrograms).map((programarea) => {
              const programData = groupedPrograms[programarea][0];
              const backgroundImage = programData.images.area;

              return (
                <div
                  key={programarea}
                  className="grid-item"
                  onClick={() => setSelectedProgram(programarea)}
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "red",
                    padding: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">{programarea}</h1>
                </div>
              );
            })}
          </>
        )}


        {/* Specialization */}
        {selectedProgram && !selectedSpecialization && !selectedCountry && !selectedInstitution && (
          <>
            {specializations.map((specialization, index) => (
              <div
                key={index}
                className="grid-item"
                onClick={() => setSelectedSpecialization(specialization)}
              >
                <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-black">{specialization}</h1>
              </div>
            ))}
          </>
        )}

        {/* Country */}
        {selectedProgram && selectedSpecialization && !selectedCountry && !selectedInstitution && (
          <>
            {countries.map((country, index) => {
              const countryImage = programsData.find(p => p.country === country)?.images.country; // Get the country image
              return (
                <div
                  key={index}
                  className="grid-item"
                  onClick={() => setSelectedCountry(country)}
                  style={{
                    backgroundImage: `url(${countryImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "red",
                    padding: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">{country}</h1>
                </div>
              );
            })}
          </>
        )}

        {/* Institution */}
        {selectedProgram && selectedSpecialization && selectedCountry && !selectedInstitution && (
          <>
            {institutions.map((institution, index) => {
              const institutionImage = programsData.find(p => p.institution === institution)?.images.institution; // Get the institution image
              return (
                <div
                  key={index}
                  className="grid-item"
                  onClick={() => setSelectedInstitution(institution)}
                  style={{
                    backgroundImage: `url(${institutionImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "red",
                    padding: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white">{institution}</h1>
                </div>
              );
            })}
          </>
        )}
      </div>
      {/* + Info or not data found message */}
      {selectedProgram && selectedSpecialization && selectedCountry && selectedInstitution && (
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
        </>
      )}
      {/* reset filters */}
      <button onClick={resetFilters} className="reset-button">
        Reset Filters
      </button>

      <style jsx>{`
        .grid-item {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 300px;
          text-align: center;
        }


        .grid-item:hover {
          transform: scale(1.05);
          transition: all 0.3s ease;
        }

        .details-container {
          margin-top: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .details-card {
          margin-bottom: 20px;
        }

        .details-card h2 {
          margin-top: 0;
        }

        .details-card p {
          margin: 5px 0;
        }

        .details-card a {
          color: #0070f3;
          text-decoration: none;
        }

        .details-card a:hover {
          text-decoration: underline;
        }

        .grid-item:hover {
          transform: scale(1.05);
          transition: all 0.3s ease;
        }

        .reset-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px 0;
        }

        .reset-button:hover {
          background-color: #005bb5;
        }

      `}</style>
    </>
  );
};

export default ProgramFilter;