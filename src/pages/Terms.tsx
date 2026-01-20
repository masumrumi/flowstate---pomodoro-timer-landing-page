import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans selection:bg-[#FF5733] selection:text-white">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-black mb-8">Terms of Service</h1>
                <p className="text-gray-400 mb-12">Last updated: January 19, 2026</p>

                <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the FlowState application, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. License</h2>
                        <p>
                            FlowState grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Application strictly in accordance with the terms of this Agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Subscriptions</h2>
                        <p>
                            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis (such as monthly or annually).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall FlowState be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
