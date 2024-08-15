export default function CallToAction() {
    return (
        <div className="p-4 border-t text-center">
            <div className="flex flex-col md:flex-row justify-center"> {/* Add justify-center class */}
                <button className="w-full md:w-auto bg-black text-white py-2 rounded-lg mb-2 md:mb-0 md:mr-2 px-4">Book now</button>
                <button className="w-full md:w-auto bg-white text-black py-2 rounded-lg px-4 border-2 border-black">Subscribe for updates</button>
            </div>
        </div>
    );
}
