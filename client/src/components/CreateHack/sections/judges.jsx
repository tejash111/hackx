import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Card, CardContent } from "../../ui/card";
import { UserIcon, LinkIcon } from "lucide-react";
import { useState } from "react";


export const Judges = () => {
  const [judges, setJudges] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const inviteLink = "https://hacks.com/invite/south-1231H";

  const sendInvite = () => {
    if (emailInput.trim()) {
      const  Judge = {
        id: Date.now().toString(),
        email: emailInput.trim(),
        status: "pending"
      };
      setJudges([...judges, newJudge]);
      setEmailInput("");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <div className="bg-[#1b1a1d] w-full max-w-[1728px] min-h-screen relative">
   
      
      <div className="ml-[250px] mt-20 flex">
        {/* Main content area */}
        <div className="flex-1 p-8">
          {judges.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center h-[500px]">
              <div className="w-24 h-24 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-6">
                <UserIcon className="w-10 h-10 text-[#666]" strokeWidth={1} />
              </div>
              <p className="text-[#666] text-base">No judges invited yet</p>
            </div>
          ) : (
            /* Judges list */
            <div className="space-y-4">
              {judges.map((judge) => (
                <div key={judge.id} className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-[#0092ff] flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-white text-sm">{judge.email}</span>
                    <div className="flex items-center gap-4">
                      {judge.status === "pending" ? (
                        <span className="text-[#666] text-sm">Invite pending</span>
                      ) : (
                        <span className="text-[#0092ff] text-sm">Judge</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div className="w-[400px] p-8 border-l border-[#242425]">
          <Card className="bg-[#0f1011] border border-[#242425]">
            <CardContent className="p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                Invite to judge hackathon
              </h3>
              <p className="text-[#666] text-sm mb-6">
                Invite judges via invite link or email
              </p>

              {/* Invite link section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 p-3 bg-[#1b1a1d] border border-[#242425] rounded-lg mb-3">
                  <LinkIcon className="w-4 h-4 text-[#666]" />
                  <span className="text-[#666] text-sm flex-1 truncate">
                    {inviteLink}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-[#0092ff] text-[#0092ff] hover:bg-[#0092ff] hover:text-white"
                  onClick={copyLink}
                  data-testid="copy-link-button"
                >
                  Copy Link
                </Button>
              </div>

              {/* Email invite section */}
              <div className="space-y-3">
                <div className="text-center text-[#666] text-sm">
                  or
                </div>
                
                <div>
                  <Label className="text-white text-sm mb-2 block">
                    Enter Email
                  </Label>
                  <Input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full h-12 bg-[#1b1a1d] border border-[#242425] text-white placeholder:text-[#666]"
                    placeholder="Enter email address"
                    data-testid="email-input"
                    onKeyPress={(e) => e.key === 'Enter' && sendInvite()}
                  />
                </div>
                
                <Button
                  className="w-full bg-[#0092ff] hover:bg-[#0092ff]/90 text-white"
                  onClick={sendInvite}
                  disabled={!emailInput.trim()}
                  data-testid="send-invite-button"
                >
                  Send Invite
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};