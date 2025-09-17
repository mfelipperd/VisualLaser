'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, CheckCircle } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CookieConsent as CookieConsentType } from '@/types'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [cookieConsent, setCookieConsent] = useLocalStorage<CookieConsentType>('cookieConsent', { status: '', timestamp: Date.now() })

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [cookieConsent])

  const acceptCookies = () => {
    setCookieConsent({ status: 'accepted', timestamp: Date.now() })
    setIsVisible(false)
  }

  const declineCookies = () => {
    setCookieConsent({ status: 'declined', timestamp: Date.now() })
    setIsVisible(false)
  }

  if (!isVisible || cookieConsent?.status) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
      >
        <div className="container mx-auto container-padding py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Política de Cookies e Privacidade
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência em nosso site. 
                  Ao continuar navegando, você concorda com nossa{' '}
                  <a href="/privacidade" className="text-primary-600 hover:text-primary-700 underline">
                    política de privacidade
                  </a>{' '}
                  e{' '}
                  <a href="/termos" className="text-primary-600 hover:text-primary-700 underline">
                    termos de uso
                  </a>.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Recusar
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Aceitar Todos</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieConsent
