"use client"
import React, { useState } from "react";
import { categoryOptions } from "../constants";
import Select from "./Select";

const Filters = ({
    onFilter,
    onSelectCategory
}: {
    onFilter: (query: string) => void;
    onSelectCategory: (query: string) => void;
}) => {

    const [category, setCategory] = useState<string>("");
    const [sort, setSort] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        onFilter(event.target.value);
    };

    const handleFilterProduct = (value: string) => {
        setCategory(value)
        onSelectCategory(value)
    }
    const handleSortProducts = (value: string) => {
        setSort(value)
    };
    return (
        <div className="mb-4 mx-20 mt-4 flex">
            <input
                className="border p-2 w-[500px] rounded"
                placeholder="Search Products.."
                value={searchTerm}
                onChange={handleChange}
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
        </div>
    );
};

export default Filters;
