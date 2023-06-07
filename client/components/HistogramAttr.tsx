import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HistogramAttr({
  attrArrays,
}: {
  attrArrays: any[][];
}): JSX.Element {
  const attrTables = attrArrays.map((attrArr, i) => (
    <div key={i}>
      <CardHeader className="space-y-0 p-4 pb-2">
        <CardTitle>{`Datapoint ${i + 1}`}</CardTitle>
      </CardHeader>
      <CardContent>
        {attrArr.map((attrObj) => (
          <div className="flex items-center" key={attrObj.key}>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{attrObj.key}</p>
            </div>
            <div className="ml-auto font-medium">
              {Object.values(attrObj.value as string)[0]}
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  ));

  return <div className="space-y-2">{attrTables}</div>;
}
