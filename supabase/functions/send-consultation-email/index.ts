import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  preferredTime?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, preferredTime, message }: ConsultationRequest = await req.json();

    console.log("Received consultation request from:", email);

    // Send email to you (the business owner)
    const emailResponse = await resend.emails.send({
      from: "Consultation Request <onboarding@resend.dev>",
      to: ["Barryharris82@outlook.com"],
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        
        <hr>
        <p><em>This consultation request was submitted through The Koru Project website.</em></p>
      `,
    });

    // Send confirmation email to the requester
    const confirmationResponse = await resend.emails.send({
      from: "The Koru Project <onboarding@resend.dev>",
      to: [email],
      subject: "We received your consultation request!",
      html: `
        <h2>Thank you for your consultation request, ${name}!</h2>
        <p>We have received your request for a consultation and will get back to you within 24 hours.</p>
        
        <h3>Your Request Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        
        <p>Best regards,<br>The Koru Project Team</p>
      `,
    });

    console.log("Emails sent successfully:", { emailResponse, confirmationResponse });

    return new Response(JSON.stringify({ success: true, message: "Consultation request sent successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);