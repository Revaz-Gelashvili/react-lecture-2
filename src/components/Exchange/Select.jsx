import React from "react";
import { Select } from "antd";

export default function SelectCurrency() {
  return (
    <Select
      showSearch
      style={{ height: 60 }}
      className="w-full"
      placeholder="Select Base Curncy"
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={[
        {
          value: "1",
          label: "Not Identified",
        },
        {
          value: "2",
          label: "Closed",
        },
        {
          value: "3",
          label: "Communicated",
        },
        {
          value: "4",
          label: "Identified",
        },
        {
          value: "5",
          label: "Resolved",
        },
        {
          value: "6",
          label: "Cancelled",
        },
      ]}
    />
  );
}
