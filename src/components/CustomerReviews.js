export default function CustomerReviews() {
    return (
        <div className="p-4 border-t">
            <h2 className="text-lg font-semibold text-gray-800">Customer Reviews</h2>
            <p className="text-sm text-gray-500">Read what our customers are saying</p>
            <div className="mt-2 space-y-2">
                <div className="flex items-center">
                    <p className="font-semibold">Sarah</p>
                    <div className="ml-auto text-yellow-400">★★★★★</div>
                </div>
                <p className="text-gray-500">Absolutely love my new lashes!</p>

                <div className="flex items-center">
                    <p className="font-semibold">Emma</p>
                    <div className="ml-auto text-yellow-400">★★★★</div>
                </div>
                <p className="text-gray-500">Great quality product!</p>
            </div>
        </div>
    );
}
