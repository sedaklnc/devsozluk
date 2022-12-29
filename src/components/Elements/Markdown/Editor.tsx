import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import classNames from "classnames";
import { ErrorMessage, Field } from "formik";
import React, { HTMLInputTypeAttribute } from "react";

interface InputProps {
  name: string;
  value?: string;
  placeholder?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  errorText?: string;
  renderLeftIcon?: React.ReactNode;
  onChange?: (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: ContextStore) => void;
}

const Editor: React.FC<InputProps> = ({ name, type = "text", errorText, renderLeftIcon, label, placeholder, ...props }) => {
  return (
    <div className="w-full group">
      <p className="mb-1">{label}</p>
      <MDEditor
        height={300}
        className={classNames("bg-transparent rounded-lg border-tertiary border-[1px]", { "border-red-500": errorText })}
        preview="edit"
        {...props}
      />
      <p className="pt-1 text-sm text-red-500">{errorText}</p>
    </div>
  );
};

export default Editor;
