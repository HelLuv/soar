"use client";

import { format as formatter } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  dateFormat?: string;
};

export const FormDatePicker = <T extends FieldValues>({
  control,
  label,
  name,
  placeholder,
  required,
  className,
  dateFormat = "d MMMM yyyy",
}: Props<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={cn("form-item", className)}>
        <FormLabel className="form-label">
          {label} {required && <span className="text-red-500 font-extrabold">*</span>}
        </FormLabel>

        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn("input-class", !field.value && "text-muted-foreground")}
              >
                {field.value ? (
                  formatter(field.value, dateFormat)
                ) : (
                  <span>{placeholder || `Pick a ${label}`}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0 text-black bg-white/90" align="center">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
              initialFocus
              defaultMonth={field.value}
            />
          </PopoverContent>
        </Popover>
        <FormMessage className="mt-1 ml-1 text-12 text-red-500" />
      </FormItem>
    )}
  />
);
