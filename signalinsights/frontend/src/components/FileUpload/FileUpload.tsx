import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileImage, Video, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onProcessed: (result: any) => void;
  onProcessingStart?: () => void;
  onProcessingError?: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onProcessed, 
  onProcessingStart, 
  onProcessingError 
}) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setUploading(true);
    setError(null);
    onProcessingStart?.();
    
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/process', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const result = await response.json();
      onProcessed(result);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = 'Failed to process the file. Please try again.';
      setError(errorMessage);
      onProcessingError?.();
    } finally {
      setUploading(false);
    }
  }, [onProcessed, onProcessingStart, onProcessingError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.bmp', '.tiff', '.tif', '.jfif', '.webp', '.gif'],
      'video/*': ['.mp4', '.avi', '.mov', '.mkv', '.webm', '.flv', '.wmv']
    },
    multiple: false,
    maxSize: 100 * 1024 * 1024, // 100MB
  });

  return (
    <div className="upload-wrapper">
      <div 
        {...getRootProps()} 
        className={`upload-container ${isDragActive ? 'drag-active' : ''} ${uploading ? 'uploading' : ''}`}
      >
        <input {...getInputProps()} />
        
        {uploading ? (
          <div className="upload-content">
            <div className="upload-spinner"></div>
            <p className="upload-text">Processing your file...</p>
            <p className="upload-subtext">This may take a few moments</p>
          </div>
        ) : (
          <div className="upload-content">
            <Upload className="upload-icon" />
            <p className="upload-text">
              {isDragActive 
                ? "Drop your file here" 
                : "Drag & drop or click to upload"}
            </p>
            <p className="upload-subtext">
              Supports images (JPG, PNG, BMP, TIFF, JFIF, WebP, GIF) and videos (MP4, AVI, MOV, MKV, WebM) up to 100MB
            </p>
            <div className="file-types">
              <div className="file-type">
                <FileImage className="file-type-icon" />
                <span>Images</span>
              </div>
              <div className="file-type">
                <Video className="file-type-icon" />
                <span>Videos</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <div className="error-message">
          <AlertCircle className="error-icon" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;