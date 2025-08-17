import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
  setUser: (user: { phone: string }) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, setUser }) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 4) {
      setUser({ phone: `+91 ${phoneNumber}` });
      onLogin();
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setOtp(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-yellow-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Internship Project</h1>
          <p className="text-gray-600">Discover amazing Indian cuisines</p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your mobile number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                  +91
                </span>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="9876543210"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:from-orange-500 hover:to-red-600 transition duration-300 transform hover:scale-[1.02]"
            >
              <span>Send OTP</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter 4-digit OTP sent to +91 {phoneNumber}
              </label>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="0000"
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-center text-3xl font-mono tracking-widest"
                maxLength={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:from-orange-500 hover:to-red-600 transition duration-300 transform hover:scale-[1.02]"
            >
              <span>Verify & Login</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setStep('phone')}
              className="w-full text-orange-600 py-2 font-medium hover:text-orange-700 transition duration-300"
            >
              Change Phone Number
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;