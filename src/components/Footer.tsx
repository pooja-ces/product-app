import React from 'react';

const Footer: React.FC = () => {
    return (
        <div
            className="mt-10 px-20 fixed bottom-0 w-full border-t py-3 bg-white"
            role="contentinfo"
            data-testid="footer"
        >
            <div className="flex justify-between items-center">
                <div>
                    <ul className="flex items-center gap-3">
                        <li className="footer-link">About</li>
                        <li className="footer-link">Terms</li>
                        <li className="footer-link">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="footer-link"></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
