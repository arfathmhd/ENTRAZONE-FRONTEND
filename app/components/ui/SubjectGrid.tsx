import type React from "react";
import SubjectCard from "./SubjectCard";

interface Subject {
  subjectname: string;
  imageUrl: string;
  iconBg: string;
  pdfcount: number;
  videocount: number;
  examcount: number;
  slug: string;
}

const gradientBackgrounds = [
  "bg-gradient-to-br from-blue-400 to-blue-600",
  "bg-gradient-to-br from-green-400 to-green-600",
  "bg-gradient-to-br from-purple-400 to-pink-500",
  "bg-gradient-to-br from-orange-400 to-red-500",
  "bg-gradient-to-br from-yellow-400 to-orange-500",
  "bg-gradient-to-br from-teal-400 to-cyan-500",
  "bg-gradient-to-br from-indigo-400 to-purple-500",
  "bg-gradient-to-br from-pink-400 to-rose-500",
];

const getRandomGradient = () => {
  return gradientBackgrounds[
    Math.floor(Math.random() * gradientBackgrounds.length)
  ];
};

const subjectImages = {
  MATHEMATICS: "https://example.com/math.jpg",
  "Social Science": "https://example.com/social-science.jpg",
  Biology: "https://example.com/biology.jpg",
  Chemistry: "https://example.com/chemistry.jpg",
};

export const SubjectGrid = () => {
  const subjects: Subject[] = [
    {
      subjectname: "MATHEMATICS",
      imageUrl: subjectImages.MATHEMATICS,
      iconBg: getRandomGradient(),
      pdfcount: 15,
      videocount: 5,
      examcount: 2,
      slug: "mathematics",
    },
    {
      subjectname: "Social Science",
      imageUrl: subjectImages["Social Science"],
      iconBg: getRandomGradient(),
      pdfcount: 15,
      videocount: 5,
      examcount: 2,
      slug: "social-science",
    },
    {
      subjectname: "Biology",
      imageUrl: subjectImages.Biology,
      iconBg: getRandomGradient(),
      pdfcount: 15,
      videocount: 5,
      examcount: 2,
      slug: "biology",
    },
    {
      subjectname: "Chemistry",
      imageUrl: subjectImages.Chemistry,
      iconBg: getRandomGradient(),
      pdfcount: 15,
      videocount: 5,
      examcount: 2,
      slug: "chemistry",
    },
  ];

  return (
    <div className="">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard key={subject.slug} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
};