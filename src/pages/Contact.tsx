import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MessageSquare, User, CheckCircle } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast.success("Сообщение отправлено!");
  };
  if (isSubmitted) {
    return <Layout>
        <section className="py-32 bg-background min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              СПАСИБО ЗА СООБЩЕНИЕ!
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Мы получили ваше сообщение и ответим вам в ближайшее время. 
              Благодарим за интерес к музыке 80-х!
            </p>
            <Button variant="retro" onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: ""
            });
          }}>
              Отправить ещё
            </Button>
          </div>
        </section>
      </Layout>;
  }
  return <Layout>
      {/* Hero */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-[#ff8c00]" />
            <span className="text-sm tracking-widest uppercase font-body text-[#ff8c00]">
              Напишите нам
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground">
            ОБРАТНАЯ СВЯЗЬ
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Есть вопросы, предложения или хотите поделиться воспоминаниями о 80-х? 
            Мы всегда рады услышать от вас!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше имя" className="pl-10 bg-secondary border-border focus:border-accent" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="pl-10 bg-secondary border-border focus:border-accent" required />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Тема сообщения
                  </label>
                  <Input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="О чём вы хотите написать?" className="bg-secondary border-border focus:border-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение *
                  </label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Расскажите нам..." rows={6} className="bg-secondary border-border focus:border-accent resize-none" required />
                </div>

                <Button type="submit" variant="retro" size="lg" className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  Отправить сообщение
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <div className="border border-border rounded-lg p-8 mb-8 bg-retro-cream">
                <h3 className="font-display text-2xl text-foreground mb-6">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a className="hover:underline text-vinyl-black" href="mailto:music@ooffmail.ru">
                        music@ooffmail.ru
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Vinyl */}
              <div className="relative hidden lg:block">
                <div className="w-48 h-48 mx-auto rounded-full bg-vinyl-black border-4 border-accent/30 vinyl-grooves animate-spin-slow">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-display text-vinyl-black text-xs tracking-wider">80s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;