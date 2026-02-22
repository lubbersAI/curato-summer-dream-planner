import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

interface DateRangeSelectorProps {
  dateRange: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

export default function DateRangeSelector({ dateRange, onChange }: DateRangeSelectorProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="glass-input w-full py-3 px-4 flex items-center gap-3 text-sm glow-hover">
          <CalendarIcon className="w-4 h-4 text-foreground/70" />
          {dateRange?.from ? (
            <span>
              {format(dateRange.from, "MMM d")}
              {dateRange.to ? ` — ${format(dateRange.to, "MMM d, yyyy")}` : ""}
            </span>
          ) : (
            <span className="text-foreground/60">Select dates</span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-0 bg-transparent" align="center">
        <div className="glass p-3">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={onChange}
            numberOfMonths={1}
            disabled={(date) => date < new Date()}
            className="pointer-events-auto text-foreground [&_.rdp-day_selected]:bg-coral [&_.rdp-day_selected]:text-foreground"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
