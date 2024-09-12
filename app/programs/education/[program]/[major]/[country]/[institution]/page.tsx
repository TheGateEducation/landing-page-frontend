import { useRouter } from 'next/router';
import Hero from '@src/components/Hero/Hero';
import { GetStaticProps, GetStaticPaths } from 'next';

export const metadata = {
    title: "Educacion y formacion profesional - The Gate Education",
    description: "Aquí inicia el proceso para irte de intercambio, estudiar en el extranjero o simplemente viajar por el mundo. Contáctanos y te ayudaremos a hacerlo posible.",
    keywords: "viajar por el mundo, educacion internacional, asesoria, acompañamiento, visa, aceptacion",
};

interface ProgramPageProps {
  program: string;
  major: string;
  country: string;
  institution: string;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ program, major, country, institution }) => {
  const router = useRouter();

  // Si la página está en modo fallback (para SSR o SSG con fallback: true)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Hero url='https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/programs.jpg' title={program}/>
        <title>{program} Program - {major} in {country} at {institution}</title>
        <meta name="description" content={`Learn about the ${program} program in ${major}, available in ${country} at ${institution}.`} />
      <div>
        <h1>{program} Program</h1>
        <h2>Major: {major}</h2>
        <h3>Country: {country}</h3>
        <h4>Institution: {institution}</h4>
        {/* Renderiza aquí la información adicional del programa, por ejemplo, descripción, fechas, costos, etc. */}
      </div>
    </>
  );
};

export default ProgramPage;

// Pre-rendering la página con los props de la ruta
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { program, major, country, institution } = params!;

  // Aquí puedes hacer una llamada a una API o base de datos para obtener los detalles del programa
  // Por ejemplo, puedes obtener datos de una API o un archivo local
  const programDetails = {
    program: program as string,
    major: major as string,
    country: country as string,
    institution: institution as string,
  };

  return {
    props: programDetails,
  };
};

// Definiendo las rutas dinámicas
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { program: 'bachelor', major: 'computer-science', country: 'italy', institution: 'university-a' } },
    { params: { program: 'master', major: 'mathematics', country: 'france', institution: 'university-b' } },
    // Agrega más rutas dinámicas según tus datos o una fuente externa
  ];

  return {
    paths,
    fallback: true, // 'true' permite generar nuevas páginas dinámicamente
  };
};
