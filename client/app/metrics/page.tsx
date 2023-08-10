import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metrics',
  description: 'Metric data for microservices',
};

export default async function MetricsPage(): Promise<JSX.Element> {
  /* Render the border, when no service is selected. */
  return (
    <>
      <hr className="border-gray-300 my-6" />
    </>
  );
}
