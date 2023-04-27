/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
	const schema = yup.object().shape({
		fullName: yup.string().required("Your full name is required!"),
		email: yup.string().email().required(),
		subject: yup.string(),
		message: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = () => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Contact Us</h1>
			<input
				type="text"
				placeholder="Full Name"
				{...register("fullName")}
			></input>
			<p>{errors.fullName?.message}</p>
			<br></br>
			<input
				type="email"
				placeholder="Email"
				{...register("email")}
			></input>
			<p>{errors.email?.message}</p>
			<br></br>
			<input
				type="text"
				placeholder="Subject"
				{...register("subject")}
			></input>

			<br></br>
			<textarea
				className="text-area"
				rows="4"
				cols="50"
				placeholder="Message"
				{...register("message")}
			></textarea>
			<p>{errors.message?.message}</p>
			<input type="submit" className="submit"></input>
		</form>
	);
};
export default Form;
