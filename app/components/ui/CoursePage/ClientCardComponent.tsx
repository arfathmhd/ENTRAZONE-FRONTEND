"use client"

import React, { useState } from 'react'
import { ChapterCard } from './ChapterCard';
import { UnlockPremiumModal } from './UnlockPremiumModal';

interface Chapter {
  id: number;
  title: string;
  description: string;
  isUnlocked: boolean;
  hasVideo?: boolean;
  duration?: string;
  videoId?: string;
  rating?: number;
}

function ClientCardComponent({chapters}:{chapters:Chapter[]}) {
      const [isModalOpen, setIsModalOpen] = useState(false) 


const handleUnlockClick = () => {
    setIsModalOpen(true)
  }

  return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {chapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} onUnlockClick={handleUnlockClick} />
            ))}

                      <UnlockPremiumModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 

          </div>  )
}

export default ClientCardComponent