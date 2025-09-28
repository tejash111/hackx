import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { HackathonNav } from "./hackathonnavigation";

export const Prizes = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [prizeComorts, setPrizeCohorts] = useState([{ id: 1 }]);
  const [evaluationCriteria, setEvaluationCriteria] = useState([{ id: 1 }]);

  const addPrizeCohort = () => {
    setPrizeCohorts([...prizeComorts, { id: Date.now() }]);
  };

  const addEvaluationCriteria = () => {
    setEvaluationCriteria([...evaluationCriteria, { id: Date.now() }]);
  };

  return (
    <div className="bg-[#1b1a1d] w-full min-w-[1728px] min-h-screen relative">
      <HackathonNav />
      
      {/* Main content */}
      <div className="ml-[250px] mt-20 p-8">
        {prizeComorts.map((cohort, cohortIndex) => (
          <div key={cohort.id} className="mb-8">
            {/* Prize Cohort Name */}
            <div className="mb-6">
              <Label className="text-white text-lg font-normal mb-4 block">
                Enter Prize Cohort Name
              </Label>
              <Input
                className="w-[600px] h-14 bg-[#0f1011] border border-[#242425] text-white rounded-lg"
                placeholder="Enter prize cohort name"
                data-testid={`prize-cohort-name-${cohortIndex}`}
              />
            </div>

            {/* Details Collapsible */}
            <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
              <CollapsibleTrigger className="flex items-center gap-2 text-[#0092ff] mb-6">
                {isDetailsOpen ? (
                  <ChevronDownIcon className="w-4 h-4" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4" />
                )}
                <span className="text-sm font-normal">details</span>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="space-y-6 mb-6">
                  {/* Number of winners and Prize amount */}
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <Label className="text-white text-base font-normal mb-3 block">
                        Number of winners
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full h-14 bg-[#0f1011] border border-[#242425] text-white">
                          <SelectValue placeholder="Number of winners" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex-1">
                      <Label className="text-white text-base font-normal mb-3 block">
                        Prize amount for each winner
                      </Label>
                      <Input
                        className="w-full h-14 bg-[#0f1011] border border-[#242425] text-white"
                        placeholder="USD/tokens per winner"
                        data-testid={`prize-amount-${cohortIndex}`}
                      />
                    </div>
                  </div>

                  {/* Prize cohort description */}
                  <div>
                    <Label className="text-white text-base font-normal mb-3 block">
                      Prize cohort description
                    </Label>
                    <Textarea
                      className="w-full h-[200px] bg-[#0f1011] border border-[#242425] text-white resize-none"
                      placeholder="Prize cohort description"
                      data-testid={`prize-description-${cohortIndex}`}
                    />
                  </div>

                  {/* Evaluation Criteria */}
                  {evaluationCriteria.map((criteria, criteriaIndex) => (
                    <div key={criteria.id} className="space-y-4">
                      <div className="flex gap-6">
                        <div className="flex-1">
                          <Label className="text-white text-base font-normal mb-3 block">
                            Evaluation criteria name
                          </Label>
                          <Input
                            className="w-full h-14 bg-[#0f1011] border border-[#242425] text-white"
                            placeholder="Enter evaluation criteria name"
                            data-testid={`criteria-name-${cohortIndex}-${criteriaIndex}`}
                          />
                        </div>
                        
                        <div className="flex-1">
                          <Label className="text-white text-base font-normal mb-3 block">
                            Number of points
                          </Label>
                          <Input
                            className="w-full h-14 bg-[#0f1011] border border-[#242425] text-white"
                            placeholder="Enter evaluation criteria name"
                            data-testid={`criteria-points-${cohortIndex}-${criteriaIndex}`}
                          />
                        </div>
                      </div>

                      <div>
                        <Label className="text-white text-base font-normal mb-3 block">
                          Evaluation criteria description
                        </Label>
                        <Textarea
                          className="w-full h-[200px] bg-[#0f1011] border border-[#242425] text-white resize-none"
                          placeholder="Enter evaluation criteria description"
                          data-testid={`criteria-description-${cohortIndex}-${criteriaIndex}`}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Add evaluation criteria button */}
                  <Button
                    variant="link"
                    className="text-[#0092ff] p-0 h-auto font-normal"
                    onClick={addEvaluationCriteria}
                    data-testid={`add-criteria-${cohortIndex}`}
                  >
                    + add evaluation criteria
                  </Button>

                  {/* Voting Mode */}
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <Label className="text-white text-base font-normal mb-3 block">
                        Voting Mode
                      </Label>
                      <Select defaultValue="project-scoring">
                        <SelectTrigger className="w-full h-14 bg-[#0f1011] border border-[#242425] text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="project-scoring">Project Scoring</SelectItem>
                          <SelectItem value="simple-voting">Simple Voting</SelectItem>
                          <SelectItem value="ranked-choice">Ranked Choice</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex-1">
                      <Label className="text-white text-base font-normal mb-3 block">
                        Max vote per judge
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full h-14 bg-[#0f1011] border border-[#242425] text-white">
                          <SelectValue placeholder="Enter points" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 point</SelectItem>
                          <SelectItem value="3">3 points</SelectItem>
                          <SelectItem value="5">5 points</SelectItem>
                          <SelectItem value="10">10 points</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}

        {/* Add another prize cohort button */}
        <Button
          variant="link"
          className="text-[#0092ff] p-0 h-auto font-normal"
          onClick={addPrizeCohort}
          data-testid="add-prize-cohort"
        >
          + add another prize cohort
        </Button>
      </div>
    </div>
  );
};