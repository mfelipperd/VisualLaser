export interface UserContact {
  name: string
  email: string
  phone: string
}

export interface CookieConsent {
  status: 'accepted' | 'declined' | ''
  timestamp?: number
}

export interface BlurModalState {
  hasSeenModal: boolean
  userContact?: UserContact
}

