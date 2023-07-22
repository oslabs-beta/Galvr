/* eslint-disable no-nested-ternary */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { ParsedMetric } from '../lib/metricTypes';

export default function TableSingleDataPoint({
  metricObjArr,
}: {
  metricObjArr: ParsedMetric[];
}): JSX.Element {
  const tableRow = metricObjArr.map(
    (metricObj, idx): JSX.Element => (
      <TableRow key={idx} className={idx % 2 ? '' : 'bg-gray-100'}>
        <TableCell>{`${metricObj.description}. ${
          metricObj.unit ? `(Unit: ${metricObj.unit})` : ''
        }`}</TableCell>
        <TableCell className="text-right">
          {metricObj.sum
            ? metricObj.sum.dataPoints[0].asDouble === null
              ? 'null'
              : metricObj.sum.dataPoints[0].asDouble?.toLocaleString() ??
                parseInt(
                  metricObj.sum.dataPoints[0].asInt!,
                  10
                ).toLocaleString()
            : metricObj.gauge!.dataPoints[0].asDouble === null
            ? 'null'
            : metricObj.gauge!.dataPoints[0].asDouble?.toLocaleString() ??
              parseInt(
                metricObj.gauge!.dataPoints[0].asInt!,
                10
              ).toLocaleString()}
        </TableCell>
      </TableRow>
    )
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableRow}</TableBody>
    </Table>
  );
}
