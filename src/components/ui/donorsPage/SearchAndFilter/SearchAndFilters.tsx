/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import FormControl from "@mui/material/FormControl";
import { availabilities, bloodGroups } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import {
  SelectChangeEvent,
  Select,
  Box,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";
import { useDebounced } from "@/redux/hooks";
import { ChangeEvent, useEffect, useState } from "react";

export default function SearchAndFilters() {
  const [bloodType, setBloodType] = useState("");
  const [availability, setAvailability] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  // const query: Record<string, any> = { bloodType, availability };

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  useEffect(() => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );

    if (bloodType) {
      currentParams.set("bloodType", bloodType);
    } else {
      currentParams.delete("bloodType");
    }

    if (availability) {
      currentParams.set("availability", availability);
    } else {
      currentParams.delete("availability");
    }

    if (!!debouncedTerm) {
      currentParams.set("searchTerm", debouncedTerm);
    } else {
      currentParams.delete("searchTerm");
    }

    router.push(`/donors?${currentParams.toString()}`);
  }, [bloodType, availability, debouncedTerm]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleBloodChange = (event: SelectChangeEvent) => {
    setBloodType(event.target.value);
  };

  const handleAvailabilityChange = (event: SelectChangeEvent) => {
    setAvailability(event.target.value);
  };

  return (
    <Stack direction="row" alignItems="center">
      <Box>
        <TextField
          size="small"
          placeholder="Search donor"
          onChange={handleSearch}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
        />
      </Box>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          size="small"
          value={bloodType}
          onChange={handleBloodChange}
          displayEmpty
          sx={{ borderRadius: "20px" }}
        >
          <MenuItem value="">Blood Group</MenuItem>
          {bloodGroups?.map((bg) => (
            <MenuItem key={bg} value={bg}>
              {bg}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, mx: 0, minWidth: 120 }}>
        <Select
          size="small"
          value={availability}
          onChange={handleAvailabilityChange}
          displayEmpty
          sx={{ borderRadius: "20px" }}
        >
          <MenuItem value="">Availability</MenuItem>
          {availabilities?.map((bg) => (
            <MenuItem key={bg} value={bg}>
              {bg.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
