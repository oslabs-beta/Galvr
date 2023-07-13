import DropdownMenu from '@/components/ui/dropdownmenu';
import { servicesEndpoint } from '../../k8s/k8sUrls';

/*
  Mock data (demoServices) for testing locally. 
*/
import demoServices from '../../test/demoServices';

async function getServices(): Promise<string[]> {
  if (process.env.NODE_ENV === 'development') {
    return demoServices;
  }

  try {
    const res = await fetch(servicesEndpoint, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const servicesArr: string[] = await res.json();
    // console.log(data)
    return servicesArr;
  } catch (err) {
    console.log(
      `Error encounted when fetching metrics from metricEndPoint: ${err}`
    );
    return [];
  }
}

export default async function MetricLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    servicename: string | null;
  };
}): Promise<JSX.Element> {
  const services: string[] = await getServices();

  return (
    <>
      <div className="flex-col flex w-full">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Metrics</h2>
          </div>
          <DropdownMenu services={services} selected={params.servicename} />
          {children}
        </div>
      </div>
    </>
  );
}
