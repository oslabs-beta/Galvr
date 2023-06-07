// import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import Graph from '@/components/Graph.tsx';

export default function Home(): JSX.Element {
  return (
    <section className="w-full flex-center flex-col" class ="bg-sky-500/100">
      <h1 className="head_text text-center">
        Galvr
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">
          Performance Metrics & Visualization
        </span>
      </h1>
      <p className="desc text-center">Galvr creates and collect telemetry data from your services and translates that into a valuable visualization dashboard in order to help users swiftly analyze performance and identify latency.  </p>

      <Graph />
    </section>
  );
}


// page: Name, Title, Description 
// content: 3-4 links to histogram other graphs
// header and footer