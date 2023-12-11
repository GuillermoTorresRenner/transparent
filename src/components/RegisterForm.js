"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("Nombre requerido"),
  surname: Yup.string().required("Apellido requerido"),
  email: Yup.string()
    .email("Correo electrónico no válido")
    .required("Email requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Password requerido"),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Campo requerido"),
});

export default function RegisterForm() {
  const onSubmit = async (values) => {
    const { password2, ...data } = values;
    await axios
      .post("/api/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        password2: "",
        surname: "",
      }}
      validationSchema={registrationSchema}
      onSubmit={onSubmit}
    >
      <Form className="max-w-sm mx-auto mt-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre:
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Nombre "
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="surname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Apellido:
          </label>
          <Field
            type="text"
            id="surname"
            name="surname"
            className="w-full p-2 border rounded"
            placeholder="Apellido"
          />
          <ErrorMessage
            name="surname"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo Electrónico:
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="correo@example.com"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contraseña:
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded"
            placeholder="********"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password2"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Repita Contraseña:
          </label>
          <Field
            type="password"
            id="password2"
            name="password2"
            className="w-full p-2 border rounded"
            placeholder="********"
          />
          <ErrorMessage
            name="password2"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded w-full"
        >
          Sign Up
        </button>
        <div className="mt-3 flex justify-end">
          <Link
            href={"/register"}
            className="bg-blue-500 text-white p-2 rounded w-full text-center mt-5"
          >
            Sign In
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
