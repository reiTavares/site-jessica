import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '556196068728';

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Abrir WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enviar mensagem via WhatsApp</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
            <Button 
              onClick={handleSendMessage}
              className="w-full"
              disabled={!message.trim()}
            >
              Enviar Mensagem
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
