// Enlaces de contacto compartidos por el nav, el hero y el CTA final.
const WHATSAPP_NUMBER = '5491144186438';
const WHATSAPP_MESSAGE = '¡Hola! Quiero ver una demo de LogiFlow';
const EMAIL_TO = 'fs.franco.sosa@gmail.com';
const EMAIL_SUBJECT = 'Demo LogiFlow';
const EMAIL_BODY =
  'Hola Franco, quiero coordinar una demo de LogiFlow para ver la optimización de rutas y el seguimiento en vivo.';

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const emailHref = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
