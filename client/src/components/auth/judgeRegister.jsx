import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Eye, EyeOff, Check } from "lucide-react";


export const JudgeRegister = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);


  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Background workspace image */}
      <div 
        className="flex-1 bg-cover bg-center bg-no-repeat"
     
      />
      
      {/* Dark overlay with form */}
      <div className="w-[400px] bg-gray-900/95 backdrop-blur-sm flex flex-col relative">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 left-6 text-blue-400 hover:text-blue-300 hover:bg-transparent"
          data-testid="close-button"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-8">
          <div className="space-y-6">
            {/* Heading */}
            <h1 className="text-white text-2xl font-medium [font-family:'Inter',Helvetica]" data-testid="judge-invitation-title">
              You were invited to judge!
            </h1>

            {/* Description */}
            <p className="text-white/70 text-sm [font-family:'Inter',Helvetica] leading-relaxed" data-testid="judge-invitation-description">
              Congrats! <span className="text-white">ChainSpark Hackathon</span> has invited you to be a judge on their hackathon. To proceed please set up your password below
            </p>

            {/* Password form */}
            <div className="space-y-4">
              {/* Enter Password */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 bg-[#0f1011] border border-[#242425] rounded-lg px-4 text-white placeholder:text-[#949fa8] placeholder:opacity-40 [font-family:'Inter',Helvetica] font-medium text-sm pr-12"
                  data-testid="password-input"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 text-[#949fa8] hover:text-white hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  data-testid="password-toggle"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Password Validation */}
              {password && (
                <div className="space-y-2" data-testid="password-validation">
                  <div className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${hasMinLength ? 'text-green-500' : 'text-gray-500'}`} />
                    <span className={`text-xs [font-family:'Inter',Helvetica] ${hasMinLength ? 'text-green-500' : 'text-gray-400'}`}>
                      Be at least 8 characters long
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${hasUppercase ? 'text-green-500' : 'text-gray-500'}`} />
                    <span className={`text-xs [font-family:'Inter',Helvetica] ${hasUppercase ? 'text-green-500' : 'text-gray-400'}`}>
                      At least one uppercase letter (A-Z)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${hasSpecialChar ? 'text-green-500' : 'text-gray-500'}`} />
                    <span className={`text-xs [font-family:'Inter',Helvetica] ${hasSpecialChar ? 'text-green-500' : 'text-gray-400'}`}>
                      At least one special character
                    </span>
                  </div>
                </div>
              )}

              {/* Confirm Password */}
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-12 bg-[#0f1011] border border-[#242425] rounded-lg px-4 text-white placeholder:text-[#949fa8] placeholder:opacity-40 [font-family:'Inter',Helvetica] font-medium text-sm pr-12"
                  data-testid="confirm-password-input"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 text-[#949fa8] hover:text-white hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  data-testid="confirm-password-toggle"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Register button */}
            <Button 
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg [font-family:'Inter',Helvetica]"
              data-testid="register-judge-button"
            >
              Register as a Judge →
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-8 pb-6 text-white/40 text-xs [font-family:'Inter',Helvetica]">
          <div className="flex space-x-4">
            <span className="hover:text-white/60 cursor-pointer" data-testid="privacy-policy-link">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer" data-testid="terms-of-use-link">Terms of use</span>
          </div>
          <span className="hover:text-white/60 cursor-pointer" data-testid="social-link">x.com</span>
        </div>
      </div>
    </div>
  );
};