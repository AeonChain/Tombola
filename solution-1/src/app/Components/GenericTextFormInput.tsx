"use client";

import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export default function GenericTextFormInput<T extends FieldValues>(props: {
  displayName: string;
  fieldName: Path<T>;
  errors?: FieldError;
  register: UseFormRegister<T>;
}): JSX.Element {
  return (
    <div className="w-full">
      <label htmlFor={props.fieldName}>{props.displayName}</label>
      <div>
        <input {...props.register(props.fieldName)} />
      </div>
      {props.errors && (
        <div className="bg-red-800 border-red-600 border-2 w-full text-white my-2">
          {props.errors.message}
        </div>
      )}
    </div>
  );
}
