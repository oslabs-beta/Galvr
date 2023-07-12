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

const microservices = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export default function DropdownMenu(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? microservices.find((microservice) => microservice.value === value)
                ?.label
            : 'Microservice...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search microservice..." />
          <CommandEmpty>No microservice found.</CommandEmpty>
          <CommandGroup>
            {microservices.map((microservice) => (
              <CommandItem
                key={microservice.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                  router.push(`/${microservice.value}`);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === microservice.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {microservice.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
