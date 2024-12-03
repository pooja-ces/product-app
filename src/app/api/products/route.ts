import { NextResponse } from 'next/server';
import { products } from '../../../constants';

export async function GET(req: Request) {
    try {
        // Get search query from the URL
        const url = new URL(req.url);
        const searchQuery = url.searchParams.get("search")?.toLowerCase() || '';  // Get search term and convert to lowercase

        // Filter products based on the search query
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery)
        );

        return NextResponse.json(filteredProducts);
    } catch (error) {
        console.error('Error occurred while processing the request:', error);
        return NextResponse.json(
            { message: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
}