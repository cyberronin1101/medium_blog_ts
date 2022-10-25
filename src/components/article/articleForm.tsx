import React, { FormEvent, useEffect, useRef } from "react";
import useInput from "../../hooks/useInput";
import BackendErrorMessages from "../error/BackendErrorMessages";
import {
  apiBackendErrorsType,
  apiEditArticleType,
} from "../../services/apiService/apiServiceTypes";

const ArticleForm = ({
  onSubmit = () => {},
  errors,
  loading = false,
  initialValue = {
    title: "",
    description: "",
    body: "",
    tagList: [],
  },
  submitTitle = "",
}: {
  onSubmit: (data: apiEditArticleType) => void;
  errors?: apiBackendErrorsType;
  loading?: boolean;
  initialValue?: apiEditArticleType;
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
    onSubmit({
      title: titleInput.value,
      description: descriptionInput.value,
      body: bodyInput.value,
      tagList: tagListInput.value.split(" "),
    });
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
              disabled={loading}
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
