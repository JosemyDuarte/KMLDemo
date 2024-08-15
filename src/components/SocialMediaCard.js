export default function SocialMediaCard() {
    return (
        <div className="max-w-sm mx-auto border border-gray-300 rounded-lg bg-white font-sans">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span className="font-semibold text-sm text-gray-700">Beauty Blogger</span>
                </div>
                <div className="text-xl text-gray-600 cursor-pointer">...</div>
            </div>

            {/* Post Content */}
            <div className="bg-gray-100 text-center text-lg p-16">
                Gorgeous lashes
            </div>

            {/* Post Footer */}
            <div className="p-3">
                <p className="text-sm text-gray-700">
                    Loving my new lashes from Kiss My Lash!{' '}
                    <span className="text-blue-800">#lashgoals</span>
                </p>
                <div className="mt-2 text-xl">❤️</div>
            </div>
        </div>
    );
}
