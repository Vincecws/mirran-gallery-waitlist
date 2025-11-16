import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  instagram: z.string().trim().min(1, "Instagram handle is required").max(100, "Instagram handle must be less than 100 characters"),
  expectations: z.string().trim().max(500, "Expectations must be less than 500 characters").optional(),
  story: z.string().trim().max(1000, "Story must be less than 1000 characters").optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  onSuccess: () => void;
}

export const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    
    try {
      // Insert waitlist entry into Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            instagram: data.instagram.trim(),
            expectations: data.expectations?.trim() || null,
            story: data.story?.trim() || null,
          },
        ]);

      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          toast.error("This email is already on the waitlist. Thank you for your interest!", {
            duration: 5000,
          });
        } else {
          console.error("Waitlist submission error:", error);
          toast.error("Something went wrong. Please try again later.", {
            duration: 5000,
          });
        }
        setIsSubmitting(false);
        return;
      }

      // Success
      toast.success("Thank you for your genuine support, looking forward to riding the journey and grow together", {
        duration: 5000,
      });
      
      reset();
      setIsSubmitting(false);
      onSuccess();
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again later.", {
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white/90">
          Name <span className="text-amber-400">*</span>
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Your name"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white/90">
          Email <span className="text-amber-400">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="your.email@example.com"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="instagram" className="text-white/90">
          Instagram <span className="text-amber-400">*</span>
        </Label>
        <Input
          id="instagram"
          {...register("instagram")}
          placeholder="@yourusername"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50"
        />
        {errors.instagram && (
          <p className="text-red-400 text-sm">{errors.instagram.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="expectations" className="text-white/90">
          What do you expect from the platform? <span className="text-white/60">(optional)</span>
        </Label>
        <Textarea
          id="expectations"
          {...register("expectations")}
          placeholder="Share your expectations..."
          rows={3}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50 resize-none"
        />
        {errors.expectations && (
          <p className="text-red-400 text-sm">{errors.expectations.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="story" className="text-white/90">
          The story you want to share <span className="text-white/60">(optional)</span>
        </Label>
        <Textarea
          id="story"
          {...register("story")}
          placeholder="Share your story..."
          rows={4}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400/50 resize-none"
        />
        {errors.story && (
          <p className="text-red-400 text-sm">{errors.story.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-500/90 hover:bg-amber-500 text-black font-medium"
      >
        {isSubmitting ? "Submitting..." : "Join the Waitlist"}
      </Button>
    </form>
  );
};
