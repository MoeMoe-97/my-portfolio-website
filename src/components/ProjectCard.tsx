import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-[#3b82f6] transition-all duration-300">
      <div className="aspect-video overflow-hidden bg-zinc-800">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {demoUrl && (
            <Button
              className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-800 hover:border-[#3b82f6]"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
