import React from 'react';

const Footer = () => {
    return (
        <footer>
            <hr className="my-8 border-t-2 border-gray-200" />
            <nav className="flex justify-center space-x-4">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
            </nav>
            <p className="mt-8 text-sm text-gray-500 text-center">© {new Date().getFullYear()} KML Studio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
