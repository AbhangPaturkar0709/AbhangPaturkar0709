import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    subject:'',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_y6ec9d5',
        'template_caovc08',
        formRef.current,
        'Quhv7drpi1k-vqnKi'      // Replace with your actual Public Key (User ID)
      )
      .then(() => {
        toast({
          title: "✔️Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '',subject:'', email: '', message: '' });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/abhang-paturkar",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      url: "https://github.com/abhang-paturkar",
      color: "hover:text-gray-600"
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      url: "mailto:abhang.paturkar@email.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contacts" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-compact-lg text-center mb-12 fade-in">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 fade-in ">
            <div>
              <h3 className="heading-compact text-foreground mb-4">Let's Connect</h3>
              <p className="text-compact text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-compact text-muted-foreground">Maharashtra, India</span>
              </div>

              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-200 ${link.color} hover-lift`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 fade-in">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-compact"
              />
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-compact"
              />
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="text-compact"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your message..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="text-compact resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={14} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
