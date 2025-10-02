import React from 'react'

const Overview = () => {
  return (
    <div className="space-y-8">
                <h1 className="text-white text-3xl font-bold mb-2" data-testid="hackathon-title">
              {hackathon.title}
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-white text-xl mb-6" data-testid="hackathon-subtitle">
              Calling All Builders, Dreamers, and Rule-Breakers!
            </h2>

            {/* Description */}
            <div className="mb-8">
              <p className="text-white/80 text-base leading-relaxed mb-4">
                The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing's for sure: innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-4">
                This isn't just another hackathon. It's a battlefield for fairness, a playground for disruptors, and a launchpad for the next wave of decentralized innovation. Whether you're an AI wizard
              </p>
            </div>

            {/* Prize Section */}
            <div className="mb-8">
              <div className="flex items-center gap-8 mb-6">
                <div>
                  <div className="text-[#4ade80] text-sm mb-2">Top Fairness Exploration Award (5 winners)</div>
                  <div className="text-white text-4xl font-bold">50,000 USD</div>
                  <div className="text-white/60 text-sm">Available in Prizes</div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2" data-testid="button-event-breakdown">
                  Event Breakdown
                </Button>
              </div>

              {/* Prize Breakdown */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-white/60 text-sm">Fairness Explorer Gold Awards (5 winners)</div>
                  <div className="text-white text-lg font-semibold">18,000 USD</div>
                </div>
                <div className="text-center">
                  <div className="text-white/60 text-sm">Prize tracks (11 winners each Awards (4 winners)</div>
                  <div className="text-white text-lg font-semibold">6,000 USD</div>
                </div>
                <div className="text-center">
                  <div className="text-white/60 text-sm">Hackathon Integration Awards (4 winners)</div>
                  <div className="text-white text-lg font-semibold">4,000 USD</div>
                </div>
                <div className="text-center">
                  <div className="text-white/60 text-sm">Discovery Social Impact (1 winner)</div>
                  <div className="text-white text-lg font-semibold">2,000 USD</div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-white/60 text-sm">1st Place Integration on EVM Chain (3 winners)</div>
                  <div className="text-white text-lg font-semibold">4,000 USD</div>
                </div>
                <div className="text-center">
                  <div className="text-white/60 text-sm">Greenstand Data Documentation with B.A.R.K Framework (3 winners)</div>
                  <div className="text-white text-lg font-semibold">4,000 USD</div>
                </div>
                <div className="text-center">
                  <div className="text-white/60 text-sm">Challenge Mining & Security Winner (Pool 2016-2019) (1 winner)</div>
                  <div className="text-white text-lg font-semibold">4,000 USD</div>
                </div>
                <div className="text-center">
                  <div className="text-white/60 text-sm">Open Innovation in Work Dev (Pool with Chaos E.I. Awards (1 winner)</div>
                  <div className="text-white text-lg font-semibold">8,000 USD</div>
                </div>
              </div>
            </div>


            

            

                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">Why ChainSpark Hackathon?</h3>
                  <h4 className="text-white text-lg font-medium mb-3">Saluting the Early Rebels—Redefining Data & Collaboration</h4>
                  <p className="text-white/80 text-base leading-relaxed">
                    ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In an era of platform monopolies and divided creator value, ChainSpark is relying builders to forge a transparent, platform-agnostic, and verifiable future for data governance and the creator economy.
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">Why ChainSpark Hackathon?</h3>
                  <h4 className="text-white text-lg font-medium mb-3">Saluting the Early Rebels—Redefining Data & Collaboration</h4>
                  <p className="text-white/80 text-base leading-relaxed">
                    ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In an era of platform monopolies and divided creator value, ChainSpark is relying builders to forge a transparent, platform-agnostic, and verifiable future for data governance and the creator economy.
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">Why ChainSpark Hackathon?</h3>
                  <h4 className="text-white text-lg font-medium mb-3">Saluting the Early Rebels—Redefining Data & Collaboration</h4>
                  <p className="text-white/80 text-base leading-relaxed">
                    ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In an era of platform monopolies and divided creator value, ChainSpark is relying builders to forge a transparent, platform-agnostic, and verifiable future for data governance and the creator economy.
                  </p>
                </div>
              </div>
  )
}

export default Overview