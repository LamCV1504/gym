import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const getEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}`;

export const getWatchUrl = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;