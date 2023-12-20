import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const ImageInput = () => {
  const props = {
    name: "file",
    multiple: false, // Alterado para permitir apenas um arquivo por vez
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="custom-dragger">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Clique ou arraste um arquivo para esta área para fazer o upload.
        </p>
        <p className="ant-upload-hint">
          Suporte para upload único. Componente da biblioteca Ant Design (antd).
        </p>
      </Dragger>
    </div>
  );
};

export default ImageInput;
