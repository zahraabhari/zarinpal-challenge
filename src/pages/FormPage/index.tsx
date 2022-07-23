import { Button, Container, Typography, useTheme } from "@mui/material";
import React, { FormEventHandler, useState } from "react";
import { ChangeEventHandler } from "react";
import { useParams } from "react-router-dom";
import RadioForm from "../../components/RadioForm";
import TextFieldForm from "../../components/TextField";
export interface FormPageProps {}

export interface Field {
  name: string;
  title: string;
  type: string;
}

export interface RootObject {
  form: string;
  path: string;
  titleform: string;
  field: Field[];
  createurl: string;
}

export default function FormPage() {
  const { palette } = useTheme();
  let { name } = useParams();
  const TotalData = require("../../api/jsonformatter.json") as RootObject[];
  const FormData = TotalData.find((item) => item.form === name);
  const [Input, setInput] = useState<{ [key: string]: any }>({});

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      Object.values(Input).filter((value) => value !== undefined).length ===
      FormData?.field.length
    ) {
      fetch(FormData.createurl)
        .then(() => {
          alert("Form submit successful!");
        })
        .catch(() => {
          alert("Form submit faild!");
        });
    }
  };

  if (FormData) {
    return (
      <Container
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
          my: 5,
          div: { mb: 4 },
          // border: "1px solid " + palette.neutral[900],
        }}
      >
        <Typography
          component="h5"
          variant="h5"
          sx={{ mb: 4, textAlign: "center" }}
        >
          {FormData.titleform}
        </Typography>
        {FormData?.field.map(({ title, name, type }, index) => {
          if (type === "text" || type === "pass") {
            return (
              <TextFieldForm
                name={name}
                label={title}
                type={type}
                value={Input[name]}
                onChange={handleChange}
              />
            );
          }
          if (type === "radio") {
            return (
              <RadioForm
                name={name}
                title={title}
                onChange={handleChange}
                value={Input[name]}
              />
            );
          }
          return (
            <Typography component="span" variant="h6">
              Field type is not valid
            </Typography>
          );
        })}
        <Button type="submit">
          <Typography component="span" variant="body1">
            ثبت
          </Typography>
        </Button>
      </Container>
    );
  }
  return (
    <Typography component="span" variant="h6">
      There is no data
    </Typography>
  );
}
