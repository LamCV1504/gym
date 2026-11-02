"use client";

import { useState, useEffect, useRef } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";
import { useDebounce } from "@/hooks/use-debounce";

type Option = {
  label: string;
  value: string;
};

type FetchResult = {
  data: Option[];
  hasMore: boolean;
};

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  fetchOptions: (params: {
    query: string;
    page: number;
  }) => Promise<FetchResult>;
};

export function FormComboboxInfinite<T extends FieldValues>({
  name,
  label,
  fetchOptions,
}: Props<T>) {
  const { control } = useFormContext<T>();

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const [options, setOptions] = useState<Option[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      const res = await fetchOptions({
        query: debouncedQuery,
        page,
      });

      if (!ignore) {
        setOptions((prev) => (page === 1 ? res.data : [...prev, ...res.data]));
        setHasMore(res.hasMore);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [debouncedQuery, page, fetchOptions]);

  // fetch data
  useEffect(() => {
    let ignore = false;

    async function load() {
      const res = await fetchOptions({
        query: debouncedQuery,
        page,
      });

      if (!ignore) {
        setOptions((prev) => (page === 1 ? res.data : [...prev, ...res.data]));
        setHasMore(res.hasMore);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [debouncedQuery, page, fetchOptions]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((p) => p + 1);
      }
    });

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Combobox value={field.value} onValueChange={field.onChange}>
              <ComboboxInput
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
              />

              <ComboboxContent>
                <ComboboxList>
                  {options.map((opt) => (
                    <ComboboxItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </ComboboxItem>
                  ))}

                  {hasMore && (
                    <div ref={loaderRef} className="p-2 text-sm">
                      Loading more...
                    </div>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
