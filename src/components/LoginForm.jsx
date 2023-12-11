"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electrónico no válido")
    .required("Campo requerido"),
  password: Yup.string().required("Campo requerido"),
});

export default function LoginForm() {
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <Form className="max-w-sm mx-auto mt-8">
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
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Sign In
        </button>
        <div className="mt-3 flex justify-end">
          <Link
            href={"/register"}
            className="bg-green-500 text-white p-2 rounded w-full text-center mt-5"
          >
            Sign Up
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
