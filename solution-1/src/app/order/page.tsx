"use client";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Order from "../Models/Order";
import GenericTextFormInput from "../Components/GenericTextFormInput";
import { useRouter } from "next/navigation";

export const orderSchema = yup
  .object({
    firstName: yup.string().required().max(100),
    lastName: yup.string().required().max(100),
    addressLine1: yup.string().required().max(250),
    addressLine2: yup.string().max(250),
    postcode: yup.string().required().max(30),
    country: yup.string().required().max(100),
    email: yup.string().required().max(200),
    phoneNumber: yup.string().required().max(30),
  })
  .required();

export default function OrderPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    resolver: yupResolver(orderSchema),
  });
  const onSubmit: SubmitHandler<Order> = (data) => {
    if (selectedBeans.length) {
      const formData = { beans: selectedBeans.map((x) => x.id), ...data };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      fetch("/api/placeOrder", requestOptions).then((x) => {
        if (x.status === 200) {
          router.push("/order/success");
        } else {
          router.push("/order/error");
        }
      });
    } else {
      setSelectedBeanError("You must select atleast one bean");
    }
  };
  const [selectedBeanError, setSelectedBeanError] = useState("");
  const [beans, setBeans] = useState<Bean[]>([]);
  const [selectedBeans, setSelectedBeans] = useState<Bean[]>([]);

  const selectedBeanRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const url = "/api/allBeans";
    fetch(url).then((x) =>
      x.json().then((x) => {
        setBeans(x.data);
      }),
    );
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
      <div className="w-full flex justify-center mt-4">
        <div className="mr-4">
          <select ref={selectedBeanRef} defaultValue={""}>
            <option value="" disabled>
              Select a bean
            </option>
            {beans.map((x, i) => (
              <option
                key={i}
                value={x.id}
                disabled={selectedBeans.some((y) => y.id === x.id)}
              >
                {x.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const bean = beans.find(
              (x) => x.id === selectedBeanRef.current?.value,
            );
            if (bean) {
              setSelectedBeans([...selectedBeans, bean]);
              if (selectedBeanRef.current) {
                selectedBeanRef.current.value = "";
              }
            }
          }}
        >
          add
        </button>
      </div>

      {!!selectedBeanError && !selectedBeans.length && (
        <div className="bg-red-800 border-red-600 border-2 w-full text-white my-2">
          {selectedBeanError}
        </div>
      )}

      {!!selectedBeans.length && (
        <div>
          <span className="underline block">Selected beans</span>
          <ol>
            {selectedBeans.map((x, i) => (
              <li key={"selectedBean_" + i}>
                name: {x.name} cost: {x.cost}
              </li>
            ))}
          </ol>
        </div>
      )}
      <div className="mx-4">
        <GenericTextFormInput
          displayName="First name"
          errors={errors.firstName}
          fieldName="firstName"
          register={register}
        />
        <GenericTextFormInput
          displayName="Last name"
          errors={errors.lastName}
          fieldName="lastName"
          register={register}
        />
        <GenericTextFormInput
          displayName="Address line 1"
          errors={errors.addressLine1}
          fieldName="addressLine1"
          register={register}
        />
        <GenericTextFormInput
          displayName="Address line 2"
          errors={errors.addressLine2}
          fieldName="addressLine2"
          register={register}
        />
        <GenericTextFormInput
          displayName="Postcode"
          errors={errors.postcode}
          fieldName="postcode"
          register={register}
        />
        <GenericTextFormInput
          displayName="Country"
          errors={errors.country}
          fieldName="country"
          register={register}
        />
        <GenericTextFormInput
          displayName="Email address"
          errors={errors.email}
          fieldName="email"
          register={register}
        />
        <GenericTextFormInput
          displayName="Phone number"
          errors={errors.phoneNumber}
          fieldName="phoneNumber"
          register={register}
        />
      </div>
      <div className="flex justify-center w-full mt-6">
        <input
          className="float-end bg-sky-900 rounded-md hover:bg-sky-700 p-2 "
          type="submit"
          value="Place order"
        />
      </div>
    </form>
  );
}
