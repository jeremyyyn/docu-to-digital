import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "yes",
    guestCount: "",
    guestNames: "",
    dietaryRestrictions: "",
    mainCoursePreference: "",
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
      guestCount: "",
      guestNames: "",
      dietaryRestrictions: "",
      mainCoursePreference: "",
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
                Full Name:
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
                Email Address:
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
                Phone Number:
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
              <Label className="text-base">Will you be attending our wedding?</Label>
              <RadioGroup
                value={formData.attending}
                onValueChange={(value) =>
                  setFormData({ ...formData, attending: value })
                }
                className="flex flex-col gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="cursor-pointer font-normal">
                    Yes, can't wait to celebrate!
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="cursor-pointer font-normal">
                    Sorry, I won't be able to make it
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guestCount" className="text-base">
                How many guests will be attending (including yourself)?
              </Label>
              <p className="text-sm text-muted-foreground">
                Please note: due to limited capacity, only the plus ones specifically included in your Save the Date are invited.
              </p>
              <Input
                id="guestCount"
                type="text"
                required
                value={formData.guestCount}
                onChange={(e) =>
                  setFormData({ ...formData, guestCount: e.target.value })
                }
                className="h-12 text-base"
                placeholder="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guestNames" className="text-base">
                If you are bringing a guest/plus-one, please share their name:
              </Label>
              <Input
                id="guestNames"
                type="text"
                value={formData.guestNames}
                onChange={(e) =>
                  setFormData({ ...formData, guestNames: e.target.value })
                }
                className="h-12 text-base"
                placeholder="Guest name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietaryRestrictions" className="text-base">
                Do you or your guest(s) have any dietary restrictions or food allergies?
              </Label>
              <p className="text-sm text-muted-foreground">
                Eg. halal, vegetarian, shellfish allergy, etc.
              </p>
              <p className="text-sm text-muted-foreground">
                Please list as "Name – restriction/allergy"
              </p>
              <Textarea
                id="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={(e) =>
                  setFormData({ ...formData, dietaryRestrictions: e.target.value })
                }
                className="min-h-[100px] text-base"
                placeholder="John Doe - vegetarian"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mainCoursePreference" className="text-base">
                Main Course Preference
              </Label>
              <p className="text-sm text-muted-foreground">
                We will be serving Lamb as the main course.
              </p>
              <p className="text-sm text-muted-foreground">
                If you do not eat lamb, please list your name(s) below — an alternative Chicken option will be served.
              </p>
              <Textarea
                id="mainCoursePreference"
                value={formData.mainCoursePreference}
                onChange={(e) =>
                  setFormData({ ...formData, mainCoursePreference: e.target.value })
                }
                className="min-h-[100px] text-base"
                placeholder="John Doe - Chicken"
              />
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
          Thank you for taking the time to RSVP! We can't wait to celebrate this joyful occasion with you.
        </p>
      </div>
    </section>
  );
};
