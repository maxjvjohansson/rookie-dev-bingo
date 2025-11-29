"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  Wrapper,
  Card,
  Title,
  Form,
  Label,
  Input,
  InputError,
  Button,
  SwitchText,
  FormError,
} from "./styles";
import Link from "next/link";

interface Props {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setEmailError("");
    setPasswordError("");
    setFormError("");

    let resultError = null;

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      resultError = error;
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      resultError = error;
    }

    setLoading(false);

    if (!resultError) {
      window.location.href = "/board";
      return;
    }

    if (resultError.message.includes("email")) {
      setEmailError(resultError.message);
    } else if (
      resultError.message.toLowerCase().includes("password") ||
      resultError.message.toLowerCase().includes("credentials")
    ) {
      setPasswordError(resultError.message);
    } else {
      setFormError(resultError.message);
    }
  }

  return (
    <Wrapper>
      <Card>
        <Title>{mode === "login" ? "Log In" : "Create Account"}</Title>

        {formError && <FormError>{formError}</FormError>}

        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {emailError && <InputError>{emailError}</InputError>}

          <Label>Password</Label>
          <Input
            type="password"
            required
            autoComplete={
              mode === "signup" ? "new-password" : "current-password"
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {passwordError && <InputError>{passwordError}</InputError>}

          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : mode === "login" ? "Log In" : "Sign Up"}
          </Button>
        </Form>

        <SwitchText>
          {mode === "login" ? (
            <>
              Don’t have an account? <Link href="/signup">Sign up</Link>
            </>
          ) : (
            <>
              Already have an account? <Link href="/login">Sign in</Link>
            </>
          )}
        </SwitchText>
      </Card>
    </Wrapper>
  );
}
