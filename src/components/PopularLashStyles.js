export default function PopularLashStyles() {
    return (
        <div className="p-4 border-t">
            <h2 className="text-lg font-semibold">Popular Lash Styles</h2>
            <div className="mt-2 space-y-2">
                <div className="flex items-center">
                    <span>🔥</span>
                    <p className="ml-2">Volume Lashes</p>
                    <p className="ml-auto text-sm text-gray-500">For a bold look</p>
                </div>
                <div className="flex items-center">
                    <span>🔥</span>
                    <p className="ml-2">Wispy Lashes</p>
                    <p className="ml-auto text-sm text-gray-500">Soft and fluttery</p>
                </div>
            </div>
        </div>
    );
}
