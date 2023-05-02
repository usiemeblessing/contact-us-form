/** @format */

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
	const schema = yup.object().shape({
		fullName: yup.string().required("Your full name is required!"),
		email: yup.string().email().required("Your email is required!"),
		subject: yup.string(),
		message: yup.string().required("Message is required!"),
	});

	const [successMsg, setSuccessMsg] = useState("");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = () => {
		setSuccessMsg("Your submission is successful!.");
		reset();
	};

	return (
		<>
			<div>
				{successMsg && <p className="success-msg">{successMsg}</p>}
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Contact Us</h1>
				<input
					type="text"
					name="fullName"
					placeholder="Full Name"
					{...register("fullName")}
				></input>
				<p className="error-msg">{errors.fullName?.message}</p>
				<br></br>
				<input
					type="email"
					name="email"
					placeholder="Email"
					{...register("email")}
				></input>
				<p className="error-msg error-msg-email">
					{errors.email?.message}
				</p>
				<input
					type="text"
					name="subject"
					placeholder="Subject"
					{...register("subject")}
				></input>
				<textarea
					className="text-area"
					rows="4"
					cols="50"
					placeholder="Message"
					{...register("message")}
				></textarea>
				<p className="error-msg error-msg-message">
					{errors.message?.message}
				</p>
				<button className="submit">Submit</button>
			</form>
		</>
	);
};
export default Form;
