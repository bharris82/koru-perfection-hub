import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight, Calendar, User, Phone } from "lucide-react";

interface ConsultationFormProps {
  triggerButton?: React.ReactNode;
}

const ConsultationForm = ({ triggerButton }: ConsultationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    preferredTime: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://zdzfaocsmtvmmecdefhq.supabase.co/functions/v1/send-consultation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Request sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form and close dialog
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          preferredTime: ""
        });
        setIsOpen(false);
      } else {
        throw new Error(result.error || 'Failed to send consultation request');
      }
    } catch (error) {
      console.error('Error sending consultation request:', error);
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const defaultTrigger = (
    <Button 
      size="lg" 
      className="bg-primary hover:bg-primary-bright text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary group animate-glow-pulse"
    >
      <Mail className="mr-2 w-5 h-5" />
      Schedule Free Consultation
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerButton || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border border-border/30">
        <DialogHeader>
          <DialogTitle className="text-text-primary font-grotesk text-xl flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Schedule Your Free Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-text-secondary flex items-center gap-2">
                <User className="w-4 h-4" />
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-text-secondary flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-text-secondary flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-text-secondary">
                Company
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredTime" className="text-text-secondary">
              Preferred Time/Day
            </Label>
            <Input
              id="preferredTime"
              name="preferredTime"
              placeholder="e.g., Weekday mornings, Friday afternoon, etc."
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-text-secondary">
              Tell us about your AI needs
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="What are you looking to achieve with local AI? Any specific requirements or questions?"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="bg-background/50 border-border/50 focus:border-primary resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary-bright"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;