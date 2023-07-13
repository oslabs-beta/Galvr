import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metrics',
  description: 'Metric data for microservices',
};

export default async function MetricsPage(): Promise<JSX.Element> {
  /* Render the border */
  return (
    <>
      <hr className="border-gray-300 my-6" />
    </>
  );
}