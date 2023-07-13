'use client';

/* Based on ShadCN Combobox component (https://ui.shadcn.com/docs/components/combobox) */

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useRouter } from 'next/navigation';

interface ServicesProp {
  services: string[];
  selected: string | null;
}

export default function DropdownMenu({
  services,
  selected,
}: ServicesProp): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selected ?? '');
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? services.find((microservice) => microservice === value)
            : 'Microservice...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search microservice..." />
          <CommandEmpty>No microservice found.</CommandEmpty>
          <CommandGroup>
            {services.map((microservice) => (
              <CommandItem
                key={microservice}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                  router.push(`/metrics/${microservice}`);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === microservice ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {microservice}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
