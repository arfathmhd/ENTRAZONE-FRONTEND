"use client"

import { X, Star, Send, Clock } from "lucide-react"
import { useState } from "react"

interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
  avatar: string
}

interface VideoModalProps {
  video: {
    id: string
    title: string
    instructor: string
    subject: string
    duration: string
    rating: number
    youtubeId: string
  }
  onClose: () => void
}

export const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [comments] = useState<Comment[]>([
    {
      id: "1",
      author: "Sarah Johnson",
      content:
        "This explanation of cooperation principles is really clear! The examples helped me understand the practical applications much better.",
      timestamp: "2 hours ago",
      avatar: "SJ",
    },
    {
      id: "2",
      author: "Mike Chen",
      content: "Great video! The concepts are well explained.",
      timestamp: "4 hours ago",
      avatar: "MC",
    },
    {
      id: "3",
      author: "Emma Davis",
      content: "Very helpful for my studies. Thank you!",
      timestamp: "1 day ago",
      avatar: "ED",
    },
    {
      id: "4",
      author: "John Smith",
      content: "Excellent presentation and clear examples.",
      timestamp: "2 days ago",
      avatar: "JS",
    },
  ])

  const handleRatingClick = (starIndex: number) => {
    setRating(starIndex + 1)
  }

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      console.log("Comment submitted:", comment)
      setComment("")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[60vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">{video.title}</h2>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{video.duration}</span>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">Video</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 p-6">
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              />
            </div>
          </div>

          <div className="w-80 border-l bg-gray-50 flex flex-col">
            <div className="p-6 border-b bg-white">
              <h3 className="text-lg font-semibold mb-4">Rate this lesson</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleRatingClick(index)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star className={`w-8 h-8 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 border-b bg-white">
              <h3 className="text-lg font-semibold mb-4">Add a comment</h3>
              <div className="space-y-3">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts about this lesson"
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none h-20 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleCommentSubmit}
                  disabled={!comment.trim()}
                  className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] disabled:bg-gray-300 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Post Comment
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Comments ({comments.length})</h3>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                        {comment.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{comment.author}</span>
                          <span className="text-xs text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
