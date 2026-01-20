import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans selection:bg-[#FF5733] selection:text-white">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-black mb-8">Privacy Policy</h1>
                <p className="text-gray-400 mb-12">Last updated: January 19, 2026</p>

                <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            FlowState ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by FlowState.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Data Collection</h2>
                        <p>
                            <strong>We do not collect any personal data.</strong> FlowState is designed to be privacy-first. All your timer data, task history, and settings are stored locally on your device or in your personal iCloud account. We do not have access to your data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
                        <p>
                            We may use third-party services for analytics to help us improve the app (e.g., Apple's App Analytics). These services collect anonymous, aggregate data that cannot be used to identify you personally.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at masumrumi1@gmail.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
