import TipCard from "./TipCard";
export default function ExclusiveLashTips() {
    return (
        <div className="p-4 border-t">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">Exclusive Lash Tips</h2>
                <button className="text-blue-500 border border-black px-2 py-1 rounded text-sm">View all</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="mt-2 space-y-2">
                    <TipCard />
                    <TipCard />
                    <TipCard />
                </div>
            </div>
        </div>
    );
}
