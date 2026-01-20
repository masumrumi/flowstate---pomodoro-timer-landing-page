import React from 'react';
import { ArrowLeft, Mail, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans selection:bg-[#FF5733] selection:text-white">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-black mb-8">Support</h1>
                <p className="text-gray-400 mb-12 text-xl">We're here to help you stay in flow.</p>

                <div className="grid gap-6">
                    <div className="p-8 rounded-3xl glass border border-white/10 hover:border-[#FF5733]/50 transition-colors group">
                        <div className="w-12 h-12 bg-[#FF5733]/10 rounded-xl flex items-center justify-center text-[#FF5733] mb-6">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Email Us</h3>
                        <p className="text-gray-400 mb-6">For general inquiries and bug reports.</p>
                        <a href="mailto:support@flowstate.app" className="text-[#FF5733] font-bold hover:underline">support@flowstate.app</a>
                    </div>

                    <div className="p-8 rounded-3xl glass border border-white/10 hover:border-blue-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                            <HelpCircle size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">FAQ</h3>
                        <p className="text-gray-400 mb-6">Check our frequently asked questions for quick answers.</p>
                        <a href="#" className="text-blue-500 font-bold hover:underline">Visit Help Center</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
