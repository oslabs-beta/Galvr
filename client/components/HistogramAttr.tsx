import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HistogramAttr({
  attrArrays,
}: {
  attrArrays: any[][];
}): JSX.Element {
  const attrTables = attrArrays.map((attrObj, i) => (
    <div key={i}>
      <CardHeader className="space-y-0 p-4 pb-1">
        <CardTitle>{`Datapoint ${i + 1}`}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 pr-3">
        {Object.keys(attrObj).map((key) => (
          <div className="flex items-center" key={key}>
            <div className="ml-4 space-y-1">
              <p className="text-xs font-medium leading-none">{key}</p>
            </div>
            <div className="ml-auto font-medium">
              <p className="text-xs font-medium leading-none">{attrObj[key]}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  ));

  return <div className="space-y-2">{attrTables}</div>;
}
