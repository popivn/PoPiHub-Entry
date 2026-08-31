export interface ContactData {
  linkedin: string
  email: string
  phone: string
}

export function getContactData(): ContactData {
  return {
    linkedin: 'https://www.linkedin.com/in/hiếu-tô-trung-89b347335/',
    email: 'hiett.fw@gmail.com',
    phone: '+84 365914056'
  }
}
