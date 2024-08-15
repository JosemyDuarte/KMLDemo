import SocialMediaCard from "./SocialMediaCard";

export default function SocialMediaBuzz() {
    return (
        <div className="p-4 border-t">
            <h2 className="text-lg font-semibold text-gray-800">Social Media Buzz</h2>
            <div className="mt-2 space-y-2 overflow-x-auto">
                <div className="flex space-x-2">
                    <SocialMediaCard />
                    <SocialMediaCard />
                    <SocialMediaCard />
                    {/* Add more SocialMediaCard components here */}
                </div>
            </div>
        </div>
    );
}
