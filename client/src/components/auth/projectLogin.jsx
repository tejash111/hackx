import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const socialLoginButtons = [
  {
    icon: "/figmaAssets/union.svg",
    alt: "Google",
    className: "bg-[#242425]",
  },
  {
    icon: "/figmaAssets/group-1171277223.png",
    alt: "Apple",
    className: "",
  },
  {
    icon: "/figmaAssets/group-1171277225.png",
    alt: "X",
    className: "",
  },
  {
    icon: "/figmaAssets/group-1171277224.png",
    alt: "Discord",
    className: "",
  },
];

const walletOptions = [
  {
    icon: "/figmaAssets/metamask-logo-png.png",
    name: "Metamask Wallet",
    className: "w-6 h-6",
  },
  {
    icon: "/figmaAssets/image.png",
    name: "WalletConnect",
    className: "w-6 h-6 rounded object-cover",
  },
  {
    icon: "/figmaAssets/coinbase-icon-png.png",
    name: "Coinbase Wallet",
    className: "w-6 h-6 rounded",
  },
  {
    icon: "/figmaAssets/rabby-wallet-icon-jpeg.png",
    name: "Metamask Wallet",
    className: "w-6 h-6 rounded",
  },
];

export const ElementProjectLogin = () => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1728px] min-h-[1117px] relative">
      <Card className="absolute top-4 right-[1082px] w-[630px] h-[1085px] bg-[#1b1b1e] rounded-2xl border-0">
        <CardContent className="p-0 h-full">
          <div className="flex flex-col h-full">
            <img
              className="absolute top-[72px] left-[calc(50.00%_-_556px)] w-[47px] h-8"
              alt="Group"
              src="/figmaAssets/group-1.png"
            />

            <div className="absolute top-[250px] left-[255px] [font-family:'Inter',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
              Welcome!
            </div>

            <div className="absolute top-[305px] left-[132px] w-[397px] opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7">
              Hack X is a place to take part in a hackathon, create and manage
              one or to judge one.
              <br />
              Become a part of HackX community
            </div>

            <Input
              placeholder="Email"
              className="flex w-[466px] h-16 items-center gap-2 px-4 py-5 absolute top-[421px] left-[98px] bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-[#949fa8] placeholder:text-[#949fa8] placeholder:opacity-40 [font-family:'Inter',Helvetica] font-medium text-base"
            />

            <div className="flex gap-2 absolute top-[495px] left-[98px]">
              {socialLoginButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`w-[110px] h-16 flex items-center justify-center rounded-[10px] p-0 hover:bg-[#2a2a2a] ${button.className}`}
                >
                  <img
                    className="w-[19px] h-[19.5px]"
                    alt={button.alt}
                    src={button.icon}
                  />
                </Button>
              ))}
            </div>

            <Separator className="absolute top-[600px] left-[98px] w-52 h-px bg-[#242425]" />
            <Separator className="absolute top-[600px] left-[356px] w-52 h-px bg-[#242425]" />

            <div className="absolute top-[591px] left-[322px] opacity-20 [font-family:'Inter',Helvetica] font-normal text-white text-xs text-center tracking-[1.00px] leading-[normal]">
              OR
            </div>

            <div className="flex flex-col w-[466px] items-start gap-2 absolute top-[638px] left-[98px]">
              {walletOptions.map((wallet, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex h-16 items-center gap-2 pl-6 pr-4 py-5 w-full bg-[#242425] rounded-[10px] hover:bg-[#2a2a2a] justify-start"
                >
                  <div className="inline-flex items-center gap-4">
                    <img
                      className={wallet.className}
                      alt={wallet.name}
                      src={wallet.icon}
                    />
                    <div className="[font-family:'Inter',Helvetica] font-medium text-[#949fa8] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      {wallet.name}
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            <div className="absolute top-[1060px] left-12 opacity-40 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              Privacy Policy
            </div>

            <div className="absolute top-[1060px] left-[164px] opacity-40 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              Terms of use
            </div>

            <div className="absolute top-[1060px] left-[574px] opacity-40 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              x.com
            </div>
          </div>
        </CardContent>
      </Card>

      <img
        className="absolute top-4 left-[654px] w-[1058px] h-[1085px]"
        alt="Group"
        src="/figmaAssets/group-1171277257.png"
      />
    </div>
  );
};
