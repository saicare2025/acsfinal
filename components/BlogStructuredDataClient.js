// components/BlogStructuredDataClient.js
"use client";

import { useEffect } from 'react';
import { useBlogStructuredData } from '../hooks/useStructuredData';

export default function BlogStructuredDataClient({ blogData }) {
  useBlogStructuredData(blogData);
  return null;
}
