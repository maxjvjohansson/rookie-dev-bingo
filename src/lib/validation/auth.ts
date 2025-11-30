export function validateAuthFields(
  fields: {
    email: string;
    password: string;
    confirm?: string;
    fullName?: string;
  },
  mode: "login" | "signup"
) {
  const errors: Record<string, string> = {};

  if (!fields.email.includes("@")) {
    errors.email = "Enter a valid email address";
  }

  if (fields.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (mode === "signup") {
    if (!fields.fullName?.trim()) {
      errors.fullName = "Full name is required";
    }
    if (fields.confirm !== fields.password) {
      errors.confirm = "Passwords do not match";
    }
  }

  return errors;
}
