"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"
import WaitingListModal from "../components/waiting-list-modal"

interface ModalContextType {
  openWaitingListModal: () => void
  closeWaitingListModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isWaitingListModalOpen, setIsWaitingListModalOpen] = useState(false)

  const openWaitingListModal = () => setIsWaitingListModalOpen(true)
  const closeWaitingListModal = () => setIsWaitingListModalOpen(false)

  return (
    <ModalContext.Provider value={{ openWaitingListModal, closeWaitingListModal }}>
      {children}
      <WaitingListModal isOpen={isWaitingListModalOpen} onClose={closeWaitingListModal} />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
