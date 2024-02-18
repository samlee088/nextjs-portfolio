"use client";

import React, { useState } from "react";
import { send } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

function ContactInformation() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    send("service_bdiqeoa", "template_yg700uv", values, "-AdyUNdziDTS10xoC")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Email has been sent! ");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Error: Email was not sent");
      });

    form.reset();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="my-16 text-6xl">Contact</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name..." {...field} />
                </FormControl>
                <FormDescription>
                  Hello, nice to meet you! What is your name? 🙂
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email..." {...field} />
                </FormControl>
                <FormDescription>Your email address</FormDescription>
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} />
                </FormControl>
                <FormDescription>Please leave me a message</FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactInformation;
