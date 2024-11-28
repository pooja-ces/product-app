"use client"
import React, { useState } from "react";
import { categoryOptions, sortingOption } from "@/constants";
import Select from "./Select";

const Filters = ({
    onFilter,
    onSelectCategory,
    onSort
}: {
    onFilter: (query: string) => void;
    onSelectCategory: (query: string) => void;
    onSort: (query: string) => void;
}) => {

    const [category, setCategory] = useState<string>("");
    const [sort, setSort] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilter(event.target.value);
    };

    const handleFilterProduct = (value: string) => {
        setCategory(value)
        onSelectCategory(value)
    }
    const handleSortProducts = (value: string) => {
        setSort(value)
        onSort(value)
    };
    return (
        <div className="mb-4 mx-20 mt-4 flex">
            <input
                type="text"
                placeholder="Search Products.."
                onChange={handleChange}
                className="border p-2 w-[500px] rounded"
            />
            <Select
                options={categoryOptions.map((item) => ({
                    value: item.value,
                    name: item.value,
                }))}
                onChange={handleFilterProduct}
                placeholder="Select Category"
                value={category}
            />
            <Select
                options={sortingOption}
                onChange={handleSortProducts}
                placeholder="Sort By"
                value={sort}
            />
        </div>
    );
};

export default Filters;
