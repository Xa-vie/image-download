'use client'

import React from 'react'
import { Button } from './ui/button'
import { ImageDown } from 'lucide-react'

interface DownloadFileProps {
  fileUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadFileProps> = ({ fileUrl, fileName }) => {

  const downloadFile = async () => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
      const contentType = response.headers.get('content-type');
      const finalFileName = `${fileName}.${contentType?.split('/')[1]?.trim()}`;
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', finalFileName);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  return (
    <Button className='gap-2' onClick={downloadFile}>
      <ImageDown />
      Download
    </Button>
  )
}

export default DownloadButton