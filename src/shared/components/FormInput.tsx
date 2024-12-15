import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { HTMLInputTypeAttribute } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { cn } from "@/shared/utils/cn";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  required?: boolean;
};

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
  required = false,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("form-item", className)}>
          <FormLabel className="form-label">
            {label} {required && <span className="text-red-500 font-extrabold">*</span>}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={name}
                className="input-class"
                type={type}
                placeholder={placeholder || `Enter your ${label}`}
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-1 ml-1 text-12 text-red-500" />
          </div>
        </FormItem>
      )}
    />
  );
};
