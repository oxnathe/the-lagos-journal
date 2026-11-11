export const WHATSAPP_NUMBER = "2349019028248";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralEnquiryUrl(subject = "General enquiry"): string {
  return getWhatsAppUrl(
    `Hello The Lagos Journal, I would like to make a ${subject.toLowerCase()}. Please assist me.`
  );
}
