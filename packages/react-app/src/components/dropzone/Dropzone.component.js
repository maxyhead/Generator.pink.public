import React, { useState } from "react";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles"

export default function Dropzone() {
  const [files, setFiles] = useState([]);

  const useStyles = makeStyles(() => ({
    dropZone: {
      fullWidth: 'true',
    },
    previewContainer: {
     
    },
    preview: {
      xs: '12',
    },
    previewImg: {
      
    },
  }));
  
  const classes = useStyles();

  const handleAdd = newFiles => {
    newFiles = newFiles.filter(file => !files.find(f => f.data === file.data));
    setFiles([...files, ...newFiles]);
  };

  const handleDelete = deleted => {
    setFiles(files.filter(f => f !== deleted));
  };

  React.useEffect(()=>{
    console.log(files)
  }, [files])

  return (
    <DropzoneAreaBase
      fileObjects={files}
      onAdd={handleAdd}
      onDelete={handleDelete}
      clearOnUnmount={true}
      filesLimit={1}
      maxFileSize={5000000}
      dropzoneText='Drag or Click to upload a file.'
      
    />
  );
}