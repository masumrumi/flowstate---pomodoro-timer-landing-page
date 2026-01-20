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
                        <a href="mailto:masumrumi1@gmail.com" className="text-[#FF5733] font-bold hover:underline">masumrumi1@gmail.com</a>
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-12">
                        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-white">Is FlowState free to use?</h3>
                                <p className="text-gray-400 leading-relaxed">Yes! The core Pomodoro timer features are completely free. We offer a Pro subscription for advanced statistics, custom themes, and iCloud sync.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-white">Does it sync across devices?</h3>
                                <p className="text-gray-400 leading-relaxed">Absolutely. FlowState uses iCloud to seamlessly sync your sessions, streaks, and settings across your iPhone, iPad, and Mac.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-white">Can I block apps while focusing?</h3>
                                <p className="text-gray-400 leading-relaxed">Yes. Our "Focus Armor" feature allows you to select distracting apps to block during your timer sessions, ensuring deep work.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-white">Is there an Android version?</h3>
                                <p className="text-gray-400 leading-relaxed">Currently, FlowState is exclusive to the Apple ecosystem (iOS, iPadOS, macOS, verify). We are focused on providing the best possible experience for Apple users.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
