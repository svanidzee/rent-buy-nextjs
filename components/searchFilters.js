import { useState } from "react";
import { Flex, Select, Box } from "@chakra-ui/react";

import { filterData, getFilterValues } from "../utils/filterData";

export default function SearchFilters() {
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    // pudate url after filter
    router.push({ pathname: path, query: query });
  };

  return (
    <Flex bg="gray.100" p="4" justify="center" wrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}
