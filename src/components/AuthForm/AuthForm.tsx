"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { validateAuthFields } from "@/lib/validation/auth";

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
import { LogIn, UserPlus } from "lucide-react";

interface Props {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: Props) {
  const { login, signup, loading, error } = useAuth();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateAuthFields(
      { email, password, confirm, fullName },
      mode
    );

    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (mode === "login") {
      const ok = await login(email, password);
      if (ok) window.location.href = "/board";
    } else {
      const user = await signup(email, password, fullName);
      if (user) window.location.href = "/board";
    }
  }

  return (
    <Wrapper>
      <Card>
        <Title>{mode === "login" ? "Log In" : "Create Account"}</Title>

        {error && <FormError>{error}</FormError>}

        <Form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
              <Label>Full name</Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
              {fieldErrors.fullName && (
                <InputError>{fieldErrors.fullName}</InputError>
              )}
            </>
          )}

          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {fieldErrors.email && <InputError>{fieldErrors.email}</InputError>}

          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {fieldErrors.password && (
            <InputError>{fieldErrors.password}</InputError>
          )}

          {mode === "signup" && (
            <>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm your password"
              />
              {fieldErrors.confirm && (
                <InputError>{fieldErrors.confirm}</InputError>
              )}
            </>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? (
              "Loading..."
            ) : mode === "login" ? (
              <>
                <LogIn size={16} />
                Log In
              </>
            ) : (
              <>
                <UserPlus size={16} />
                Sign Up
              </>
            )}
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
