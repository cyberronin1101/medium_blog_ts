import { articleTypeEdit, backendErrorsType } from "../../types/apiTypes";
import React, { FormEvent, useEffect, useRef } from "react";
import useInput from "../../hooks/useInput";
import BackendErrorMessages from "../error/BackendErrorMessages";

const ArticleForm = ({
  onSubmit = () => {},
  errors = {},
  initialValue = {},
  submitTitle = "",
}: {
  onSubmit: Function;
  errors?: backendErrorsType["errors"];
  initialValue?: articleTypeEdit;
  submitTitle?: string;
}) => {
  const titleInput = useInput(initialValue.title);
  const bodyInput = useInput(initialValue.body);
  const descriptionInput = useInput(initialValue.description);
  const tagListInput = useInput(initialValue.tagList?.join(" "));

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={"row"}>
      <div className={"col-md-10"}>
        <BackendErrorMessages errors={errors} />

        <form onSubmit={handleSubmit}>
          <fieldset className={"form-group"}>
            <input
              type="text"
              className={"form-control form-control-lg"}
              placeholder={"Article Title"}
              ref={inputRef}
              {...titleInput.bind}
            />
          </fieldset>
          <fieldset className={"form-group"}>
            <input
              type="text"
              className={"form-control form-control-lg"}
              placeholder={"What is this article about?"}
              {...descriptionInput.bind}
            />
          </fieldset>
          <fieldset className={"form-group"}>
            <textarea
              className={"form-control form-control-lg"}
              placeholder={"Write your article (in markdown)"}
              rows={8}
              {...bodyInput.bind}
            />
          </fieldset>

          <fieldset className={"form-group"}>
            <input
              className={"form-control form-control-lg"}
              placeholder={"Enter tags"}
              {...tagListInput.bind}
            />
          </fieldset>
          <fieldset className={"form-group"}>
            <button
              type={"submit"}
              className={"btn btn-lg pull-xs-right btn-primary"}
            >
              {submitTitle || "Publish Article"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;
