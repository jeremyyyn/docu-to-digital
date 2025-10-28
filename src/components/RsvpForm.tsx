import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "yes",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We look forward to celebrating with you!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      attending: "yes",
    });
  };

  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-8 sm:mb-12 text-primary">
          RSVP
        </h2>

        <div className="bg-card p-6 sm:p-10 rounded-lg border border-border shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                Your full name please
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-12 text-base"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Your email address too
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-12 text-base"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base">
                Your Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="h-12 text-base"
                placeholder="+66 123 456 789"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-base">Will you be attending?</Label>
              <RadioGroup
                value={formData.attending}
                onValueChange={(value) =>
                  setFormData({ ...formData, attending: value })
                }
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="cursor-pointer font-normal">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="cursor-pointer font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit RSVP
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          We can't wait to celebrate this special day with you!
        </p>
      </div>
    </section>
  );
};
