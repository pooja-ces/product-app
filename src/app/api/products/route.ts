import { NextResponse } from 'next/server';

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 29.99,
        category: "Electronics",
        description: "A sleek and ergonomic wireless mouse with adjustable DPI settings."
    },
    {
        id: 2,
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        description: "Non-slip yoga mat made of eco-friendly materials for all types of exercises."
    },
    {
        id: 3,
        name: "Coffee Maker",
        price: 89.99,
        category: "Home Appliances",
        description: "Compact coffee maker with multiple brew settings and auto-clean functionality."
    },
    {
        id: 4,
        name: "Gaming Chair",
        price: 199.99,
        category: "Furniture",
        description: "High-back gaming chair with adjustable lumbar support and 360-degree swivel."
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 49.99,
        category: "Electronics",
        description: "Portable Bluetooth speaker with deep bass and water-resistant design."
    },
    {
        id: 6,
        name: "Running Shoes",
        price: 74.99,
        category: "Footwear",
        description: "Lightweight and durable running shoes with excellent cushioning and grip."
    },
    {
        id: 7,
        name: "Smartphone Stand",
        price: 14.99,
        category: "Accessories",
        description: "Adjustable smartphone stand with anti-slip base for hands-free viewing."
    },
    {
        id: 8,
        name: "Electric Kettle",
        price: 39.99,
        category: "Home Appliances",
        description: "Fast-boiling electric kettle with temperature control and safety shut-off."
    },
    {
        id: 9,
        name: "Backpack",
        price: 59.99,
        category: "Bags",
        description: "Waterproof and spacious backpack with multiple compartments and padded straps."
    },
    {
        id: 10,
        name: "Desk Organizer",
        price: 24.99,
        category: "Office Supplies",
        description: "Stylish desk organizer with multiple slots for files, pens, and gadgets."
    },
    {
        id: 11,
        name: "Noise Cancelling Headphones",
        price: 129.99,
        category: "Electronics",
        description: "Over-ear headphones with advanced noise-cancellation and superior sound quality."
    },
    {
        id: 12,
        name: "Digital Watch",
        price: 49.99,
        category: "Accessories",
        description: "Water-resistant digital watch with multiple alarm and timer settings."
    },
    {
        id: 13,
        name: "Camping Tent",
        price: 129.99,
        category: "Outdoor Gear",
        description: "Lightweight and durable tent suitable for up to 4 people, easy to set up."
    },
    {
        id: 14,
        name: "Portable Charger",
        price: 29.99,
        category: "Electronics",
        description: "High-capacity portable charger with dual USB outputs for fast charging."
    },
    {
        id: 15,
        name: "LED Desk Lamp",
        price: 34.99,
        category: "Home Appliances",
        description: "Adjustable LED desk lamp with touch controls and multiple brightness levels."
    },
    {
        id: 16,
        name: "Leather Wallet",
        price: 44.99,
        category: "Accessories",
        description: "Genuine leather wallet with RFID blocking and multiple card slots."
    },
    {
        id: 17,
        name: "Air Purifier",
        price: 149.99,
        category: "Home Appliances",
        description: "Compact air purifier with HEPA filter for clean and fresh air."
    },
    {
        id: 18,
        name: "Cookware Set",
        price: 99.99,
        category: "Kitchen",
        description: "Non-stick cookware set with pots, pans, and utensils for all your cooking needs."
    },
    {
        id: 19,
        name: "Mountain Bike",
        price: 599.99,
        category: "Sports",
        description: "Durable mountain bike with 21-speed gears and shock-absorbing suspension."
    },
    {
        id: 20,
        name: "Electric Toothbrush",
        price: 69.99,
        category: "Personal Care",
        description: "Rechargeable electric toothbrush with multiple brushing modes and a timer."
    },
    {
        id: 21,
        name: "Wireless Earbuds",
        price: 89.99,
        category: "Electronics",
        description: "Compact wireless earbuds with long battery life and crystal-clear sound."
    },
    {
        id: 22,
        name: "Standing Desk",
        price: 399.99,
        category: "Furniture",
        description: "Height-adjustable standing desk with spacious tabletop and sturdy frame."
    },
    {
        id: 23,
        name: "Smart Thermostat",
        price: 249.99,
        category: "Home Automation",
        description: "Energy-efficient smart thermostat with remote control and scheduling features."
    },
    {
        id: 24,
        name: "Photo Frame",
        price: 19.99,
        category: "Home Decor",
        description: "Elegant wooden photo frame suitable for 8x10 photos."
    },
    {
        id: 25,
        name: "Fitness Tracker",
        price: 79.99,
        category: "Fitness",
        description: "Wearable fitness tracker with heart rate monitoring and step counter."
    },
    {
        id: 26,
        name: "Foam Roller",
        price: 29.99,
        category: "Fitness",
        description: "High-density foam roller for muscle recovery and physical therapy."
    },
    {
        id: 27,
        name: "Kitchen Knife Set",
        price: 149.99,
        category: "Kitchen",
        description: "Professional kitchen knife set with stainless steel blades and ergonomic handles."
    },
    {
        id: 28,
        name: "Electric Scooter",
        price: 899.99,
        category: "Outdoor Gear",
        description: "Lightweight electric scooter with long-range battery and foldable design."
    },
    {
        id: 29,
        name: "Wall Clock",
        price: 34.99,
        category: "Home Decor",
        description: "Minimalist wall clock with a silent sweep mechanism and modern design."
    },
    {
        id: 30,
        name: "Pillow Set",
        price: 49.99,
        category: "Home Decor",
        description: "Set of two hypoallergenic pillows with breathable and soft covers."
    }

];

export async function GET() {
    return NextResponse.json(products);
}
