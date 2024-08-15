"use client";

import React, { useRef, useState } from "react";
import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProductsCarrousel() {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // The *2 makes the scroll faster
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Featured Products</h2>
            <p className="text-sm text-gray-500">Get the latest lash styles</p>

            <div
                ref={carouselRef}
                className="flex overflow-x-auto space-x-4 mt-4 cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
                <FeaturedProductCard />
                <FeaturedProductCard />
                <FeaturedProductCard />
                <FeaturedProductCard />
                <FeaturedProductCard />
                {/* Add more products as needed */}
            </div>
        </div>
    );
}
