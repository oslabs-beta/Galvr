import DropdownMenu from '@/components/DropdownMenu';

export default function MetricLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="flex-col flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Metrics</h2>
          </div>
          <DropdownMenu />
          {children}
        </div>
      </div>
    </>
  );
}
