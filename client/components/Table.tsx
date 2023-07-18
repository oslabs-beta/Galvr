import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { ParsedNumberDataPoint } from '../lib/metricTypes';

export default function TableDemo({
  description,
  unit,
  dataPointsArr,
}: {
  description: string;
  unit: string;
  dataPointsArr: ParsedNumberDataPoint[];
}): JSX.Element {
  const attributes = Object.keys(dataPointsArr[0].attributes);
  const headerRow = attributes.map(
    (attribute): JSX.Element => (
      <TableHead key={attribute}>{attribute}</TableHead>
    )
  );

  const tableRow = dataPointsArr.map(
    (dataPoint, idx): JSX.Element => (
      <TableRow key={idx}>
        {attributes.map(
          (attr): JSX.Element => (
            <TableCell key={attr}>{dataPoint.attributes[attr]}</TableCell>
          )
        )}
        <TableCell className="text-right">
          {dataPoint.asDouble?.toLocaleString() ??
            parseInt(dataPoint.asInt!, 10).toLocaleString()}
        </TableCell>
      </TableRow>
    )
  );

  return (
    <Table>
      <TableCaption className="font-bold text-stone-600">
        {`${description}.`} <br /> {`${unit ? `Unit: ${unit}` : ''}`}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {headerRow}
          <TableHead className="text-right">data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableRow}</TableBody>
    </Table>
  );
}
